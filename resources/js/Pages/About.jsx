import { useState } from 'react';
import { Head } from '@inertiajs/react';
import { MessagesSquare, MailCheck, Users, FileText, Settings2 } from 'lucide-react';
import Layout from '../Layouts/Layout';
import TeamSection from '../Components/TeamSection';

function About() {
    const [stackIndex, setStackIndex] = useState(0);

    const handleNextStack = () => {
        setStackIndex(prev => (prev + 1) % 3);
    };

    return (
        <>
            <Head title="Tentang Kami" />
            <div className="hero-banner">
                <img src="/images/hero-about.jpg" alt="Tentang Kami - Export Center Surabaya" />
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1>Tentang Kami</h1>
                    <p>Export Center Surabaya</p>
                </div>
            </div>

            {/* About Content Section */}
            <section className="about-intro-section">
                <div className="about-intro-image-col">
                    <img src="/images/about-section-img.jpg" alt="Export Center Surabaya" className="about-intro-img" />
                </div>
                <div className="about-intro-content-col">
                    <span className="about-intro-subtitle">TENTANG KAMI</span>
                    <h2 className="about-intro-title">Selamat Datang di Export Center Surabaya</h2>
                    <p className="about-intro-description">
                        Kami hadir untuk mendukung dan memudahkan Anda dalam menjelajahi dunia ekspor. Dengan berbagai layanan komprehensif seperti konsultasi ekspor, penyebaran inquiry, business matching, hingga bantuan dalam aplikasi InaExport, kami siap menjadi mitra terpercaya dalam perjalanan Anda menuju pasar internasional. Mari bersama-sama wujudkan potensi ekspor Anda dan raih kesuksesan di pasar global.
                    </p>
                    <div className="about-intro-features">
                        <div className="about-feature-card">
                            <div className="about-feature-icon">
                                <svg viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="var(--ocean-teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 8c0-2.2 1.8-4 4-4h16c2.2 0 4 1.8 4 4v10c0 2.2-1.8 4-4 4H18l-4 4-4-4H8c-2.2 0-4-1.8-4-4V8z"/>
                                    <path d="M10 12h12M10 17h8"/>
                                </svg>
                            </div>
                            <div>
                                <h4 className="about-feature-title">Konsultasi Ekspor</h4>
                                <p className="about-feature-desc">Layanan ini merupakan aktivitas utama dari ECS, yang menyediakan panduan bagi pelaku usaha dari berbagai skala, masyarakat umum, dan mahasiswa terkait ekspor. Konsultasi mencakup prosedur ekspor, legalitas, sertifikasi produk, standar produk ekspor, serta strategi perluasan pasar. ECS juga membantu dalam masalah pembiayaan dan sengketa dengan buyer.</p>
                            </div>
                        </div>
                        <div className="about-feature-item">
                            <div className="about-feature-icon">
                                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                            </div>
                            <div>
                                <h4 className="about-feature-title">Penyelesaian Sengketa</h4>
                                <p className="about-feature-desc">ECS memberikan fasilitas untuk membantu menyelesaikan masalah atau sengketa yang mungkin timbul antara eksportir dan buyer.</p>
                            </div>
                        </div>

                        <div className="about-feature-item">
                            <div className="about-feature-icon">
                                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                            </div>
                            <div>
                                <h4 className="about-feature-title">Akses Jaringan Luar Negeri</h4>
                                <p className="about-feature-desc">Melalui aplikasi InaExport, ECS membantu perusahaan terhubung dengan perwakilan perdagangan Indonesia di luar negeri.</p>
                            </div>
                        </div>

                        <div className="about-feature-item">
                            <div className="about-feature-icon">
                                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                            </div>
                            <div>
                                <h4 className="about-feature-title">Business Matching</h4>
                                <p className="about-feature-desc">ECS memfasilitasi pertemuan antara eksportir dan calon buyer dari luar negeri guna membuka peluang kerja sama bisnis.</p>
                            </div>
                        </div>

                        <div className="about-feature-item">
                            <div className="about-feature-icon">
                                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                            </div>
                            <div>
                                <h4 className="about-feature-title">Penyebaran Inquiry</h4>
                                <p className="about-feature-desc">Melalui proses penyebaran inquiry yang efisien, perusahaan dapat meningkatkan kepuasan pelanggan sekaligus mengoptimalkan produk dan layanan yang mereka tawarkan.</p>
                            </div>
                        </div>
                    </div>
                    <a href="/services" className="about-intro-btn">Jelajahi Lebih Lanjut</a>
                </div>
            </section>

            {/* Facts / Stats Section */}
            <section className="about-facts-section">
                <div className="about-facts-container">
                    <div className="about-facts-left">
                        <h2 className="about-facts-title">Menuju Pasar Global, Bersama Wujudkan Sukses Ekspor</h2>
                        <p className="about-facts-desc">
                            ECS menyediakan berbagai layanan untuk mendukung pelaku usaha dalam proses ekspor, mulai dari konsultasi terkait prosedur dan legalitas, penyebaran inquiry dari calon pembeli internasional, hingga business matching untuk memfasilitasi pertemuan dan negosiasi antara eksportir dan buyer. Melalui aplikasi InaExport, ECS juga membantu perusahaan terhubung dengan perwakilan perdagangan di luar negeri. Selain itu, ECS memfasilitasi penyelesaian sengketa antara eksportir dan buyer guna memastikan kelancaran transaksi ekspor.
                        </p>
                        <p className="about-facts-desc">
                            Dengan antarmuka yang intuitif dan dukungan pelanggan yang siap membantu, kami adalah solusi terbaik untuk memastikan pengiriman Anda berjalan lancar. Bergabunglah dengan kami dan rasakan kemudahan dalam mengelola semua pengiriman Anda di satu tempat!
                        </p>

                        {/* Stats Row */}
                        <div className="about-facts-stats-row">
                            <div className="about-facts-stat-item">
                                <span className="about-facts-stat-number">1234+</span>
                                <span className="about-facts-stat-label">Klien Puas</span>
                            </div>
                            <div className="about-facts-stat-divider" />
                            <div className="about-facts-stat-item">
                                <span className="about-facts-stat-number">1234+</span>
                                <span className="about-facts-stat-label">Ulasan Pelanggan</span>
                            </div>
                            <div className="about-facts-stat-divider" />
                            <div className="about-facts-stat-item">
                                <span className="about-facts-stat-number">1234+</span>
                                <span className="about-facts-stat-label">Pengiriman Selesai</span>
                            </div>
                        </div>

                        {/* Action Button */}
                        <div className="about-facts-action">
                            <a href="/contact" className="about-facts-action-btn">Lihat Selengkapnya</a>
                        </div>
                    </div>

                    {/* Right 3-Layer Image Card Stack - Clicking anywhere on stack brings back card to front */}
                    <div className="about-facts-right">
                        <div 
                            className={`about-facts-stack stack-state-${stackIndex}`}
                            onClick={handleNextStack}
                            title="Klik di mana saja pada kartu untuk menukar foto"
                        >
                            {/* Layer 1: Pelabuhan Miring */}
                            <div className="about-stack-card card-1">
                                <img src="/images/port-side-view.png" alt="Pelabuhan Ekspor Perspektif" className="about-stack-img" />
                            </div>

                            {/* Layer 2: Pelabuhan Tampak Atas */}
                            <div className="about-stack-card card-2">
                                <img src="/images/port-top-view.png" alt="Pelabuhan Ekspor Tampak Atas" className="about-stack-img" />
                            </div>

                            {/* Layer 3: Kargo Pesawat Udara */}
                            <div className="about-stack-card card-3">
                                <img src="/images/air-cargo.png" alt="Kargo Pesawat Udara" className="about-stack-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Layanan Kami Section */}
            <section className="about-services-section about-services-section--reversed">
                <div className="about-services-image-col">
                    <div className="about-services-img-card">
                        <img src="/images/about-port-aerial.jpg" alt="Pelabuhan Ekspor Indonesia" className="about-services-img" />
                    </div>
                </div>

                <div className="about-services-content">
                    <span className="about-services-subtitle">LAYANAN KAMI</span>
                    <h2 className="about-services-title">Layanan Komprehensif ECS untuk Mendukung Kesuksesan Ekspor Bisnis Anda.</h2>

                    <div className="about-services-list">
                        <div className="about-visi-item">
                            <div className="about-visi-icon">
                                <MessagesSquare size={26} strokeWidth={2} />
                            </div>
                            <div className="about-visi-text">
                                <strong>Konsultasi Ekspor</strong>
                                <p>Layanan ini merupakan aktivitas utama dari ECS, yang menyediakan panduan bagi pelaku usaha dari berbagai skala, masyarakat umum, dan mahasiswa terkait ekspor. Konsultasi mencakup prosedur ekspor, legalitas, sertifikasi produk, standar produk ekspor, serta strategi perluasan pasar.</p>
                            </div>
                        </div>
                        <div className="about-visi-divider" />

                        <div className="about-visi-item">
                            <div className="about-visi-icon">
                                <MailCheck size={26} strokeWidth={2} />
                            </div>
                            <div className="about-visi-text">
                                <strong>Penyebaran Inquiry</strong>
                                <p>Melalui proses penyebaran inquiry yang efisien, perusahaan dapat meningkatkan kepuasan pelanggan sekaligus mengoptimalkan produk dan layanan yang mereka tawarkan.</p>
                            </div>
                        </div>
                        <div className="about-visi-divider" />

                        <div className="about-visi-item">
                            <div className="about-visi-icon">
                                <Users size={26} strokeWidth={2} />
                            </div>
                            <div className="about-visi-text">
                                <strong>Business Matching</strong>
                                <p>Dengan business matching yang efektif, perusahaan dapat memaksimalkan potensi mereka dan menciptakan hubungan yang saling menguntungkan di dunia bisnis.</p>
                            </div>
                        </div>
                        <div className="about-visi-divider" />

                        <div className="about-visi-item">
                            <div className="about-visi-icon">
                                <FileText size={26} strokeWidth={2} />
                            </div>
                            <div className="about-visi-text">
                                <strong>Panduan Aplikasi Inaexport</strong>
                                <p>Aplikasi ini dikembangkan oleh Direktorat Jenderal Pengembangan Ekspor Nasional dan berfungsi sebagai referensi utama bagi Perwadag saat ada inquiry dari buyer.</p>
                            </div>
                        </div>
                        <div className="about-visi-divider" />

                        <div className="about-visi-item">
                            <div className="about-visi-icon">
                                <Settings2 size={26} strokeWidth={2} />
                            </div>
                            <div className="about-visi-text">
                                <strong>Layanan Lainnya</strong>
                                <p>ECS juga membantu menyelesaikan sengketa antara pelaku usaha dan buyer, dengan menghubungkan mereka ke Perwadag untuk mediasi dan penyelesaian masalah.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <TeamSection />
        </>
    );
}

About.layout = (page) => <Layout>{page}</Layout>;
export default About;
