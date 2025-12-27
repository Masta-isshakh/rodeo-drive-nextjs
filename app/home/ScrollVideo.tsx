"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onLoaded = () => {
      video.pause();

      gsap.to(video, {
        currentTime: video.duration,
        ease: "none",
        scrollTrigger: {
          trigger: ".video-section",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          pin: true,
        },
      });
    };

    video.addEventListener("loadedmetadata", onLoaded);
    return () => video.removeEventListener("loadedmetadata", onLoaded);
  }, []);

  return (
    <section className="video-section">
      <video
        ref={videoRef}
        src="https://www.pexels.com/download/video/5309351/"
        muted
        playsInline
        preload="auto"
      />
    </section>
  );
}
