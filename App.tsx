import React from 'react';
import { TopBanner } from './components/TopBanner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { ImageGallery } from './components/ImageGallery';
import { VideoSection } from './components/VideoSection';
import { ProductShowcase } from './components/ProductShowcase';
import { ComparisonTable } from './components/ComparisonTable';
import { OrderForm } from './components/OrderForm';
import { ChatAssistant } from './components/ChatAssistant';
import { FAQ } from './components/FAQ';
import { MarketingSlider } from './components/MarketingSlider';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <div className="sticky top-0 z-50 w-full">
        <TopBanner />
        <Navbar />
      </div>
      <Hero />
      <Features />
      <VideoSection />
      <ImageGallery />
      <MarketingSlider />
      <ComparisonTable />
      <ProductShowcase />
      <FAQ />
      <OrderForm />
      
      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="mb-2 font-bold text-white text-lg font-hind">Daily Trim</p>
          <p className="text-sm font-hind">সবচেয়ে কম দামে সেরা পন্যের নিশ্চয়তা</p>
          <div className="mt-4 pt-4 border-t border-slate-800 text-xs font-hind">
            &copy; {new Date().getFullYear()} Daily Trim. All rights reserved.
          </div>
        </div>
      </footer>

      <ChatAssistant />
    </div>
  );
};

export default App;