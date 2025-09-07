"use client";
import React, { useEffect, useRef, useState } from "react";

type Props = { images: string[]; interval?: number; className?: string };

export default function BackgroundSlider({ images, interval = 2000, className = "" }: Props) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    images.forEach((s) => {
      const img = new Image();
      img.src = s;
    });
  }, [images]);

  useEffect(() => {
    if (!images.length) return;
    timerRef.current = window.setInterval(() => setIndex((i) => (i + 1) % images.length), interval);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [images, interval]);

  return (
    <div className={`fixed inset-0 -z-20 pointer-events-none overflow-hidden ${className}`} aria-hidden>
      {images.map((src, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-center bg-cover bg-no-repeat transition-opacity duration-700 ease-linear ${i === index ? "opacity-100" : "opacity-0"}`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20 pointer-events-none" />
    </div>
  );
}
