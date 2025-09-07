'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const GOLD_PRICE_PER_GRAM = 6492.50; // Example price in INR
const PRICE_CHANGE_PERCENTAGE = 1.25; // 1.25% increase

function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0
  }).format(num);
}

function AnimatedNumber({ value }: { value: number }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const duration = 1000; // Faster animation
    const start = 0;
    const end = value;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const currentValue = Math.floor(progress * (end - start) + start);
      setDisplayValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [value]);

  return <span>{formatNumber(displayValue)}</span>;
}

export default function GoldPriceDisplay() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg max-w-md mx-auto border border-gray-100">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Gold Price</h2>
        <div className="flex items-center space-x-2 bg-amber-50 px-3 py-1 rounded-full border border-amber-100">
          <span className="text-amber-600 text-sm font-medium">24K</span>
        </div>
      </div>
      
      {/* Price Display */}
      <div className="mb-4">
        <div className="text-4xl font-bold text-gray-900">
          <AnimatedNumber value={GOLD_PRICE_PER_GRAM} />
        </div>
        <div className="flex items-center mt-2">
          <span className="text-green-600 text-sm font-medium flex items-center bg-green-50 px-2 py-1 rounded">
            <ArrowUp className="w-4 h-4 mr-1" />
            {PRICE_CHANGE_PERCENTAGE}% Today
          </span>
        </div>
      </div>

      {/* Last updated */}
      <div className="text-gray-500 text-xs mt-4 pt-3 border-t border-gray-100">
        Last updated: {new Date().toLocaleTimeString('en-IN', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        })}
      </div>
    </div>
  );
}