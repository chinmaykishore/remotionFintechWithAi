import { useCurrentFrame, interpolate, useVideoConfig, AbsoluteFill } from 'remotion';

export const Watermark: React.FC = () => {
    return (
        <div style={{
            position: 'absolute',
            bottom: 100,
            width: '100%',
            textAlign: 'center',
            fontSize: 32,
            fontWeight: 600,
            color: 'rgba(255, 255, 255, 0.4)',
            fontFamily: 'Outfit, sans-serif',
            letterSpacing: 2,
            zIndex: 10
        }}>
            @fintech_with_ai
        </div>
    );
};

export const Layout: React.FC<{ children: React.ReactNode, title?: string, subtitle?: string, color?: string }> = ({ children, title, subtitle, color = '#00F2FF' }) => {
    const frame = useCurrentFrame();
    const { durationInFrames } = useVideoConfig();

    const opacity = interpolate(
        frame,
        [0, 20, durationInFrames - 20, durationInFrames],
        [0, 1, 1, 0],
        { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
    );

    const slide = interpolate(
        frame,
        [0, 20, durationInFrames - 20, durationInFrames],
        [50, 0, 0, -50],
        { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
    );

    return (
        <AbsoluteFill style={{
            backgroundColor: '#0A0E21',
            fontFamily: 'Outfit, sans-serif',
            color: 'white',
            padding: '200px 80px 120px 80px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            opacity,
            transform: `translateX(${slide}px)`
        }}>
            {/* Background Gradient Mesh Effect */}
            <div style={{
                position: 'absolute',
                top: -500,
                right: -500,
                width: 1000,
                height: 1000,
                background: `radial-gradient(circle, ${color}1A 0%, rgba(10, 14, 33, 0) 70%)`,
                zIndex: 0
            }} />
            
            {(title || subtitle) && (
                <div style={{ marginBottom: 60, zIndex: 1, position: 'relative' }}>
                    {subtitle && (
                        <div style={{ 
                            fontSize: 36, 
                            color: color, 
                            fontWeight: 700, 
                            textTransform: 'uppercase',
                            letterSpacing: 4,
                            marginBottom: 10
                        }}>
                            {subtitle}
                        </div>
                    )}
                    {title && (
                        <h1 style={{ 
                            fontSize: 84, 
                            fontWeight: 900, 
                            lineHeight: 1.1,
                            margin: 0,
                            background: 'linear-gradient(to right, #FFFFFF, #B0BEC5)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>
                            {title}
                        </h1>
                    )}
                    <div style={{ 
                        width: 120, 
                        height: 8, 
                        background: `linear-gradient(to right, ${color}, #FFFFFF)`,
                        marginTop: 30,
                        borderRadius: 4
                    }} />
                </div>
            )}

            <div style={{ flex: 1, position: 'relative', zIndex: 1 }}>
                {children}
            </div>

            <Watermark />
        </AbsoluteFill>
    );
};
