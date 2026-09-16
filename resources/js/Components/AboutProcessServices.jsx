import React from 'react';
import { MessagesSquare, MailCheck, Users, FileText, Settings2, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from '@inertiajs/react';

const serviceItems = [
    {
        id: 1,
        number: '01',
        title: 'Konsultasi Ekspor',
        kicker: 'Layanan Pembinaan & Pendampingan Terpadu',
        desc: 'Layanan ini merupakan aktivitas utama dari ECS, yang menyediakan panduan bagi pelaku usaha dari berbagai skala, masyarakat umum, dan mahasiswa terkait ekspor. Konsultasi mencakup prosedur ekspor, legalitas, sertifikasi produk, standar produk ekspor, serta strategi perluasan pasar.',
        icon: MessagesSquare,
        tags: ['Prosedur Ekspor', 'Legalitas & Regulasi', 'Sertifikasi Produk', 'Standar Mutu Global', 'Akses Pasar Internasional'],
        highlights: [
            { label: 'Target Peserta', value: 'Pelaku Usaha, UMKM Siap Ekspor, & Eksportir Pemula' },
            { label: 'Fasilitas Layanan', value: 'Bimbingan 1-on-1 dengan Konsultan Ekspor Berpengalaman' }
        ]
    },
    {
        id: 2,
        number: '02',
        title: 'Penyebaran Inquiry',
        kicker: 'Peluang Permintaan Pasar Mancanegara',
        desc: 'Melalui proses penyebaran inquiry yang efisien, perusahaan dapat meningkatkan kepuasan pelanggan sekaligus mengoptimalkan produk dan layanan yang mereka tawarkan.',
        icon: MailCheck,
        tags: ['Buyers Inquiry', 'Validasi Permintaan', 'Akurasi Kebutuhan Pasar', 'Distribusi Informasi Cepat'],
        highlights: [
            { label: 'Sumber Valid', value: 'Perwakilan Perdagangan RI di Luar Negeri (ITPC & Atdag)' },
            { label: 'Manfaat Nyata', value: 'Akses Langsung ke Calon Pembeli Internasional yang Terverifikasi' }
        ]
    },
    {
        id: 3,
        number: '03',
        title: 'Business Matching',
        kicker: 'Temu Bisnis & Negosiasi Dagang Strategis',
        desc: 'Dengan business matching yang efektif, perusahaan dapat memaksimalkan potensi mereka dan menciptakan hubungan yang saling menguntungkan di dunia bisnis.',
        icon: Users,
        tags: ['B2B Matchmaking', 'Negosiasi Kontrak', 'Kemitraan Jangka Panjang', 'Akses Jejaring Global'],
        highlights: [
            { label: 'Format Kegiatan', value: 'Sesi Pertemuan Eksklusif (Hybrid: Daring & Luring)' },
            { label: 'Capaian Utama', value: 'Penandatanganan Kontrak & Realisasi Transaksi Ekspor' }
        ]
    },
    {
        id: 4,
        number: '04',
        title: 'Panduan Aplikasi Inaexport',
        kicker: 'Platform Digital Ekspor Kementerian Perdagangan',
        desc: 'Aplikasi ini dikembangkan oleh Direktorat Jenderal Pengembangan Ekspor Nasional dan berfungsi sebagai referensi utama bagi Perwadag saat ada inquiry dari buyer.',
        icon: FileText,
        tags: ['Portal InaExport Ditjen PEN', 'Katalog Digital', 'Etalase Produk Unggulan', 'Database Eksportir'],
        highlights: [
            { label: 'Sistem Terpadu', value: 'Terhubung Langsung dengan Dashboard Seluruh Perwakilan RI' },
            { label: 'Visibilitas Produk', value: 'Promosi Produk Ekspor 24/7 kepada Komunitas Buyer Global' }
        ]
    },
    {
        id: 5,
        number: '05',
        title: 'Layanan Lainnya',
        kicker: 'Mediasi Sengketa & Perlindungan Pelaku Usaha',
        desc: 'ECS juga membantu menyelesaikan sengketa antara pelaku usaha dan buyer, dengan menghubungkan mereka ke Perwadag untuk mediasi dan penyelesaian masalah.',
        icon: Settings2,
        tags: ['Mediasi Sengketa Dagang', 'Jembatan Komunikasi Perwadag', 'Advokasi Usaha', 'Penyelesaian Solutif'],
        highlights: [
            { label: 'Ruang Lingkup', value: 'Hambatan Transaksi, Klausul Pembayaran & Komunikasi Buyer' },
            { label: 'Perlindungan Bisnis', value: 'Pendampingan Mediasi Resmi Lintas Negara' }
        ]
    }
];

export default function AboutProcessServices() {
    return (
        <section className="about-process-section">
            <div className="about-process-container">
                {/* Left Column: Sticky Title (menggantung saat scroll) */}
                <div className="about-process-left">
                    <div className="about-process-sticky-box">
                        <span className="about-process-kicker-label">PROGRAM & LAYANAN UNGGULAN</span>
                        <h2 className="about-process-title">
                            Layanan Komprehensif ECS untuk Mendukung Kesuksesan Ekspor Bisnis Anda.
                        </h2>
                        <p className="about-process-subtitle-lead">
                            Kami mendampingi setiap tahap perjalanan ekspor Anda dengan pendekatan profesional, data pasar terverifikasi, dan jejaring diplomatik perdagangan di seluruh dunia.
                        </p>
                        <div className="about-process-left-cta">
                            <Link href="/contact" className="about-process-consult-btn">
                                <span>Mulai Konsultasi Gratis</span>
                                <ArrowRight size={18} strokeWidth={2.4} />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Right Column: Timeline / Process List with Numbers, Descriptions, and Banner Images */}
                <div className="about-process-right">
                    <div className="about-process-list">
                        {serviceItems.map((item, index) => {
                            const IconComp = item.icon;
                            return (
                                <div key={item.id || index} className="about-process-card-row">
                                    {/* Header Row: Title & Icon on Left, Big Display Number on Right */}
                                    <div className="about-process-card-header">
                                        <div className="about-process-title-group">
                                            <div className="about-process-icon-badge">
                                                <IconComp size={22} strokeWidth={2.2} />
                                            </div>
                                            <div>
                                                <span className="about-process-item-kicker">{item.kicker}</span>
                                                <h3 className="about-process-item-title">{item.title}</h3>
                                            </div>
                                        </div>
                                        <span className="about-process-big-num">{item.number}</span>
                                    </div>

                                    {/* Description (Exact Copywriting Preserved) */}
                                    <p className="about-process-item-desc">{item.desc}</p>

                                    {/* Service Focus Tags / Pills */}
                                    <div className="about-process-tags-list">
                                        {item.tags.map((tag, tIdx) => (
                                            <span key={tIdx} className="about-process-tag-pill">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Highlight Info Grid */}
                                    <div className="about-process-highlight-grid">
                                        {item.highlights.map((hl, hIdx) => (
                                            <div key={hIdx} className="about-process-hl-card">
                                                <div className="about-process-hl-icon">
                                                    <CheckCircle2 size={16} strokeWidth={2.5} />
                                                </div>
                                                <div className="about-process-hl-text">
                                                    <span className="about-process-hl-label">{hl.label}</span>
                                                    <span className="about-process-hl-value">{hl.value}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Action Row */}
                                    <div className="about-process-action-row">
                                        <Link href="/contact" className="about-process-action-link">
                                            <span>Konsultasikan Layanan Ini</span>
                                            <ArrowRight size={16} strokeWidth={2.2} />
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
