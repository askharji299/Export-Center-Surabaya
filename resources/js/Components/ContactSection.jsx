import React, { useState } from 'react';
import { 
    Mail, 
    Phone, 
    MapPin, 
    Send, 
    Clock, 
    ExternalLink, 
    Navigation, 
    CheckCircle2,
    ShieldCheck,
    ArrowUpRight,
    Copy,
    Check
} from 'lucide-react';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        nama: '',
        email: '',
        telepon: '',
        subjek: '',
        pesan: ''
    });

    const [topicTag, setTopicTag] = useState('Konsultasi Ekspor');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [copiedField, setCopiedField] = useState(null);

    const topics = [
        'Konsultasi Ekspor',
        'Inquiry Pembeli',
        'Business Matching',
        'Legalitas & Sertifikasi',
        'Lainnya'
    ];

    const copyToClipboard = (text, fieldName) => {
        navigator.clipboard.writeText(text);
        setCopiedField(fieldName);
        setTimeout(() => setCopiedField(null), 2000);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
            setTimeout(() => {
                setSubmitted(false);
                setFormData({
                    nama: '',
                    email: '',
                    telepon: '',
                    subjek: '',
                    pesan: ''
                });
            }, 4000);
        }, 800);
    };

    return (
        <section className="contact-main-section">
            <div className="contact-container">
                {/* Top Row: Map Showcase (Left) & Elevated Premium Form (Right) */}
                <div className="contact-interactive-grid">
                    {/* Left: Enhanced Map Panel with Interactive Header & Floating Quick Stats */}
                    <div className="contact-map-card">
                        <div className="map-card-header">
                            <div className="map-header-info">
                                <div className="map-pin-pulse-wrapper">
                                    <span className="map-pulse-ring" />
                                    <span className="map-pulse-dot" />
                                    <MapPin size={18} className="map-pin-icon" />
                                </div>
                                <div>
                                    <h3 className="map-station-title">Pelabuhan Samarinda</h3>
                                    <p className="map-station-sub">Area Pelabuhan Niaga Utama Kaltim</p>
                                </div>
                            </div>
                        </div>

                        {/* Responsive Embed Frame */}
                        <div className="contact-iframe-container">
                            <iframe
                                title="Peta Lokasi Kantor"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6896173003057!2d117.15003507472346!3d-0.5029053994921591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df67f0bce866a2f%3A0xe543594b295b2ce2!2sPelabuhan%20Samarinda!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="contact-iframe-map"
                            />
                        </div>

                        {/* Map Footer Bar with Operating Hours & Button at Left */}
                        <div className="map-card-footer">
                            <a 
                                href="https://maps.google.com/?q=Pelabuhan+Samarinda" 
                                target="_blank" 
                                rel="noreferrer" 
                                className="map-direct-action-btn"
                                title="Buka di Google Maps"
                            >
                                <span>Buka Di Google Maps</span>
                                <ExternalLink size={14} />
                            </a>

                            <div className="map-footer-item">
                                <Clock size={16} className="map-footer-icon" />
                                <div>
                                    <span className="footer-item-label">Jam Layanan Kantor</span>
                                    <span className="footer-item-value">Senin – Jumat : 09:00 – 16:00 WITA</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Modern Contact Form */}
                    <div className="contact-form-panel">
                        <div className="form-panel-decor-circle" />
                        
                        <div className="form-header-row">
                            <div>
                                <h2 className="contact-form-title">Kirim Pesan</h2>
                                <p className="contact-form-subtitle">
                                    Silakan isi formulir di bawah ini, tim kami akan segera membalas.
                                </p>
                            </div>
                        </div>

                        {/* Topic Selector Chips */}
                        <div className="form-topics-strip">
                            <span className="form-topics-label">Topik Terkait:</span>
                            <div className="topics-pill-list">
                                {topics.map(t => (
                                    <button
                                        key={t}
                                        type="button"
                                        onClick={() => setTopicTag(t)}
                                        className={`topic-filter-pill ${topicTag === t ? 'active' : ''}`}
                                    >
                                        {t}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {submitted && (
                            <div className="contact-form-success-banner">
                                <CheckCircle2 size={18} />
                                <div>
                                    <strong>Pesan Berhasil Terkirim!</strong>
                                    <p>Tim konsultan kami akan menghubungi Anda melalui email/WhatsApp dalam 1x24 jam.</p>
                                </div>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="contact-actual-form">
                            <div className="contact-form-two-col">
                                <div className="contact-input-field">
                                    <label htmlFor="nama">
                                        Nama Lengkap <span className="field-required">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="nama"
                                        name="nama"
                                        placeholder="Nama Anda"
                                        value={formData.nama}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="contact-input-field">
                                    <label htmlFor="email">
                                        Email Kerja <span className="field-required">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Email Anda"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="contact-form-two-col">
                                <div className="contact-input-field">
                                    <label htmlFor="telepon">Nomor Telepon / WhatsApp</label>
                                    <input
                                        type="tel"
                                        id="telepon"
                                        name="telepon"
                                        placeholder="Contoh: 08123456789"
                                        value={formData.telepon}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="contact-input-field">
                                    <label htmlFor="subjek">
                                        Subjek <span className="field-required">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="subjek"
                                        name="subjek"
                                        placeholder={`[${topicTag}] Judul pesan`}
                                        value={formData.subjek}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="contact-input-field">
                                <label htmlFor="pesan">
                                    Pesan Anda <span className="field-required">*</span>
                                </label>
                                <textarea
                                    id="pesan"
                                    name="pesan"
                                    rows="5"
                                    placeholder="Jelaskan kebutuhan, produk, atau pertanyaan ekspor Anda secara detail..."
                                    value={formData.pesan}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-submit-row">
                                <button 
                                    type="submit" 
                                    disabled={isSubmitting}
                                    className={`contact-submit-btn ${isSubmitting ? 'submitting' : ''}`}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <span className="spinner-dot-pulse" />
                                            <span>Mengirim Pesan...</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>Kirim Pesan</span>
                                            <Send size={16} strokeWidth={2.4} />
                                        </>
                                    )}
                                </button>
                                <span className="form-guarantee-note">
                                    Balasan biasanya diterima dalam 1–2 jam kerja.
                                </span>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Bottom Row: 3 Upgraded Elevated Cards (Email, Telepon, Alamat) */}
                <div className="contact-cards-grid">
                    {/* Card 1: Email */}
                    <div className="contact-feature-card group-card">
                        <div className="contact-card-top-action">
                            <button 
                                type="button" 
                                onClick={() => copyToClipboard('info@shipslot.com', 'email')}
                                className="contact-copy-pill"
                                title="Salin Email"
                            >
                                {copiedField === 'email' ? <Check size={13} className="text-emerald-500" /> : <Copy size={13} />}
                                <span>{copiedField === 'email' ? 'Tersalin' : 'Salin'}</span>
                            </button>
                        </div>
                        <div className="contact-feature-icon-wrap icon-email">
                            <Mail className="contact-feature-icon" size={26} strokeWidth={2.2} />
                        </div>
                        <h3 className="contact-feature-title">Email</h3>
                        <p className="contact-feature-hint">Kirim pesan resmi atau penawaran kerja sama</p>
                        <a href="mailto:info@shipslot.com" className="contact-feature-link link-with-arrow">
                            <span>info@shipslot.com</span>
                            <ArrowUpRight size={14} />
                        </a>
                    </div>

                    {/* Card 2: Telepon */}
                    <div className="contact-feature-card group-card">
                        <div className="contact-card-top-action">
                            <button 
                                type="button" 
                                onClick={() => copyToClipboard('0541-731588', 'tel')}
                                className="contact-copy-pill"
                                title="Salin Telepon"
                            >
                                {copiedField === 'tel' ? <Check size={13} className="text-emerald-500" /> : <Copy size={13} />}
                                <span>{copiedField === 'tel' ? 'Tersalin' : 'Salin'}</span>
                            </button>
                        </div>
                        <div className="contact-feature-icon-wrap icon-phone">
                            <Phone className="contact-feature-icon" size={26} strokeWidth={2.2} />
                        </div>
                        <h3 className="contact-feature-title">Telepon</h3>
                        <p className="contact-feature-hint">Layanan konsultasi langsung saat jam operasional</p>
                        <a href="tel:0541731588" className="contact-feature-link link-with-arrow">
                            <span>0541-731588</span>
                            <ArrowUpRight size={14} />
                        </a>
                    </div>

                    {/* Card 3: Alamat */}
                    <div className="contact-feature-card group-card">
                        <div className="contact-card-top-action">
                            <a 
                                href="https://maps.google.com/?q=Pelabuhan+Samarinda" 
                                target="_blank" 
                                rel="noreferrer"
                                className="contact-copy-pill"
                                title="Buka Maps"
                            >
                                <ExternalLink size={13} />
                                <span>Buka Peta</span>
                            </a>
                        </div>
                        <div className="contact-feature-icon-wrap icon-map">
                            <MapPin className="contact-feature-icon" size={26} strokeWidth={2.2} />
                        </div>
                        <h3 className="contact-feature-title">Alamat</h3>
                        <div className="contact-feature-desc">
                            <p className="font-semibold text-slate-800">Jalan Niaga Blok I, No. 10</p>
                            <p>Kel. Pelabuhan, Kec. Samarinda Kota</p>
                            <p className="text-slate-500">Kota Samarinda - Kalimantan Timur</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
