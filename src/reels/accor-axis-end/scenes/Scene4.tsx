import { Layout } from '../components/Shared';
import { useCurrentFrame, interpolate, spring, useVideoConfig, Audio, staticFile } from 'remotion';

export const Scene4: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const socials = [
        { icon: '📸', label: 'Instagram/FB', handle: 'fintech_with_ai', color: '#E1306C' },
        { icon: '📺', label: 'YouTube', handle: '@FinTechwithAI', color: '#FF0000' },
        { icon: '🐦', label: 'X (Twitter)', handle: '@FinTechWithAI', color: '#1DA1F2' }
    ];

    const scale = spring({
        frame,
        fps,
        config: { damping: 10 },
        delay: 80
    });

    return (
        <Layout 
            title="STAY UPDATED" 
            subtitle="THANK YOU"
            color="#00F2FF"
        >
            <Audio src={staticFile('accor-axis-end/scene4.mp3')} />

            <div style={{ marginTop: 60, display: 'flex', flexDirection: 'column', gap: 40 }}>
                <div style={{ 
                    fontSize: 56, 
                    fontWeight: 900, 
                    textAlign: 'center', 
                    marginBottom: 40,
                    background: 'linear-gradient(to right, #FFFFFF, #B0BEC5)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>
                    LIKE • SHARE • FOLLOW • SAVE
                </div>

                {socials.map((social, i) => {
                    const socialSpring = spring({
                        frame,
                        fps,
                        config: { damping: 12 },
                        delay: 20 + i * 15
                    });

                    return (
                        <div key={social.label} style={{ 
                            background: 'rgba(255, 255, 255, 0.05)', 
                            border: `2px solid ${social.color}4D`,
                            borderRadius: 25,
                            padding: '40px 50px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            transform: `scale(${socialSpring})`,
                            boxShadow: `0 10px 30px ${social.color}1A`
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 30 }}>
                                <div style={{ fontSize: 50 }}>{social.icon}</div>
                                <div style={{ fontSize: 36, fontWeight: 700, color: 'white' }}>{social.label}</div>
                            </div>
                            <div style={{ fontSize: 40, fontWeight: 900, color: social.color }}>{social.handle}</div>
                        </div>
                    );
                })}

                <div style={{ 
                    marginTop: 60, 
                    textAlign: 'center',
                    fontSize: 32,
                    fontWeight: 600,
                    color: 'rgba(255,255,255,0.6)',
                    letterSpacing: 2,
                    animation: 'pulse 2s infinite'
                }}>
                    JOIN THE FINTECH REVOLUTION
                </div>
            </div>
        </Layout>
    );
};
