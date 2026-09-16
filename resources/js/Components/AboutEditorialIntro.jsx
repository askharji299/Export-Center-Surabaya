import React from 'react';
import { ArrowUpRight, MessagesSquare, MailCheck } from 'lucide-react';

export default function AboutEditorialIntro() {
    return (
        <section className="about-editorial-intro-section">
            <div className="about-editorial-intro-container">
                {/* Left Column: Rounded Image Card stretching full height */}
                <div className="about-editorial-left">
                    <div className="about-editorial-image-frame">
                        <img 
                            src="/images/about-services-photo.jpg" 
                            alt="Export Center Surabaya - Layanan Ekspor Global" 
                            className="about-editorial-image" 
                        />
                    </div>
                </div>

                {/* Right Column: Heading, Description, Action Row & 2 Features */}
                <div className="about-editorial-right">
                    <h2 className="about-editorial-heading">
                        Selamat Datang di Export Center Surabaya
                    </h2>

                    <p className="about-editorial-desc">
                        Kami hadir untuk mendukung dan memudahkan Anda dalam menjelajahi dunia ekspor. Dengan berbagai layanan komprehensif seperti konsultasi ekspor, penyebaran inquiry, business matching, hingga bantuan dalam aplikasi InaExport, kami siap menjadi mitra terpercaya dalam perjalanan Anda menuju pasar internasional. Mari bersama-sama wujudkan potensi ekspor Anda dan raih kesuksesan di pasar global.
                    </p>

                    {/* Action Bar (Get Started / Jelajahi Lebih Lanjut + Arrow Button) */}
                    <div className="about-editorial-action-bar">
                        <a href="/services" className="about-editorial-action-link">
                            <span className="about-editorial-action-text">Jelajahi Lebih Lanjut</span>
                            <span className="about-editorial-action-circle">
                                <ArrowUpRight size={18} strokeWidth={2.4} />
                            </span>
                        </a>
                    </div>

                    {/* Two Feature Columns matching Gambar 1 layout */}
                    <div className="about-editorial-features-grid">
                        <div className="about-editorial-feature-item">
                            <div className="about-editorial-feature-icon">
                                <MessagesSquare size={20} strokeWidth={2.2} />
                            </div>
                            <h3 className="about-editorial-feature-title">Konsultasi Ekspor</h3>
                            <p className="about-editorial-feature-desc">
                                Layanan ini merupakan aktivitas utama dari ECS, yang menyediakan panduan bagi pelaku usaha dari berbagai skala, masyarakat umum, dan mahasiswa terkait ekspor. Konsultasi mencakup prosedur ekspor, legalitas, sertifikasi produk, standar produk ekspor, serta strategi perluasan pasar. ECS juga membantu dalam masalah pembiayaan dan sengketa dengan buyer.
                            </p>
                        </div>

                        <div className="about-editorial-feature-item">
                            <div className="about-editorial-feature-icon">
                                <MailCheck size={20} strokeWidth={2.2} />
                            </div>
                            <h3 className="about-editorial-feature-title">Penyebaran Inquiry</h3>
                            <p className="about-editorial-feature-desc">
                                Melalui proses penyebaran inquiry yang efisien, perusahaan dapat meningkatkan kepuasan pelanggan sekaligus mengoptimalkan produk dan layanan yang mereka tawarkan.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
