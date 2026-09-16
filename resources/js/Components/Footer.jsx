import React from 'react';
import { Link } from '@inertiajs/react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="ecs-footer-section">
            <div className="footer-content-container">
                {/* Main 3-column Layout */}
                <div className="footer-grid-layout">
                    {/* Col 1: Brand & Social Connection */}
                    <div className="footer-brand-col">
                        <div className="footer-brand-header">
                            <img 
                                src="/images/svg/icon.svg" 
                                alt="Export Center Surabaya" 
                                className="footer-logo-img" 
                            />
                            <div className="footer-brand-titles">
                                <h4 className="footer-brand-name">Export Center Surabaya</h4>
                                <p className="footer-brand-sub">Kementerian Perdagangan Republik Indonesia</p>
                            </div>
                        </div>

                        <p className="footer-brand-desc">
                            Lembaga layanan konsultasi dan fasilitasi ekspor terpadu terpercaya di Jawa Timur untuk mendukung kemajuan pelaku usaha Indonesia.
                        </p>

                        <div className="footer-social-section">
                            <span className="footer-social-label">Terhubung dengan Kami</span>
                            <div className="footer-social-row">
                                <a 
                                    href="https://exportcenter.id" 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    className="footer-social-pill-btn" 
                                    aria-label="Website"
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                                    </svg>
                                </a>

                                <a 
                                    href="https://linkedin.com" 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    className="footer-social-pill-btn" 
                                    aria-label="LinkedIn"
                                >
                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                </a>

                                <a 
                                    href="https://twitter.com" 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    className="footer-social-pill-btn" 
                                    aria-label="X (Twitter)"
                                >
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
                                </a>

                                <a 
                                    href="https://facebook.com" 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    className="footer-social-pill-btn" 
                                    aria-label="Facebook"
                                >
                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.692 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z" />
                                    </svg>
                                </a>

                                {/* Back-to-top circular button */}
                                <button 
                                    type="button" 
                                    onClick={scrollToTop} 
                                    className="footer-circle-top-btn" 
                                    aria-label="Kembali ke atas"
                                >
                                    <ArrowUp size={18} strokeWidth={2.5} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Col 2: Navigasi */}
                    <div className="footer-nav-col">
                        <h4 className="footer-heading-theme">Navigasi Utama</h4>
                        <ul className="footer-simple-links">
                            <li><Link href="/about">Tentang Kami</Link></li>
                            <li><Link href="/services">Layanan Ekspor</Link></li>
                            <li><Link href="/services">Regulasi Terkini</Link></li>
                            <li><Link href="/partners">Kemitraan &amp; Jaringan</Link></li>
                            <li><Link href="/activities">Warta &amp; Berita</Link></li>
                            <li><Link href="/activities">Galeri Kegiatan</Link></li>
                            <li><Link href="/contact">Hubungi Kami</Link></li>
                        </ul>
                    </div>

                    {/* Col 3: Sekretariat / Kontak */}
                    <div className="footer-secretariat-col">
                        <div className="footer-sec-subcol">
                            <h4 className="footer-heading-theme">Sekretariat</h4>
                            <div className="footer-sec-items-stack">
                                <div className="footer-sec-item">
                                    <span className="footer-sec-label">Telepon</span>
                                    <a href="tel:02121697623" className="footer-sec-val">021-21697623</a>
                                    <a href="tel:081286869769" className="footer-sec-val">0812-8686-9769</a>
                                </div>

                                <div className="footer-sec-item footer-sec-email-wrap">
                                    <span className="footer-sec-label">Email</span>
                                    <a href="mailto:exportcenter.surabaya@kemendag.go.id" className="footer-sec-val footer-sec-email">
                                        exportcenter.surabaya@kemendag.go.id
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="footer-sec-subcol">
                            <h4 className="footer-heading-theme">Lokasi</h4>
                            <div className="footer-sec-items-stack">
                                <div className="footer-sec-item">
                                    <span className="footer-sec-label">Alamat</span>
                                    <p className="footer-sec-val footer-sec-address">
                                        Jl. Kedung Doro No.80–90, Sawahan, Kec. Sawahan, Kota Surabaya, Jawa Timur 60251
                                    </p>
                                </div>

                                <div className="footer-sec-item footer-sec-hours-wrap">
                                    <span className="footer-sec-label">Waktu Layanan</span>
                                    <span className="footer-sec-val footer-sec-hours">
                                        Senin – Jumat : 09:00 – 16:00 WIB
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Edge-to-edge footer.svg truck graphic with tight gap */}
            <div className="footer-full-truck-area">
                <div className="footer-truck-edge-wrapper" aria-hidden="true">
                    <img 
                        src="/images/svg/footer.svg" 
                        alt="Export Center Surabaya Logistics Cargo" 
                        className="footer-truck-edge-img" 
                    />
                </div>
            </div>
        </footer>
    );
}
