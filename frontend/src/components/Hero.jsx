import React from 'react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-orange-50 to-orange-100 min-h-[70vh] flex items-center overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-orange-300/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in-up">
          <div className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-orange-600 font-semibold text-sm shadow-sm border border-orange-100">
             🚀 Fastest Delivery in Town
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-secondary leading-tight tracking-tight">
            Craving? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-600">
                We've Got You.
            </span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-lg leading-relaxed">
            Order from the best local restaurants with easy, on-demand delivery. Fresh, fast, and right to your door.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-gradient-to-r from-primary to-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-orange-500/30 transform hover:-translate-y-1 transition duration-300">
              Start Ordering
            </button>
            <button className="bg-white text-secondary px-8 py-4 rounded-full font-bold text-lg border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition duration-300">
              Download App
            </button>
          </div>
          
           <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-2">
                    {[1,2,3,4].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
                    ))}
                </div>
                <div className="text-sm font-semibold text-gray-500">
                    <span className="text-primary">4.9/5</span> from 5k+ reviews
                </div>
           </div>

        </div>
        <div className="hidden md:block relative">
            <div className="absolute inset-0 bg-gradient-to-t from-orange-100/50 to-transparent z-10 rounded-3xl"></div>
            {/* Simple CSS illustration instead of placeholder text */}
            <div className="w-full aspect-square bg-white rounded-3xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition duration-500 flex items-center justify-center relative overflow-hidden">
                 <div className="absolute inset-0 bg-cover bg-center opacity-90" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80")'}}></div>
                 <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg">
                    <div className="flex justify-between items-center">
                        <div>
                            <div className="font-bold text-gray-800">Tasty Burger</div>
                            <div className="text-xs text-gray-500">Top Rated</div>
                        </div>
                        <div className="font-bold text-primary">$12.99</div>
                    </div>
                 </div>
            </div>
        </div>
      </div>
    </div>
  );
}
