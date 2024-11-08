import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function Robot() {
  const robotRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (robotRef.current) {
      robotRef.current.rotation.y += 0.005;
      robotRef.current.children.forEach((child, i) => {
        // @ts-ignore
        child.position.y = Math.sin(state.clock.elapsedTime + i) * 0.1;
      });
    }
  });

  return (
    <group ref={robotRef}>
      {/* Core body */}
      <mesh position={[0, 0, 0]}>
        <octahedronGeometry args={[1]} />
        <meshStandardMaterial
          color="#00ff88"
          emissive="#00ff88"
          emissiveIntensity={0.2}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      {/* Floating rings */}
      {[...Array(3)].map((_, i) => (
        <mesh key={i} position={[0, i * 0.5, 0]} rotation={[Math.PI / 4, 0, 0]}>
          <torusGeometry args={[1.5 - i * 0.2, 0.05, 16, 32]} />
          <meshStandardMaterial
            color="#00ffff"
            emissive="#00ffff"
            emissiveIntensity={0.5}
            metalness={1}
            roughness={0}
          />
        </mesh>
      ))}
      {/* Energy core */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial
          color="#ff00ff"
          emissive="#ff00ff"
          emissiveIntensity={1}
          metalness={1}
          roughness={0}
        />
      </mesh>
    </group>
  );
}

export function RobotModel() {
  return (
    <div className="absolute inset-0 opacity-30">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} color="#00ffff" intensity={1} />
        <Robot />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}