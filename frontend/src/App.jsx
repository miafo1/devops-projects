import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RestaurantCard from './components/RestaurantCard';

function App() {
  const restaurants = [
    {
        id: 1,
        name: "Burger King",
        image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: "4.5",
        delivery_time: "20-30 min",
        tags: ["Burgers", "American"],
        price_range: "$"
    },
    {
        id: 2,
        name: "Pizza Hut",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: "4.2",
        delivery_time: "30-45 min",
        tags: ["Pizza", "Italian"],
        price_range: "$$"
    },
    {
        id: 3,
        name: "KFC",
        image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: "4.0",
        delivery_time: "15-25 min",
        tags: ["Chicken", "Fast Food"],
        price_range: "$"
    },
    {
        id: 4,
        name: "Subway",
        image: "https://images.unsplash.com/photo-1509722747741-1160a28f44d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: "4.4",
        delivery_time: "10-20 min",
        tags: ["Sandwiches", "Healthy"],
        price_range: "$"
    },
    {
        id: 5,
        name: "Taco Bell",
        image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: "4.1",
        delivery_time: "20-30 min",
        tags: ["Mexican", "Tacos"],
        price_range: "$"
    },
    {
        id: 6,
        name: "Starbucks",
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: "4.7",
        delivery_time: "10-15 min",
        tags: ["Coffee", "Breakfast"],
        price_range: "$$"
    },
    {
        id: 7,
        name: "Dunkin'",
        image: "https://images.unsplash.com/photo-1551024601-bec0273e84a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: "4.3",
        delivery_time: "15-20 min",
        tags: ["Donuts", "Coffee"],
        price_range: "$"
    },
    {
        id: 8,
        name: "Chick-fil-A",
        image: "https://images.unsplash.com/photo-1513639776629-7b611594e29b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: "4.9",
        delivery_time: "25-35 min",
        tags: ["Chicken", "American"],
        price_range: "$$"
    },
    {
        id: 9,
        name: "McDonald's",
        image: "https://images.unsplash.com/photo-1552895638-f7fe9dd56f46?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: "3.9",
        delivery_time: "15-25 min",
        tags: ["Burgers", "Fast Food"],
        price_range: "$"
    },
    {
        id: 10,
        name: "Chipotle",
        image: "https://images.unsplash.com/photo-1568106690101-fd6822e876f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: "4.6",
        delivery_time: "30-40 min",
        tags: ["Mexican", "Healthy"],
        price_range: "$$"
    },
    {
        id: 11,
        name: "Wendy's",
        image: "https://images.unsplash.com/photo-1561758033-d8f80400eb31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: "4.2",
        delivery_time: "20-30 min",
        tags: ["Burgers", "American"],
        price_range: "$"
    },
    {
        id: 12,
        name: "Panera Bread",
        image: "https://images.unsplash.com/photo-1509722747741-1160a28f44d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: "4.5",
        delivery_time: "30-50 min",
        tags: ["Sandwiches", "Soup"],
        price_range: "$$"
    },
    {
        id: 13,
        name: "Five Guys",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: "4.7",
        delivery_time: "25-35 min",
        tags: ["Burgers", "Fries"],
        price_range: "$$"
    },
    {
        id: 14,
        name: "Panda Express",
        image: "https://images.unsplash.com/photo-1525755617299-72f54f8c27ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: "4.1",
        delivery_time: "20-30 min",
        tags: ["Chinese", "Fast Food"],
        price_range: "$"
    },
    {
        id: 15,
        name: "Shake Shack",
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: "4.8",
        delivery_time: "30-45 min",
        tags: ["Burgers", "Shakes"],
        price_range: "$$"
    }
  ]; // Mock data

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main>
        <Hero />
        
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-secondary mb-8">Popular Restaurants</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {restaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} result={restaurant} />
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
