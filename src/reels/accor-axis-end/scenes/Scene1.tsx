import { Layout } from '../components/Shared';
import { useCurrentFrame, interpolate, spring, useVideoConfig, Audio, staticFile } from 'remotion';

export const Scene1: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const scale = spring({
        frame,
        fps,
        config: { damping: 10, stiffness: 100 },
        delay: 30
    });

    const items = [
        { name: 'ACCOR', detail: 'Hotel Loyalty' },
        { name: 'MARRIOTT BONVOY', detail: 'Hotel Loyalty' },
        { name: 'QATAR AIRWAYS', detail: 'Privilege Club' }
    ];

    return (
        <Layout 
            title="AXIS BANK REWARD SHOCK! 🚨" 
            subtitle="APRIL 2026 UPDATE"
            color="#FF4B2B"
        >
            <Audio src={staticFile('accor-axis-end/scene1.mp3')} />
            
            <div style={{ marginTop: 40 }}>
                <div style={{ 
                    fontSize: 48, 
                    fontWeight: 700, 
                    color: '#FF4B2B', 
                    marginBottom: 60,
                    textTransform: 'uppercase',
                    letterSpacing: 2
                }}>
                    Key Travel Transfer Partners <span style={{ color: 'white' }}>REMOVED</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 40 }}>
                    {items.map((item, i) => {
                        const itemSpring = spring({
                            frame,
                            fps,
                            config: { damping: 12 },
                            delay: 60 + i * 15
                        });

                        return (
                            <div key={item.name} style={{ 
                                flex: 1, 
                                background: 'rgba(255, 75, 43, 0.1)', 
                                border: '2px solid rgba(255, 75, 43, 0.3)',
                                borderRadius: 30,
                                padding: 40,
                                textAlign: 'center',
                                position: 'relative',
                                transform: `scale(${itemSpring})`,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                {/* Red Cross */}
                                <div style={{ 
                                    position: 'absolute', 
                                    top: 10, 
                                    right: 10, 
                                    color: '#FF4B2B',
                                    fontSize: 40,
                                    fontWeight: 900
                                }}>✕</div>

                                <div style={{ fontSize: 32, fontWeight: 800, color: 'white' }}>{item.name}</div>
                                <div style={{ fontSize: 24, color: 'rgba(255,255,255,0.6)', marginTop: 10 }}>{item.detail}</div>
                            </div>
                        );
                    })}
                </div>

                <div style={{ 
                    marginTop: 80, 
                    padding: '30px 50px', 
                    background: 'rgba(255, 255, 255, 0.05)', 
                    borderRadius: 20,
                    borderLeft: '10px solid #FF4B2B',
                    fontSize: 32,
                    lineHeight: 1.4,
                    transform: `scale(${scale})`
                }}>
                    EDGE Points/Miles can <span style={{ color: '#FF4B2B', fontWeight: 700 }}>no longer</span> be transferred to these programs.
                </div>
            </div>
        </Layout>
    );
};
