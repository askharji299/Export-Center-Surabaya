import React, { useState, useEffect } from 'react';

export default function ActivitiesHero() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const { currentTarget, clientX, clientY } = e;
        const rect = currentTarget.getBoundingClientRect();
        const x = (clientX - rect.left) / rect.width - 0.5;
        const y = (clientY - rect.top) / rect.height - 0.5;
        setMousePos({ x, y });
    };

    return (
        <div 
            className="activities-peel-hero"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
        >
            {/* Underlying Revealed Layer (City / Sunset / World Panorama) */}
            <div 
                className="peel-revealed-layer"
                style={{
                    transform: `scale(1.03) translate(${mousePos.x * -15}px, ${mousePos.y * -15}px)`,
                }}
            >
                <img 
                    src="/images/activities-containers-topview.jpg" 
                    alt="Global Trade Containers Terminal" 
                    className="revealed-bg-img"
                />
                <div className="revealed-overlay-gradient"></div>
                <div className="revealed-sun-glow"></div>
            </div>

            {/* SVG Peel & Surface Mask Layer */}
            <svg 
                className="peel-svg-overlay" 
                viewBox="0 0 1440 600" 
                preserveAspectRatio="none"
            >
                <defs>
                    {/* Shadow for the peel tear edge */}
                    <filter id="peel-shadow" x="-20%" y="-20%" width="150%" height="150%">
                        <feDropShadow dx="-8" dy="12" stdDeviation="10" floodColor="#000000" floodOpacity="0.35" />
                    </filter>
                    
                    {/* 3D Curl Highlight Gradient */}
                    <linearGradient id="curl-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#1a6b4a" stopOpacity="0.9" />
                        <stop offset="35%" stopColor="#2e8b6e" stopOpacity="0.8" />
                        <stop offset="60%" stopColor="#ffffff" stopOpacity="0.95" />
                        <stop offset="85%" stopColor="#64748b" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1" />
                    </linearGradient>

                    {/* Top Surface Clean White/Light Gray Gradient */}
                    <linearGradient id="top-surface-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ffffff" />
                        <stop offset="70%" stopColor="#f8fafc" />
                        <stop offset="100%" stopColor="#f1f5f9" />
                    </linearGradient>
                </defs>

                {/* Top White Surface Fill */}
                <path 
                    d="M 0,0 L 1440,0 L 1440,80 C 1050,160 720,290 0,470 Z" 
                    fill="url(#top-surface-grad)" 
                />

                {/* 3D Peel Curl Edge Ribbon (Behind shadow & front curl) */}
                <path 
                    d="M 0,470 C 720,290 1050,160 1440,80 L 1440,105 C 1030,190 700,320 0,492 Z" 
                    fill="rgba(15, 23, 42, 0.25)"
                    filter="url(#peel-shadow)"
                />

                {/* Main Shiny 3D Curved Curl Lip */}
                <path 
                    d="M 0,470 C 720,290 1050,160 1440,80 C 1060,175 710,305 0,482 Z" 
                    fill="url(#curl-grad)" 
                />

                {/* Thin Highlight Rim along the tear */}
                <path 
                    d="M 0,470 C 720,290 1050,160 1440,80" 
                    fill="none" 
                    stroke="#ffffff" 
                    strokeWidth="3.5" 
                    strokeLinecap="round" 
                />
            </svg>

            {/* Hero Top Content (Placed on the white surface) */}
            <div className="peel-hero-content-wrapper">
                <div className="peel-hero-brand-header">
                    <div className="peel-brand-pill">
                        <span className="pill-dot"></span>
                        <span className="pill-text">EXPORT CENTER SURABAYA</span>
                    </div>
                    <div className="peel-brand-sub">
                        <span className="sub-divider">|</span>
                        <span>KEMENTERIAN PERDAGANGAN RI</span>
                    </div>
                </div>

                <div className="peel-hero-text-block">
                    <h1 className="peel-hero-title">
                        ESTAMOS UNIENDO <br />
                        <span className="title-highlight">LO MEJOR DE NOSOTROS</span>
                    </h1>
                    <p className="peel-hero-subtitle">
                        Menghubungkan Potensi Ekspor Nusantara dengan Jaringan Pasar Global Dunia
                    </p>

                    <div className="peel-hero-actions">
                        <a href="#kegiatan-list" className="peel-btn-primary">
                            <span>Jelajahi Kegiatan</span>
                            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </a>
                        <a href="/contact" className="peel-btn-secondary">
                            Konsultasi Ekspor
                        </a>
                    </div>
                </div>
            </div>

            {/* Realistic Jet Airplane Element flying right on the seam line */}
            <div 
                className="peel-airplane-container"
                style={{
                    transform: `translate(${mousePos.x * 25}px, ${mousePos.y * 15}px)`
                }}
            >
                <div className="airplane-wrapper">
                    <svg className="airplane-svg" viewBox="0 0 200 200" fill="none">
                        <defs>
                            <filter id="jet-drop-shadow" x="-30%" y="-30%" width="160%" height="160%">
                                <feDropShadow dx="-8" dy="14" stdDeviation="7" floodColor="#000000" floodOpacity="0.4" />
                            </filter>
                            <linearGradient id="fuselage-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#ffffff" />
                                <stop offset="70%" stopColor="#f1f5f9" />
                                <stop offset="100%" stopColor="#cbd5e1" />
                            </linearGradient>
                            <linearGradient id="navy-wing-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#0b4e6b" />
                                <stop offset="50%" stopColor="#0f172a" />
                                <stop offset="100%" stopColor="#1a6b4a" />
                            </linearGradient>
                            <linearGradient id="engine-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#0f172a" />
                                <stop offset="100%" stopColor="#334155" />
                            </linearGradient>
                        </defs>
                        
                        <g filter="url(#jet-drop-shadow)" transform="rotate(-65 100 100)">
                            {/* Main Swept Wings (Dark Blue/Navy like Photo #2) */}
                            <path d="M 100,65 L 12,125 L 35,130 L 100,96 L 165,130 L 188,125 Z" fill="url(#navy-wing-grad)" />
                            {/* Wingtip winglets */}
                            <path d="M 12,125 L 6,112 L 20,122 Z" fill="#38bdf8" />
                            <path d="M 188,125 L 194,112 L 180,122 Z" fill="#38bdf8" />

                            {/* Tail Rear Horizontal Stabilizers */}
                            <path d="M 100,158 L 62,185 L 76,188 L 100,172 L 124,188 L 138,185 Z" fill="url(#fuselage-grad)" />

                            {/* Rear Twin Jet Engines (Navy) */}
                            <rect x="73" y="125" width="13" height="30" rx="6.5" fill="url(#engine-grad)" />
                            <rect x="114" y="125" width="13" height="30" rx="6.5" fill="url(#engine-grad)" />
                            <ellipse cx="79.5" cy="127" rx="4.5" ry="2" fill="#94a3b8" />
                            <ellipse cx="120.5" cy="127" rx="4.5" ry="2" fill="#94a3b8" />

                            {/* Aerodynamic White Fuselage Body */}
                            <path d="M 100,22 C 111,46 113,120 109,174 C 107,184 100,189 100,189 C 100,189 93,184 91,174 C 87,120 89,46 100,22 Z" fill="url(#fuselage-grad)" />

                            {/* Cockpit Glass */}
                            <path d="M 100,34 C 104,38 105,43 100,46 C 95,43 96,38 100,34 Z" fill="#0f172a" />
                            <path d="M 100,36 C 102,39 103,42 100,43 C 97,42 98,39 100,36 Z" fill="#38bdf8" opacity="0.85" />

                            {/* Sleek Center Highlight */}
                            <line x1="100" y1="26" x2="100" y2="170" stroke="#ffffff" strokeWidth="1.5" opacity="0.85" />
                        </g>
                    </svg>
                    {/* Jet Contrail Trail */}
                    <div className="airplane-contrail"></div>
                </div>
            </div>
        </div>
    );
}
