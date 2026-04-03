import { Layout } from '../components/Shared';
import { useCurrentFrame, interpolate, spring, useVideoConfig, Audio, staticFile } from 'remotion';

export const Scene3: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const scale = spring({
        frame,
        fps,
        config: { damping: 10, stiffness: 100 },
        delay: 50
    });

    const affected = [
        { icon: '✈️', name: 'Frequent Travelers' },
        { icon: '🏨', name: 'Accor-focused Users' },
        { icon: '💳', name: 'Premium Card Holders' }
    ];

    return (
        <Layout 
            title="WHO IS MOST AFFECTED?" 
            subtitle="THE IMPACT"
            color="#FF3B30"
        >
            <Audio src={staticFile('accor-axis-end/scene3.mp3')} />

            <div style={{ marginTop: 40, display: 'flex', flexDirection: 'column', gap: 30 }}>
                {affected.map((item, i) => {
                    const itemSpring = spring({
                        frame,
                        fps,
                        config: { damping: 12 },
                        delay: 20 + i * 15
                    });

                    return (
                        <div key={item.name} style={{ 
                            background: 'rgba(255, 255, 255, 0.05)', 
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            borderRadius: 20,
                            padding: '30px 40px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 30,
                            transform: `scale(${itemSpring})`
                        }}>
                            <div style={{ fontSize: 50 }}>{item.icon}</div>
                            <div style={{ fontSize: 36, fontWeight: 700, color: 'white' }}>{item.name}</div>
                        </div>
                    );
                })}

                <div style={{ 
                    marginTop: 60, 
                    padding: '50px 70px', 
                    background: 'rgba(255, 59, 48, 0.1)', 
                    borderRadius: 30,
                    border: '3px solid #FF3B30',
                    textAlign: 'center',
                    transform: `scale(${scale})`,
                    boxShadow: '0 30px 60px rgba(255, 59, 48, 0.2)'
                }}>
                    <div style={{ fontSize: 48, fontWeight: 900, color: '#FF3B30', marginBottom: 20, textTransform: 'uppercase' }}>FINAL VERDICT</div>
                    <div style={{ fontSize: 40, fontWeight: 600, color: 'white', lineHeight: 1.2 }}>
                        Axis Bank cards are now <span style={{ color: '#FF3B30', fontWeight: 900 }}>LESS COMPETITIVE</span> for TRAVEL REWARDS.
                    </div>
                </div>
            </div>
        </Layout>
    );
};
