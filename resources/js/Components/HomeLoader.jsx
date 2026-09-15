import React, { useState, useEffect } from 'react';

export default function HomeLoader({ onLoaded }) {
    // Check if session has already seen the initial loader
    const hasSeenLoader = typeof window !== 'undefined' && sessionStorage.getItem('ecs_loader_seen') === 'true';

    const [loading, setLoading] = useState(!hasSeenLoader);
    const [fadeOut, setFadeOut] = useState(false);

    // GIF Repeat Cycle state
    const [gifKey, setGifKey] = useState(Date.now());
    const [gifFade, setGifFade] = useState(false);

    useEffect(() => {
        // If already seen in this browser session, reveal immediately
        if (hasSeenLoader) {
            if (onLoaded) {
                onLoaded();
            }
            return;
        }

        // Lock scroll and hide scrollbar while loading
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';
        window.scrollTo(0, 0);

        // Preload essential hero assets (SVG, fonts, video)
        const assetsToPreload = [
            '/images/svg/icon.svg',
            '/images/svg/container.svg',
            '/images/svg/plane.svg',
            '/images/svg/container-bgless.svg',
            '/assets/font/Poppins/Poppins-Bold.ttf',
            '/assets/font/Poppins/Poppins-SemiBold.ttf',
            '/assets/font/Plus_Jakarta_Sans/PlusJakartaSans-VariableFont_wght.ttf',
        ];

        const imagePromises = assetsToPreload.map((src) => {
            return new Promise((resolve) => {
                const img = new Image();
                img.onload = resolve;
                img.onerror = resolve;
                img.src = src;
            });
        });

        // Preload sky video metadata/canplay
        const videoPromise = new Promise((resolve) => {
            const vid = document.createElement('video');
            vid.src = '/videos/sky.mp4';
            vid.preload = 'auto';
            vid.onloadeddata = resolve;
            vid.onerror = resolve;
            setTimeout(resolve, 3500);
        });

        const fontPromise = document.fonts ? document.fonts.ready : Promise.resolve();
        const windowLoadPromise = new Promise((resolve) => {
            if (document.readyState === 'complete') {
                resolve();
            } else {
                window.addEventListener('load', resolve, { once: true });
            }
        });

        const minDurationPromise = new Promise((resolve) => setTimeout(resolve, 1800));

        // When all real assets finish loading AND minimum duration elapsed
        Promise.all([
            ...imagePromises, 
            videoPromise, 
            fontPromise, 
            windowLoadPromise, 
            minDurationPromise
        ]).then(() => {
            // Mark as seen in sessionStorage so subsequent navigation will never show it again
            sessionStorage.setItem('ecs_loader_seen', 'true');

            // Trigger circular iris / camera aperture reveal
            setFadeOut(true);
            if (onLoaded) {
                onLoaded();
            }
            setTimeout(() => {
                setLoading(false);
                document.body.style.overflow = '';
                document.documentElement.style.overflow = '';
            }, 1050);
        });

        return () => {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        };
    }, [hasSeenLoader, onLoaded]);

    // GIF Repeat Cycle during loading
    useEffect(() => {
        if (!loading || hasSeenLoader) return;

        const cycleInterval = setInterval(() => {
            setGifFade(true);
            setTimeout(() => {
                setGifKey(Date.now());
                setGifFade(false);
            }, 500);
        }, 10000);

        return () => clearInterval(cycleInterval);
    }, [loading, hasSeenLoader]);

    if (hasSeenLoader || (!loading && !fadeOut)) return null;

    return (
        <div 
            className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-white transition-all duration-1000 ease-[cubic-bezier(0.77,0,0.175,1)] ${
                fadeOut ? 'pointer-events-none' : ''
            } ${!loading ? 'hidden' : ''}`}
            style={{
                clipPath: fadeOut 
                    ? 'circle(0% at 50% 50%)' 
                    : 'circle(150% at 50% 50%)',
            }}
            aria-hidden={fadeOut}
        >
            <div className="flex flex-col items-center justify-center p-4">
                <img 
                    key={gifKey}
                    src={`/images/gif/loader.gif?v=${gifKey}`} 
                    alt="Loading Export Center Surabaya..." 
                    className={`w-72 h-72 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem] object-contain transition-all duration-700 ease-in-out ${
                        gifFade ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                    } ${fadeOut ? 'scale-110 opacity-0 duration-500' : ''}`}
                />
            </div>
        </div>
    );
}
