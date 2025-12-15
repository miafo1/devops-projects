import React, { useState, useEffect } from 'react';
import { ShoppingBagIcon, Bars3Icon, UserCircleIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/80 backdrop-blur-md shadow-lg py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
            <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-600">
                FoodDelivery
            </span>
        </div>
        
        <div className={`hidden md:flex space-x-8 font-medium ${scrolled ? 'text-gray-800' : 'text-gray-800'}`}>
          <a href="#" className="hover:text-primary transition duration-300">Home</a>
          <a href="#" className="hover:text-primary transition duration-300">Restaurants</a>
          <a href="#" className="hover:text-primary transition duration-300">Orders</a>
        </div>

        <div className={`flex items-center space-x-6 ${scrolled ? 'text-gray-800' : 'text-gray-800'}`}>
          <button className="relative group p-2 hover:bg-gray-100/50 rounded-full transition">
            <ShoppingBagIcon className="w-6 h-6 group-hover:text-primary transition" />
            <span className="absolute top-0 right-0 bg-primary text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">2</span>
          </button>
          <button className="p-2 hover:bg-gray-100/50 rounded-full transition">
             <UserCircleIcon className="w-7 h-7 hover:text-primary transition" />
          </button>
          <button className="md:hidden p-2 hover:bg-gray-100/50 rounded-full transition">
            <Bars3Icon className="w-7 h-7" />
          </button>
        </div>
      </div>
    </nav>
  );
}
