import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture, Environment, RoundedBox, PerspectiveCamera, Decal } from '@react-three/drei';
import * as THREE from 'three';

interface Phone3DProps {
  imageSrc: string;
  className?: string;
}

function PhoneModel({ imageSrc }: { imageSrc: string }) {
  const meshRef = useRef<THREE.Group>(null);
  const texture = useTexture(imageSrc);
  
  // The AI image is a square (1:1) mockup with a huge grey studio background.
  // We must crop it heavily to extract only the UI screen.
  // The screen is roughly the middle 38% horizontally and 80% vertically.
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.repeat.set(0.38, 0.80);
  texture.offset.set(0.31, 0.10);

  useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.getElapsedTime();
      meshRef.current.position.y = Math.sin(t * 1.5) * 0.1;
      meshRef.current.rotation.y = t * 0.3;
      meshRef.current.rotation.x = Math.sin(t * 0.5) * 0.1;
      meshRef.current.rotation.z = Math.cos(t * 0.7) * 0.05;
    }
  });

  return (
    <group ref={meshRef}>
      {/* 1. Main body of the phone */}
      <RoundedBox
        args={[2.2, 4.6, 0.2]}
        radius={0.08} // Safe radius to avoid geometry self-intersection
        smoothness={4} // Lower smoothness prevents normal shading artifacts
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

      {/* Screen - Plane geometry to guarantee perfect UV mapping without clipping */}
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

      {/* 4. Camera Bump on the back */}
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
  return (
    <div className={`relative w-full aspect-[9/16] max-w-[320px] mx-auto ${className}`}>
      {/* We don't render canvas if window is not defined (SSR safety) */}
      {typeof window !== 'undefined' && (
        <Canvas shadows dpr={[1, 2]}>
          <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={50} />
          
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
          <directionalLight position={[-10, -10, -5]} intensity={0.5} />
          <spotLight position={[0, 5, 5]} intensity={1} angle={0.5} penumbra={1} />
          
          <Environment preset="city" />
          
          <PhoneModel imageSrc={imageSrc} />
        </Canvas>
      )}
    </div>
  );
}
