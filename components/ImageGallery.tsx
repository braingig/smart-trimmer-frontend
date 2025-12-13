import React from 'react';
import { User, Scissors, Smile, Feather, ShieldCheck, Sparkles } from 'lucide-react';

export const ImageGallery: React.FC = () => {
  const features = [
    {
      title: "দাড়ি শেভ ও ট্রিম করা",
      desc: "খুব সহজেই দাড়ি ছোট করা বা ক্লিন শেভ করতে পারবেন। কোন জ্বালাপোড়া ছাড়াই।",
      icon: <User size={28} />
    },
    {
      title: "চুলের স্টাইল করা",
      desc: "সেলুনে না গিয়েই ঘরে বসে চুলের ডিজাইন করতে পারবেন। এবং খেলোয়াড়দের মতো চুলের স্টাইল করতে পারবেন।",
      icon: <Scissors size={28} />
    },
    {
      title: "বাচ্চাদের চুল কাটা",
      desc: "কম শব্দ এবং সেফটি ব্লেড হওয়ায় ছোট বাচ্চাদের চুল কাটার জন্য এটি সম্পূর্ণ নিরাপদ।",
      icon: <Smile size={28} />
    },
    {
      title: "বডি গ্রুমিং",
      desc: "শরীরের অবাঞ্ছিত লোম এবং নরম অংশের চুল কাটা যাবে কোনো ব্যাথা বা কাটাছেড়া ছাড়াই।",
      icon: <Feather size={28} />
    },
    {
      title: "বয়স্কদের চুল-দাড়ি কাটা",
      desc: "বয়স্ক লোকদের চুল দাড়ি কাটার জন্য এটি অত্যন্ত নিরাপদ ও আরামদায়ক।",
      icon: <ShieldCheck size={28} />
    },
    {
      title: "মহিলাদের চুলের স্টাইল",
      desc: "মহিলাদের চুলের ভি-কাট, ইউ-কাট বা অন্য যেকোনো ডিজাইনের জন্য এটি ব্যবহার করা যাবে।",
      icon: <Sparkles size={28} />
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 font-hind">
            এই ট্রিমার দিয়ে <span className="text-amber-600 border-b-4 border-amber-400">যা যা করতে পারবেন</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 border-2 border-slate-200 hover:border-amber-500 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-14 h-14 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center shadow-md border border-amber-200 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2 font-hind group-hover:text-amber-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-hind">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};