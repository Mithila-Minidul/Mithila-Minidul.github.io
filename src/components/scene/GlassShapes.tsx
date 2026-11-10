import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial } from '@react-three/drei';
import type { Group } from 'three';

const Glass = () => (
  <MeshTransmissionMaterial
    transmission={1}
    thickness={0.6}
    roughness={0.08}
    ior={1.4}
    chromaticAberration={0.04}
    anisotropicBlur={0.2}
    samples={6}
    resolution={512}
    backside={false}
  />
);

export default function GlassShapes() {
  const group = useRef<Group>(null!);
  const { viewport } = useThree();
  const scale = Math.min(0.85, viewport.width / 9); // shrink on narrow screens

  // ease the whole group toward the pointer
  useFrame(({ pointer }) => {
    group.current.rotation.y += (pointer.x * 0.25 - group.current.rotation.y) * 0.05;
    group.current.rotation.x += (-pointer.y * 0.15 - group.current.rotation.x) * 0.05;
  });

  return (
    <group ref={group} scale={scale} position={[-0.4, 0, 0]}>
      {/* pastel spheres behind the glass, so refraction has something to bend */}
      <mesh position={[2.2, 0.6, -2]}>
        <sphereGeometry args={[1.2, 48, 48]} />
        <meshBasicMaterial color="#ffb199" />
      </mesh>
      <mesh position={[3.6, -1.2, -2.2]}>
        <sphereGeometry args={[1, 48, 48]} />
        <meshBasicMaterial color="#a9b8ff" />
      </mesh>
      <mesh position={[1.2, -1.7, -2.5]}>
        <sphereGeometry args={[0.9, 48, 48]} />
        <meshBasicMaterial color="#9fe3c8" />
      </mesh>

      {/* the glass shapes */}
      <Float speed={1.2} rotationIntensity={0.6} floatIntensity={0.8}>
        <mesh position={[2.3, 0, 0]}>
          <torusGeometry args={[1, 0.42, 64, 128]} />
          <Glass />
        </mesh>
      </Float>
      <Float speed={1.6} floatIntensity={1}>
        <mesh position={[3.8, 1.4, 0.4]}>
          <sphereGeometry args={[0.7, 64, 64]} />
          <Glass />
        </mesh>
      </Float>
      <Float speed={1} rotationIntensity={1}>
        <mesh position={[1.3, -1.8, 0.6]}>
          <icosahedronGeometry args={[0.6, 3]} />
          <Glass />
        </mesh>
      </Float>
    </group>
  );
}