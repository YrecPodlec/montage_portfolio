"use client"
import React, { useState } from 'react';

const PreviewVkPlayer = ({ poster, video }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    const aspectRatioStyle = {
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden'
    };

    if (isLoaded) {
        // Если плеер загружен, показываем iframe
        return (
            <div style={aspectRatioStyle}>
                <iframe
                    src={video}
                    title="VK Video Player"
                    frameBorder="0"
                    allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
                    allowFullScreen
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: '#000'
                    }}
                />
            </div>
        );
    }

    return (
        <div
            onClick={() => setIsLoaded(true)}
            style={{
                ...aspectRatioStyle,
                cursor: 'pointer',
                backgroundImage: `url(${poster})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <div
                style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    clipPath: 'polygon(30% 20%, 30% 80%, 75% 50%)',
                    paddingLeft: '10px'
                }}
                aria-label="Начать воспроизведение видео"
            />
        </div>
    );
};

export default PreviewVkPlayer;