"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Car() {
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh ref={mesh} scale={1.5}>
      <boxGeometry args={[2, 1, 4]} />
      <meshStandardMaterial color="#e60000" metalness={0.8} roughness={0.2} />
    </mesh>
  );
}

export default function Car3D() {
  return (
    <section className="car-section">
      <Canvas camera={{ position: [0, 2, 6], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Car />
      </Canvas>
    </section>
  );
}
