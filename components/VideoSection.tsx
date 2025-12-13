import React from 'react';
import { ShoppingCart } from 'lucide-react';

export const VideoSection: React.FC = () => {
  const scrollToOrder = () => {
    const element = document.getElementById('order-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
         <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 font-hind">
            ভিডিও <span className="text-amber-600 border-b-4 border-amber-400">রিভিউ</span>
          </h2>
          <p className="text-slate-600 font-hind text-lg">
            অর্ডার করার আগে পণ্যটি সরাসরি ভিডিওতে দেখে নিন
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-black mb-8">
            {/* Using a generic Vintage T9 Trimmer review video ID */}
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/M7lc1UVf-VE?si=9w4w4w4w" 
              title="Vintage T9 Trimmer Review"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          
          <div className="flex flex-col items-center">
            <button 
              onClick={scrollToOrder}
              className="px-8 py-4 bg-amber-600 text-white text-xl font-bold rounded-full shadow-lg shadow-amber-600/30 hover:bg-amber-700 transition-all transform hover:scale-105 flex items-center gap-2 border-line-animation"
            >
              <ShoppingCart size={24} />
              এখনই অর্ডার করুন
            </button>
            <p className="text-slate-500 text-sm font-hind mt-4">
              ভিডিওটিতে ট্রিমারটির আনবক্সিং এবং ব্যবহারের নিয়ম দেখানো হয়েছে।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};