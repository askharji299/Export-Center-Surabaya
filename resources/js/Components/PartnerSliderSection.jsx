import React, { useState, useEffect, useRef } from 'react';

const partners = [
    { id: 1, name: 'Badan POM', logo: '/images/partners/badan-pom.png' },
    { id: 2, name: 'Kementerian Perdagangan', logo: '/images/partners/kemendag.png' },
    { id: 3, name: 'Pemerintah Provinsi Jawa Timur', logo: '/images/partners/pemprov-jatim.png' },
    { id: 4, name: 'InaExport', logo: '/images/partners/inaexport.png' },
    { id: 5, name: 'GPEI', logo: '/images/partners/gpei.png' },
    { id: 6, name: 'Indonesia Eximbank', logo: '/images/partners/eximbank.png' }
];

export default function PartnerSliderSection() {
    // Current page: 0 (logos 0, 1, 2) or 1 (logos 3, 4, 5)
    // Also support smooth sliding
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const timerRef = useRef(null);

    // Auto-advance slide smoothly every 3.5 seconds
    useEffect(() => {
        if (!isHovered) {
            timerRef.current = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % partners.length);
            }, 3500);
        }
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [isHovered]);

    // To create a true continuous sliding carousel, duplicate array so it slides smoothly
    const extendedPartners = [...partners, ...partners, ...partners];

    return (
        <section 
            className="partner-slider-section"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="partner-slider-container">
                <h2 className="partner-slider-title">Mitra Kami</h2>

                {/* Carousel Window / Viewport */}
                <div className="partner-carousel-viewport">
                    <div 
                        className="partner-carousel-track"
                        style={{
                            transform: `translateX(calc(-${currentIndex} * (100% / 3)))`,
                            transition: 'transform 0.7s cubic-bezier(0.25, 1, 0.5, 1)'
                        }}
                    >
                        {extendedPartners.map((partner, index) => (
                            <div key={`${partner.id}-${index}`} className="partner-item-card">
                                <img 
                                    src={partner.logo} 
                                    alt={partner.name} 
                                    className="partner-logo-img" 
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Dot Pagination Indicators */}
                <div className="partner-slider-dots">
                    {partners.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`partner-dot ${currentIndex % partners.length === idx ? 'active' : ''}`}
                            aria-label={`Pindah ke mitra ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
