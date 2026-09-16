import React, { useState, useEffect, useRef } from 'react';
import { Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';

const defaultStats = [
    {
        id: 1,
        value: 10,
        suffix: '+',
        label: 'Years Experience',
    },
    {
        id: 2,
        value: 500,
        suffix: '+',
        label: 'Installations',
    },
    {
        id: 3,
        value: 25,
        suffix: '',
        label: 'Year Warranty',
    },
];

function AnimatedCounter({ endValue, duration = 2000, isVisible, suffix = '' }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isVisible) return;

        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            
            // Ease out cubic for smooth animation
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

    const formatted = count.toLocaleString('id-ID');

    return (
        <span>
            {formatted}{suffix}
        </span>
    );
}

export default function AboutFactsSection({ stats = defaultStats }) {
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
        <section className="about-facts-section" ref={sectionRef}>
            <div className="about-facts-container">
                {/* Left Column: 3 Vertical Stats matching reference image */}
                <div className="about-facts-stats-col">
                    {stats.map((item, index) => (
                        <React.Fragment key={item.id || index}>
                            <div className="about-stat-card">
                                <span className="about-stat-num">
                                    <AnimatedCounter 
                                        endValue={item.value} 
                                        suffix={item.suffix || ''} 
                                        isVisible={hasAnimated} 
                                    />
                                </span>
                                <span className="about-stat-text">{item.label}</span>
                            </div>
                            {index < stats.length - 1 && <div className="about-stat-line" />}
                        </React.Fragment>
                    ))}
                </div>

                {/* Right Column: Heading, Text Paragraphs, and Action Button */}
                <div className="about-facts-content-col">
                    <h2 className="about-facts-main-heading">
                        Menuju Pasar Global, Bersama Wujudkan Sukses Ekspor Produk Indonesia ke Mancanegara.
                    </h2>

                    <div className="about-facts-text-group">
                        <p className="about-facts-desc">
                            ECS menyediakan berbagai layanan untuk mendukung pelaku usaha dalam proses ekspor, mulai dari konsultasi terkait prosedur dan legalitas, penyebaran inquiry dari calon pembeli internasional, hingga business matching untuk memfasilitasi pertemuan dan negosiasi antara eksportir dan buyer. Melalui aplikasi InaExport, ECS juga membantu perusahaan terhubung dengan perwakilan perdagangan di luar negeri. Selain itu, ECS memfasilitasi penyelesaian sengketa antara eksportir dan buyer guna memastikan kelancaran transaksi ekspor.
                        </p>
                        <p className="about-facts-desc">
                            Dengan antarmuka yang intuitif dan dukungan pelanggan yang siap membantu, kami adalah solusi terbaik untuk memastikan pengiriman Anda berjalan lancar. Bergabunglah dengan kami dan rasakan kemudahan dalam mengelola semua pengiriman Anda di satu tempat!
                        </p>
                    </div>

                    <div className="about-facts-action-wrap">
                        <Link href="/contact" className="about-facts-btn">
                            <span>Hubungi Kami</span>
                            <ArrowRight size={18} strokeWidth={2.4} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
