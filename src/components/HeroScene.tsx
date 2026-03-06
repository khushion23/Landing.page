import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float, Sphere } from "@react-three/drei";
import * as THREE from "three";
const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.15;
      meshRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.1) * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={meshRef} scale={2.4}>
        <icosahedronGeometry args={[1, 8]} />
        <MeshDistortMaterial
          color="#3b82f6"
          roughness={0.2}
          metalness={0.8}
          distort={0.25}
          speed={1.5}
          wireframe
          transparent
          opacity={0.15}
        />
      </mesh>
    </Float>
  );
};

const OrbitRing = ({ radius, speed, color, opacity }: { radius: number; speed: number; color: string; opacity: number }) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.x = clock.getElapsedTime() * speed;
      ref.current.rotation.z = clock.getElapsedTime() * speed * 0.5;
    }
  });
  return (
    <mesh ref={ref}>
      <torusGeometry args={[radius, 0.008, 16, 100]} />
      <meshBasicMaterial color={color} transparent opacity={opacity} />
    </mesh>
  );
};

const Particles = () => {
  const count = 200;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  const ref = useRef<THREE.Points>(null);
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.03;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.015} color="#3b82f6" transparent opacity={0.5} sizeAttenuation />
    </points>
  );
};

const HeroScene = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} color="#3b82f6" />
        <directionalLight position={[-3, -3, 2]} intensity={0.3} color="#8b5cf6" />
        <AnimatedSphere />
        <OrbitRing radius={3.2} speed={0.2} color="#3b82f6" opacity={0.07} />
        <OrbitRing radius={3.8} speed={-0.15} color="#8b5cf6" opacity={0.05} />
        <OrbitRing radius={4.4} speed={0.1} color="#10b981" opacity={0.04} />
        <Particles />
      </Canvas>
    </div>
  );
};

export default HeroScene;
