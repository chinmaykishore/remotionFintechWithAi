import "./index.css";
import { Composition } from "remotion";
import { TiaraCardReel } from "./TiaraCardReel";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="TiaraCardReel"
        component={TiaraCardReel}
        durationInFrames={900}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
