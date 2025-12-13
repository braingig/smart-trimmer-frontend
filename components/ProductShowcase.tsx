import React from 'react';

export const ProductShowcase: React.FC = () => {
  return (
    <div className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12 font-hind">
          প্যাকেজে <span className="text-amber-600 border-b-4 border-amber-400">যা যা থাকছে</span>
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all group">
                <div className="overflow-hidden rounded-xl mb-3">
                   <img src="/images/vintage-t9.jpeg" className="w-full h-auto aspect-square object-cover group-hover:scale-110 transition-transform duration-500" alt="Trimmer" />
                </div>
                <p className="text-center font-bold text-slate-700 font-hind group-hover:text-amber-600 transition-colors">ট্রিমার</p>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all group">
                <div className="overflow-hidden rounded-xl mb-3">
                   <img src="/images/package-2.jpeg" className="w-full h-auto aspect-square object-cover group-hover:scale-110 transition-transform duration-500" alt="Cable" />
                </div>
                <p className="text-center font-bold text-slate-700 font-hind group-hover:text-amber-600 transition-colors">Type-C চার্জিং ক্যাবল</p>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all group">
                <div className="overflow-hidden rounded-xl mb-3">
                   <img src="/images/package-3.jpeg" className="w-full h-auto aspect-square object-cover group-hover:scale-110 transition-transform duration-500" alt="Clips" />
                </div>
                <p className="text-center font-bold text-slate-700 font-hind group-hover:text-amber-600 transition-colors">৪টি সাইজ ক্লিপ</p>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all group">
                <div className="overflow-hidden rounded-xl mb-3">
                   <img src="/images/package-4.jpeg" className="w-full h-auto aspect-square object-cover group-hover:scale-110 transition-transform duration-500" alt="Cleaning Kit" />
                </div>
                <p className="text-center font-bold text-slate-700 font-hind group-hover:text-amber-600 transition-colors">পরিষ্কার করার ব্রাশ ও তেল</p>
            </div>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl shadow-sm">
          <p className="text-amber-900 font-medium font-hind text-lg flex items-center gap-2">
            ⚠️ <span className="font-bold">বিঃদ্রঃ</span> বাজারের কম দামি কপি ট্রিমার কিনে প্রতারিত হবেন না। আমরা দিচ্ছি ১০০% অরিজিনাল পন্যের গ্যারান্টি।
          </p>
        </div>
      </div>
    </div>
  );
};