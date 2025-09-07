'use client';

import { useEffect } from 'react';

export default function GoogleReviews() {
  useEffect(() => {
    // Load the Elfsight script
    const script = document.createElement('script');
    script.src = 'https://elfsightcdn.com/platform.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on component unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
        <div className="elfsight-app-a48cc448-fce9-4103-ab68-645fdb05674e" data-elfsight-app-lazy></div>
      </div>
    </section>
  );
}
