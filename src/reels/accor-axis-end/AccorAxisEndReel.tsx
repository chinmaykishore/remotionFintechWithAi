import { AbsoluteFill, Sequence, Audio, staticFile } from 'remotion';
import { Scene1 } from './scenes/Scene1';
import { Scene2 } from './scenes/Scene2';
import { Scene3 } from './scenes/Scene3';
import { Scene4 } from './scenes/Scene4';

export const AccorAxisEndReel: React.FC = () => {
    // 5 seconds per scene (150 frames @ 30fps)
    const sceneDuration = 210; // ~7 seconds for readability with the text

    return (
        <AbsoluteFill style={{ backgroundColor: '#0A0E21' }}>
            {/* Background Music - Optional, but adding if requested later */}
            {/* <Audio 
                src={staticFile('rbi-rules-apr2026/TIKI_TIKI_Slowed_256KBPS.webm')} 
                volume={0.05}
            /> */}

            <Sequence from={0} durationInFrames={sceneDuration}>
                <Scene1 />
            </Sequence>
            <Sequence from={sceneDuration} durationInFrames={sceneDuration}>
                <Scene2 />
            </Sequence>
            <Sequence from={sceneDuration * 2} durationInFrames={sceneDuration}>
                <Scene3 />
            </Sequence>
            <Sequence from={sceneDuration * 3} durationInFrames={sceneDuration}>
                <Scene4 />
            </Sequence>
        </AbsoluteFill>
    );
};
