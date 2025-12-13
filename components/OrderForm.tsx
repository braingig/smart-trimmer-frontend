import React, { useState } from 'react';
import { DeliveryZone, OrderDetails } from '../types';
import { CheckCircle, Truck, RotateCcw, ShieldCheck, Lock, HandCoins, MapPin, Phone, User, Loader2, Home } from 'lucide-react';

export const OrderForm: React.FC = () => {
  const [orderDetails, setOrderDetails] = useState<OrderDetails>({
    fullName: '',
    phoneNumber: '',
    address: '',
    quantity: 1,
  });
  const [deliveryZone, setDeliveryZone] = useState<DeliveryZone>(DeliveryZone.INSIDE_DHAKA);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Pricing Logic
  const productPrice = 630;
  const deliveryCharge = deliveryZone === DeliveryZone.INSIDE_DHAKA ? 40 : 60;
  const subtotal = productPrice * orderDetails.quantity;
  const total = subtotal + deliveryCharge;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulating API call
    setTimeout(() => {
        setIsLoading(false);
        setIsSubmitted(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
        console.log("Order submitted:", { ...orderDetails, deliveryZone, total });
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setOrderDetails(prev => ({ ...prev, [name]: value }));
  };

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 z-[100] bg-slate-50 overflow-y-auto flex items-center justify-center p-4 animate-in fade-in duration-300 font-hind">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center border-t-8 border-green-500 relative">
          
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="text-green-600" size={48} />
          </div>
          
          <h2 className="text-3xl font-bold text-slate-800 mb-2">অর্ডার কনফার্ম হয়েছে!</h2>
          <p className="text-slate-600 mb-8 text-lg">
            ধন্যবাদ <strong>{orderDetails.fullName}</strong>! আমাদের প্রতিনিধি শীঘ্রই আপনার সাথে যোগাযোগ করে অর্ডারটি নিশ্চিত করবেন।
          </p>

          {/* Order Summary */}
          <div className="bg-slate-50 rounded-xl p-6 mb-8 text-left space-y-3 border border-slate-100">
             <h3 className="font-bold text-slate-700 border-b border-slate-200 pb-2 mb-2">অর্ডার সামারি</h3>
             <div className="flex justify-between text-sm">
                <span className="text-slate-500">পণ্য:</span>
                <span className="font-medium">Vintage T9 Trimmer x {orderDetails.quantity}</span>
             </div>
             <div className="flex justify-between text-sm">
                <span className="text-slate-500">ডেলিভারি চার্জ:</span>
                <span className="font-medium">{deliveryCharge} টাকা ({deliveryZone === DeliveryZone.INSIDE_DHAKA ? 'ঢাকার ভেতরে' : 'ঢাকার বাইরে'})</span>
             </div>
             <div className="flex justify-between text-lg font-bold text-slate-800 pt-2 border-t border-slate-200 mt-2">
                <span>সর্বমোট বিল:</span>
                <span className="text-green-600">{total} টাকা</span>
             </div>
          </div>

          <button
            onClick={() => {
              setIsSubmitted(false);
              setOrderDetails({ fullName: '', phoneNumber: '', address: '', quantity: 1 });
              // Refreshing the page to reset everything cleanly
              window.location.reload();
            }}
            className="w-full px-8 py-4 bg-slate-800 text-white rounded-xl font-bold hover:bg-slate-900 transition-colors shadow-lg border-line-animation flex items-center justify-center gap-2"
          >
            <Home size={20} />
            হোম পেজে ফিরে যান
          </button>
        </div>
      </div>
    );
  }

  return (
    <div id="order-section" className="py-16 bg-[#FFFBEB] font-hind">
      
      {/* 1. Main Form Section (Narrow Width) */}
      <div className="max-w-2xl mx-auto px-4 mb-16 relative z-10">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-orange-100">
          
          {/* Header Section - Dark Orange/Brown */}
          <div className="bg-[#C2410C] text-white p-8 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <h2 className="text-xl md:text-2xl font-bold mb-3 relative z-10">অর্ডার কনফার্ম করতে নিচের ফর্মটি পূরণ করুন</h2>
            <div className="flex justify-center items-center gap-4 mb-4 relative z-10">
               <span className="text-orange-200 text-xl line-through decoration-2">৯৭০ টাকা</span>
               <span className="text-3xl md:text-4xl font-bold text-white">{productPrice} টাকা</span>
            </div>
            <div className="inline-block bg-[#EA580C] px-6 py-2 rounded-full text-sm md:text-base font-bold shadow-lg border border-orange-400 relative z-10 animate-pulse">
                🎉 আজকের জন্য ৩৫% ছাড়!
            </div>
          </div>

          {/* Form Body */}
          <div className="p-6 md:p-8 bg-white">
            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Name */}
              <div>
                <label className="block text-lg font-bold text-slate-700 mb-2 flex items-center gap-2">
                  <User size={20} className="text-orange-600" /> আপনার নাম <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  type="text"
                  name="fullName"
                  placeholder="এখানে আপনার নাম লিখুন"
                  value={orderDetails.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all bg-slate-50"
                />
              </div>

              {/* Mobile */}
              <div>
                <label className="block text-lg font-bold text-slate-700 mb-2 flex items-center gap-2">
                   <Phone size={20} className="text-orange-600" /> মোবাইল নাম্বার <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  type="tel"
                  name="phoneNumber"
                  placeholder="017XXXXXXXX"
                  value={orderDetails.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all bg-slate-50"
                />
              </div>

              {/* Address */}
              <div>
                <label className="block text-lg font-bold text-slate-700 mb-2 flex items-center gap-2">
                   <MapPin size={20} className="text-orange-600" /> আপনার ঠিকানা <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  name="address"
                  value={orderDetails.address}
                  onChange={handleInputChange}
                  placeholder="বাড়ির ঠিকানা, থানা, জেলা সঠিকভাবে লিখুন যেনো ডেলিভারিম্যান সহজে খুজে পায়"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all h-24 resize-none bg-slate-50"
                ></textarea>
              </div>

              {/* Delivery Options */}
              <div className="pt-2">
                <label className="block text-lg font-bold text-slate-700 mb-3 flex items-center gap-2">
                   <Truck size={20} className="text-orange-600" /> ডেলিভারি অপশন <span className="text-red-500">*</span>
                </label>
                <div className="space-y-3">
                  <div 
                    onClick={() => setDeliveryZone(DeliveryZone.INSIDE_DHAKA)}
                    className={`cursor-pointer border-2 rounded-xl p-4 flex items-center justify-between transition-all ${deliveryZone === DeliveryZone.INSIDE_DHAKA ? 'border-green-500 bg-green-50 ring-1 ring-green-500' : 'border-slate-100 hover:border-slate-300 bg-white'}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${deliveryZone === DeliveryZone.INSIDE_DHAKA ? 'border-green-600' : 'border-slate-400'}`}>
                        {deliveryZone === DeliveryZone.INSIDE_DHAKA && <div className="w-3 h-3 bg-green-600 rounded-full"></div>}
                      </div>
                      <span className="font-bold text-slate-700">ঢাকার ভেতরে হোম ডেলিভারি</span>
                    </div>
                    <span className="font-bold text-slate-800">৪০ টাকা</span>
                  </div>

                  <div 
                    onClick={() => setDeliveryZone(DeliveryZone.OUTSIDE_DHAKA)}
                    className={`cursor-pointer border-2 rounded-xl p-4 flex items-center justify-between transition-all ${deliveryZone === DeliveryZone.OUTSIDE_DHAKA ? 'border-green-500 bg-green-50 ring-1 ring-green-500' : 'border-slate-100 hover:border-slate-300 bg-white'}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${deliveryZone === DeliveryZone.OUTSIDE_DHAKA ? 'border-green-600' : 'border-slate-400'}`}>
                         {deliveryZone === DeliveryZone.OUTSIDE_DHAKA && <div className="w-3 h-3 bg-green-600 rounded-full"></div>}
                      </div>
                      <span className="font-bold text-slate-700">ঢাকার বাইরে হোম ডেলিভারি</span>
                    </div>
                    <span className="font-bold text-slate-800">৬০ টাকা</span>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 bg-[#22C55E] hover:bg-[#16A34A] text-white text-xl font-bold rounded-xl shadow-lg shadow-green-500/30 transition-all transform hover:scale-[1.02] active:scale-95 mt-4 flex items-center justify-center gap-2 border-line-animation disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="animate-spin" size={24} />
                    <span>অর্ডার প্রসেসিং হচ্ছে...</span>
                  </>
                ) : (
                  <>
                    <span>অর্ডার কনফার্ম করুন {total} BDT</span>
                    <span className="text-2xl">→</span>
                  </>
                )}
              </button>
              
              <div className="text-center">
                 <p className="text-xs text-slate-400 flex items-center justify-center gap-1">
                    <Lock size={12} /> আপনার তথ্য ১০০% নিরাপদ। পেমেন্ট ক্যাশ অন ডেলিভারি।
                 </p>
              </div>

            </form>
          </div>
        </div>
      </div>

      {/* 2. Trust Badges Section (Wide Width - Aligned with other sections) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 text-green-600">
                    <HandCoins size={28} />
                </div>
                <h3 className="font-bold text-slate-800 mb-1">ক্যাশ অন ডেলিভারি</h3>
                <p className="text-xs text-slate-500">পণ্য হাতে পেয়ে টাকা পরিশোধ করুন</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 text-blue-600">
                    <Truck size={28} />
                </div>
                <h3 className="font-bold text-slate-800 mb-1">দ্রুত ডেলিভারি</h3>
                <p className="text-xs text-slate-500">সারা বাংলাদেশে ২-৪ দিনে ডেলিভারি</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3 text-red-600">
                    <RotateCcw size={28} />
                </div>
                <h3 className="font-bold text-slate-800 mb-1">রিটার্ন পলিসি</h3>
                <p className="text-xs text-slate-500">পণ্যে সমস্যা থাকলে ৭ দিনের মধ্যে রিটার্ন</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3 text-orange-600">
                    <ShieldCheck size={28} />
                </div>
                <h3 className="font-bold text-slate-800 mb-1">২ বছর গ্যারান্টি</h3>
                <p className="text-xs text-slate-500">১০০% অরিজিনাল প্রোডাক্ট গ্যারান্টি</p>
            </div>
        </div>
      </div>

    </div>
  );
};