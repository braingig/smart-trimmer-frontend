import React from 'react';
import { CheckCircle2, Star } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToOrder = () => {
    const element = document.getElementById('order-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gradient-to-b from-slate-900 to-slate-800 text-white pt-8 pb-12 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-8 lg:gap-16">
        
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left z-10">
          <div className="inline-flex items-center gap-1 bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full text-sm mb-4 border border-amber-500/30">
            <Star size={14} fill="currentColor" />
            <span>১০০০+ পিস বিক্রি হয়েছে এই সপ্তাহে</span>
          </div>
          
          <h1 className="font-bold leading-tight mb-6 font-hind flex flex-col gap-3">
            <span className="text-3xl md:text-5xl lg:text-6xl text-white">Vintage T9</span>
            <span className="text-3xl md:text-5xl lg:text-6xl text-amber-500">প্রফেশনাল ট্রিমার</span>
          </h1>
          
          <p className="text-slate-300 text-lg mb-8 leading-relaxed max-w-2xl font-hind">
            সেলুনের কাজ এখন হবে ঘরেই! প্রিমিয়াম মেটাল বডি, শার্প ব্লেড এবং লং লাস্টিং ব্যাটারি। চুল, দাড়ি ও অবাঞ্ছিত লোম কাটার জন্য সেরা সমাধান।
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button 
              onClick={scrollToOrder}
              className="px-8 py-4 bg-amber-500 text-white text-xl font-bold rounded-xl shadow-xl shadow-amber-500/20 hover:bg-amber-600 transition-all transform hover:-translate-y-1 font-hind border-line-animation"
            >
              অর্ডার করতে চাই - ৬৩০৳
            </button>
          </div>
          <p className="mt-3 text-sm text-slate-400 font-hind">
            ✅ আগে পণ্য হাতে পাবেন, পরে টাকা দিবেন
          </p>
        </div>

        {/* Product Image */}
        <div className="flex-1 relative w-full max-w-lg mt-8 md:mt-0">
          <div className="absolute inset-0 bg-amber-500/20 blur-3xl rounded-full transform scale-75"></div>
          
          <div className="relative z-10">
            <img 
              src="/images/1.png" 
              alt="Vintage T9 Trimmer" 
              className="w-full h-auto rounded-2xl shadow-2xl border-4 border-slate-700/50"
            />
            
            {/* Red Circle Discount Tag - Top Right Corner - White Border */}
            <div className="absolute -top-6 -right-4 w-24 h-24 bg-red-600 rounded-full flex flex-col items-center justify-center text-white shadow-lg border-4 border-white z-20 hover:scale-105 transition-transform transform rotate-12">
              <span className="text-sm font-bold font-hind leading-none mb-1">ছাড়</span>
              <span className="text-3xl font-bold font-hind leading-none">৩৫%</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
