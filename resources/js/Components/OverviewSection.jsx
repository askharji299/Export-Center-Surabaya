import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function OverviewSection() {
    return (
        <section className="overview-section">
            <div className="overview-container">
                <div className="overview-image-col">
                    <img 
                        src="/images/containers-bg.png" 
                        alt="Kargo & Kontainer Ekspor" 
                        className="overview-img"
                    />
                </div>
                <div className="overview-content-col">
                    <span className="overview-subtitle">TENTANG EXPORT CENTER SURABAYA</span>
                    <h2 className="overview-title">Mendorong Produk Lokal Menembus Pasar Global</h2>
                    <p className="overview-description">
                        Export Center Surabaya di bawah naungan Kementerian Perdagangan Republik Indonesia hadir sebagai layanan terpadu untuk mendampingi pelaku usaha Indonesia menembus dan memenangkan persaingan di pasar ekspor internasional.
                    </p>
                    
                    <div className="overview-features">
                        <div className="overview-feature-item">
                            <CheckCircle2 className="feature-icon" size={22} />
                            <div>
                                <h4>Konsultasi & Pendampingan Ekspor</h4>
                                <p>Bimbingan teknis mengenai regulasi, sertifikasi, dan persyaratan pasar tujuan.</p>
                            </div>
                        </div>
                        <div className="overview-feature-item">
                            <CheckCircle2 className="feature-icon" size={22} />
                            <div>
                                <h4>Jaringan Pembeli Internasional</h4>
                                <p>Akses langsung ke jaringan buyer potensial melalui program Business Matching.</p>
                            </div>
                        </div>
                        <div className="overview-feature-item">
                            <CheckCircle2 className="feature-icon" size={22} />
                            <div>
                                <h4>Fasilitasi Promosi Global</h4>
                                <p>Mendukung pameran produk dan publikasi di platform ekspor nasional InaExport.</p>
                            </div>
                        </div>
                    </div>

                    <div className="overview-action">
                        <a href="/about" className="overview-btn">
                            Pelajari Selengkapnya <ArrowRight size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
