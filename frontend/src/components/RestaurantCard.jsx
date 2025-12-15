import React from 'react';
import { StarIcon, ClockIcon } from '@heroicons/react/24/solid';

export default function RestaurantCard({ restaurant }) {
  // Mock data fallback
  const { 
    name = "Burger King", 
    image = "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&q=80", 
    rating = 4.5, 
    deliveryTime = "20-30 min", 
    tags = ["American", "Burgers"] 
  } = restaurant || {};

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer group">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-lg text-sm font-bold flex items-center shadow-sm">
          <span>{deliveryTime}</span>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-secondary">{name}</h3>
          <div className="flex items-center bg-green-50 px-2 py-0.5 rounded text-green-700 font-bold text-sm">
            <span>{rating}</span>
            <StarIcon className="w-3 h-3 ml-1" />
          </div>
        </div>
        
        <p className="text-gray-500 text-sm mb-3">
          {tags.join(" • ")}
        </p>
        
        <div className="border-t border-gray-100 pt-3 flex justify-between items-center text-sm text-gray-500">
          <div className="flex items-center">
            <ClockIcon className="w-4 h-4 mr-1" />
            <span>Free delivery</span>
          </div>
        </div>
      </div>
    </div>
  );
}
