import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RestaurantCard from './components/RestaurantCard';

function App() {
  const restaurants = [1, 2, 3, 4, 5, 6]; // Mock data

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main>
        <Hero />
        
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-secondary mb-8">Popular Restaurants</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {restaurants.map((id) => (
              <RestaurantCard key={id} />
            ))}
          </div>
        </div>
      </main>
      
      <footer className="bg-secondary text-white py-8 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 FoodDelivery. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
