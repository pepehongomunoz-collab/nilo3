import { useRef, Suspense, Component, ReactNode } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture, Environment, RoundedBox, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { useInView } from 'framer-motion';

interface Phone3DProps {
  imageSrc: string;
  className?: string;
}

interface ErrorBoundaryProps {
  fallback: ReactNode;
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class CanvasErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.warn('3D Canvas error caught safely:', error);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

function PhoneModel({ imageSrc, isVisible }: { imageSrc: string; isVisible: boolean }) {
  const meshRef = useRef<THREE.Group>(null);
  const startTimeRef = useRef<number | null>(null);
  const texture = useTexture(imageSrc);
  
  // Crop AI mockup image to phone screen boundaries
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.repeat.set(0.38, 0.80);
  texture.offset.set(0.31, 0.10);

  useFrame((state) => {
    if (meshRef.current) {
      if (isVisible && startTimeRef.current === null) {
        startTimeRef.current = state.clock.getElapsedTime();
      }

      const t = isVisible && startTimeRef.current !== null
        ? state.clock.getElapsedTime() - startTimeRef.current
        : 0;

      meshRef.current.position.y = Math.sin(t * 1.5) * 0.1;
      meshRef.current.rotation.y = t * -0.3;
      meshRef.current.rotation.x = Math.sin(t * 0.5) * 0.1;
      meshRef.current.rotation.z = Math.cos(t * 0.7) * 0.05;
    }
  });

  return (
    <group ref={meshRef}>
      {/* 1. Main body of the phone */}
      <RoundedBox
        args={[2.2, 4.6, 0.2]}
        radius={0.08}
        smoothness={4}
      >
        <meshPhysicalMaterial
          color="#111111"
          metalness={0.7}
          roughness={0.2}
          clearcoat={0.5}
          clearcoatRoughness={0.2}
          envMapIntensity={1}
        />
      </RoundedBox>

      {/* Screen */}
      <mesh position={[0, 0, 0.101]}>
        <planeGeometry args={[2.0, 4.4]} />
        <meshBasicMaterial
          map={texture}
          toneMapped={false}
        />
      </mesh>

      {/* 3. Camera Notch */}
      <RoundedBox
        args={[0.5, 0.12, 0.01]}
        radius={0.06}
        position={[0, 2.05, 0.102]}
      >
        <meshBasicMaterial color="#000000" />
      </RoundedBox>

      {/* 4. Camera Bump */}
      <RoundedBox
        args={[0.8, 1.0, 0.05]}
        radius={0.1}
        position={[-0.5, 1.6, -0.11]}
      >
        <meshPhysicalMaterial color="#0a0a0a" metalness={0.8} roughness={0.3} />
      </RoundedBox>
      
      {/* Lenses */}
      <mesh position={[-0.5, 1.8, -0.14]} rotation={[Math.PI/2, 0, 0]}>
        <cylinderGeometry args={[0.18, 0.18, 0.04, 32]} />
        <meshStandardMaterial color="#000" metalness={1} roughness={0.1} />
      </mesh>
      <mesh position={[-0.5, 1.4, -0.14]} rotation={[Math.PI/2, 0, 0]}>
        <cylinderGeometry args={[0.18, 0.18, 0.04, 32]} />
        <meshStandardMaterial color="#000" metalness={1} roughness={0.1} />
      </mesh>
    </group>
  );
}

export function Phone3D({ imageSrc, className = '' }: Phone3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  // 2D Fallback view if WebGL/Three.js fails or is blocked
  const fallbackView = (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div className="relative w-full max-w-[240px] aspect-[9/18] bg-zinc-900 rounded-[2.5rem] border-4 border-zinc-800 overflow-hidden shadow-2xl flex items-center justify-center">
        <img
          src={imageSrc}
          alt="App Preview"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    </div>
  );

  return (
    <div ref={containerRef} className={`relative w-full aspect-[9/16] max-w-[320px] mx-auto ${className}`}>
      {typeof window !== 'undefined' && (
        <CanvasErrorBoundary fallback={fallbackView}>
          <Canvas shadows dpr={[1, 2]}>
            <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={50} />
            
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
            <directionalLight position={[-10, -10, -5]} intensity={0.5} />
            <spotLight position={[0, 5, 5]} intensity={1} angle={0.5} penumbra={1} />
            
            <Suspense fallback={null}>
              <Environment preset="city" />
              <PhoneModel imageSrc={imageSrc} isVisible={isInView} />
            </Suspense>
          </Canvas>
        </CanvasErrorBoundary>
      )}
    </div>
  );
}
