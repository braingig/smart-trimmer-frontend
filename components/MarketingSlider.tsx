import React, { useState, useEffect } from 'react';

export const MarketingSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      id: 1,
      image: "/images/vintage-t9.jpeg",
      title: "ব্যাপক শক্তিশালী",
      description: "চুল দাড়ি সাইজ করার জন্য বেস্ট!",
      buttonText: "অর্ডার করুন"
    },
    {
      id: 2,
      image: "/images/ms-2.jpeg",
      title: "ইতালিতে জনপ্রিয়তা তুঙ্গে",
      description: "ইতালি ইন্ডিয়া সহ বিশ্বের বিভিন্ন দেশে এইটা ব্যাপক জনপ্রিয়",
      buttonText: "অর্ডার করুন"
    },
    {
      id: 3,
      image: "/images/ms-3.jpeg",
      title: "অস্থির পারফরম্যান্স পাবেন!",
      description: "২ বছরের গ্যারান্টি দিচ্ছি আমরা। সমস্যা হলে নতুন পাঠাবো।",
      buttonText: "অর্ডার করুন"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const scrollToOrder = () => {
    const element = document.getElementById('order-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-slate-50 py-12 md:py-24 overflow-hidden font-hind border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          
          {/* Left Side: Image Slider */}
          {/* Fixed height ensures stable layout */}
          <div className="w-full md:w-1/2 relative h-[350px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl bg-white border border-slate-200">
            {slides.map((slide, index) => {
               // Logic for Left-to-Right transition
               let positionClass = '-translate-x-full opacity-0'; 
               if (index === currentIndex) {
                 positionClass = 'translate-x-0 opacity-100 z-10'; 
               } else if (index === (currentIndex - 1 + slides.length) % slides.length) {
                 positionClass = 'translate-x-full opacity-0 z-0'; 
               }

               return (
                  <div
                    key={slide.id}
                    className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out transform ${positionClass}`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
               );
            })}
          </div>

          {/* Right Side: Text Content */}
          {/* Matches height of image container on desktop for vertical centering */}
          <div className="w-full md:w-1/2 relative h-[300px] md:h-[500px] flex items-center">
            {slides.map((slide, index) => (
              <div 
                key={slide.id}
                className={`transition-all duration-500 absolute w-full left-0 ${index === currentIndex ? 'opacity-100 translate-y-0 z-10' : 'opacity-0 translate-y-4 z-0 pointer-events-none'}`}
              >
                <h2 className="text-3xl md:text-5xl font-bold text-slate-800 leading-tight mb-4 drop-shadow-sm">
                  {slide.title}
                </h2>
                
                <p className="text-lg md:text-xl text-slate-600 font-bold mb-8 leading-relaxed max-w-lg">
                  {slide.description}
                </p>
                
                <button 
                  onClick={scrollToOrder}
                  className="px-10 py-3.5 bg-amber-500 text-white rounded-full font-bold shadow-lg shadow-amber-500/30 hover:bg-amber-600 transition-all transform hover:-translate-y-1 hover:shadow-xl border-line-animation"
                >
                  {slide.buttonText}
                </button>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};