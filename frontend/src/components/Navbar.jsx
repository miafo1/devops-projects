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
      scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary">FoodDelivery</div>
        
        <div className="hidden md:flex space-x-8 text-secondary font-medium">
          <a href="#" className="hover:text-primary transition">Home</a>
          <a href="#" className="hover:text-primary transition">Restaurants</a>
          <a href="#" className="hover:text-primary transition">Orders</a>
        </div>

        <div className="flex items-center space-x-4 text-secondary">
          <button className="p-2 hover:text-primary transition">
            <ShoppingBagIcon className="w-6 h-6" />
          </button>
          <button className="p-2 hover:text-primary transition">
            <UserCircleIcon className="w-6 h-6" />
          </button>
          <button className="md:hidden p-2 hover:text-primary transition">
            <Bars3Icon className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}
