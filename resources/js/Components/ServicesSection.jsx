import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from '@inertiajs/react';

const servicesData = [
    {
        id: 'business-matching',
        number: '01',
        title: 'Business Matching',
        subtitle: 'Temu Bisnis & Negosiasi Dagang Terarah',
        description: 'Business Matching menghubungkan pelaku usaha dengan calon mitra dagang potensial mancanegara melalui analisis kebutuhan, fasilitasi pertemuan B2B terstruktur, serta pendampingan negosiasi kontrak ekspor untuk mencapai kesepakatan transaksi yang saling menguntungkan.',
        iconUrl: '/images/services/service-1.png',
        tags: ['B2B Matchmaking', 'Negosiasi Kontrak', 'Kemitraan Jangka Panjang', 'Buyer Luar Negeri']
    },
    {
        id: 'export-consultation',
        number: '02',
        title: 'Export Consultation',
        subtitle: 'Bimbingan Teknis & Prosedur Ekspor Terpadu',
        description: 'Export Consultation menyediakan panduan komprehensif terkait seluruh proses ekspor, mulai dari regulasi kepabeanan, legalitas dan izin usaha, sertifikasi standar mutu produk internasional, hingga kalkulasi pembiayaan dan penentuan strategi penetrasi pasar global.',
        iconUrl: '/images/services/service-2.png',
        tags: ['Prosedur Ekspor', 'Legalitas & Regulasi', 'Sertifikasi Mutu', 'Konsultasi 1-on-1']
    },
    {
        id: 'inaexport-mentoring',
        number: '03',
        title: 'InaExport Mentoring',
        subtitle: 'Optimalisasi Platform Digital Kemendag RI',
        description: 'InaExport Mentoring mendukung perusahaan dalam mengoptimalkan pemanfaatan platform InaExport milik Ditjen Pengembangan Ekspor Nasional. Layanan ini mencakup pembuatan profil eksportir terverifikasi, katalogisasi produk digital, dan promosi produk ke jaringan perwakilan perdagangan di seluruh dunia.',
        iconUrl: '/images/services/service-3.png',
        tags: ['Portal InaExport', 'Katalog Produk Digital', 'Verifikasi Eksportir', 'Ditjen PEN']
    },
    {
        id: 'inquiry-dissemination',
        number: '04',
        title: 'Inquiry Dissemination',
        subtitle: 'Distribusi Permintaan Buyer Internasional',
        description: 'Inquiry Dissemination mempromosikan produk unggulan Anda ke buyer global potensial melalui pengelolaan dan distribusi inquiry resmi yang dihimpun oleh Perwakilan Perdagangan RI (ITPC & Atase Perdagangan) di berbagai negara tujuan ekspor secara cepat dan tepat sasaran.',
        iconUrl: '/images/services/service-4.png',
        tags: ['Buyers Inquiry', 'Validasi Permintaan', 'Atdag & ITPC', 'Akses Pasar Cepat']
    },
    {
        id: 'other-services',
        number: '05',
        title: 'Other Services',
        subtitle: 'Penyelesaian Kasus & Mediasi Perdagangan',
        description: 'Layanan lainnya meliputi Mediasi Kasus Dagang (Trade Case Mediation) yang memberikan bantuan penyelesaian sengketa transaksi secara profesional dengan menghubungkan pelaku usaha ke Perwakilan Perdagangan RI untuk proses mediasi dan perlindungan kepentingan bisnis ekspor.',
        iconUrl: '/images/services/service-5.png',
        tags: ['Mediasi Sengketa', 'Pendampingan Kasus', 'Jembatan Perwadag', 'Solusi Transaksi Aman']
    }
];

export default function ServicesSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const cardRefs = useRef([]);

    useEffect(() => {
        const observers = [];
        
        cardRefs.current.forEach((el, index) => {
            if (!el) return;
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveIndex(index);
                    }
                },
                {
                    root: null,
                    rootMargin: '-25% 0px -45% 0px',
                    threshold: 0.2
                }
            );
            observer.observe(el);
            observers.push(observer);
        });

        return () => observers.forEach((obs) => obs.disconnect());
    }, []);

    const scrollToCard = (index) => {
        setActiveIndex(index);
        const target = cardRefs.current[index];
        if (target) {
            const yOffset = -120;
            const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <section className="services-sticky-section">
            <div className="services-sticky-split-container">
                {/* Left Column: Sticky Title & Navigation Menu */}
                <div className="services-sticky-col">
                    <div className="services-sticky-content">
                        <span className="services-sticky-kicker">OUR SERVICES</span>
                        <h2 className="services-sticky-title">
                            <span className="text-navy">Explore Our</span>{' '}
                            <span className="text-green">Services</span>
                        </h2>

                        <nav className="services-sticky-nav" aria-label="Services Navigation">
                            {servicesData.map((item, idx) => {
                                const isActive = activeIndex === idx;
                                return (
                                    <button
                                        key={item.id}
                                        type="button"
                                        onClick={() => scrollToCard(idx)}
                                        className={`services-nav-btn ${isActive ? 'is-active' : ''}`}
                                    >
                                        <span className="services-nav-label">{item.title}</span>
                                    </button>
                                );
                            })}
                        </nav>
                    </div>
                </div>

                {/* Right Column: Scrolling Service Cards */}
                <div className="services-cards-col">
                    {servicesData.map((service, idx) => {
                        const isActive = activeIndex === idx;

                        return (
                            <article
                                key={service.id}
                                ref={(el) => (cardRefs.current[idx] = el)}
                                className={`service-showcase-card ${isActive ? 'is-focused' : ''}`}
                            >
                                {/* Header Row: Icon on Left, Big Number on Right */}
                                <div className="service-showcase-header">
                                    <div className="service-showcase-icon-wrap">
                                        <img 
                                            src={service.iconUrl} 
                                            alt={service.title} 
                                            className="service-showcase-icon-img" 
                                        />
                                    </div>
                                    <span className="service-showcase-bignum">{service.number}</span>
                                </div>

                                {/* Content */}
                                <div className="service-showcase-body">
                                    <h3 className="service-showcase-title">{service.title}</h3>
                                    <p className="service-showcase-subtitle">{service.subtitle}</p>
                                    <p className="service-showcase-desc">{service.description}</p>

                                    {/* Action Button */}
                                    <div className="service-showcase-action">
                                        <Link href="/contact" className="service-action-btn">
                                            <span>Konsultasikan Layanan Ini</span>
                                            <ArrowRight size={16} strokeWidth={2.2} />
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
