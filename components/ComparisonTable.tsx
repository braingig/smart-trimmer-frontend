import React from 'react';
import { CheckCircle2, XCircle, ShoppingCart } from 'lucide-react';

export const ComparisonTable: React.FC = () => {
  const scrollToOrder = () => {
    const element = document.getElementById('order-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const comparisons = [
    {
      feature: "বিল্ড কোয়ালিটি",
      us: "১০০% মেটাল ও মজবুত",
      others: "হালকা প্লাস্টিক বডি"
    },
    {
      feature: "ব্যাটারি লাইফ",
      us: "একটানা ১২০ মিনিট",
      others: "মাত্র ২০-৩০ মিনিট"
    },
    {
      feature: "চার্জিং সিস্টেম",
      us: "Type-C চার্জিং",
      others: "আলাদা ব্যাটারি কিনতে হয়"
    },
    {
      feature: "ওয়ারেন্টি",
      us: "২ বছরের সার্ভিস ওয়ারেন্টি",
      others: "কোনো ওয়ারেন্টি নেই"
    },
    {
      feature: "ডেলিভারি সুবিধা",
      us: "পণ্য দেখে পেমেন্ট করা যাবে",
      others: "টাকা দিয়ে প্যাকেট খুলতে হয়"
    },
    {
      feature: "আফটার সেলস সার্ভিস",
      us: "২৪/৭ কাস্টমার সাপোর্ট",
      others: "বিক্রির পর খোঁজ নেই"
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-10 font-hind">
          অন্যদের সাথে <span className="text-amber-600 border-b-4 border-amber-400">আমাদের পার্থক্য</span>
        </h2>
        
        <div className="overflow-hidden rounded-2xl shadow-xl border border-slate-200 bg-white mb-8">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-900 text-white">
                <th className="p-4 md:p-6 text-sm md:text-lg font-bold w-1/3">ফিচার সমূহ</th>
                <th className="p-4 md:p-6 text-sm md:text-lg font-bold bg-amber-600 w-1/3 text-center relative overflow-hidden">
                  <div className="relative z-10">আমাদের ভিন্টেজ T9</div>
                  <div className="absolute top-0 right-0 w-8 h-8 bg-white/20 rotate-45 transform translate-x-4 -translate-y-4"></div>
                </th>
                <th className="p-4 md:p-6 text-sm md:text-lg font-bold bg-slate-800 text-slate-400 w-1/3 text-center">বাজারের সাধারণ কপি</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((item, index) => (
                <tr key={index} className={`border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors`}>
                  <td className="p-3 md:p-6 font-bold text-slate-700 border-r border-slate-100 text-sm md:text-base">
                    {item.feature}
                  </td>
                  <td className="p-3 md:p-6 bg-amber-50/50 border-r border-amber-100 text-center">
                    <div className="flex flex-col items-center gap-1 md:gap-2">
                      <CheckCircle2 className="text-green-600 shrink-0 shadow-sm rounded-full bg-white" size={24} />
                      <span className="font-bold text-slate-800 text-sm md:text-base leading-tight">{item.us}</span>
                    </div>
                  </td>
                  <td className="p-3 md:p-6 text-center">
                    <div className="flex flex-col items-center gap-1 md:gap-2 opacity-70">
                      <XCircle className="text-red-500 shrink-0" size={24} />
                      <span className="font-medium text-slate-500 text-sm md:text-base leading-tight">{item.others}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 text-center bg-slate-100 p-4 rounded-xl border border-slate-200 mb-10">
            <p className="text-slate-600 font-medium">
              ⚠️ <span className="text-red-600 font-bold">সতর্কতা:</span> বাজারে কম দামি হুবহু দেখতে নকল ট্রিমার পাওয়া যাচ্ছে। নকল পণ্য কিনে প্রতারিত হবেন না।
            </p>
        </div>

        {/* Moved CTA Text/Button to here */}
        <div className="flex justify-center">
           <button 
             onClick={scrollToOrder}
             className="inline-flex items-center gap-2 bg-amber-500 text-white px-8 py-3 rounded-full text-lg font-bold shadow-xl shadow-amber-500/20 hover:bg-amber-600 transition-colors border-line-animation"
           >
              <CheckCircle2 size={20} /> অরিজিনাল প্রোডাক্ট অর্ডার করুন
           </button>
        </div>

      </div>
    </div>
  );
};