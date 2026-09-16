import React, { useState, useEffect, useRef } from 'react';
import { 
    Leaf, 
    Fish, 
    Armchair, 
    Coffee, 
    Utensils, 
    Factory, 
    ArrowRight, 
    Sparkles, 
    Globe, 
    ShieldCheck, 
    Award 
} from 'lucide-react';
import { Link } from '@inertiajs/react';

const productsData = [
    {
        id: 'spices',
        title: 'Spices',
        subtitle: 'Rempah Khas Tropis Nusantara Berkelas Dunia',
        description: 'Indonesia is an archipelagic country rich in natural resources, especially spices which have been known worldwide since centuries ago. Spices from Indonesia have high quality and are widely used in culinary, pharmaceutical, and cosmetic industries.',
        icon: Leaf,
        badge: 'Rempah Unggulan',
        regions: 'Maluku, Sumatera, Sulawesi',
        metric: 'Komoditas Ekspor Tertinggi',
        tags: ['Pala & Fuli', 'Cengkeh', 'Kayu Manis', 'Lada Hitam / Putih']
    },
    {
        id: 'fish',
        title: 'Fish',
        subtitle: 'Potensi Maritim & Perikanan Tangkap Berkelanjutan',
        description: 'Indonesia is a maritime country rich in marine resources, offering top quality fishery and aquaculture products that meet rigorous international freshness and food safety standards.',
        icon: Fish,
        badge: 'Hasil Laut & Budidaya',
        regions: 'Laut Jawa, Maluku, Natuna, Arafura',
        metric: 'Pemasok Terbesar Dunia',
        tags: ['Tuna Segar & Beku', 'Udang Vaname', 'Cumi-cumi', 'Rumput Laut Organik']
    },
    {
        id: 'furniture',
        title: 'Furniture',
        subtitle: 'Keahlian Kayu Premium & Anyaman Rotan Alami',
        description: 'Indonesia is one of the world\'s leading producers of high-quality handcrafted furniture made from certified sustainable timber, natural rattan, and artisanal craftsmanship.',
        icon: Armchair,
        badge: 'Kriya & Furnitur',
        regions: 'Jepara, Cirebon, Bali, Surabaya',
        metric: 'Desain Berkelanjutan',
        tags: ['Kayu Jati Solid', 'Rotan Alami', 'Outdoor Furniture', 'Dekorasi Rumah']
    },
    {
        id: 'coffee',
        title: 'Coffee',
        subtitle: 'Cita Rasa Spesialti Kopi Pegunungan Indonesia',
        description: 'Coffee is one of the plantation commodities that makes Indonesia renowned as one of the largest and most distinctive specialty single-origin coffee exporters in the global market.',
        icon: Coffee,
        badge: 'Kopi Spesialti',
        regions: 'Aceh Gayo, Kintamani, Toraja, Jawa Timur',
        metric: 'Cita Rasa Khas Origin',
        tags: ['Arabika Single Origin', 'Robusta Fine', 'Green Beans', 'Roasted Beans']
    },
    {
        id: 'food-processing',
        title: 'Food Processing',
        subtitle: 'Inovasi Produk Olahan Pangan Bersertifikasi Global',
        description: 'Indonesia has great potential in the food processing industry, delivering diverse halal-certified packaged foods, beverages, and healthy culinary products to international shelves.',
        icon: Utensils,
        badge: 'Pangan Olahan',
        regions: 'Jawa Timur, Jawa Barat, Sumatera Utara',
        metric: 'Standar Mutu HACCP & Halal',
        tags: ['Makanan Kemasan', 'Bumbu Instan', 'Keripik Buah Alami', 'Minuman Herbal']
    },
    {
        id: 'manufactured',
        title: 'Memproduksi Produk',
        subtitle: 'Daya Saing Manufaktur dan Produksi Bernilai Tambah',
        description: 'Indonesia memiliki potensi besar dalam industri manufaktur, menghasilkan produk berkualitas ekspor yang berdaya saing global dengan dukungan teknologi dan tenaga kerja terampil.',
        icon: Factory,
        badge: 'Industri Manufaktur',
        regions: 'Surabaya, Sidoarjo, Gresik, Cikarang',
        metric: 'Efisiensi Skala Industri',
        tags: ['Alas Kaki', 'Tekstil & Apparel', 'Peralatan Rumah Tangga', 'Komponen Rekayasa']
    }
];

export default function HomeHighlightSection() {
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
        <section className="cerebrium-potential-section">
            {/* Top Section Header matching Cerebrium Style */}
            <div className="cerebrium-top-header">
                <div className="cerebrium-header-left">
                    <span className="cerebrium-header-sub">
                        Potensi Komoditas Ekspor Unggulan Indonesia Menuju Pasar Mancanegara
                    </span>
                </div>
                <div className="cerebrium-header-right">
                    <h2 className="cerebrium-header-title">
                        <span className="text-navy">Indonesian Products</span> with{' '}
                        <span className="text-green">Great Potential</span>
                    </h2>
                </div>
            </div>

            {/* Split Content: Sticky Navigation on Left + Scrolling Showcase Cards on Right */}
            <div className="cerebrium-split-container">
                {/* Left Column: Sticky List of Commodities */}
                <div className="cerebrium-sticky-col">
                    <div className="cerebrium-sticky-content">
                        <div className="cerebrium-kicker-row">
                            <span className="cerebrium-kicker-dot">•</span>
                            <span className="cerebrium-kicker-text">A FACT</span>
                        </div>

                        <nav className="cerebrium-nav-list" aria-label="Commodity Navigation">
                            {productsData.map((item, idx) => {
                                const isActive = activeIndex === idx;
                                return (
                                    <button
                                        key={item.id}
                                        type="button"
                                        onClick={() => scrollToCard(idx)}
                                        className={`cerebrium-nav-item ${isActive ? 'is-active' : ''}`}
                                    >
                                        <span className="cerebrium-nav-label">{item.title}</span>
                                    </button>
                                );
                            })}
                        </nav>
                    </div>
                </div>

                {/* Right Column: Scrolling Visual Cards */}
                <div className="cerebrium-cards-col">
                    {productsData.map((item, idx) => {
                        const IconComponent = item.icon;
                        const isActive = activeIndex === idx;

                        return (
                            <article
                                key={item.id}
                                ref={(el) => (cardRefs.current[idx] = el)}
                                className={`cerebrium-product-card ${isActive ? 'is-focused' : ''}`}
                            >
                                {/* Visual Card Container (Cerebrium styled visual frame) */}
                                <div className="cerebrium-visual-frame">
                                    <div className="cerebrium-visual-header">
                                        <div className="cerebrium-visual-badge">
                                            <Sparkles size={14} className="badge-sparkle-icon" />
                                            <span>{item.badge}</span>
                                        </div>
                                        <div className="cerebrium-visual-meta">
                                            <Globe size={14} />
                                            <span>Sentra: {item.regions}</span>
                                        </div>
                                    </div>

                                    <div className="cerebrium-visual-body">
                                        <div className="cerebrium-visual-icon-circle">
                                            <IconComponent size={44} strokeWidth={1.8} />
                                        </div>
                                        <div className="cerebrium-visual-highlights">
                                            <span className="cerebrium-visual-pill-title">Keunggulan Utama:</span>
                                            <span className="cerebrium-visual-pill-val">{item.metric}</span>
                                        </div>
                                    </div>

                                    {/* Commodity Tags */}
                                    <div className="cerebrium-visual-tags">
                                        {item.tags.map((tag, tIdx) => (
                                            <span key={tIdx} className="cerebrium-tag-chip">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Text Content & Copywriting (Exact from Image 2) */}
                                <div className="cerebrium-card-content">
                                    <h3 className="cerebrium-card-title">{item.title}</h3>
                                    <p className="cerebrium-card-subtitle">{item.subtitle}</p>
                                    <p className="cerebrium-card-description">{item.description}</p>

                                    <div className="cerebrium-card-action">
                                        <Link href="/services" className="cerebrium-action-btn">
                                            <span>Lihat Layanan & Pasar</span>
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
