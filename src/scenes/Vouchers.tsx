import React from "react";
import { Sequence } from "remotion";
import { AnimatedText } from "../components/AnimatedText";
import { BrandBadge } from "../components/BrandBadge";

export const Vouchers: React.FC = () => {
  return (
    <div className="flex-1 w-full flex flex-col items-center justify-start p-12 pt-32 text-center text-white">
      <AnimatedText 
        text="But the quarterly vouchers alone are insane 👇" 
        className="text-5xl text-orange-400 font-bold mb-16"
        highlightWords={["insane"]}
      />

      <div className="w-full flex flex-col space-y-6 px-4">
        <BrandBadge brand="Flipkart" value="₹500" delay={30} />
        <BrandBadge brand="Myntra" value="₹500" delay={40} />
        <BrandBadge brand="Nykaa" value="₹500" delay={50} />
        <BrandBadge brand="Lakmé Salon" value="₹1500" delay={60} />
        <BrandBadge brand="BigBasket" value="₹250" delay={70} />
        <BrandBadge brand="BookMyShow" value="₹250" delay={80} />
      </div>

      <Sequence from={140}>
        <div className="mt-16 mx-4 bg-orange-500/20 border border-orange-500/50 rounded-3xl p-8 backdrop-blur-md">
           <AnimatedText 
             text="That’s ₹3,500 every quarter." 
             className="text-4xl text-white font-medium mb-4"
           />
           <AnimatedText 
             text="₹3,500 × 4 quarters = ₹14,000 per year 🎁" 
             className="text-5xl text-orange-400 font-bold"
             delay={20}
           />
        </div>
      </Sequence>
    </div>
  );
};
