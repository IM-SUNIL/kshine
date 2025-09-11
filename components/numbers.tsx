"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function GoldPriceDisplay() {
  const [price, setPrice] = useState<number>(100330);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // In a real app, fetch the actual gold price here
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-IN').format(num);
  };

  return (
    <div className="snap-center w-full py-2 md:py-3 flex items-center justify-center">
      <div className="impact-text impact-text--center w-full max-w-4xl px-4">
        <div className="impact-text__text heading break-all text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-gradient"
            style={{
              background: 'linear-gradient(180deg, rgba(26, 26, 26, 0.7), rgba(26, 26, 26, 0.3) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
              fontSize: 'clamp(3rem, 10vw, 6rem)',
              lineHeight: 1,
              fontWeight: 700,
              marginBottom: '0.5rem',
            }}
          >
            ₹{formatNumber(price)}
          </motion.div>
          
          <div className="impact-text__content mt-6">
            <h3 className="text-lg md:text-xl text-gray-600 font-medium">
              Today's Gold Price per 10 Grams for 22K
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}