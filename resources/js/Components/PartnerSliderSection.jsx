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
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const timerRef = useRef(null);

    // Auto-advance slide every 3 seconds if not hovered
    useEffect(() => {
        if (!isHovered) {
            timerRef.current = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % partners.length);
            }, 3000);
        }
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [isHovered]);

    // Compute visible 3 logos centered around currentIndex (or sliding window)
    // To show 3 logos at once on desktop, exactly like the reference image
    const getVisiblePartners = () => {
        const items = [];
        for (let i = 0; i < 3; i++) {
            const idx = (currentIndex + i) % partners.length;
            items.push(partners[idx]);
        }
        return items;
    };

    const visibleItems = getVisiblePartners();

    return (
        <section 
            className="partner-slider-section"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="partner-slider-container">
                <h2 className="partner-slider-title">Mitra Kami</h2>

                <div className="partner-slider-track">
                    {visibleItems.map((partner, index) => (
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

                {/* Dot Pagination Indicators */}
                <div className="partner-slider-dots">
                    {partners.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`partner-dot ${currentIndex === idx ? 'active' : ''}`}
                            aria-label={`Pindah ke slide ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
