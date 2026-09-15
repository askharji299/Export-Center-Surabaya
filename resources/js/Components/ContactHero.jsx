import React, { useRef, useEffect } from 'react';

export default function ContactHero() {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const startTime = 5;
        const endTime = 17;

        // Set initial playback start point
        const handleLoadedMetadata = () => {
            video.currentTime = startTime;
            video.play().catch(() => {});
        };

        // Loop playback strictly between second 5 and second 17
        const handleTimeUpdate = () => {
            if (video.currentTime >= endTime) {
                video.currentTime = startTime;
                video.play().catch(() => {});
            }
        };

        video.addEventListener('loadedmetadata', handleLoadedMetadata);
        video.addEventListener('timeupdate', handleTimeUpdate);

        // If metadata already loaded (cached)
        if (video.readyState >= 1) {
            video.currentTime = startTime;
            video.play().catch(() => {});
        }

        return () => {
            video.removeEventListener('loadedmetadata', handleLoadedMetadata);
            video.removeEventListener('timeupdate', handleTimeUpdate);
        };
    }, []);

    return (
        <section className="activities-video-hero-wrapper" aria-label="Hero Video Kontak Export Center Surabaya">
            {/* Background Video Player */}
            <div className="activities-video-viewport">
                <video 
                    ref={videoRef}
                    className="activities-hero-video" 
                    autoPlay 
                    muted 
                    playsInline
                >
                    <source src="/videos/hero-contact.mp4#t=5,17" type="video/mp4" />
                    Browser Anda tidak mendukung tag video.
                </video>

                {/* Subtle Gradient Overlay on Video */}
                <div className="activities-video-overlay" />

                {/* Deeper Reversed U-Curve Mask at the Bottom of Video */}
                <div className="curved-hero-divider">
                    <svg 
                        viewBox="0 0 1440 140" 
                        preserveAspectRatio="none" 
                        className="curved-divider-svg"
                    >
                        <path 
                            d="M 0,140 L 0,135 Q 720,5 1440,135 L 1440,140 Z" 
                            fill="#f8fafc" 
                        />
                    </svg>
                </div>
            </div>

            {/* Heading Area Positioned BELOW the Video Hero */}
            <div className="activities-hero-heading-area">
                <h1 className="activities-hero-heading-title">
                    Hubungi Kami
                </h1>
            </div>
        </section>
    );
}
