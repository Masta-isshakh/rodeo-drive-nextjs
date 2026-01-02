'use client';

import { Suspense, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, OrbitControls, useGLTF } from '@react-three/drei';

function CarModel({ url }: { url: string }) {
  const group = useRef<THREE.Group>(null);
  const { scene } = useGLTF(url);

  useEffect(() => {
    scene.traverse((obj) => {
      if ((obj as THREE.Mesh).isMesh) {
        const mesh = obj as THREE.Mesh;
        mesh.castShadow = true;
        mesh.receiveShadow = true;

        const mat = mesh.material as THREE.MeshStandardMaterial;
        if (mat && 'metalness' in mat) {
          mat.envMapIntensity = 1.2;
          mat.needsUpdate = true;
        }
      }
    });
  }, [scene]);

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.35;
  });

  return <primitive ref={group} object={scene} />;
}

export interface CarCanvasProps {
  modelUrl: string;
  enableControls?: boolean;
}

export default function CarCanvas({
  modelUrl,
  enableControls = false,
}: CarCanvasProps) {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 1.15, 4], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight
        position={[4, 6, 4]}
        intensity={1.6}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      <Suspense fallback={null}>
        <Environment preset="studio" />
        <CarModel url={modelUrl} />
      </Suspense>

      {enableControls && (
        <OrbitControls
          enablePan={false}
          minDistance={2.5}
          maxDistance={7}
          minPolarAngle={0.6}
          maxPolarAngle={1.5}
        />
      )}
    </Canvas>
  );
}
