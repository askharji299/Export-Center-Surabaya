import React, { useState } from 'react';

export default function WhyChooseUsSection() {
    const [language, setLanguage] = useState('ru'); // 'ru' matching screenshot directly, with 'id' available

    const content = {
        ru: {
            titlePart1: "ПОЧЕМУ ВЫБИРАЮТ",
            titlePart2: "НАШУ КОМПАНИЮ",
            items: [
                "С NAVIONICS Logistics процесс перевозки превращается в простую и управляемую систему — вы контролируете каждый этап и получаете максимум эффективности",
                "Мы оптимизируем сроки, минимизируем издержки и берём организационные моменты на себя, вы освобождаете время для масштабирования бизнеса",
                "Каждое решение выстраивается индивидуально под особенности вашего груза, отрасли и логистических маршрутов — для гарантии сохранности и результата"
            ],
            switchLabel: "ID / Indonesia"
        },
        id: {
            titlePart1: "MENGAPA MEMILIH",
            titlePart2: "PERUSAHAAN KAMI",
            items: [
                "Bersama kami proses pengiriman bertransformasi menjadi sistem yang sederhana dan terkendali — Anda mengontrol setiap tahap dan meraih efisiensi maksimal.",
                "Kami mengoptimalkan ketepatan waktu, meminimalkan biaya logistik, serta menangani seluruh aspek operasional sehingga Anda dapat fokus mengembangkan bisnis.",
                "Setiap solusi dirancang khusus sesuai karakteristik kargo, industri, dan rute logistik Anda — untuk menjamin keamanan prima dan kepuasan hasil."
            ],
            switchLabel: "RU / Asli"
        }
    };

    const current = content[language];

    return (
        <section className="why-choose-us-section" id="why-choose-us">
            {/* Sisi Kiri: 3D Visual Forklift + Kontainer Biru + Gedung Modern */}
            <div className="why-choose-us-left">
                <div className="why-choose-us-hero-wrapper">
                    <img 
                        src="/images/why-choose-us-hero.png" 
                        alt="Logistics 3D Forklift with Blue Container" 
                        className="why-choose-us-hero-img"
                    />
                </div>
            </div>

            {/* Sisi Kanan: Konten Teks & 3 Thumbnail Foto */}
            <div className="why-choose-us-right">
                {/* Header Judul & Bahasa Toggle */}
                <div className="why-choose-us-header">
                    <h2 className="why-choose-us-title">
                        <span>{current.titlePart1}</span>
                        <br />
                        <span>{current.titlePart2}</span>
                    </h2>

                    <button 
                        type="button" 
                        onClick={() => setLanguage(prev => prev === 'ru' ? 'id' : 'ru')}
                        className="why-choose-us-lang-pill"
                        title="Alihkan Bahasa / Сменить язык"
                    >
                        <span className="lang-indicator"></span>
                        {language === 'ru' ? '🇷🇺 RU' : '🇮🇩 ID'}
                    </button>
                </div>

                {/* Daftar Poin Keunggulan */}
                <div className="why-choose-us-features">
                    {current.items.map((text, idx) => (
                        <div key={idx} className="why-choose-us-item">
                            <div className="why-choose-us-icon-wrapper">
                                <svg 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    className="why-choose-us-chevron"
                                >
                                    <path 
                                        d="M6 5.5L12.5 12L6 18.5M12.5 5.5L19 12L12.5 18.5" 
                                        stroke="#0284c7" 
                                        strokeWidth="3.2" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <p className="why-choose-us-item-text">
                                {text}
                            </p>
                        </div>
                    ))}
                </div>

                {/* 3 Thumbnail Foto di Bawah */}
                <div className="why-choose-us-gallery">
                    <div className="why-choose-us-card">
                        <img 
                            src="/images/why-us-ship.jpg" 
                            alt="Kapal Kargo Kontainer Laut" 
                            loading="lazy"
                        />
                        <div className="why-choose-us-card-overlay">
                            <span>Sea Freight</span>
                        </div>
                    </div>

                    <div className="why-choose-us-card">
                        <img 
                            src="/images/why-us-plane.jpg" 
                            alt="Pesawat Kargo Udara" 
                            loading="lazy"
                        />
                        <div className="why-choose-us-card-overlay">
                            <span>Air Freight</span>
                        </div>
                    </div>

                    <div className="why-choose-us-card">
                        <img 
                            src="/images/why-us-crane.jpg" 
                            alt="Pelabuhan & Crane Kontainer" 
                            loading="lazy"
                        />
                        <div className="why-choose-us-card-overlay">
                            <span>Port Logistics</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
