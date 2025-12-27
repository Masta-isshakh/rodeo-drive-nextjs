"use client";

import { Canvas } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";

export default function WebGLBackground() {
  return (
    <Canvas className="webgl-bg">
      <ambientLight intensity={1} />
      <Sphere args={[4, 64, 64]}>
        <MeshDistortMaterial
          color="#0b0b0b"
          distort={0.45}
          speed={2}
          roughness={0.4}
        />
      </Sphere>
    </Canvas>
  );
}
