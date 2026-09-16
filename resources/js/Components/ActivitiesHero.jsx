import React from 'react';

export default function ActivitiesHero() {
    return (
        <section className="activities-video-hero-wrapper" aria-label="Hero Video Berita dan Kegiatan Ekspor">
            {/* Background Video Player */}
            <div className="activities-video-viewport">
                <video 
                    className="activities-hero-video" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                >
                    <source src="/videos/hero-berita.mp4" type="video/mp4" />
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
                        {/* 
                          Lengkungan lebih dalam (Reversed U-curve):
                          Puncak tengah di y=10 (naik lebih tinggi ke dalam video),
                          sisi kiri & kanan melandai ke y=140.
                          Diisi warna background bawah (#f8fafc).
                        */}
                        <path 
                            d="M 0,140 L 0,135 Q 720,5 1440,135 L 1440,140 Z" 
                            fill="#f8fafc" 
                        />
                    </svg>
                </div>
            </div>

            {/* Tulisan Berita & Artikel diletakkan DI BAWAH video & lengkungan */}
            <div className="activities-hero-heading-area">
                <h1 className="activities-hero-heading-title">
                    Jelajahi Berita Kami
                </h1>
            </div>
        </section>
    );
}
