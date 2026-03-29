import { AbsoluteFill, Audio, Sequence, staticFile } from "remotion";
import { Intro } from "./scenes/Intro";
import { Vouchers } from "./scenes/Vouchers";
import { OtherPerks } from "./scenes/OtherPerks";
import { Conclusion } from "./scenes/Conclusion";

export const TiaraCardReel: React.FC = () => {
  return (
    <AbsoluteFill className="bg-slate-900 flex flex-col items-center justify-center font-sans tracking-wide">
      <Audio src={staticFile("audio.mp3")} volume={0.4} />

      <Sequence durationInFrames={180}>
        <Intro />
      </Sequence>

      <Sequence from={180} durationInFrames={240}>
        <Vouchers />
      </Sequence>

      <Sequence from={420} durationInFrames={240}>
        <OtherPerks />
      </Sequence>

      <Sequence from={660} durationInFrames={240}>
        <Conclusion />
      </Sequence>
    </AbsoluteFill>
  );
};
