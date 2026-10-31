import { Suspense, useEffect, useMemo, useRef } from 'react';
import type { MutableRefObject } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { ContactShadows, Environment, Lightformer, useGLTF, useTexture } from '@react-three/drei';
import * as THREE from 'three';

// Modelos hechos en Blender (scratchpad/blender/megaphone.py y phone.py)
const MEGAPHONE_URL = '/models/megaphone.glb';
const PHONE_URL = '/models/phone.glb';
// Capturas reales (celular) de webs del Plan Emprendedor, de arriba hacia abajo
const SCREENS = ['/textures/phone-pilar.webp', '/textures/phone-mayra.webp', '/textures/phone-zyb.webp'];

const IDLE_AFTER_MS = 2500;
const SPIN_SPEED = (Math.PI * 2) / 6; // una vuelta cada 6 s, igual que el video
const BASE_TILT = 0.31; // bocina apuntando un poco hacia arriba
const BELL_X = 1.15; // boca de la bocina en coordenadas del modelo
const WAVES = 3;

// Guion: el megáfono "anuncia" y se transforma en un celular que muestra webs reales
const MEGA_HOLD = 7; // segundos de megáfono antes de transformarse solo
const SHOUT_LEAD = 0.35; // al hacer clic, primero grita y después se transforma
const MORPH_TIME = 1.2;
const SITE_HOLD_TOP = 0.9;
const SITE_SCROLL = 4.2;
const SITE_HOLD_BOTTOM = 0.6;
const SITE_TIME = SITE_HOLD_TOP + SITE_SCROLL + SITE_HOLD_BOTTOM;
const SITE_FADE = 0.3;
const PHONE_HOLD = SITE_TIME * SCREENS.length;

// Pantalla del modelo (phone.py): 1.32 x 2.85; cada captura mide 448 x 3584
const VISIBLE = 2.85 / 1.32 / (3584 / 448);
const PHONE_YAW = -0.28;
const PHONE_SIZE = 1.18;

// El canvas es más grande que su caja para que las ondas no se corten en un rectángulo.
// El FOV se compensa para que el megáfono mantenga el mismo tamaño en pantalla.
const BLEED = 0.3; // 30% extra por lado
const BASE_FOV = 36;
const FOV = (2 * Math.atan((1 + 2 * BLEED) * Math.tan(THREE.MathUtils.degToRad(BASE_FOV / 2))) * 180) / Math.PI;

// Puntero compartido entre el listener de window y el loop de render
type PointerState = { x: number; y: number; lastMove: number; inside: boolean };
type Phase = 'mega' | 'toPhone' | 'phone' | 'toMega';
type Timeline = { phase: Phase; start: number; morphAt: number | null };

const wrapAngle = (a: number) => Math.atan2(Math.sin(a), Math.cos(a));
const clamp01 = (x: number) => Math.min(Math.max(x, 0), 1);
const easeInBack = (x: number) => 2.70158 * x ** 3 - 1.70158 * x ** 2;
const easeOutBack = (x: number) => 1 + 2.70158 * (x - 1) ** 3 + 1.70158 * (x - 1) ** 2;
const easeOutCubic = (x: number) => 1 - (1 - x) ** 3;

function Show({
  pointer,
  timeline,
}: {
  pointer: PointerState;
  timeline: MutableRefObject<Timeline>;
}) {
  const { scene: megaphone } = useGLTF(MEGAPHONE_URL, false, false);
  const { scene: phone } = useGLTF(PHONE_URL, false, false);
  const textures = useTexture(SCREENS);

  const megaRef = useRef<THREE.Group>(null);
  const yawRef = useRef<THREE.Group>(null);
  const pitchRef = useRef<THREE.Group>(null);
  const wavesRef = useRef<THREE.Group>(null);
  const phoneRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const yaw = useRef(-Math.PI / 2);
  const pitch = useRef(BASE_TILT);
  const shoutAt = useRef(-10);
  const screenTime = useRef(0); // dónde quedó la pantalla al salir del celular

  const waveMaterials = useMemo(
    () =>
      Array.from(
        { length: WAVES },
        () => new THREE.MeshBasicMaterial({ color: '#7C3AED', transparent: true, opacity: 0, depthWrite: false }),
      ),
    [],
  );
  const ringMaterial = useMemo(
    () => new THREE.MeshBasicMaterial({ color: '#A66BFF', transparent: true, opacity: 0, depthWrite: false }),
    [],
  );

  // La pantalla del modelo recibe las capturas; el UV del glTF ya viene con el origen arriba
  const screenMaterial = useMemo(() => {
    textures.forEach((tex) => {
      tex.flipY = false;
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.anisotropy = 8;
      tex.repeat.set(1, VISIBLE);
      tex.needsUpdate = true;
    });
    const material = new THREE.MeshBasicMaterial({ map: textures[0], toneMapped: false });
    phone.traverse((obj) => {
      if (obj instanceof THREE.Mesh && obj.name === 'Screen') obj.material = material;
    });
    return material;
  }, [phone, textures]);

  useFrame((state, delta) => {
    const dt = Math.min(delta, 0.25); // tope por si la pestaña se traba, sin frenar el seguimiento
    const t = state.clock.elapsedTime;
    const tl = timeline.current;
    const following = pointer.inside && performance.now() - pointer.lastMove < IDLE_AFTER_MS;

    // ---------- Avance del guion ----------
    const go = (phase: Phase) => {
      tl.phase = phase;
      tl.start = t;
      tl.morphAt = null;
      if (phase === 'toPhone') shoutAt.current = t;
    };
    const elapsed = t - tl.start;
    if (tl.phase === 'mega') {
      if (tl.morphAt === -1) {
        // Clic: grita y se transforma enseguida
        shoutAt.current = t;
        tl.morphAt = t + SHOUT_LEAD;
      }
      if ((tl.morphAt !== null && t >= tl.morphAt) || (tl.morphAt === null && elapsed > MEGA_HOLD)) {
        go('toPhone');
      }
    } else if (tl.phase === 'toPhone' && elapsed > MORPH_TIME) go('phone');
    else if (tl.phase === 'phone' && (elapsed > PHONE_HOLD || tl.morphAt === -1)) go('toMega');
    else if (tl.phase === 'toMega' && elapsed > MORPH_TIME) go('mega');

    const p = clamp01((t - tl.start) / MORPH_TIME);
    let megaScale = 1;
    let phoneScale = 0;
    let phoneSpin = 0;
    if (tl.phase === 'toPhone') {
      megaScale = 1 - easeInBack(clamp01(p / 0.55));
      const q = clamp01((p - 0.4) / 0.6);
      phoneScale = easeOutBack(q);
      phoneSpin = (1 - easeOutCubic(q)) * Math.PI * 2.5;
    } else if (tl.phase === 'phone') {
      megaScale = 0;
      phoneScale = 1;
    } else if (tl.phase === 'toMega') {
      phoneScale = 1 - easeInBack(clamp01(p / 0.55));
      phoneSpin = -easeInBack(clamp01(p / 0.55)) * Math.PI * 1.5;
      megaScale = easeOutBack(clamp01((p - 0.4) / 0.6));
    }

    // ---------- Megáfono ----------
    if (following) {
      // La bocina "le habla" al cursor: apunta hacia un punto delante de la pantalla
      const dx = pointer.x * 5;
      const dy = pointer.y * 4;
      const dz = 0.8;
      const targetYaw = Math.atan2(-dz, dx);
      const targetPitch = THREE.MathUtils.clamp(Math.atan2(dy, Math.hypot(dx, dz)) + 0.12, -0.5, 0.75);
      const k = 1 - Math.exp(-dt * 6);
      yaw.current += wrapAngle(targetYaw - yaw.current) * k;
      pitch.current += (targetPitch - pitch.current) * k;
    } else {
      yaw.current += SPIN_SPEED * dt;
      pitch.current += (BASE_TILT - pitch.current) * (1 - Math.exp(-dt * 2));
    }
    // Al transformarse gira rápido, como un trompo
    const morphSpin = tl.phase === 'toPhone' ? easeInBack(clamp01(p / 0.55)) * Math.PI * 3 : 0;

    const mega = megaRef.current;
    if (mega) {
      mega.visible = megaScale > 0.001;
      mega.position.y = 0.1 * Math.sin(t * 2.1);
      mega.scale.setScalar(Math.max(megaScale, 0.001));
    }
    if (yawRef.current) yawRef.current.rotation.y = yaw.current + morphSpin;
    if (pitchRef.current) pitchRef.current.rotation.z = pitch.current;

    // Ondas de sonido que salen de la bocina
    const since = t - shoutAt.current;
    wavesRef.current?.children.forEach((wave, i) => {
      const w = (since - i * 0.12) / 0.9;
      const visible = w > 0 && w < 1;
      wave.visible = visible;
      if (!visible) return;
      wave.position.x = BELL_X + 0.15 + w * 1.2;
      wave.scale.setScalar(0.9 + w * 0.9);
      waveMaterials[i].opacity = 0.75 * (1 - w) ** 2; // se apaga antes de llegar al borde
    });
    if (pitchRef.current) {
      const kick = since > 0 && since < 0.35 ? Math.sin((since / 0.35) * Math.PI) * 0.08 : 0;
      pitchRef.current.scale.setScalar(1 + kick);
    }

    // Anillo de luz en el momento del cambio
    const ring = ringRef.current;
    if (ring) {
      const r = tl.phase === 'toPhone' || tl.phase === 'toMega' ? clamp01((p - 0.3) / 0.5) : 0;
      ring.visible = r > 0 && r < 1;
      ring.scale.setScalar(0.4 + easeOutCubic(r) * 2.4);
      ringMaterial.opacity = 0.7 * (1 - r) ** 1.5;
    }

    // ---------- Celular ----------
    const ph = phoneRef.current;
    if (ph) {
      ph.visible = phoneScale > 0.001;
      ph.scale.setScalar(Math.max(phoneScale, 0.001) * PHONE_SIZE);
      const k = 1 - Math.exp(-dt * 3);
      const targetTilt = following ? -pointer.y * 0.15 : 0.04 * Math.sin(t * 0.8);
      const lookYaw = following ? pointer.x * 0.35 : 0.08 * Math.sin(t * 0.6);
      ph.userData.look = (ph.userData.look ?? 0) + (lookYaw - (ph.userData.look ?? 0)) * k;
      ph.rotation.y = PHONE_YAW + ph.userData.look + phoneSpin;
      ph.rotation.x += (targetTilt - ph.rotation.x) * k;
      ph.position.y = 0.08 * Math.sin(t * 1.7 + 1) - (1 - phoneScale) * 0.3;
    }

    // Pantalla: cada web hace scroll de arriba hacia abajo, con fundido entre una y otra
    // Al volver a megáfono la pantalla queda donde estaba; al entrar arranca por la primera web
    if (tl.phase === 'phone') screenTime.current = Math.min(t - tl.start, PHONE_HOLD - 0.001);
    else if (tl.phase !== 'toMega') screenTime.current = 0;
    const local = screenTime.current;
    const site = Math.min(Math.floor(local / SITE_TIME), SCREENS.length - 1);
    const siteT = local - site * SITE_TIME;
    const tex = textures[site];
    if (screenMaterial.map !== tex) screenMaterial.map = tex;
    const s = THREE.MathUtils.smoothstep(siteT, SITE_HOLD_TOP, SITE_HOLD_TOP + SITE_SCROLL);
    tex.offset.y = (1 - VISIBLE) * s;
    const fadeIn = site === 0 ? 1 : siteT / SITE_FADE;
    const fadeOut = site === SCREENS.length - 1 ? 1 : (SITE_TIME - siteT) / SITE_FADE;
    screenMaterial.color.setScalar(clamp01(Math.min(fadeIn, fadeOut)));
  });

  return (
    <>
      <group ref={megaRef}>
        <group ref={yawRef}>
          <group ref={pitchRef}>
            <primitive object={megaphone} />
            <group ref={wavesRef}>
              {waveMaterials.map((material, i) => (
                <mesh key={i} rotation={[0, Math.PI / 2, 0]} material={material} visible={false}>
                  <torusGeometry args={[0.95, 0.035, 12, 72]} />
                </mesh>
              ))}
            </group>
          </group>
        </group>
      </group>

      <mesh ref={ringRef} material={ringMaterial} visible={false} position={[0, 0.1, 0.4]}>
        <torusGeometry args={[1, 0.025, 12, 96]} />
      </mesh>

      <group ref={phoneRef} visible={false}>
        <primitive object={phone} />
      </group>
    </>
  );
}

/**
 * Megáfono 3D (modelo de Blender) que sigue al mouse y, al hacer clic o pasado un rato,
 * se transforma en un celular (también de Blender) que muestra webs reales del plan.
 */
export default function MegaphoneScene({ onReady }: { onReady?: () => void }) {
  const pointer = useRef<PointerState>({ x: 0, y: 0, lastMove: 0, inside: false }).current;
  // morphAt = -1 marca un clic pendiente de procesar en el loop de render
  const timeline = useRef<Timeline>({ phase: 'mega', start: 0, morphAt: null });
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const el = wrapperRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      // Posición relativa al centro de la escena, normalizada por la mitad de la ventana
      pointer.x = (e.clientX - (r.left + r.width / 2)) / (window.innerWidth / 2);
      pointer.y = -(e.clientY - (r.top + r.height / 2)) / (window.innerHeight / 2);
      pointer.lastMove = performance.now();
      pointer.inside = true;
    };
    const onLeave = () => {
      pointer.inside = false;
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    document.documentElement.addEventListener('pointerleave', onLeave);
    return () => {
      window.removeEventListener('pointermove', onMove);
      document.documentElement.removeEventListener('pointerleave', onLeave);
    };
  }, [pointer]);

  return (
    <div
      ref={wrapperRef}
      className="relative h-full w-full cursor-pointer"
      onClick={() => {
        const tl = timeline.current;
        if ((tl.phase === 'mega' || tl.phase === 'phone') && tl.morphAt === null) tl.morphAt = -1;
      }}
    >
      <div className="pointer-events-none absolute -inset-[30%] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
        <Canvas
          flat
          dpr={[1, 2]}
          camera={{ position: [0, 0.9, 6.6], fov: FOV }}
          gl={{ alpha: true, antialias: true }}
          onCreated={({ camera }) => camera.lookAt(0, 0.2, 0)}
        >
          <ambientLight intensity={0.35} />
          <directionalLight position={[2.5, 5, 5]} intensity={2.2} />
          <directionalLight position={[-5, 1, 3]} intensity={0.7} color="#FFE7A0" />
          <directionalLight position={[3, 2, -4]} intensity={1.4} color="#E6DDFF" />
          {/* Reflejos locales (sin descargar un HDR externo) */}
          <Environment resolution={256}>
            <Lightformer form="rect" intensity={3} position={[2, 4, 4]} scale={[4, 2, 1]} />
            <Lightformer form="rect" intensity={1.5} position={[-4, 1, 2]} scale={[3, 3, 1]} color="#FFD200" />
            <Lightformer form="ring" intensity={2} position={[0, 5, -3]} scale={3} />
            <Lightformer form="rect" intensity={2.5} position={[-3, 2, 4]} scale={[0.6, 5, 1]} />
          </Environment>
          {/* ReadySignal queda dentro del mismo Suspense: solo avisa con todo cargado */}
          <Suspense fallback={null}>
            <Show pointer={pointer} timeline={timeline} />
            <ContactShadows position={[0, -1.6, 0]} opacity={0.45} scale={7} blur={2.6} far={2.5} color="#5a4200" />
            <ReadySignal onReady={onReady} />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}

// Avisa cuando ya se dibujó el primer cuadro con los modelos cargados
function ReadySignal({ onReady }: { onReady?: () => void }) {
  const done = useRef(false);
  useFrame(() => {
    if (done.current) return;
    done.current = true;
    onReady?.();
  });
  return null;
}

useGLTF.preload(MEGAPHONE_URL, false, false);
useGLTF.preload(PHONE_URL, false, false);
useTexture.preload(SCREENS);
