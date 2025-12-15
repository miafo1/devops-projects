import React from 'react';

export default function Hero() {
  return (
    <div className="relative bg-accent min-h-[60vh] flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        {/* Abstract background shapes could go here */}
      </div>
      
      <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-secondary leading-tight">
            Delicious Food <br />
            <span className="text-primary">Delivered To You</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-lg">
            Choose from thousands of restaurants and get your favorite meals delivered fast and fresh.
          </p>
          <div className="flex space-x-4">
            <button className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Order Now
            </button>
            <button className="bg-white text-secondary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow hover:shadow-md">
              View Menu
            </button>
          </div>
        </div>
        <div className="hidden md:block">
            {/* Placeholder for Hero Image */}
            <div className="w-full h-96 bg-gray-300 rounded-3xl animate-pulse flex items-center justify-center text-gray-500">
                Hero Image Placeholder
            </div>
        </div>
      </div>
    </div>
  );
}
