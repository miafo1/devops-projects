import React from 'react';
import { StarIcon, ClockIcon } from '@heroicons/react/24/solid';

// Mock images for better feel if real image fails
const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";

export default function RestaurantCard({ result }) {
  // result could be mock data
  const { name, image, rating, delivery_time, tags, price_range } = result;

  return (
    <div className="group bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer border border-gray-100">
      <div className="relative h-48 overflow-hidden">
        <img 
            src={image || FALLBACK_IMAGE} 
            alt={name} 
            className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
        />
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-bold text-gray-800 shadow-sm">
            {delivery_time || "20-30 min"}
        </div>
        <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-sm">
             <div className="flex items-center gap-1 text-xs font-bold text-gray-800">
                <StarIcon className="w-4 h-4 text-orange-500" />
                {rating || "4.8"}
             </div>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-secondary group-hover:text-primary transition">{name || "Burger King"}</h3>
            <span className="text-sm font-medium text-gray-400">{price_range || "$$"}</span>
        </div>
        
        <p className="text-gray-500 text-sm mb-4 line-clamp-2">
           {tags?.join(" • ") || "Burgers • American • Fast Food"}
        </p>

        <button className="w-full py-3 rounded-xl bg-gray-50 text-secondary font-semibold hover:bg-primary hover:text-white transition-colors duration-300">
            View Menu
        </button>
      </div>
    </div>
  );
}
