import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const AnimatedText: React.FC<{
  text: string;
  delay?: number;
  className?: string;
  highlightWords?: string[];
  highlightColor?: string;
}> = ({ text, delay = 0, className = "", highlightWords = [], highlightColor = "text-orange-500" }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const words = text.split(" ");

  return (
    <h1 className={`flex flex-wrap justify-center font-bold pb-2 ${className}`}>
      {words.map((w, i) => {
        const wordDelay = delay + i * 3; // Stagger effect
        const animationProgress = spring({
          fps,
          frame: frame - wordDelay,
          config: {
            damping: 12, // not too bouncy
            mass: 0.5,
          },
        });

        const translateY = interpolate(animationProgress, [0, 1], [50, 0]);
        const opacity = interpolate(animationProgress, [0, 1], [0, 1]);

        const cleanWord = w.replace(/[.,!?]/g, "");
        const isHighlight = highlightWords.includes(cleanWord) || highlightWords.includes(w);

        return (
          <span
            key={i}
            style={{
              opacity,
              transform: `translateY(${translateY}px)`,
              display: "inline-block",
              marginRight: "0.4em", // Spacing between words
              whiteSpace: "pre-wrap",
            }}
            className={isHighlight ? highlightColor : ""}
          >
            {w}
          </span>
        );
      })}
    </h1>
  );
};
