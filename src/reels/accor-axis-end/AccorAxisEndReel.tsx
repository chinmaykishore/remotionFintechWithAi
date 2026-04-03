import { AbsoluteFill, Sequence, staticFile, CalculateMetadataFunction } from 'remotion';
import { getAudioDurationInSeconds } from '@remotion/media-utils';
import { Scene1 } from './scenes/Scene1';
import { Scene2 } from './scenes/Scene2';
import { Scene3 } from './scenes/Scene3';
import { Scene4 } from './scenes/Scene4';

const FPS = 30;
const PLAYBACK_RATE = 1.35;

export const calculateMetadataAccor: CalculateMetadataFunction<any> = async () => {
    const durations = await Promise.all([
        getAudioDurationInSeconds(staticFile('accor-axis-end/scene1.mp3')),
        getAudioDurationInSeconds(staticFile('accor-axis-end/scene2.mp3')),
        getAudioDurationInSeconds(staticFile('accor-axis-end/scene3.mp3')),
        getAudioDurationInSeconds(staticFile('accor-axis-end/scene4.mp3')),
    ]);

    // Duration in frames = Math.ceil((audioDuration / playbackRate) * FPS)
    const sceneLengths = durations.map((d) => Math.ceil((d / PLAYBACK_RATE) * FPS));
    const totalDuration = sceneLengths.reduce((a, b) => a + b, 0);

    return {
        durationInFrames: totalDuration,
        props: {
            sceneLengths,
        },
    };
};

export const AccorAxisEndReel: React.FC<{ sceneLengths?: number[] }> = ({ sceneLengths }) => {
    // Default lengths if not provided by calculateMetadata
    const lengths = sceneLengths || [150, 150, 150, 150];

    // Calculate sequence start points
    let currentFrame = 0;
    const sceneStarts = lengths.map((len) => {
        const start = currentFrame;
        currentFrame += len;
        return start;
    });

    return (
        <AbsoluteFill style={{ backgroundColor: '#0A0E21' }}>
            <Sequence from={sceneStarts[0]} durationInFrames={lengths[0]}>
                <Scene1 />
            </Sequence>
            <Sequence from={sceneStarts[1]} durationInFrames={lengths[1]}>
                <Scene2 />
            </Sequence>
            <Sequence from={sceneStarts[2]} durationInFrames={lengths[2]}>
                <Scene3 />
            </Sequence>
            <Sequence from={sceneStarts[3]} durationInFrames={lengths[3]}>
                <Scene4 />
            </Sequence>
        </AbsoluteFill>
    );
};
