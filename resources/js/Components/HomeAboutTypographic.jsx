import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ShieldCheck, Compass, Target } from 'lucide-react';
import { Link } from '@inertiajs/react';

const casesData = [
    {
        id: '01',
        icon: ShieldCheck,
        badge: 'LANDASAN HUKUM',
        category: 'PERPU NO. 2/2022 & PERMENDAG NO. 29/2022',
        title: 'Amanah Regulasi & Pembinaan Ekspor',
        subtitle: 'Landasan hukum pembinaan pelaku usaha dan perluasan akses pasar internasional',
        description: 'Kementerian Perdagangan Republik Indonesia sebagai pengemban amanah Peraturan Pemerintah Pengganti Undang-Undang (Perpu) Nomor 2 Tahun 2022 tentang Cipta Kerja Pasal 74 yang bertugas melakukan pembinaan terhadap Pelaku Usaha dalam rangka pengembangan Ekspor untuk perluasan akses Pasar bagi Barang dan Jasa produksi dalam negeri. Pada Peraturan Menteri Perdagangan Republik Indonesia Nomor 29 Tahun 2022, Direktorat Pengembangan Pasar dan Informasi Ekspor, Direktorat Jenderal Pengembangan Ekspor Nasional (Ditjen. PEN), mempunyai tugas melaksanakan perumusan dan pelaksanaan kebijakan di bidang pengembangan dan peningkatan daya saing pasar ekspor, pelaku ekspor, dan pengembangan kelembagaan promosi.'
    },
    {
        id: '02',
        icon: Compass,
        badge: 'PERAN STRATEGIS',
        category: 'PERPANJANGAN TANGAN DITJEN PEN',
        title: 'Akselerasi Eksportir Jawa Timur',
        subtitle: 'Pemanfaatan peluang ekspor, distribusi inquiry, dan Market Intelligence resmi',
        description: 'Export Center Surabaya (ECS), sebagai perpanjangan tangan regional dari Direktorat Pengembangan Pasar dan Informasi Ekspor, berperan dalam mengoptimalkan peran eksportir daerah dalam memanfaatkan peluang ekspor, termasuk penyebaran inquiry dan hasil Market Intelligence yang diperoleh dari Perwakilan Perdagangan di Luar Negeri, pemanfaatan Free Trade Agreement (FTA), serta promosi ekspor. Dengan hadirnya Export Center Surabaya, kebijakan yang dikeluarkan Kementerian Perdagangan dapat tersampaikan dan dimanfaatkan secara optimal oleh pelaku usaha. Selain itu, informasi yang bersumber dari Perwakilan Perdagangan luar negeri dapat disampaikan secara akurat dan cepat untuk memperluas pasar ekspor.'
    },
    {
        id: '03',
        icon: Target,
        badge: 'ORIENTASI LAYANAN',
        category: 'LAYANAN PUBLIK TERPADU',
        title: 'Maksud & Tujuan Penyelenggaraan ECS',
        subtitle: 'Pusat konsultasi dan pendampingan ekspor komprehensif bagi pelaku usaha',
        description: 'Maksud Penyelenggaraan Export Center Surabaya adalah untuk mengoptimalkan peluang pasar ekspor di pasar internasional agar dapat dimanfaatkan oleh para pelaku usaha ekspor. Tujuan dari kegiatan penyelenggaraan Export Center Surabaya adalah menyediakan layanan publik yang berfungsi sebagai tempat para pelaku usaha untuk memperoleh konsultasi dan informasi mengenai peluang pasar ekspor diantaranya buyers inquiry yang diperoleh dari Perwakilan Perdagangan di Luar Negeri, Market Intelligence, pemanfaatan Free Trade Agreement maupun promosi ekspor.'
    }
];

export default function HomeAboutTypographic() {
    const triggerRef = useRef(null);
    const [activeIdx, setActiveIdx] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!triggerRef.current) return;
            const rect = triggerRef.current.getBoundingClientRect();
            const navbarHeight = 88; // Match navbar height
            
            // Total vertical distance to scroll through all 3 slides
            const scrollDistance = triggerRef.current.offsetHeight - (window.innerHeight - navbarHeight);
            if (scrollDistance <= 0) return;

            // Distance scrolled from the point the section hits below navbar
            const currentScroll = navbarHeight - rect.top;
            const rawRatio = Math.min(Math.max(currentScroll / scrollDistance, 0), 1);
            setProgress(rawRatio);

            // Exactly 3 equal discrete stages:
            // 0.00 - 0.33 => Panel 0 (1st)
            // 0.34 - 0.66 => Panel 1 (2nd)
            // 0.67 - 1.00 => Panel 2 (3rd)
            const stage = Math.min(Math.floor(rawRatio * 3), 2);
            setActiveIdx(stage);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const goToSlide = (index) => {
        if (!triggerRef.current) return;
        const navbarHeight = 88;
        const scrollDistance = triggerRef.current.offsetHeight - (window.innerHeight - navbarHeight);
        const targetScroll = triggerRef.current.offsetTop - navbarHeight + (index / 3) * scrollDistance + 10;
        window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    };

    return (
        <section className="hscroll-about-trigger" ref={triggerRef} id="tentang-ecs">
            {/* Sticky Screen Viewport positioned exactly below navbar */}
            <div className="hscroll-about-sticky">
                {/* Header Bar */}
                <header className="hscroll-topbar">
                    <div className="hscroll-brand-block">
                        <span className="hscroll-kicker">/ PROFIL LEMBAGA</span>
                        <h2 className="hscroll-title">
                            EXPORT CENTER <span className="hscroll-outline-text">SURABAYA</span>
                        </h2>
                    </div>

                    {/* Step Tabs Indicator (01, 02, 03) */}
                    <div className="hscroll-indicator-wrap">
                        <div className="hscroll-pills">
                            {casesData.map((item, i) => (
                                <button 
                                    key={item.id} 
                                    type="button"
                                    onClick={() => goToSlide(i)}
                                    className={`hscroll-pill-btn ${activeIdx === i ? 'is-active' : ''}`}
                                    aria-label={`Slide ${i + 1}`}
                                >
                                    <span className="pill-dot" />
                                    <span className="pill-num">0{i + 1}</span>
                                </button>
                            ))}
                        </div>
                        <span className="hscroll-counter">
                            0{activeIdx + 1} <span className="hscroll-divider">/</span> 0{casesData.length}
                        </span>
                    </div>
                </header>

                {/* Single Viewport Stage: Panels slide in ONE BY ONE from Right to Left */}
                <div className="hscroll-stage">
                    {casesData.map((item, idx) => {
                        const IconComponent = item.icon;
                        
                        // Positioning state relative to activeIdx:
                        // idx < activeIdx: passed (slide out to left: -100%)
                        // idx === activeIdx: currently active (centered: 0%)
                        // idx > activeIdx: waiting to enter (off-screen to right: +100%)
                        let panelClass = 'panel-waiting';
                        if (idx < activeIdx) {
                            panelClass = 'panel-passed';
                        } else if (idx === activeIdx) {
                            panelClass = 'panel-active';
                        }

                        return (
                            <article key={item.id} className={`hscroll-slide-panel ${panelClass}`}>
                                <div className="hscroll-panel-container">
                                    
                                    {/* Left Architectural Badge & Big Number */}
                                    <div className="hscroll-left-accent">
                                        <div className="hscroll-accent-badge">
                                            <IconComponent size={20} className="accent-icon" />
                                            <span>{item.badge}</span>
                                        </div>
                                        <div className="hscroll-giant-number" aria-hidden="true">
                                            {item.id}
                                        </div>
                                    </div>

                                    {/* Right Content Stream (Clean, highly readable typography) */}
                                    <div className="hscroll-right-content">
                                        <span className="hscroll-category-tag">{item.category}</span>
                                        
                                        <h3 className="hscroll-main-title">{item.title}</h3>
                                        
                                        <p className="hscroll-lead-subtitle">{item.subtitle}</p>

                                        <div className="hscroll-body-prose-wrap">
                                            <p className="hscroll-exact-text">
                                                {item.description}
                                            </p>
                                        </div>

                                        <div className="hscroll-action-area">
                                            <Link href="/about" className="hscroll-cta-link">
                                                <span>Pelajari Dokumen Resmi</span>
                                                <ArrowRight size={16} strokeWidth={2.4} />
                                            </Link>
                                        </div>
                                    </div>

                                </div>
                            </article>
                        );
                    })}
                </div>

                {/* Bottom Global Progress Bar */}
                <div className="hscroll-bottom-progress-rail">
                    <div 
                        className="hscroll-bottom-progress-fill" 
                        style={{ width: `${Math.round(progress * 100)}%` }} 
                    />
                </div>
            </div>
        </section>
    );
}
