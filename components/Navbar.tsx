import React from 'react';
import { Phone, ShoppingCart } from 'lucide-react';

export const Navbar: React.FC = () => {
  const scrollToOrder = () => {
    const element = document.getElementById('order-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-white shadow-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center text-white shadow-sm hover:rotate-12 transition-transform">
             {/* Custom Trimmer Icon SVG */}
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="7" y="8" width="10" height="13" rx="2" />
              <path d="M7 8V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3" />
              <line x1="10" y1="4" x2="10" y2="8" />
              <line x1="14" y1="4" x2="14" y2="8" />
              <circle cx="12" cy="17" r="1.5" fill="currentColor" stroke="none" opacity="0.5"/>
            </svg>
          </div>
          <span className="text-2xl font-bold text-slate-800 tracking-tight font-hind">Daily Trim</span>
        </div>
        
        <div className="flex gap-3">
          <a href="tel:+8801700000000" className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500 text-amber-600 font-medium hover:bg-amber-50 transition-colors">
            <Phone size={18} />
            <span>কল করুন</span>
          </a>
          <button 
            onClick={scrollToOrder}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500 text-white font-bold shadow-lg shadow-amber-500/30 hover:bg-amber-600 transition-all transform hover:scale-105 border-line-animation"
          >
            <ShoppingCart size={18} />
            <span>অর্ডার করুন</span>
          </button>
        </div>
      </div>
    </nav>
  );
};