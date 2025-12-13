import React from 'react';
import { BatteryCharging, Clock, ShieldCheck, Zap, VolumeX, Crown, Gem, ZapOff } from 'lucide-react';

export const Features: React.FC = () => {
  const features = [
    {
      icon: <Crown size={32} className="text-white" />,
      title: "ভিন্টেজ ডিজাইন",
      description: "একটি ক্লাসিক এবং আকর্ষণীয় লুক যা সবার থেকে আলাদা। হাতে নিলেই প্রিমিয়াম ফিল পাবেন।"
    },
    {
      icon: <VolumeX size={32} className="text-white" />,
      title: "লো নয়েজ টেকনোলজি",
      description: "বিরক্তিকর শব্দ ছাড়াই শান্ত ব্যবহারের অভিজ্ঞতা। আপনার গ্রুমিং হবে এখন একদম সাইলেন্ট।"
    },
    {
      icon: <BatteryCharging size={32} className="text-white" />,
      title: "শক্তিশালী ব্যাটারি",
      description: "দ্রুত চার্জিং সহ দীর্ঘস্থায়ী 18650 Li-ion ব্যাটারি। একবার চার্জে লম্বা সময় নিশ্চিন্তে ব্যবহার।"
    },
    {
      icon: <Clock size={32} className="text-white" />,
      title: "২ ঘন্টা ব্যবহার",
      description: "একবার ফুল চার্জে অনায়াসে ২ ঘন্টা পর্যন্ত চলে। বারবার চার্জ দেওয়ার ঝামেলা নেই।"
    },
    {
      icon: <ShieldCheck size={32} className="text-white" />,
      title: "সম্পূর্ণ মেটাল বডি",
      description: "হাতে প্রিমিয়াম ফিল দেয় এবং এটি খুব মজবুত ও টেকসই। প্লাস্টিকের ভয় নেই।"
    },
    {
      icon: <Gem size={32} className="text-white" />,
      title: "২ বছরের ওয়ারেন্টি",
      description: "যেকোনো সমস্যায় নিশ্চিন্তে থাকুন। আমরা দিচ্ছি ২ বছরের সার্ভিস ওয়ারেন্টি সুবিধা।"
    }
  ];

  return (
    <div className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 font-hind">
            এই ট্রিমারটির <span className="text-amber-600 border-b-4 border-amber-400">বিশেষত্ব</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            কেন হাজার হাজার মানুষ এই ট্রিমারটি ব্যবহার করছেন? জেনে নিন এর বিশেষ গুণগুলো।
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-5 p-6 rounded-2xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-amber-500/20 hover:-translate-y-2 transition-all duration-300 group cursor-default">
              <div className="shrink-0 w-16 h-16 bg-amber-500 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/40 group-hover:bg-amber-600 transition-colors duration-300">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-amber-600 transition-colors font-hind">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm font-hind">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};