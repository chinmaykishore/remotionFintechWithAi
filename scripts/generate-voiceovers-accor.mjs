import * as fs from 'fs';
import * as path from 'path';
import * as googleTTS from 'google-tts-api';

const scenes = [
  {
    id: 'scene1',
    text: "Axis Bank Reward Shock! Massive changes are coming this April 2026. Key travel partners like Accor, Marriott Bonvoy, and Qatar Airways are being REMOVED from the EDGE transfer program.",
  },
  {
    id: 'scene2',
    text: "It's not just removals. We're seeing a massive reward devaluation. EDGE Reward Points and EDGE Miles transfer ratios are being slashed, leading to a value drop of over 50%!",
  },
  {
    id: 'scene3',
    text: "If you're a frequent traveler or use premium cards like Magnus or Atlas, this hits hard. Axis cards are now significantly less competitive for travel rewards.",
  },
  {
    id: 'scene4',
    text: "Stay ahead of the curve! Like, share, and follow Fintech with AI on Instagram, YouTube, and X for the latest updates on your credit cards and rewards.",
  }
];

async function generateVoiceovers() {
  const publicDir = path.join(process.cwd(), 'public', 'accor-axis-end');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  for (const scene of scenes) {
    try {
      console.log(`Generating audio for ${scene.id}...`);
      const base64Audio = await googleTTS.getAudioBase64(scene.text, {
        lang: 'en',
        slow: false,
        host: 'https://translate.google.com',
      });
      
      const audioBuffer = Buffer.from(base64Audio, 'base64');
      fs.writeFileSync(path.join(publicDir, `${scene.id}.mp3`), audioBuffer);
      console.log(`Successfully saved ${scene.id}.mp3`);
    } catch (err) {
      console.error(`Error generating audio for ${scene.id}:`, err);
    }
  }
}

generateVoiceovers();
