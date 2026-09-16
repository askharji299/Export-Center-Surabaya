import React, { useState, useEffect, useRef } from 'react';
import { Users, Star, Ship } from 'lucide-react';

const defaultStats = [
    {
        id: 1,
        value: 1234,
        suffix: '+',
        label: 'Klien Puas',
        icon: Users
    },
    {
        id: 2,
        value: 1234,
        suffix: '+',
        label: 'Ulasan Pelanggan',
        icon: Star
    },
    {
        id: 3,
        value: 1234,
        suffix: '+',
        label: 'Pengiriman Selesai',
        icon: Ship
    }
];

function AnimatedCounter({ endValue, duration = 2000, isVisible, suffix = '' }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isVisible) return;

        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            
            // Ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = Math.floor(easeProgress * endValue);
            
            setCount(currentVal);

            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                setCount(endValue);
            }
        };

        window.requestAnimationFrame(step);
    }, [isVisible, endValue, duration]);

    // Format number with dots (e.g. 1.234)
    const formatted = count.toLocaleString('id-ID');

    return (
        <span>
            {formatted}{suffix}
        </span>
    );
}

export default function HeroStatsBar({ stats = defaultStats }) {
    const [hasAnimated, setHasAnimated] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasAnimated(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="hero-stats-bar-section" ref={sectionRef}>
            <div className="hero-stats-bar-container">
                {/* Far Left: Explanatory Text */}
                <div className="hero-stats-text-col">
                    <p className="hero-stats-desc">
                        ECS menyediakan berbagai layanan untuk mendukung pelaku usaha dalam proses ekspor, mulai dari konsultasi terkait prosedur dan legalitas, penyebaran inquiry dari calon pembeli internasional, hingga business matching untuk memfasilitasi pertemuan dan negosiasi antara eksportir dan buyer. Melalui aplikasi InaExport, ECS juga membantu perusahaan terhubung dengan perwakilan perdagangan di luar negeri. Selain itu, ECS memfasilitasi penyelesaian sengketa antara eksportir dan buyer guna memastikan kelancaran transaksi ekspor.
                    </p>
                    <p className="hero-stats-desc">
                        Dengan antarmuka yang intuitif dan dukungan pelanggan yang siap membantu, kami adalah solusi terbaik untuk memastikan pengiriman Anda berjalan lancar. Bergabunglah dengan kami dan rasakan kemudahan dalam mengelola semua pengiriman Anda di satu tempat!
                    </p>
                </div>

                <div className="hero-stats-main-divider" />

                {/* Right: The 3 stats shifted to the right */}
                <div className="hero-stats-numbers-group">
                    {stats.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                            <React.Fragment key={item.id || index}>
                                {index > 0 && <div className="hero-stat-divider" />}
                                <div className="hero-stat-col">
                                    {IconComponent && (
                                        <div className="hero-stat-icon-wrapper">
                                            <IconComponent size={28} strokeWidth={2.2} />
                                        </div>
                                    )}
                                    <span className="hero-stat-number">
                                        <AnimatedCounter 
                                            endValue={item.value} 
                                            suffix={item.suffix || ''} 
                                            isVisible={hasAnimated} 
                                        />
                                    </span>
                                    <span className="hero-stat-label">{item.label}</span>
                                </div>
                            </React.Fragment>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

