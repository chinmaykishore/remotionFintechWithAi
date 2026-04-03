import { AbsoluteFill, Sequence, staticFile, CalculateMetadataFunction } from 'remotion';
import { getAudioDurationInSeconds } from '@remotion/media-utils';
import { Scene1 } from './scenes/Scene1';
import { Scene2 } from './scenes/Scene2';
import { Scene3 } from './scenes/Scene3';
import { Scene4 } from './scenes/Scene4';

const FPS = 30;

export const calculateMetadataSSY: CalculateMetadataFunction<{ voice: string }> = async ({ props }) => {
	const voice = props.voice || 'christopher';
	
	const durations = await Promise.all([
		getAudioDurationInSeconds(staticFile(`ssy/${voice}/scene1.mp3`)),
		getAudioDurationInSeconds(staticFile(`ssy/${voice}/scene2.mp3`)),
		getAudioDurationInSeconds(staticFile(`ssy/${voice}/scene3.mp3`)),
		getAudioDurationInSeconds(staticFile(`ssy/${voice}/scene4.mp3`)),
	]);

	const sceneLengths = durations.map((d) => Math.ceil(d * FPS));
	const totalDuration = sceneLengths.reduce((a, b) => a + b, 0);

	return {
		durationInFrames: totalDuration,
		props: {
			...props,
			sceneLengths,
		},
	};
};


export const SSYReel: React.FC<{
	voice: string;
	sceneLengths?: number[];
}> = ({ voice, sceneLengths }) => {
	
	const lengths = sceneLengths || [180, 180, 180, 180];

	// Accumulate starts
	let t = 0;
	const s1Start = t; t += lengths[0];
	const s2Start = t; t += lengths[1];
	const s3Start = t; t += lengths[2];
	const s4Start = t; t += lengths[3];

	return (
		<AbsoluteFill style={{ backgroundColor: '#0B132B' }}>
			{/* Hook */}
			<Sequence from={s1Start} durationInFrames={lengths[0]}>
				<Scene1 voice={voice} />
			</Sequence>

			{/* Scheme Introduce */}
			<Sequence from={s2Start} durationInFrames={lengths[1]}>
				<Scene2 voice={voice} />
			</Sequence>

			{/* Chart Growth */}
			<Sequence from={s3Start} durationInFrames={lengths[2]}>
				<Scene3 voice={voice} />
			</Sequence>

			{/* CTA */}
			<Sequence from={s4Start} durationInFrames={lengths[3]}>
				<Scene4 voice={voice} />
			</Sequence>
		</AbsoluteFill>
	);
};
