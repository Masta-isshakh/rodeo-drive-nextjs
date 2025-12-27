"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { useGLTF, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function CarModel() {
  const car = useRef<THREE.Group>(null!);
  const { scene } = useGLTF("/models/car.glb"); // place ton fichier car.glb dans public/models/

  useFrame((state) => {
    if (!car.current) return;
    car.current.rotation.y += 0.002; // rotation fluide
    car.current.position.y = Math.sin(state.clock.elapsedTime) * 0.05; // respiration légère
  });

  return <primitive ref={car} object={scene} scale={1.8} position={[0, -0.5, 0]} />;
}

export default function Car3DScroll() {
  const canvasRef = useRef<HTMLDivElement>(null);

  // Animation scroll
  useEffect(() => {
    if (!canvasRef.current) return;

    gsap.to(canvasRef.current, {
      yPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: canvasRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
  }, []);

  return (
    <section className="car-scroll-section" ref={canvasRef}>
      <Canvas
        camera={{ position: [0, 1.6, 6], fov: 42 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <Environment preset="studio" />
        <ContactShadows
          position={[0, -1.2, 0]}
          opacity={0.4}
          scale={10}
          blur={2}
          far={4}
        />
        <CarModel />
      </Canvas>
    </section>
  );
}
