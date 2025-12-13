import React from 'react';

export const TopBanner: React.FC = () => {
  return (
    <div className="bg-red-600 text-white py-2 text-sm md:text-base font-bold overflow-hidden border-b border-red-700 shadow-sm relative z-50">
      <div className="marquee-container flex">
        <div className="animate-marquee flex gap-8 items-center min-w-full px-4">
          <span className="flex items-center gap-2">🔥 ধামাকা অফার! ৯৭০ টাকার ট্রিমার এখন মাত্র ৬৩০ টাকায়!</span>
          <span className="text-red-200">|</span>
          <span className="flex items-center gap-2">🚚 সারা বাংলাদেশে ক্যাশ অন ডেলিভারি</span>
          <span className="text-red-200">|</span>
          <span className="flex items-center gap-2">✅ পণ্য হাতে পেয়ে চেক করে পেমেন্ট করার সুবিধা</span>
          <span className="text-red-200">|</span>
          <span className="flex items-center gap-2">⚡ স্টক সীমিত, দ্রুত অর্ডার করুন!</span>
          <span className="text-red-200">|</span>
          
          {/* Duplicate content for seamless loop */}
          <span className="flex items-center gap-2">🔥 ধামাকা অফার! ৯৭০ টাকার ট্রিমার এখন মাত্র ৬৩০ টাকায়!</span>
          <span className="text-red-200">|</span>
          <span className="flex items-center gap-2">🚚 সারা বাংলাদেশে ক্যাশ অন ডেলিভারি</span>
          <span className="text-red-200">|</span>
          <span className="flex items-center gap-2">✅ পণ্য হাতে পেয়ে চেক করে পেমেন্ট করার সুবিধা</span>
          <span className="text-red-200">|</span>
          <span className="flex items-center gap-2">⚡ স্টক সীমিত, দ্রুত অর্ডার করুন!</span>
        </div>
      </div>
    </div>
  );
};