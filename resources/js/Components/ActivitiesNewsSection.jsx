import React, { useState, useEffect, useRef } from 'react';
import { Search, RotateCcw, ChevronLeft, ChevronRight, ArrowUpRight, TrendingUp, Sparkles, ArrowRight, Check, SlidersHorizontal, X, Filter, Eye } from 'lucide-react';

// Single Article Card with Typewriter Effect on Popup Reveal + Real Image Asset
function TypewriterArticleCard({ item, index, activeCategory, onTagClick }) {
    const cardRef = useRef(null);
    const [isRevealed, setIsRevealed] = useState(false);
    const [displayedTitle, setDisplayedTitle] = useState('');
    const [isTypingDone, setIsTypingDone] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsRevealed(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Typewriter effect triggered once revealed
    useEffect(() => {
        if (!isRevealed) return;

        let charIndex = 0;
        const targetTitle = item.title;
        const delayTimer = setTimeout(() => {
            const interval = setInterval(() => {
                charIndex++;
                setDisplayedTitle(targetTitle.slice(0, charIndex));
                if (charIndex >= targetTitle.length) {
                    clearInterval(interval);
                    setIsTypingDone(true);
                }
            }, 26);

            return () => clearInterval(interval);
        }, 220 + (index % 4) * 80);

        return () => clearTimeout(delayTimer);
    }, [isRevealed, item.title, index]);

    return (
        <article 
            ref={cardRef}
            className={`futuristic-news-card ${isRevealed ? 'is-revealed' : ''}`}
            style={{ '--card-delay': `${(index % 4) * 90}ms` }}
        >
            <div className="card-ambient-glow" />
            
            {/* Top Interactive Status Bar (NO DOT) */}
            <div className="card-top-status-bar">
                <button 
                    type="button"
                    onClick={(e) => {
                        e.stopPropagation();
                        onTagClick(item.category);
                    }}
                    className={`card-category-tag ${activeCategory === item.category ? 'tag-active' : ''}`}
                >
                    {item.category}
                </button>
                <div className="card-read-meta">
                    <span className="card-read-time">{item.readTime} baca</span>
                    <span className="card-dot-sep">•</span>
                    <span className="card-date-stamp">{item.date}</span>
                </div>
            </div>

            {/* Visual Viewport with Real Asset Image & Subtle Scrim */}
            <div className="futuristic-visual-viewport">
                <img 
                    src="/images/port-side-view.png" 
                    alt={item.title}
                    className="card-media-image"
                    loading="lazy"
                />
                <div className="card-media-gradient-scrim" />

                {/* Corner quick action icon */}
                <div className="viewport-action-pill">
                    <ArrowUpRight size={14} className="viewport-arrow" />
                </div>
            </div>

            {/* Bottom Content with Interactive Typewriter Title */}
            <div className="card-content-body">
                <h4 className="card-typewriter-title">
                    {displayedTitle || (isRevealed ? '' : item.title.slice(0, 15) + '...')}
                    {isRevealed && !isTypingDone && (
                        <span className="card-inline-cursor">|</span>
                    )}
                </h4>
                
                <p className="card-lorem-summary">
                    {item.summary}
                </p>

                <div className="card-footer-metrics">
                    <span className="footer-origin-pill">Export Center Surabaya</span>
                    <div className="card-interactive-indicator">
                        <span className="indicator-label">Baca Selengkapnya</span>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default function ActivitiesNewsSection() {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOption, setSortOption] = useState('Terbaru');
    const [selectedCategory, setSelectedCategory] = useState('Semua');
    const [currentPage, setCurrentPage] = useState(1);

    const categories = ['Semua', 'Nasional', 'Global Trade', 'UMKM Go Global', 'Kebijakan', 'Inquiry Pasar', 'Logistik'];

    // All news use the cargo ship port container image: /images/port-side-view.png
    const articles = [
        {
            id: 1,
            category: 'Nasional',
            date: '14 Sep 2026',
            readTime: '3 min',
            image: '/images/port-side-view.png',
            title: 'Pelepasan Kontainer Ekspor Komoditas Pertanian Unggulan ke Pasar Timur Tengah',
            summary: 'Export Center Surabaya bersama Ditjen PEN Kemendag memfasilitasi pelepasan 5 kontainer komoditas rempah dan kopi robusta binaan UMKM Jawa Timur menuju Uni Emirat Arab.',
        },
        {
            id: 2,
            category: 'Global Trade',
            date: '12 Sep 2026',
            readTime: '4 min',
            image: '/images/port-side-view.png',
            title: 'Fasilitasi Business Matching Terbuka Antara Eksportir Lokal dengan Buyer Eropa',
            summary: 'Pertemuan negosiasi dagang bilateral hybrid mempertemukan 25 pelaku usaha potensial dengan agregator internasional dari Jerman, Belanda, dan Perancis.',
        },
        {
            id: 3,
            category: 'UMKM Go Global',
            date: '09 Sep 2026',
            readTime: '5 min',
            image: '/images/port-side-view.png',
            title: 'Workshop Standardisasi Kemasan dan Sertifikasi HACCP Produk Makanan Olahan',
            summary: 'Pelatihan teknis intensif kurasi kemasan ramah lingkungan dan kepatuhan regulasi keamanan pangan internasional bagi industri makanan minuman siap ekspor.',
        },
        {
            id: 4,
            category: 'Kebijakan',
            date: '08 Sep 2026',
            readTime: '4 min',
            image: '/images/port-side-view.png',
            title: 'Sosialisasi Regulasi Perdagangan Luar Negeri dan Tata Kelola Dokumen Ekspor 2026',
            summary: 'Pemutakhiran aturan kepabeanan, skema sertifikat asal (SKA Elektronik), serta tata laksana kepatuhan ekspor terbaru untuk meminimalkan risiko kepelabuhanan.',
        },
        {
            id: 5,
            category: 'Inquiry Pasar',
            date: '07 Sep 2026',
            readTime: '3 min',
            image: '/images/port-side-view.png',
            title: 'Diseminasi Peluang Ekspor Komoditas Kopi Specialty dan Rempah ke Amerika Utara',
            summary: 'Analisis mendalam tren permintaan pasar specialty coffee dan bumbu rempah organik di AS dan Kanada beserta persyaratan uji laboratorium yang wajib dipenuhi.',
        },
        {
            id: 6,
            category: 'UMKM Go Global',
            date: '04 Sep 2026',
            readTime: '4 min',
            image: '/images/port-side-view.png',
            title: 'Pendampingan Teknis Onboarding Platform Digital Perdagangan InaExport Kemendag',
            summary: 'Bimbingan terpadu bagi pelaku usaha untuk memaksimalkan profil katalog digital dan merespons buyer inquiries global secara real-time melalui sistem InaExport.',
        },
        {
            id: 7,
            category: 'Logistik',
            date: '03 Sep 2026',
            readTime: '6 min',
            image: '/images/port-side-view.png',
            title: 'Optimasi Rantai Pasok Maritim dan Efisiensi Freight Forwarding Jalur Pasifik',
            summary: 'Strategi kolaborasi bersama asosiasi logistik dan pelayaran dalam menekan biaya operasional ocean freight dan konsolidasi muatan kontainer ekspor.',
        },
        {
            id: 8,
            category: 'Global Trade',
            date: '01 Sep 2026',
            readTime: '5 min',
            image: '/images/port-side-view.png',
            title: 'Peningkatan Daya Saing Industri Furnitur Kayu Legal Menembus Pasar Skandinavia',
            summary: 'Implementasi verifikasi legalitas kayu (SVLK) dan tren desain minimalis berkelanjutan yang diminati pasar retail perabot rumah tangga di negara-negara Nordik.',
        },
        {
            id: 9,
            category: 'Nasional',
            date: '28 Agu 2026',
            readTime: '4 min',
            image: '/images/port-side-view.png',
            title: 'Kolaborasi Strategis Pemprov Jatim dan Kemendag Pacu Diversifikasi Produk Ekspor',
            summary: 'Sinergi lintas instansi untuk memperluas portofolio komoditas bernilai tambah tinggi dari sektor manufaktur, perikanan budidaya, dan kerajinan kreatif daerah.',
        },
        {
            id: 10,
            category: 'Inquiry Pasar',
            date: '26 Agu 2026',
            readTime: '4 min',
            image: '/images/port-side-view.png',
            title: 'Permintaan Tinggi Briket Arang Tempurung Kelapa Indonesia di Pasar Timur Tengah',
            summary: 'Laporan intelligence pasar mencatat lonjakan inquiry briket shisha kualitas premium dari Arab Saudi, Yordania, dan Turki dengan kontrak jangka panjang.',
        },
        {
            id: 11,
            category: 'Logistik',
            date: '24 Agu 2026',
            readTime: '5 min',
            image: '/images/port-side-view.png',
            title: 'Pemanfaatan Cold Chain Logistics Terintegrasi untuk Ekspor Perikanan Segar',
            summary: 'Penerapan teknologi pendingin rantai dingin modern dari pelabuhan Tanjung Perak guna menjaga kesegaran tuna dan udang vaname hingga tiba di pelabuhan tujuan.',
        },
        {
            id: 12,
            category: 'Kebijakan',
            date: '21 Agu 2026',
            readTime: '4 min',
            image: '/images/port-side-view.png',
            title: 'Sosialisasi Pemanfaatan Perjanjian Dagang RCEP dan Bebas Tarif Bea Masuk',
            summary: 'Panduan praktis bagi eksportir Jawa Timur dalam memanfaatkan fasilitas preferensi tarif bea masuk di 15 negara anggota Regional Comprehensive Economic Partnership.',
        },
        {
            id: 13,
            category: 'UMKM Go Global',
            date: '18 Agu 2026',
            readTime: '3 min',
            image: '/images/port-side-view.png',
            title: 'Kurasi Produk Kerajinan Etnik Ramah Lingkungan untuk Pasar Pameran Tokyo Gift Show',
            summary: 'Sebanyak 12 UMKM kriya binaan lolos kurasi ketat produk berbasis anyaman serat alam dan pewarna nabati untuk dipromosikan langsung ke pasar Jepang.',
        },
        {
            id: 14,
            category: 'Global Trade',
            date: '15 Agu 2026',
            readTime: '5 min',
            image: '/images/port-side-view.png',
            title: 'Penetrasi Pasar Produk F&B Halal Indonesia Menembus Ritel Modern Afrika Selatan',
            summary: 'Misi dagang khusus produk consumer goods halal berhasil membukukan potensi transaksi ekspor melalui jejaring supermarket terkemuka di Johannesburg.',
        },
        {
            id: 15,
            category: 'Inquiry Pasar',
            date: '12 Agu 2026',
            readTime: '4 min',
            image: '/images/port-side-view.png',
            title: 'Peluang Ekspor Minyak Atsiri (Essential Oil) Nilam dan Pala ke Industri Kosmetik Eropa',
            summary: 'Kebutuhan bahan baku wewangian alami grade perfumery di Perancis dan Swiss membuka kesempatan ekspansi pasokan minyak atsiri murni asal produsen lokal.',
        },
        {
            id: 16,
            category: 'Logistik',
            date: '10 Agu 2026',
            readTime: '4 min',
            image: '/images/port-side-view.png',
            title: 'Akselerasi Pengurusan Dokumen Kepabeanan Ekspor Melalui Digital Single Window',
            summary: 'Layanan terintegrasi pemrosesan Pemberitahuan Ekspor Barang (PEB) yang mempercepat waktu dwelling time dan clearance logistik di terminal peti kemas.',
        },
    ];

    const popularArticles = [
        {
            id: 101,
            category: 'Global Trade',
            views: '4.2k views',
            image: '/images/port-side-view.png',
            title: 'Ekspor Produk Makanan Olahan Tembus Pasar Uni Emirat Arab Senilai Kontrak Strategis',
        },
        {
            id: 102,
            category: 'Nasional',
            views: '3.8k views',
            image: '/images/port-side-view.png',
            title: 'Peta Jalan Hilirisasi Rempah dan Biofarmaka Jawa Timur Menembus Jaringan Rantai Pasok Dunia',
        },
        {
            id: 103,
            category: 'UMKM Go Global',
            views: '2.9k views',
            image: '/images/port-side-view.png',
            title: 'Eksplorasi Pasar Kerajinan Ramah Lingkungan (Eco-Friendly Crafts) Tembus Pembeli Jepang',
        },
        {
            id: 104,
            category: 'Global Trade',
            views: '2.7k views',
            image: '/images/port-side-view.png',
            title: 'Pertumbuhan Permintaan Komoditas Kakao Olahan Berkualitas Tinggi di Wilayah Eropa Tengah',
        },
        {
            id: 105,
            category: 'Kebijakan',
            views: '2.4k views',
            image: '/images/port-side-view.png',
            title: 'Skema Fasilitasi Pembiayaan Ekspor Terpadu Bersama Lembaga Keuangan Terakreditasi',
        },
    ];

    const filteredArticles = articles.filter(item => {
        const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.summary.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCat = selectedCategory === 'Semua' || item.category.toLowerCase() === selectedCategory.toLowerCase();
        return matchesSearch && matchesCat;
    });

    const ITEMS_PER_PAGE = 6;
    const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE) || 1;
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedArticles = filteredArticles.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const handleResetFilter = () => {
        setSearchTerm('');
        setSelectedCategory('Semua');
        setSortOption('Terbaru');
        setCurrentPage(1);
    };

    const handleCategoryChange = (cat) => {
        setSelectedCategory(cat);
        setCurrentPage(1);
    };

    const handleSearchChange = (val) => {
        setSearchTerm(val);
        setCurrentPage(1);
    };

    return (
        <section id="activities-news-section" className="activities-news-section">
            <div className="news-container">
                {/* Executive Filter & Search Control Hub (Restyled) */}
                <div className="news-filter-hub">
                    {/* Top Tier: Category Track */}
                    <div className="hub-categories-tier">
                        <div className="hub-categories-label">
                            <Filter size={15} className="hub-label-icon" />
                            <span>Kategori:</span>
                        </div>
                        <div className="hub-pills-scroll">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    type="button"
                                    onClick={() => handleCategoryChange(cat)}
                                    className={`hub-category-pill ${selectedCategory === cat ? 'pill-active' : ''}`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="hub-tier-divider" />

                    {/* Bottom Tier: Search & Sorting Strip */}
                    <div className="hub-controls-tier">
                        {/* Search Input with Integrated Icon */}
                        <div className="hub-search-wrapper">
                            <Search size={16} className="hub-search-icon" />
                            <input 
                                type="text"
                                value={searchTerm}
                                onChange={(e) => handleSearchChange(e.target.value)}
                                placeholder="Cari warta ekspor, pelatihan, buyer inquiry..."
                                className="hub-search-input"
                            />
                            {searchTerm && (
                                <button 
                                    type="button" 
                                    onClick={() => handleSearchChange('')} 
                                    className="hub-search-clear-btn"
                                    aria-label="Hapus kata kunci pencarian"
                                >
                                    <X size={12} />
                                </button>
                            )}
                        </div>

                        {/* Right Actions: Sort Selector + Result Badge + Reset Button */}
                        <div className="hub-actions-strip">
                            <div className="hub-sort-container">
                                <SlidersHorizontal size={15} className="hub-sort-icon" />
                                <select 
                                    value={sortOption} 
                                    onChange={(e) => setSortOption(e.target.value)}
                                    className="hub-sort-dropdown"
                                    aria-label="Urutkan Warta"
                                >
                                    <option value="Terbaru">Urutkan: Terbaru</option>
                                    <option value="Terpopuler">Urutkan: Terpopuler</option>
                                    <option value="Terlama">Urutkan: Terlama</option>
                                </select>
                            </div>

                            <div className="hub-count-badge">
                                <span>{filteredArticles.length} Warta</span>
                            </div>

                            {(searchTerm || selectedCategory !== 'Semua') && (
                                <button 
                                    type="button" 
                                    onClick={handleResetFilter} 
                                    className="hub-reset-btn"
                                    title="Reset Semua Filter"
                                >
                                    <RotateCcw size={13} />
                                    <span>Reset</span>
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                {/* Main Content Layout: Card Grid Feed + Live Radar Sidebar */}
                <div className="news-content-layout">
                    {/* Left Column Feed */}
                    <div className="news-feed-column">

                        <div className="futuristic-cards-grid">
                            {paginatedArticles.length > 0 ? (
                                paginatedArticles.map((item, index) => (
                                    <TypewriterArticleCard
                                        key={item.id}
                                        item={item}
                                        index={index}
                                        activeCategory={selectedCategory}
                                        onTagClick={(cat) => handleCategoryChange(cat)}
                                    />
                                ))
                            ) : (
                                <div className="news-no-results">
                                    <p>Tidak ditemukan kegiatan yang cocok dengan kriteria pencarian.</p>
                                    <button onClick={handleResetFilter} className="news-reset-btn">Reset Filter</button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right Column: Trending Dispatch Sidebar */}
                    <aside className="news-sidebar-column">
                        <div className="sidebar-sticky-panel">
                            <div className="sidebar-popular-card">
                                <div className="sidebar-panel-header">
                                    <div className="panel-title-group">
                                        <div className="trending-icon-bubble">
                                            <TrendingUp size={18} />
                                        </div>
                                        <div>
                                            <h3 className="sidebar-heading">Warta Terpopuler</h3>
                                            <span className="sidebar-subheading">Paling banyak dibaca eksportir</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="sidebar-articles-list">
                                    {popularArticles.map((sideItem, idx) => (
                                        <article key={sideItem.id} className="popular-article-row">
                                            <div className="popular-thumb-wrapper">
                                                <img 
                                                    src={sideItem.image} 
                                                    alt={sideItem.title} 
                                                    className="popular-thumb-img"
                                                    loading="lazy"
                                                />
                                                <span className={`popular-rank-tag rank-tag-${idx + 1}`}>
                                                    {String(idx + 1).padStart(2, '0')}
                                                </span>
                                            </div>
                                            <div className="popular-item-content">
                                                <div className="popular-meta-line">
                                                    <span className="popular-category-pill">{sideItem.category}</span>
                                                    <span className="popular-views-counter">
                                                        <Eye size={12} className="views-icon" />
                                                        <span>{sideItem.views}</span>
                                                    </span>
                                                </div>
                                                <h4 className="popular-headline">{sideItem.title}</h4>
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>

                {/* Pagination Section */}
                {totalPages > 1 && (
                    <div className="news-pagination-area">
                        <div className="news-pagination-bar">
                            <button 
                                className="pagination-btn pagination-nav" 
                                disabled={currentPage === 1}
                                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                aria-label="Halaman Sebelumnya"
                            >
                                <ChevronLeft size={16} />
                            </button>
                            
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                                <button
                                    key={num}
                                    onClick={() => setCurrentPage(num)}
                                    className={`pagination-btn ${currentPage === num ? 'pagination-active' : ''}`}
                                >
                                    {num}
                                </button>
                            ))}

                            <button 
                                className="pagination-btn pagination-nav"
                                disabled={currentPage === totalPages}
                                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                aria-label="Halaman Berikutnya"
                            >
                                <ChevronRight size={16} />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
