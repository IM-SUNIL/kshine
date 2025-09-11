"use client";

import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useRef } from "react";

const rates = [
  { label: "🪙 Gold Rate", value: "₹65,000 / 10g" },
  { label: "🥈 Silver Rate", value: "₹75,000 / kg" },
];

export default function RatesTicker() {
  const controls = useAnimationControls();
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    
    if (!container || !content) return;

    // Calculate the width of the content
    const contentWidth = content.scrollWidth / 2; // Since we duplicate the content
    const duration = contentWidth / 50; // Adjust speed factor (50px per second)

    const startAnimation = () => {
      controls.start({
        x: -contentWidth,
        transition: {
          duration: duration,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop"
        }
      });
    };

    startAnimation();
    
    // Restart animation on window resize to handle responsive layout changes
    const handleResize = () => {
      controls.stop();
      controls.set({ x: 0 });
      startAnimation();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [controls]);

  return (
    <div ref={containerRef} className="w-full bg-black py-1 text-yellow-300 text-sm overflow-hidden">
      <div className="">
        <motion.div
          animate={controls}
          className="flex gap-12 whitespace-nowrap py-2"
        >
          <div ref={contentRef} className="flex gap-12">
            {[...rates, ...rates, ...rates].map((item, index) => (
              <span key={index} className="font-medium">
                {item.label}: {item.value}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
