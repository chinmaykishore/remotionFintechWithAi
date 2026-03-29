import React from "react";
import { Sequence } from "remotion";
import { AnimatedText } from "../components/AnimatedText";
import { BrandBadge } from "../components/BrandBadge";

export const OtherPerks: React.FC = () => {
  return (
    <div className="flex-1 w-full flex flex-col items-center justify-center p-12 text-center text-white">
      <AnimatedText 
        text="✨ Other perks:" 
        className="text-6xl text-orange-400 font-bold mb-16"
      />

      <div className="w-full grid grid-cols-1 gap-6 px-4 mb-20">
        <BrandBadge brand="Amazon Voucher" value="₹1000" delay={20} />
        <BrandBadge brand="Amazon Prime" value="1 Year" delay={30} />
        <BrandBadge brand="FITPASS Pro" value="1 Year" delay={40} />
        <BrandBadge brand="Swiggy One" value="3 Mo." delay={50} />
      </div>

      <Sequence from={100}>
        <div className="w-full space-y-8 px-4">
          <div className="bg-slate-800 rounded-2xl p-6 text-left border-l-8 border-orange-400">
            <AnimatedText text="✈️ Unlimited domestic lounge access" className="text-4xl text-white" />
          </div>
          <div className="bg-slate-800 rounded-2xl p-6 text-left border-l-8 border-blue-400">
            <AnimatedText text="📱 RuPay credit card → UPI payments supported" className="text-4xl text-white" delay={15}/>
          </div>
        </div>
      </Sequence>
    </div>
  );
};
