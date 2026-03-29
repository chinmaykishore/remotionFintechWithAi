import React from "react";
import { spring, useCurrentFrame, useVideoConfig, interpolate } from "remotion";

export const BrandBadge: React.FC<{
  brand: string;
  value: string;
  delay?: number;
}> = ({ brand, value, delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = spring({
    fps,
    frame: frame - delay,
    config: { damping: 14 },
  });

  const scale = interpolate(progress, [0, 1], [0.8, 1]);
  const opacity = interpolate(progress, [0, 1], [0, 1]);

  return (
    <div
      style={{
        transform: `scale(${scale})`,
        opacity,
      }}
      className="bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl p-6 flex items-center justify-between w-full shadow-lg"
    >
      <span className="text-4xl font-semibold text-white">{brand}</span>
      <span className="text-4xl font-bold text-orange-400">{value}</span>
    </div>
  );
};
