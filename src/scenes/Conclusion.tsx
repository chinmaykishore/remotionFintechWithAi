import React from "react";
import { Sequence } from "remotion";
import { AnimatedText } from "../components/AnimatedText";

export const Conclusion: React.FC = () => {
  return (
    <div className="flex-1 w-full flex flex-col items-center justify-center p-12 text-center text-white h-full relative">
      <div className="bg-white/10 rounded-full py-4 px-8 mb-20 border border-white/20">
        <AnimatedText 
          text="👉 Income requirement: ₹7.2L+" 
          className="text-4xl font-semibold"
          highlightWords={["₹7.2L+"]}
        />
      </div>

      <Sequence from={60}>
        <div className="bg-orange-500/10 border-2 border-orange-500/80 rounded-3xl p-10 backdrop-blur-md shadow-2xl">
          <AnimatedText 
            text="If you actually shop on Myntra / Nykaa / Flipkart..." 
            className="text-4xl leading-snug font-medium mb-12 text-slate-200"
            delay={10}
          />
          <AnimatedText 
            text="This card can easily outperform many ₹5K–₹10K annual fee cards." 
            className="text-6xl leading-snug font-bold text-orange-400"
            delay={30}
            highlightWords={["₹5K–₹10K", "outperform"]}
          />
        </div>
      </Sequence>
      
      <Sequence from={150}>
         <div className="absolute bottom-20">
           <span className="text-2xl text-slate-500 font-bold tracking-widest uppercase">Subscribe for more</span>
         </div>
      </Sequence>
    </div>
  );
};
