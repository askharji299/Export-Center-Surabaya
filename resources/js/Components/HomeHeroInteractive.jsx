import React, { useState, useEffect, useRef } from 'react';

export default function HomeHeroInteractive({ isRevealed = true }) {
    const containerRef = useRef(null);
    const [progress, setProgress] = useState(0); // 0 to 1 scroll progress
    const [letterEntrance, setLetterEntrance] = useState(false);

    // Trigger letter-by-letter cascade
    useEffect(() => {
        if (isRevealed) {
            const timer = setTimeout(() => {
                setLetterEntrance(true);
            }, 300);
            return () => clearTimeout(timer);
        } else {
            setLetterEntrance(false);
        }
    }, [isRevealed]);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;
            
            if (totalScrollable <= 0) return;

            const currentScroll = -rect.top;
            const rawProgress = currentScroll / totalScrollable;
            const clamped = Math.min(Math.max(rawProgress, 0), 1);
            
            setProgress(clamped);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Trajectory tuned exactly as D:/Ecs
    const planeTranslateX = -20 + progress * 105;  // -20vw to +85vw
    const planeTranslateY = 14 - progress * 95;    // Plane starts higher and flies smoothly upward
    const planeScale = 0.85 + progress * 0.95;     // Bigger plane: scales from 0.85 up to 1.8
    const planeRotate = -4 - progress * 10;        // gentler climb angle (-4deg to -14deg)

    // Letter arrays for staggered entrance & scroll-triggered exit (fly up)
    const line1 = 'EXPORT CENTER'.split('');
    const line2 = 'SURABAYA'.split('');

    return (
        <section id="home" ref={containerRef} className="relative w-full h-[220vh] bg-white">
            <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">
                
                {/* Sky Atmosphere: Solid primary deep blue */}
                <div className="absolute inset-0 bg-[#222D51] pointer-events-none" />

                {/* Subtle soft lighting overlay */}
                <div 
                    className="absolute inset-0 opacity-20 pointer-events-none transition-transform duration-700 ease-out"
                    style={{
                        backgroundColor: 'rgba(255,255,255,0.05)',
                        transform: `translateY(${progress * 40}px)`
                    }}
                />

                {/* 
                    LAYER 1: sky.mp4 (Background Video, Muted, Loop, Autoplay)
                */}
                <div className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden">
                    <video 
                        src="/videos/sky.mp4" 
                        autoPlay 
                        loop 
                        muted 
                        playsInline 
                        className="w-full h-[calc(100%+2px)] object-cover object-center select-none pointer-events-none"
                    />
                </div>

                {/* 
                    LAYER 2: plane.svg (airplane higher)
                */}
                <div 
                    className="absolute inset-0 w-full h-full pointer-events-none flex items-center justify-center z-10 will-change-transform"
                    style={{
                        transform: `translate3d(${planeTranslateX}vw, ${planeTranslateY}vh, 0) scale(${planeScale}) rotate(${planeRotate}deg)`,
                        transformOrigin: 'center center',
                        transition: 'transform 0.04s linear'
                    }}
                >
                    <img 
                        src="/images/svg/plane.svg" 
                        alt="Cargo Plane" 
                        className="w-[100vw] max-w-none h-auto select-none pointer-events-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
                        draggable={false}
                    />
                </div>

                {/* 
                    LAYER 3: container-bgless.svg
                */}
                <div className="absolute inset-0 w-full h-full flex items-center justify-center z-20 pointer-events-none">
                    <img 
                        src="/images/svg/container-bgless.svg" 
                        alt="Foreground Shipping Containers" 
                        className="w-full h-[calc(100%+2px)] object-cover object-bottom select-none pointer-events-none"
                        draggable={false}
                    />
                </div>

                {/* 
                    LAYER 4: Soft White Gradient Fade Overlay at Hero Bottom Boundary
                    Seamlessly fades containers into 100% pure solid white without any visible hard line
                */}
                <div 
                    className="absolute -bottom-1 left-0 right-0 h-28 sm:h-36 z-25 pointer-events-none"
                    style={{
                        background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 40%, rgba(255,255,255,0.9) 75%, #ffffff 98%, #ffffff 100%)'
                    }}
                />

                {/* 
                    ITEM 5: Centered Hero Text
                    Hero Font: Poppins Black (.font-heavy)
                    Letter-by-letter cascade + Gentle Slow Floating Bobbing
                */}
                <div className="absolute inset-0 z-30 flex flex-col items-center justify-center text-center pointer-events-none px-4">
                    
                    {/* Wrapper that gently floats up and down slowly */}
                    <div className={`flex flex-col items-center justify-center ${letterEntrance && progress === 0 ? 'animate-float-gentle' : ''}`}>
                        
                        {/* LINE 1: EXPORT CENTER - solid white with sequential entrance */}
                        <div className="flex justify-center flex-wrap leading-tight">
                            {line1.map((char, index) => {
                                const exitThreshold = 0.05 + (index / (line1.length + line2.length)) * 0.35;
                                const isScrolledAway = progress > exitThreshold;
                                const scrollDistance = Math.min(Math.max((progress - exitThreshold) * 350, 0), 120);

                                return (
                                    <span
                                        key={`line1-${index}`}
                                        className="inline-block font-heavy text-5xl sm:text-7xl md:text-9xl lg:text-[9.5rem] tracking-tight text-white drop-shadow-[0_12px_32px_rgba(0,0,0,0.85)]"
                                        style={{
                                            transform: !letterEntrance 
                                                ? 'translateY(-110px) scale(0.85)' 
                                                : `translateY(-${scrollDistance}px) scale(1)`,
                                            opacity: !letterEntrance 
                                                ? 0 
                                                : isScrolledAway 
                                                    ? Math.max(1 - (progress - exitThreshold) * 4, 0) 
                                                    : 1,
                                            filter: !letterEntrance ? 'blur(6px)' : 'blur(0px)',
                                            textShadow: '0 8px 24px rgba(0,0,0,0.7), 0 2px 6px rgba(0,0,0,0.5)',
                                            transition: !letterEntrance 
                                                ? 'none' 
                                                : progress > 0 
                                                    ? 'transform 80ms linear, opacity 80ms linear' 
                                                    : 'transform 0.85s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.65s ease-out, filter 0.65s ease-out',
                                            transitionDelay: !letterEntrance ? '0ms' : progress > 0 ? '0ms' : `${index * 75}ms`,
                                            width: char === ' ' ? '0.35em' : 'auto',
                                            willChange: 'transform, opacity, filter'
                                        }}
                                    >
                                        {char === ' ' ? '\u00A0' : char}
                                    </span>
                                );
                            })}
                        </div>

                        {/* LINE 2: SURABAYA - solid #51CFED with sequential entrance */}
                        <div className="flex justify-center flex-wrap leading-tight mt-2 sm:mt-4">
                            {line2.map((char, index) => {
                                const globalIndex = line1.length + index;
                                const exitThreshold = 0.05 + (globalIndex / (line1.length + line2.length)) * 0.35;
                                const isScrolledAway = progress > exitThreshold;
                                const scrollDistance = Math.min(Math.max((progress - exitThreshold) * 350, 0), 120);

                                return (
                                    <span
                                        key={`line2-${index}`}
                                        className="inline-block font-heavy text-5xl sm:text-7xl md:text-9xl lg:text-[9.5rem] tracking-tight text-[#51CFED] drop-shadow-[0_12px_32px_rgba(0,0,0,0.85)]"
                                        style={{
                                            transform: !letterEntrance 
                                                ? 'translateY(-110px) scale(0.85)' 
                                                : `translateY(-${scrollDistance}px) scale(1)`,
                                            opacity: !letterEntrance 
                                                ? 0 
                                                : isScrolledAway 
                                                    ? Math.max(1 - (progress - exitThreshold) * 4, 0) 
                                                    : 1,
                                            filter: !letterEntrance ? 'blur(6px)' : 'blur(0px)',
                                            textShadow: '0 8px 24px rgba(0,0,0,0.7), 0 2px 6px rgba(0,0,0,0.5)',
                                            transition: !letterEntrance 
                                                ? 'none' 
                                                : progress > 0 
                                                    ? 'transform 80ms linear, opacity 80ms linear' 
                                                    : 'transform 0.85s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.65s ease-out, filter 0.65s ease-out',
                                            transitionDelay: !letterEntrance ? '0ms' : progress > 0 ? '0ms' : `${(line1.length + index) * 75}ms`,
                                            width: char === ' ' ? '0.35em' : 'auto',
                                            willChange: 'transform, opacity, filter'
                                        }}
                                    >
                                        {char}
                                    </span>
                                );
                            })}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
