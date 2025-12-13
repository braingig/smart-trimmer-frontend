import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "কিভাবে অর্ডার করবো?",
      answer: "অর্ডার করতে উপরের বা নিচের 'অর্ডার করুন' বাটনে ক্লিক করে আপনার নাম, মোবাইল নাম্বার এবং ঠিকানা দিয়ে অর্ডার কনফার্ম করুন। অথবা আমাদের হটলাইনে কল করেও অর্ডার করতে পারেন।"
    },
    {
      question: "ডেলিভারি চার্জ কত?",
      answer: "ঢাকার ভেতরে ডেলিভারি চার্জ ৪০ টাকা এবং ঢাকার বাইরে ডেলিভারি চার্জ ৬০ টাকা।"
    },
    {
      question: "কতো দিনের মধ্যে ডেলিভারি পাবো?",
      answer: "ঢাকার ভেতরে ১-২ দিন এবং ঢাকার বাইরে ২-৪ কর্মদিবসের মধ্যে ডেলিভারি পাবেন।"
    },
    {
      question: "আগে কি টাকা দিতে হবে?",
      answer: "না, আপনাকে আগে কোনো টাকা দিতে হবে না। ডেলিভারি ম্যানের কাছ থেকে পণ্য বুঝে পেয়ে তারপর টাকা পরিশোধ করবেন (Cash on Delivery)।"
    },
    {
      question: "প্রোডাক্টটি কি অরিজিনাল?",
      answer: "জি, আমরা ১০০% অরিজিনাল Vintage T9 ট্রিমার বিক্রি করি। নকল প্রমাণে দ্বিগুণ টাকা ফেরত।"
    },
    {
      question: "ওয়ারেন্টি কিভাবে পাবো?",
      answer: "পণ্যের সাথে একটি ওয়ারেন্টি কার্ড দেওয়া হবে। যেকোনো সমস্যায় কার্ডে দেওয়া নাম্বারে কল করলে আমরা সার্ভিস প্রদান করবো।"
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 font-hind flex items-center justify-center gap-3">
             সচরাচর জিজ্ঞাসা (FAQ)
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-slate-200 rounded-lg overflow-hidden bg-slate-50 hover:border-slate-300 transition-colors"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 md:p-5 text-left bg-white focus:outline-none"
              >
                <span className="text-lg font-bold text-slate-800 font-hind">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-slate-600" />
                ) : (
                  <ChevronDown className="text-slate-600" />
                )}
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-4 md:p-5 pt-0 text-slate-600 font-hind leading-relaxed border-t border-slate-100 bg-white">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};