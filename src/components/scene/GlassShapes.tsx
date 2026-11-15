import { useLayoutEffect, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial } from '@react-three/drei';
import type { Group } from 'three';

const Glass = ({ lowPower }: { lowPower: boolean }) => (
  <MeshTransmissionMaterial
    transmission={1}
    thickness={0.6}
    roughness={0.08}
    ior={1.4}
    chromaticAberration={lowPower ? 0.02 : 0.04}
    anisotropicBlur={lowPower ? 0.05 : 0.2}
    samples={lowPower ? 2 : 4}
    resolution={lowPower ? 256 : 384}
    backside={false}
  />
);

interface GlassShapesProps {
  reduceMotion: boolean;
  lowPower: boolean;
}

export default function GlassShapes({ reduceMotion, lowPower }: GlassShapesProps) {
  const group = useRef<Group>(null!);
  const introStart = useRef<number | null>(null);
  const { viewport } = useThree();
  const scale = Math.min(0.85, viewport.width / 9); // shrink on narrow screens
  const scaleRef = useRef(scale);
  scaleRef.current = scale;

  useLayoutEffect(() => {
    introStart.current = null;
    if (reduceMotion) {
      group.current.position.set(-0.4, 0, 0);
      group.current.rotation.set(0, 0, 0);
      group.current.scale.setScalar(scaleRef.current);
      return;
    }

    group.current.position.set(0.2, -0.45, 0);
    group.current.rotation.set(0.3, -0.7, -0.12);
    group.current.scale.setScalar(scaleRef.current * 0.12);
  }, [reduceMotion]);

  useFrame(({ pointer, clock }, delta) => {
    if (reduceMotion) return;

    introStart.current ??= clock.elapsedTime;
    const progress = Math.min(1, (clock.elapsedTime - introStart.current) / 1.9);
    const eased = 1 - Math.pow(1 - progress, 4);
    const blend = Math.min(1, delta * 5);

    group.current.scale.setScalar(scale * (0.12 + eased * 0.88));
    group.current.position.x = -0.4 + (1 - eased) * 0.6;
    group.current.position.y = -(1 - eased) * 0.45;
    group.current.rotation.z = -(1 - eased) * 0.12;
    group.current.rotation.y += (
      -(1 - eased) * 0.7 + pointer.x * 0.25 * eased - group.current.rotation.y
    ) * blend;
    group.current.rotation.x += (
      (1 - eased) * 0.3 - pointer.y * 0.15 * eased - group.current.rotation.x
    ) * blend;
  });

  return (
    <group ref={group} scale={scale} position={[-0.4, 0, 0]}>
      {/* pastel spheres behind the glass, so refraction has something to bend */}
      <mesh position={[2.2, 0.6, -2]}>
        <sphereGeometry args={[1.2, lowPower ? 24 : 48, lowPower ? 24 : 48]} />
        <meshBasicMaterial color="#ffb199" />
      </mesh>
      <mesh position={[3.6, -1.2, -2.2]}>
        <sphereGeometry args={[1, lowPower ? 24 : 48, lowPower ? 24 : 48]} />
        <meshBasicMaterial color="#a9b8ff" />
      </mesh>
      <mesh position={[1.2, -1.7, -2.5]}>
        <sphereGeometry args={[0.9, lowPower ? 24 : 48, lowPower ? 24 : 48]} />
        <meshBasicMaterial color="#9fe3c8" />
      </mesh>

      {/* the glass shapes */}
      {reduceMotion ? (
        <>
          <mesh position={[2.3, 0, 0]}>
            <torusGeometry args={[1, 0.42, lowPower ? 32 : 64, lowPower ? 64 : 128]} />
            <Glass lowPower={lowPower} />
          </mesh>
          <mesh position={[3.8, 1.4, 0.4]}>
            <sphereGeometry args={[0.7, lowPower ? 32 : 64, lowPower ? 32 : 64]} />
            <Glass lowPower={lowPower} />
          </mesh>
          <mesh position={[1.3, -1.8, 0.6]}>
            <icosahedronGeometry args={[0.6, lowPower ? 2 : 3]} />
            <Glass lowPower={lowPower} />
          </mesh>
        </>
      ) : (
        <>
          <Float speed={1.2} rotationIntensity={0.6} floatIntensity={0.8}>
            <mesh position={[2.3, 0, 0]}>
              <torusGeometry args={[1, 0.42, lowPower ? 32 : 64, lowPower ? 64 : 128]} />
              <Glass lowPower={lowPower} />
            </mesh>
          </Float>
          <Float speed={1.6} floatIntensity={1}>
            <mesh position={[3.8, 1.4, 0.4]}>
              <sphereGeometry args={[0.7, lowPower ? 32 : 64, lowPower ? 32 : 64]} />
              <Glass lowPower={lowPower} />
            </mesh>
          </Float>
          <Float speed={1} rotationIntensity={1}>
            <mesh position={[1.3, -1.8, 0.6]}>
              <icosahedronGeometry args={[0.6, lowPower ? 2 : 3]} />
              <Glass lowPower={lowPower} />
            </mesh>
          </Float>
        </>
      )}
    </group>
  );
}