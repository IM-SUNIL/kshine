'use client';

import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';

export default function FirstVisitPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Check if popup was shown before using localStorage
    const hasSeenPopup = localStorage?.getItem('hasSeenPopup');
    if (!hasSeenPopup) {
      setIsOpen(true);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    // Store in localStorage that user has seen the popup
    if (typeof window !== 'undefined') {
      localStorage.setItem('hasSeenPopup', 'true');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple validation
    if (!phone) {
      setError('Please enter your mobile number');
      return;
    }
    if (!/^\d{10}$/.test(phone)) {
      setError('Please enter a valid 10-digit mobile number');
      return;
    }
    
    // Here you would typically send the number to your backend
    console.log('Phone number submitted:', phone);
    
    // Close popup after submission
    handleClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full relative overflow-hidden">
        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          aria-label="Close popup"
        >
          <X size={24} />
        </button>
        
        {/* Content */}
        <div className="p-6">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="flex justify-center mb-4">
              <Image 
                src="/gold-coin.png" 
                alt="Special Offer" 
                width={80} 
                height={80}
                className="object-contain"
              />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Get Exclusive Gold Rate Updates!</h2>
            <h3 className="text-xl text-amber-600 font-semibold mb-3">Flat 10% Off on Your First Purchase</h3>
            <p className="text-gray-600 text-sm">
              Enter your mobile number to receive today&apos;s gold & silver rates + special offers.
            </p>
          </div>
          
          {/* Timer */}
          <div className="bg-amber-50 text-amber-800 text-sm p-3 rounded-md mb-6 text-center">
            ⏳ Offer valid for next <span className="font-bold">24 hours</span>
          </div>
          
          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <span className="text-gray-500">+91</span>
                </div>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, '');
                    if (value.length <= 10) {
                      setPhone(value);
                      setError('');
                    }
                  }}
                  placeholder="Enter mobile number"
                  className="w-full pl-12 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
                  maxLength={10}
                />
              </div>
              {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
            </div>
            
            <button
              type="submit"
              className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-4 rounded-md transition duration-200 transform hover:scale-105"
            >
              Get Offer Now
            </button>
          </form>
          
          {/* Trust Element */}
          <p className="text-xs text-gray-500 text-center mt-4">
            We respect your privacy. No spam, only exclusive offers.
          </p>
        </div>
      </div>
    </div>
  );
}
