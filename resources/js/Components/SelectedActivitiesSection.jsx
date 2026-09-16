import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import { ChevronRight } from 'lucide-react';

const defaultActivities = [
    {
        id: 1,
        title: 'Business Matching Global',
        subtitle: 'Menghubungkan eksportir lokal dengan jaringan buyer internasional',
        tags: ['Business Matching', 'Export B2B'],
        image: '/images/activities-hero-reveal.jpg',
        link: '/activities'
    },
    {
        id: 2,
        title: 'Konsultasi & Legalitas',
        subtitle: 'Bimbingan sertifikasi dan pemenuhan regulasi negara tujuan',
        tags: ['Konsultasi', 'Sertifikasi'],
        image: '/images/about-services-photo.jpg',
        link: '/activities'
    },
    {
        id: 3,
        title: 'Logistik & Ekspor UMKM',
        subtitle: 'Fasilitasi kontainer kargo laut melalui Pelabuhan Tanjung Perak',
        tags: ['Logistik', 'Tanjung Perak'],
        image: '/images/about-delivery.jpg',
        link: '/activities'
    },
    {
        id: 4,
        title: 'Pelepasan Ekspor Perdana',
        subtitle: 'Pelepasan komoditas unggulan Jawa Timur ke pasar global',
        tags: ['Pelepasan', 'Pasar Global'],
        image: '/images/about-port-aerial.jpg',
        link: '/activities'
    }
];

export default function SelectedActivitiesSection({ items = defaultActivities }) {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <section className="editorial-showcase-section">
            <div className="editorial-showcase-container">
                {/* Sisi Kiri: Judul Berita */}
                <div className="editorial-left-col">
                    <span className="editorial-kicker">INFORMASI TERKINI</span>
                    <h2 className="editorial-main-heading">Berita</h2>
                    <div className="editorial-cta-wrapper">
                        <Link href="/activities" className="editorial-cta-link">
                            LIHAT SEMUA
                        </Link>
                    </div>
                </div>

                {/* Sisi Kanan: Expanding Cards Accordion */}
                <div 
                    className="editorial-accordion-wrapper"
                    onMouseLeave={() => setActiveIndex(null)}
                >
                    {items.map((item, index) => {
                        const isActive = activeIndex === index;
                        return (
                            <div 
                                key={item.id} 
                                className={`editorial-expand-card ${isActive ? 'is-active' : ''}`}
                                onMouseEnter={() => setActiveIndex(index)}
                            >
                                <img 
                                    src={item.image} 
                                    alt={item.title} 
                                    className="editorial-expand-img"
                                    loading="lazy"
                                />
                                <div className="editorial-expand-overlay" />

                                {/* Badges di Kanan Atas */}
                                <div className="editorial-expand-tags">
                                    {item.tags?.map((tag, tIdx) => (
                                        <span key={tIdx} className="editorial-expand-tag">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Content di Bawah */}
                                <div className="editorial-expand-content">
                                    <h3 className="editorial-expand-title">{item.title}</h3>
                                    <p className="editorial-expand-subtitle">{item.subtitle}</p>
                                    
                                    <Link 
                                        href={item.link || '/activities'} 
                                        className={`editorial-expand-btn ${isActive ? 'btn-active' : 'btn-outline'}`}
                                    >
                                        <span>More details</span>
                                        <ChevronRight size={16} />
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
