import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import Layout from '../Layouts/Layout';
import { 
    Copy, Check, Sparkles, Layers, Type, Palette, MousePointerClick, 
    SquareCheck, Compass, Send, ArrowRight, ExternalLink, Clock, 
    MapPin, Star, Users, Ship, ChevronLeft, ChevronRight, Filter, 
    Share2, Info, AlertCircle, ShieldCheck
} from 'lucide-react';

export default function DesignSystem() {
    const [copiedText, setCopiedText] = useState(null);
    const [activeTab, setActiveTab] = useState('all');

    const handleCopy = (text, label) => {
        navigator.clipboard.writeText(text);
        setCopiedText(label);
        setTimeout(() => setCopiedText(null), 2000);
    };

    // Color Palette Categories
    const colorCategories = [
        {
            title: 'Primary Brand Colors (Green & Ocean Blues)',
            description: 'Identitas utama Export Center Surabaya Kementerian Perdagangan RI.',
            colors: [
                { name: 'Primary Emerald Green', variable: '--primary', hex: '#1A6B4A', text: '#FFFFFF', desc: 'Main brand green, CTAs, button highlights' },
                { name: 'Primary Dark Green', variable: '--primary-dark', hex: '#145539', text: '#FFFFFF', desc: 'Hover states for green buttons' },
                { name: 'Primary Light Green', variable: '--primary-light', hex: '#2E8B6E', text: '#FFFFFF', desc: 'Gradients and lighter green accents' },
                { name: 'Primary Navy', variable: '--primary-navy', hex: '#0B4E6B', text: '#FFFFFF', desc: 'Headings, secondary buttons, badges' },
                { name: 'Primary Navy Dark', variable: '--primary-navy-dark', hex: '#083C53', text: '#FFFFFF', desc: 'Navy button hover states & dark gradient ends' },
                { name: 'Deep Hero Sky Blue', variable: 'N/A', hex: '#0D2B55', text: '#FFFFFF', desc: 'Hero heading two-tone navy & pills' },
                { name: 'Interactive Sky Dark', variable: 'N/A', hex: '#222D51', text: '#FFFFFF', desc: 'Interactive hero sky background layer' },
            ]
        },
        {
            title: 'Accent, Highlight & Functional Tones',
            description: 'Warna aksen emas Kemendag, status operasional, dan notifikasi.',
            colors: [
                { name: 'Gold Accent', variable: '--accent', hex: '#C8A630', text: '#0F172A', desc: 'Kemendag gold, star ratings, premium highlights' },
                { name: 'Success Green', variable: 'N/A', hex: '#10B981', text: '#FFFFFF', desc: 'Live operational status, badges, success alerts' },
                { name: 'Success Surface', variable: 'N/A', hex: '#ECFDF5', text: '#047857', border: '#A7F3D0', desc: 'Background badge live status & success notes' },
                { name: 'Warning Amber', variable: 'N/A', hex: '#F59E0B', text: '#FFFFFF', desc: 'Attention badges & warnings' },
                { name: 'Destructive / Required', variable: 'N/A', hex: '#EF4444', text: '#FFFFFF', desc: 'Required asterisk * & error boundaries' },
            ]
        },
        {
            title: 'Neutrals, Grays & Backgrounds',
            description: 'Struktur teks, border, background kartu, dan ruang bernafas konten.',
            colors: [
                { name: 'Dark Charcoal Text', variable: '--text-dark', hex: '#0F172A', text: '#FFFFFF', desc: 'Heading teks utama & body text kontras tinggi' },
                { name: 'Muted Slate Text', variable: '--text-muted', hex: '#64748B', text: '#FFFFFF', desc: 'Deskripsi, subtitle, caption & metadata' },
                { name: 'Secondary Text Slate', variable: 'N/A', hex: '#475569', text: '#FFFFFF', desc: 'Form labels, filter pills text' },
                { name: 'Border Subtle', variable: '--border', hex: '#E2E8F0', text: '#0F172A', desc: 'Card border, input outline, divider' },
                { name: 'Background Section', variable: '--bg-section', hex: '#F8FAFC', text: '#0F172A', desc: 'Page background & input default surface' },
                { name: 'Card Surface White', variable: '--white', hex: '#FFFFFF', text: '#0F172A', border: '#E2E8F0', desc: 'Pure white surface cards & sticky navbar' },
                { name: 'Dark Section Bg', variable: '--bg-dark', hex: '#0C1A14', text: '#FFFFFF', desc: 'Deep background hero gradients & dark sections' }
            ]
        }
    ];

    // Typography Scales
    const typographyData = [
        {
            level: 'Display Hero Title',
            font: 'Poppins Black (900)',
            size: 'clamp(2.5rem, 5vw, 4.5rem) / 40px - 72px',
            lineHeight: '1.05',
            tracking: '0.02em (Upper)',
            preview: 'EXPORT CENTER SURABAYA',
            usage: 'Hero interactive landing page banner'
        },
        {
            level: 'Heading 1 (H1)',
            font: 'Poppins Bold (700)',
            size: '48px (3.0rem)',
            lineHeight: '1.15',
            tracking: '-0.02em',
            preview: 'Jelajahi Peluang Pasar Ekspor Global',
            usage: 'Judul halaman utama, page hero header'
        },
        {
            level: 'Heading 2 (H2)',
            font: 'Poppins Bold (700)',
            size: '32px (2.0rem)',
            lineHeight: '1.25',
            tracking: '-0.01em',
            preview: 'Layanan Terpadu & Konsultasi Ekspor',
            usage: 'Judul section utama, judul form, sub-hero'
        },
        {
            level: 'Heading 3 (H3)',
            font: 'Poppins SemiBold (600)',
            size: '24px (1.5rem)',
            lineHeight: '1.35',
            tracking: 'Normal',
            preview: 'Export Consultation & Business Matching',
            usage: 'Judul kartu fitur, sub-seksi, judul modal'
        },
        {
            level: 'Heading 4 (H4)',
            font: 'Poppins SemiBold (600)',
            size: '18px (1.125rem)',
            lineHeight: '1.4',
            tracking: 'Normal',
            preview: 'Pelepasan Kontainer Komoditas Unggulan ke Pasar Timur Tengah',
            usage: 'Judul artikel berita, nama pejabat/tim'
        },
        {
            level: 'Body Large / Lead',
            font: 'Plus Jakarta Sans Medium (500)',
            size: '16px (1.0rem)',
            lineHeight: '1.7',
            tracking: 'Normal',
            preview: 'Export Center Surabaya merupakan inisiatif terpadu Ditjen PEN Kementerian Perdagangan RI untuk mendampingi pelaku usaha nasional menembus pasar global secara berkelanjutan.',
            usage: 'Paragraf pembuka artikel, hero subtitle ringkas'
        },
        {
            level: 'Body Regular',
            font: 'Plus Jakarta Sans Regular (400)',
            size: '14px (0.875rem)',
            lineHeight: '1.65',
            tracking: 'Normal',
            preview: 'Silakan isi formulir di bawah ini dengan lengkap. Tim konsultan kami akan memverifikasi kebutuhan dan profil usaha Anda dalam 1-2 hari kerja.',
            usage: 'Paragraf isi kartu, deskripsi form, informasi umum'
        },
        {
            level: 'Body Small / Meta',
            font: 'Plus Jakarta Sans Regular (400)',
            size: '12px (0.75rem)',
            lineHeight: '1.5',
            tracking: '0.02em',
            preview: '14 Sep 2026 • 3 min baca • Ditjen PEN Kemendag RI',
            usage: 'Metadata waktu, caption gambar, note footer'
        },
        {
            level: 'Kicker / Section Badge Label',
            font: 'Plus Jakarta Sans Bold (700)',
            size: '12px (0.75rem)',
            lineHeight: '1.2',
            tracking: '0.12em (Uppercase)',
            preview: 'OUR SERVICES • JAWA TIMUR EXPORT HUB',
            usage: 'Label di atas H2 judul section'
        }
    ];

    return (
        <>
            <Head title="Design System & UI Kit - Export Center Surabaya (Figma Ready)" />

            <div style={{ backgroundColor: '#F8FAFC', minHeight: '100vh', paddingBottom: '6rem' }}>
                {/* Header Banner */}
                <header style={{
                    background: 'linear-gradient(135deg, #0C1A14 0%, #0B4E6B 50%, #1A6B4A 100%)',
                    color: '#FFFFFF',
                    padding: '4rem 2rem 3.5rem',
                    position: 'relative',
                    overflow: 'hidden',
                    borderBottom: '1px solid rgba(255,255,255,0.1)'
                }}>
                    <div style={{
                        position: 'absolute',
                        top: '-30%',
                        right: '-10%',
                        width: '500px',
                        height: '500px',
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(200, 166, 48, 0.15) 0%, transparent 70%)',
                        pointerEvents: 'none'
                    }} />

                    <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)', padding: '0.4rem 1rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.08em', marginBottom: '1.25rem', border: '1px solid rgba(255,255,255,0.2)' }}>
                            <Sparkles size={14} color="#C8A630" />
                            <span>OFFICIAL FIGMA SPECIFICATION & UI KIT</span>
                        </div>

                        <h1 style={{
                            fontFamily: 'Poppins, sans-serif',
                            fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
                            fontWeight: '800',
                            lineHeight: '1.15',
                            letterSpacing: '-0.02em',
                            marginBottom: '0.75rem'
                        }}>
                            Design System & UI Library
                        </h1>

                        <p style={{
                            fontFamily: 'Plus Jakarta Sans, sans-serif',
                            fontSize: '1.05rem',
                            color: 'rgba(255, 255, 255, 0.85)',
                            maxWidth: '750px',
                            lineHeight: '1.6'
                        }}>
                            Panduan lengkap token desain, palet warna, tipografi H1-H6, ragam komponen button, inputs, badges, dan cards website <strong>Export Center Surabaya</strong>. Klik tombol copy untuk menyalin kode HEX atau class CSS ke clipboard untuk memudahkan transfer ke Figma.
                        </p>

                        {/* Quick Specs Bar */}
                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '1.5rem',
                            marginTop: '2rem',
                            paddingTop: '1.5rem',
                            borderTop: '1px solid rgba(255,255,255,0.15)',
                            fontSize: '0.85rem'
                        }}>
                            <div>
                                <span style={{ color: 'rgba(255,255,255,0.6)', display: 'block', fontSize: '0.75rem' }}>HEADING FONT</span>
                                <strong style={{ color: '#FFFFFF' }}>Poppins (Google / Local TTF)</strong>
                            </div>
                            <div style={{ width: '1px', background: 'rgba(255,255,255,0.2)' }} />
                            <div>
                                <span style={{ color: 'rgba(255,255,255,0.6)', display: 'block', fontSize: '0.75rem' }}>BODY & UI FONT</span>
                                <strong style={{ color: '#FFFFFF' }}>Plus Jakarta Sans (Variable)</strong>
                            </div>
                            <div style={{ width: '1px', background: 'rgba(255,255,255,0.2)' }} />
                            <div>
                                <span style={{ color: 'rgba(255,255,255,0.6)', display: 'block', fontSize: '0.75rem' }}>ICON LIBRARY</span>
                                <strong style={{ color: '#FFFFFF' }}>Lucide React (24px grid standard)</strong>
                            </div>
                            <div style={{ width: '1px', background: 'rgba(255,255,255,0.2)' }} />
                            <div>
                                <span style={{ color: 'rgba(255,255,255,0.6)', display: 'block', fontSize: '0.75rem' }}>GRID BREAKPOINTS</span>
                                <strong style={{ color: '#FFFFFF' }}>Desktop 1280px / 1440px (12 Col)</strong>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Main Content Container */}
                <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '2.5rem 1.5rem 0' }}>

                    {/* Copied Toast Alert */}
                    {copiedText && (
                        <div style={{
                            position: 'fixed',
                            bottom: '2rem',
                            right: '2rem',
                            background: '#0F172A',
                            color: '#FFFFFF',
                            padding: '0.75rem 1.25rem',
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            boxShadow: '0 10px 25px rgba(0,0,0,0.25)',
                            zIndex: 9999,
                            animation: 'fadeIn 0.2s ease',
                            border: '1px solid rgba(255,255,255,0.15)',
                            fontSize: '0.88rem',
                            fontWeight: '600'
                        }}>
                            <Check size={18} color="#10B981" />
                            <span>Berhasil disalin: <strong>{copiedText}</strong></span>
                        </div>
                    )}

                    {/* Table of Contents / Sticky Quick Jump Navigation */}
                    <div style={{
                        position: 'sticky',
                        top: '88px',
                        zIndex: 90,
                        background: 'rgba(255, 255, 255, 0.95)',
                        backdropFilter: 'blur(12px)',
                        padding: '0.85rem 1.25rem',
                        borderRadius: '14px',
                        boxShadow: '0 4px 16px rgba(11,78,107,0.06)',
                        border: '1px solid #E2E8F0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '1rem',
                        marginBottom: '3rem',
                        overflowX: 'auto'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0B4E6B', fontWeight: '700', fontSize: '0.85rem', whiteSpace: 'nowrap' }}>
                            <Layers size={18} />
                            <span>Quick Jump:</span>
                        </div>
                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'nowrap' }}>
                            <a href="#palette" style={{ padding: '0.4rem 0.85rem', borderRadius: '8px', fontSize: '0.8rem', fontWeight: '600', textDecoration: 'none', color: '#334155', background: '#F1F5F9', whiteSpace: 'nowrap' }}>Color Palette</a>
                            <a href="#typography" style={{ padding: '0.4rem 0.85rem', borderRadius: '8px', fontSize: '0.8rem', fontWeight: '600', textDecoration: 'none', color: '#334155', background: '#F1F5F9', whiteSpace: 'nowrap' }}>Typography & Headings</a>
                            <a href="#buttons" style={{ padding: '0.4rem 0.85rem', borderRadius: '8px', fontSize: '0.8rem', fontWeight: '600', textDecoration: 'none', color: '#334155', background: '#F1F5F9', whiteSpace: 'nowrap' }}>Buttons & Actions</a>
                            <a href="#badges" style={{ padding: '0.4rem 0.85rem', borderRadius: '8px', fontSize: '0.8rem', fontWeight: '600', textDecoration: 'none', color: '#334155', background: '#F1F5F9', whiteSpace: 'nowrap' }}>Badges & Status</a>
                            <a href="#inputs" style={{ padding: '0.4rem 0.85rem', borderRadius: '8px', fontSize: '0.8rem', fontWeight: '600', textDecoration: 'none', color: '#334155', background: '#F1F5F9', whiteSpace: 'nowrap' }}>Form Inputs</a>
                            <a href="#elevation" style={{ padding: '0.4rem 0.85rem', borderRadius: '8px', fontSize: '0.8rem', fontWeight: '600', textDecoration: 'none', color: '#334155', background: '#F1F5F9', whiteSpace: 'nowrap' }}>Radius & Shadows</a>
                            <a href="#cards" style={{ padding: '0.4rem 0.85rem', borderRadius: '8px', fontSize: '0.8rem', fontWeight: '600', textDecoration: 'none', color: '#334155', background: '#F1F5F9', whiteSpace: 'nowrap' }}>UI Cards</a>
                        </div>
                    </div>

                    {/* ========================================================= */}
                    {/* 1. COLOR PALETTE SYSTEM */}
                    {/* ========================================================= */}
                    <section id="palette" style={{ marginBottom: '4.5rem' }}>
                        <div style={{ marginBottom: '1.75rem' }}>
                            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#1A6B4A', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.35rem' }}>
                                <Palette size={16} />
                                <span>COLOR SPECIFICATION</span>
                            </div>
                            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: '700', color: '#0B4E6B', margin: 0 }}>
                                01. Color Palette System
                            </h2>
                            <p style={{ color: '#64748B', fontSize: '0.95rem', marginTop: '0.35rem' }}>
                                Seluruh kode HEX dan variabel CSS yang digunakan pada situs Export Center Surabaya. Klik swatch atau tombol copy untuk mengambil kode HEX langsung ke Figma.
                            </p>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                            {colorCategories.map((cat, idx) => (
                                <div key={idx} style={{ background: '#FFFFFF', padding: '1.75rem', borderRadius: '18px', border: '1px solid #E2E8F0', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
                                    <div style={{ marginBottom: '1.25rem' }}>
                                        <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.2rem', fontWeight: '700', color: '#0F172A', margin: 0 }}>
                                            {cat.title}
                                        </h3>
                                        <p style={{ fontSize: '0.85rem', color: '#64748B', marginTop: '0.2rem' }}>{cat.description}</p>
                                    </div>

                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1rem' }}>
                                        {cat.colors.map((c, cIdx) => (
                                            <div 
                                                key={cIdx} 
                                                onClick={() => handleCopy(c.hex, `${c.name} (${c.hex})`)}
                                                style={{
                                                    border: '1px solid #E2E8F0',
                                                    borderRadius: '14px',
                                                    overflow: 'hidden',
                                                    cursor: 'pointer',
                                                    transition: 'all 0.2s ease',
                                                    background: '#FFFFFF'
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.transform = 'translateY(-3px)';
                                                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(11,78,107,0.1)';
                                                    e.currentTarget.style.borderColor = '#0B4E6B';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.transform = 'translateY(0)';
                                                    e.currentTarget.style.boxShadow = 'none';
                                                    e.currentTarget.style.borderColor = '#E2E8F0';
                                                }}
                                            >
                                                <div style={{
                                                    height: '95px',
                                                    backgroundColor: c.hex,
                                                    padding: '0.85rem',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    justifyContent: 'space-between',
                                                    borderBottom: c.border ? `1px solid ${c.border}` : 'none'
                                                }}>
                                                    <span style={{ 
                                                        color: c.text, 
                                                        fontSize: '0.72rem', 
                                                        fontWeight: '700', 
                                                        textTransform: 'uppercase', 
                                                        opacity: 0.9,
                                                        letterSpacing: '0.04em'
                                                    }}>
                                                        {c.variable}
                                                    </span>
                                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                        <span style={{ 
                                                            color: c.text, 
                                                            fontFamily: 'monospace', 
                                                            fontWeight: '700', 
                                                            fontSize: '1.05rem',
                                                            letterSpacing: '0.05em'
                                                        }}>
                                                            {c.hex}
                                                        </span>
                                                        <div style={{
                                                            background: 'rgba(255,255,255,0.25)',
                                                            borderRadius: '6px',
                                                            padding: '4px',
                                                            display: 'flex'
                                                        }}>
                                                            <Copy size={13} color={c.text} />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div style={{ padding: '0.85rem' }}>
                                                    <strong style={{ display: 'block', fontSize: '0.88rem', color: '#0F172A', marginBottom: '0.2rem' }}>
                                                        {c.name}
                                                    </strong>
                                                    <span style={{ fontSize: '0.78rem', color: '#64748B', lineHeight: '1.4', display: 'block' }}>
                                                        {c.desc}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ========================================================= */}
                    {/* 2. TYPOGRAPHY & HEADING HIERARCHY */}
                    {/* ========================================================= */}
                    <section id="typography" style={{ marginBottom: '4.5rem' }}>
                        <div style={{ marginBottom: '1.75rem' }}>
                            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#1A6B4A', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.35rem' }}>
                                <Type size={16} />
                                <span>TYPOGRAPHY SYSTEM</span>
                            </div>
                            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: '700', color: '#0B4E6B', margin: 0 }}>
                                02. Typography & Heading Hierarchy
                            </h2>
                            <p style={{ color: '#64748B', fontSize: '0.95rem', marginTop: '0.35rem' }}>
                                Konfigurasi font family, font-weight, line-height, dan skala ukuran dari Display, H1, H2, H3, H4, hingga caption.
                            </p>
                        </div>

                        {/* Font Families Showcase Cards */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
                            <div style={{ background: '#FFFFFF', padding: '1.5rem', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                                <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#1A6B4A', textTransform: 'uppercase' }}>HEADINGS & TITLES</span>
                                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.75rem', fontWeight: '700', color: '#0B4E6B', margin: '0.25rem 0 0.5rem' }}>
                                    Poppins
                                </h3>
                                <p style={{ fontSize: '0.85rem', color: '#64748B', marginBottom: '1rem' }}>
                                    Digunakan untuk seluruh tag H1, H2, H3, H4, H5, H6, judul berita, dan judul layanan.
                                </p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                                    <span style={{ padding: '4px 8px', background: '#F1F5F9', borderRadius: '6px', fontSize: '0.75rem', fontWeight: '400' }}>400 Regular</span>
                                    <span style={{ padding: '4px 8px', background: '#F1F5F9', borderRadius: '6px', fontSize: '0.75rem', fontWeight: '500' }}>500 Medium</span>
                                    <span style={{ padding: '4px 8px', background: '#F1F5F9', borderRadius: '6px', fontSize: '0.75rem', fontWeight: '600' }}>600 SemiBold</span>
                                    <span style={{ padding: '4px 8px', background: '#E0F2FE', color: '#0369A1', borderRadius: '6px', fontSize: '0.75rem', fontWeight: '700' }}>700 Bold (Primary)</span>
                                    <span style={{ padding: '4px 8px', background: '#F1F5F9', borderRadius: '6px', fontSize: '0.75rem', fontWeight: '800' }}>800 ExtraBold</span>
                                    <span style={{ padding: '4px 8px', background: '#F1F5F9', borderRadius: '6px', fontSize: '0.75rem', fontWeight: '900' }}>900 Black</span>
                                </div>
                            </div>

                            <div style={{ background: '#FFFFFF', padding: '1.5rem', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                                <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#1A6B4A', textTransform: 'uppercase' }}>BODY, UI & LABELS</span>
                                <h3 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '1.75rem', fontWeight: '700', color: '#0B4E6B', margin: '0.25rem 0 0.5rem' }}>
                                    Plus Jakarta Sans
                                </h3>
                                <p style={{ fontSize: '0.85rem', color: '#64748B', marginBottom: '1rem' }}>
                                    Digunakan untuk paragraf teks body, form label, input, button label, dan teks footer.
                                </p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                                    <span style={{ padding: '4px 8px', background: '#F1F5F9', borderRadius: '6px', fontSize: '0.75rem', fontWeight: '300' }}>300 Light</span>
                                    <span style={{ padding: '4px 8px', background: '#E0F2FE', color: '#0369A1', borderRadius: '6px', fontSize: '0.75rem', fontWeight: '400' }}>400 Regular (Body)</span>
                                    <span style={{ padding: '4px 8px', background: '#F1F5F9', borderRadius: '6px', fontSize: '0.75rem', fontWeight: '500' }}>500 Medium</span>
                                    <span style={{ padding: '4px 8px', background: '#E0F2FE', color: '#0369A1', borderRadius: '6px', fontSize: '0.75rem', fontWeight: '600' }}>600 SemiBold (Nav/Badges)</span>
                                    <span style={{ padding: '4px 8px', background: '#F1F5F9', borderRadius: '6px', fontSize: '0.75rem', fontWeight: '700' }}>700 Bold (Buttons)</span>
                                </div>
                            </div>
                        </div>

                        {/* Interactive Scale Table */}
                        <div style={{ background: '#FFFFFF', borderRadius: '18px', border: '1px solid #E2E8F0', overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
                            <div style={{ overflowX: 'auto' }}>
                                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.88rem' }}>
                                    <thead>
                                        <tr style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0', color: '#475569', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                            <th style={{ padding: '1rem 1.25rem' }}>Level & Element</th>
                                            <th style={{ padding: '1rem 1.25rem' }}>Font & Weight</th>
                                            <th style={{ padding: '1rem 1.25rem' }}>Size & Leading</th>
                                            <th style={{ padding: '1rem 1.25rem' }}>Live Visual Preview</th>
                                            <th style={{ padding: '1rem 1.25rem' }}>Usage in ECS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {typographyData.map((t, idx) => (
                                            <tr key={idx} style={{ borderBottom: '1px solid #F1F5F9', transition: 'background 0.15s ease' }}>
                                                <td style={{ padding: '1.25rem', whiteSpace: 'nowrap' }}>
                                                    <strong style={{ color: '#0F172A', display: 'block' }}>{t.level}</strong>
                                                    <span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>{t.tracking}</span>
                                                </td>
                                                <td style={{ padding: '1.25rem', color: '#334155', whiteSpace: 'nowrap' }}>
                                                    <span style={{ background: '#F1F5F9', padding: '3px 8px', borderRadius: '6px', fontSize: '0.78rem', fontWeight: '600' }}>
                                                        {t.font}
                                                    </span>
                                                </td>
                                                <td style={{ padding: '1.25rem', color: '#64748B', whiteSpace: 'nowrap', fontFamily: 'monospace', fontSize: '0.82rem' }}>
                                                    <div>{t.size}</div>
                                                    <div style={{ color: '#94A3B8', fontSize: '0.75rem' }}>lh: {t.lineHeight}</div>
                                                </td>
                                                <td style={{ padding: '1.25rem', maxWidth: '420px' }}>
                                                    <div style={{
                                                        fontFamily: t.font.includes('Poppins') ? 'Poppins, sans-serif' : 'Plus Jakarta Sans, sans-serif',
                                                        fontWeight: t.font.includes('Bold') ? 700 : t.font.includes('Black') ? 900 : t.font.includes('SemiBold') ? 600 : t.font.includes('Medium') ? 500 : 400,
                                                        color: '#0F172A',
                                                        lineHeight: t.lineHeight,
                                                        fontSize: t.level.includes('Display') ? '1.8rem' : t.level.includes('H1') ? '1.6rem' : t.level.includes('H2') ? '1.35rem' : t.level.includes('H3') ? '1.15rem' : '0.95rem',
                                                        letterSpacing: t.tracking.includes('Uppercase') ? '0.1em' : 'normal',
                                                        textTransform: t.tracking.includes('Uppercase') ? 'uppercase' : 'none'
                                                    }}>
                                                        {t.preview}
                                                    </div>
                                                </td>
                                                <td style={{ padding: '1.25rem', color: '#64748B', fontSize: '0.8rem' }}>
                                                    {t.usage}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    {/* ========================================================= */}
                    {/* 3. BUTTONS & INTERACTIVE ACTION SYSTEM */}
                    {/* ========================================================= */}
                    <section id="buttons" style={{ marginBottom: '4.5rem' }}>
                        <div style={{ marginBottom: '1.75rem' }}>
                            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#1A6B4A', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.35rem' }}>
                                <MousePointerClick size={16} />
                                <span>BUTTON SYSTEM</span>
                            </div>
                            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: '700', color: '#0B4E6B', margin: 0 }}>
                                03. Buttons, Links & Action States
                            </h2>
                            <p style={{ color: '#64748B', fontSize: '0.95rem', marginTop: '0.35rem' }}>
                                Seluruh varian tombol web ECS (Primary Gradient, Solid Green, Dark Navy Pill, Outlined, Nav Login, Icon Pill, Pagination) beserta state normal, hover, loading, dan disabled.
                            </p>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '1.5rem' }}>
                            
                            {/* Varian 1: Primary Gradient Button (Contact / Form Submit) */}
                            <div style={{ background: '#FFFFFF', padding: '1.5rem', borderRadius: '18px', border: '1px solid #E2E8F0' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                    <strong style={{ fontSize: '0.95rem', color: '#0F172A' }}>1. Primary Gradient Action (.contact-submit-btn)</strong>
                                    <span style={{ fontSize: '0.75rem', background: '#F1F5F9', padding: '2px 8px', borderRadius: '6px', color: '#475569' }}>Radius: 10px</span>
                                </div>
                                <p style={{ fontSize: '0.8rem', color: '#64748B', marginBottom: '1.25rem' }}>
                                    Tombol utama aksi kirim pesan dan CTA form. Menggunakan gradient dari Navy (#0B4E6B) ke Emerald (#1A6B4A).
                                </p>

                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
                                    {/* Normal */}
                                    <button type="button" className="contact-submit-btn">
                                        <span>Kirim Pesan</span>
                                        <Send size={16} strokeWidth={2.4} />
                                    </button>

                                    {/* Loading State */}
                                    <button type="button" className="contact-submit-btn submitting">
                                        <span className="spinner-dot-pulse" />
                                        <span>Mengirim...</span>
                                    </button>

                                    {/* Disabled */}
                                    <button type="button" className="contact-submit-btn" disabled>
                                        <span>Dinonaktifkan</span>
                                    </button>
                                </div>

                                <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid #F1F5F9', display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#94A3B8' }}>
                                    <span>Background: linear-gradient(135deg, #0b4e6b, #1a6b4a)</span>
                                    <span>Shadow: 0 4px 14px rgba(11,78,107,0.25)</span>
                                </div>
                            </div>

                            {/* Varian 2: Solid Green Submit (.submit-btn / .login-btn) */}
                            <div style={{ background: '#FFFFFF', padding: '1.5rem', borderRadius: '18px', border: '1px solid #E2E8F0' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                    <strong style={{ fontSize: '0.95rem', color: '#0F172A' }}>2. Solid Green & Navbar Action (.login-btn / .submit-btn)</strong>
                                    <span style={{ fontSize: '0.75rem', background: '#F1F5F9', padding: '2px 8px', borderRadius: '6px', color: '#475569' }}>Radius: 6px-8px</span>
                                </div>
                                <p style={{ fontSize: '0.8rem', color: '#64748B', marginBottom: '1.25rem' }}>
                                    Tombol LOGIN pada top navbar dan tombol form standard. Solid background #1A6B4A dengan hover #145539.
                                </p>

                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
                                    <Link href="#" className="login-btn">LOGIN PORTAL</Link>
                                    <button type="button" className="submit-btn">Kirim Formulir</button>
                                </div>

                                <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid #F1F5F9', display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#94A3B8' }}>
                                    <span>Font: Plus Jakarta Sans 700 (Uppercase 0.5px tracking)</span>
                                    <span>Hover: translateY(-1px)</span>
                                </div>
                            </div>

                            {/* Varian 3: Navy Rounded Full Pill (.service-action-btn) */}
                            <div style={{ background: '#FFFFFF', padding: '1.5rem', borderRadius: '18px', border: '1px solid #E2E8F0' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                    <strong style={{ fontSize: '0.95rem', color: '#0F172A' }}>3. Service Action Rounded Pill (.service-action-btn)</strong>
                                    <span style={{ fontSize: '0.75rem', background: '#F1F5F9', padding: '2px 8px', borderRadius: '6px', color: '#475569' }}>Radius: 50px (Pill)</span>
                                </div>
                                <p style={{ fontSize: '0.8rem', color: '#64748B', marginBottom: '1.25rem' }}>
                                    Tombol jelajahi layanan ekspor pada Services Showcase section. Default navy #0D2B55, hover green #1A6B4A.
                                </p>

                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
                                    <Link href="#" className="service-action-btn">
                                        <span>Konsultasi Layanan Ini</span>
                                        <ArrowRight size={16} />
                                    </Link>
                                </div>

                                <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid #F1F5F9', display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#94A3B8' }}>
                                    <span>Padding: 0.85rem 1.85rem</span>
                                    <span>Shadow: 0 4px 14px rgba(13,43,85,0.15)</span>
                                </div>
                            </div>

                            {/* Varian 4: Pill Category & Topic Chips (.topic-filter-pill / .hub-category-pill) */}
                            <div style={{ background: '#FFFFFF', padding: '1.5rem', borderRadius: '18px', border: '1px solid #E2E8F0' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                    <strong style={{ fontSize: '0.95rem', color: '#0F172A' }}>4. Topic Filter Pills (.topic-filter-pill)</strong>
                                    <span style={{ fontSize: '0.75rem', background: '#F1F5F9', padding: '2px 8px', borderRadius: '6px', color: '#475569' }}>Radius: 9999px</span>
                                </div>
                                <p style={{ fontSize: '0.8rem', color: '#64748B', marginBottom: '1.25rem' }}>
                                    Digunakan pada filter topik form pesan & kategori warta berita di halaman Activities.
                                </p>

                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center' }}>
                                    <button type="button" className="topic-filter-pill active">Semua Topik (Active)</button>
                                    <button type="button" className="topic-filter-pill">Konsultasi Ekspor</button>
                                    <button type="button" className="topic-filter-pill">Business Matching</button>
                                    <button type="button" className="topic-filter-pill">InaExport</button>
                                </div>

                                <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid #F1F5F9', display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#94A3B8' }}>
                                    <span>Active: linear-gradient(135deg, #0b4e6b, #1a6b4a)</span>
                                    <span>Default: #F8FAFC + Border #E2E8F0</span>
                                </div>
                            </div>

                            {/* Varian 5: Icon Action & Social Pills */}
                            <div style={{ background: '#FFFFFF', padding: '1.5rem', borderRadius: '18px', border: '1px solid #E2E8F0' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                    <strong style={{ fontSize: '0.95rem', color: '#0F172A' }}>5. Circular Icons & Quick Buttons (.footer-social-pill-btn)</strong>
                                    <span style={{ fontSize: '0.75rem', background: '#F1F5F9', padding: '2px 8px', borderRadius: '6px', color: '#475569' }}>Circle / 50%</span>
                                </div>
                                <p style={{ fontSize: '0.8rem', color: '#64748B', marginBottom: '1.25rem' }}>
                                    Tombol aksi cepat pada footer, tombol buka Google Maps, dan tombol copy kartu.
                                </p>

                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
                                    <a href="#" className="map-direct-action-btn">
                                        <span>Buka Google Maps</span>
                                        <ExternalLink size={13} />
                                    </a>

                                    <button type="button" className="contact-copy-pill">
                                        <Copy size={12} />
                                        <span>Salin Email</span>
                                    </button>

                                    <button type="button" className="footer-social-pill-btn" aria-label="Social Link">
                                        <Share2 size={16} />
                                    </button>
                                </div>

                                <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid #F1F5F9', display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#94A3B8' }}>
                                    <span>Map button: #0B4E6B / #FFFFFF</span>
                                    <span>Copy pill: 9999px border badge</span>
                                </div>
                            </div>

                            {/* Varian 6: Pagination Control System */}
                            <div style={{ background: '#FFFFFF', padding: '1.5rem', borderRadius: '18px', border: '1px solid #E2E8F0' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                    <strong style={{ fontSize: '0.95rem', color: '#0F172A' }}>6. Pagination Bar (.pagination-btn)</strong>
                                    <span style={{ fontSize: '0.75rem', background: '#F1F5F9', padding: '2px 8px', borderRadius: '6px', color: '#475569' }}>Radius: 10px</span>
                                </div>
                                <p style={{ fontSize: '0.8rem', color: '#64748B', marginBottom: '1.25rem' }}>
                                    Sistem navigasi halaman warta berita di halaman Activities & Berita.
                                </p>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    <button type="button" className="pagination-btn pagination-nav" disabled>
                                        <ChevronLeft size={16} />
                                    </button>
                                    <button type="button" className="pagination-btn pagination-active">1</button>
                                    <button type="button" className="pagination-btn">2</button>
                                    <button type="button" className="pagination-btn">3</button>
                                    <button type="button" className="pagination-btn pagination-nav">
                                        <ChevronRight size={16} />
                                    </button>
                                </div>

                                <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid #F1F5F9', display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#94A3B8' }}>
                                    <span>Active: #0B4E6B / #FFFFFF</span>
                                    <span>Inactive: #FFFFFF + 1px border</span>
                                </div>
                            </div>

                        </div>
                    </section>

                    {/* ========================================================= */}
                    {/* 4. BADGES, CHIPS & STATUS INDICATORS */}
                    {/* ========================================================= */}
                    <section id="badges" style={{ marginBottom: '4.5rem' }}>
                        <div style={{ marginBottom: '1.75rem' }}>
                            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#1A6B4A', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.35rem' }}>
                                <ShieldCheck size={16} />
                                <span>BADGES & STATUS</span>
                            </div>
                            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: '700', color: '#0B4E6B', margin: 0 }}>
                                04. Badges, Chips & Live Status
                            </h2>
                            <p style={{ color: '#64748B', fontSize: '0.95rem', marginTop: '0.35rem' }}>
                                Komponen pill label, badge glassmorphism, dan indikator denyut operasional kantor.
                            </p>
                        </div>

                        <div style={{ background: '#FFFFFF', padding: '2rem', borderRadius: '18px', border: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                            
                            {/* Live Pulsing Status Badge */}
                            <div>
                                <strong style={{ fontSize: '0.88rem', color: '#0F172A', display: 'block', marginBottom: '0.5rem' }}>
                                    A. Live Operational Pulse Indicator (.map-footer-live-status)
                                </strong>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
                                    <div className="map-footer-live-status">
                                        <span className="status-indicator-live" />
                                        <span>Kantor Buka Hari Ini • Pelayanan Aktif</span>
                                    </div>
                                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '0.35rem 0.75rem', borderRadius: '8px', fontSize: '0.78rem', color: '#475569', fontWeight: '600' }}>
                                        <Clock size={14} color="#0B4E6B" />
                                        <span>Respon Cepat: 1–2 Jam Kerja</span>
                                    </div>
                                </div>
                            </div>

                            <hr style={{ border: 'none', borderTop: '1px solid #F1F5F9' }} />

                            {/* Service Tag & Product Pills */}
                            <div>
                                <strong style={{ fontSize: '0.88rem', color: '#0F172A', display: 'block', marginBottom: '0.5rem' }}>
                                    B. Service Metadata & Feature Pills (.service-tag-pill)
                                </strong>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                    <span className="service-tag-pill">B2B Matchmaking</span>
                                    <span className="service-tag-pill">Negosiasi Kontrak</span>
                                    <span className="service-tag-pill">Kemitraan Jangka Panjang</span>
                                    <span className="service-tag-pill">Buyer Luar Negeri</span>
                                    <span className="service-tag-pill">Kemendag RI</span>
                                </div>
                            </div>

                            <hr style={{ border: 'none', borderTop: '1px solid #F1F5F9' }} />

                            {/* Hero Badges */}
                            <div>
                                <strong style={{ fontSize: '0.88rem', color: '#0F172A', display: 'block', marginBottom: '0.5rem' }}>
                                    C. Hero Dark Glassmorphism Badges (.badge)
                                </strong>
                                <div style={{ background: '#0C1A14', padding: '1.25rem', borderRadius: '14px', display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                                    <span className="badge">Kementerian Perdagangan RI</span>
                                    <span className="badge">Ditjen PEN</span>
                                    <span className="badge">Jawa Timur Export Gateway</span>
                                    <span className="badge">Fasilitasi Gratis UMKM</span>
                                </div>
                            </div>

                            <hr style={{ border: 'none', borderTop: '1px solid #F1F5F9' }} />

                            {/* Step Badges (Customer Journey) */}
                            <div>
                                <strong style={{ fontSize: '0.88rem', color: '#0F172A', display: 'block', marginBottom: '0.5rem' }}>
                                    D. Numbered Milestone Step Badges (.journey-step-badge)
                                </strong>
                                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                                    <div className="journey-step-badge is-active">
                                        <span>01</span>
                                    </div>
                                    <div className="journey-step-badge">
                                        <span>02</span>
                                    </div>
                                    <div className="journey-step-badge">
                                        <span>03</span>
                                    </div>
                                    <div className="journey-step-badge">
                                        <span>04</span>
                                    </div>
                                    <span style={{ fontSize: '0.8rem', color: '#64748B', marginLeft: '0.5rem' }}>
                                        Digunakan pada section Customer Journey HomeAboutAssessment
                                    </span>
                                </div>
                            </div>

                        </div>
                    </section>

                    {/* ========================================================= */}
                    {/* 5. FORM INPUTS & FIELD CONTROLS */}
                    {/* ========================================================= */}
                    <section id="inputs" style={{ marginBottom: '4.5rem' }}>
                        <div style={{ marginBottom: '1.75rem' }}>
                            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#1A6B4A', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.35rem' }}>
                                <SquareCheck size={16} />
                                <span>FORM SYSTEM</span>
                            </div>
                            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: '700', color: '#0B4E6B', margin: 0 }}>
                                05. Form Controls & Inputs
                            </h2>
                            <p style={{ color: '#64748B', fontSize: '0.95rem', marginTop: '0.35rem' }}>
                                Spesifikasi form input field, textarea, label typography, status focus ring teal/navy, dan placeholder.
                            </p>
                        </div>

                        <div style={{ background: '#FFFFFF', padding: '2rem', borderRadius: '18px', border: '1px solid #E2E8F0' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
                                
                                {/* Text Input Standard */}
                                <div className="contact-input-field">
                                    <label htmlFor="figma-nama">
                                        Nama Lengkap <span className="field-required">*</span>
                                    </label>
                                    <input 
                                        type="text" 
                                        id="figma-nama" 
                                        defaultValue="Budi Santoso" 
                                        placeholder="Contoh: Budi Santoso" 
                                    />
                                    <span style={{ fontSize: '0.74rem', color: '#64748B' }}>Default State: Background #F8FAFC, Border 1.5px #E2E8F0, Radius 10px</span>
                                </div>

                                {/* Focused State Simulation */}
                                <div className="contact-input-field">
                                    <label htmlFor="figma-email">
                                        Email Kerja (Focused Ring Demo) <span className="field-required">*</span>
                                    </label>
                                    <input 
                                        type="email" 
                                        id="figma-email" 
                                        defaultValue="budi@eksportir-jatim.id"
                                        style={{
                                            background: '#FFFFFF',
                                            borderColor: '#0B4E6B',
                                            boxShadow: '0 0 0 3.5px rgba(11, 78, 107, 0.12)'
                                        }}
                                    />
                                    <span style={{ fontSize: '0.74rem', color: '#0B4E6B', fontWeight: '600' }}>Focus State: Border #0B4E6B + Ring 3.5px rgba(11,78,107,0.12)</span>
                                </div>

                                {/* Phone Input */}
                                <div className="contact-input-field">
                                    <label htmlFor="figma-tel">
                                        Nomor Telepon / WhatsApp
                                    </label>
                                    <input 
                                        type="tel" 
                                        id="figma-tel" 
                                        placeholder="Contoh: 08123456789" 
                                    />
                                    <span style={{ fontSize: '0.74rem', color: '#64748B' }}>Placeholder text: #94A3B8, Size: 0.86rem</span>
                                </div>

                                {/* Subject / Select */}
                                <div className="contact-input-field">
                                    <label htmlFor="figma-topic">
                                        Pilihan Layanan / Topik <span className="field-required">*</span>
                                    </label>
                                    <input 
                                        type="text" 
                                        id="figma-topic" 
                                        defaultValue="[Konsultasi Ekspor] Akses Pasar Timur Tengah" 
                                    />
                                    <span style={{ fontSize: '0.74rem', color: '#64748B' }}>Auto-injected topic prefix tag</span>
                                </div>

                            </div>

                            {/* Textarea */}
                            <div className="contact-input-field" style={{ marginBottom: '1.5rem' }}>
                                <label htmlFor="figma-pesan">
                                    Deskripsi Kebutuhan Ekspor <span className="field-required">*</span>
                                </label>
                                <textarea 
                                    id="figma-pesan" 
                                    rows="3"
                                    placeholder="Jelaskan jenis produk, kapasitas pasokan, dan negara tujuan yang Anda bidik..."
                                    defaultValue="Kami adalah produsen briket kelapa dan rempah kayu manis asal Malang dengan kapasitas produksi 4 kontainer per bulan. Ingin konsultasi terkait sertifikasi kelayakan ekspor ke Dubai."
                                />
                            </div>

                            {/* Notification Banners */}
                            <div className="contact-form-success-banner">
                                <ShieldCheck size={20} color="#059669" style={{ flexShrink: 0, marginTop: '2px' }} />
                                <div>
                                    <strong style={{ display: 'block', color: '#065F46', fontSize: '0.9rem' }}>Pesan Anda Telah Terkirim</strong>
                                    <p>Tim konsultan Export Center Surabaya akan menelaah data Anda dan menghubungi kembali dalam 1–2 jam kerja.</p>
                                </div>
                            </div>

                        </div>
                    </section>

                    {/* ========================================================= */}
                    {/* 6. ELEVATION, RADIUS & SHADOW TOKENS */}
                    {/* ========================================================= */}
                    <section id="elevation" style={{ marginBottom: '4.5rem' }}>
                        <div style={{ marginBottom: '1.75rem' }}>
                            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#1A6B4A', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.35rem' }}>
                                <Compass size={16} />
                                <span>DESIGN TOKENS</span>
                            </div>
                            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: '700', color: '#0B4E6B', margin: 0 }}>
                                06. Border Radii & Elevation Shadows
                            </h2>
                            <p style={{ color: '#64748B', fontSize: '0.95rem', marginTop: '0.35rem' }}>
                                Standar kurva radius dan bayangan drop-shadow yang dipakai di Figma.
                            </p>
                        </div>

                        {/* Radius Grid */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                            <div style={{ background: '#FFFFFF', padding: '1.25rem', border: '2px dashed #CBD5E1', borderRadius: '8px', textAlign: 'center' }}>
                                <strong style={{ display: 'block', fontSize: '0.9rem', color: '#0F172A' }}>Radius SM: 8px</strong>
                                <span style={{ fontSize: '0.75rem', color: '#64748B' }}>--radius-sm / Badges, Tags</span>
                            </div>
                            <div style={{ background: '#FFFFFF', padding: '1.25rem', border: '2px dashed #CBD5E1', borderRadius: '10px', textAlign: 'center' }}>
                                <strong style={{ display: 'block', fontSize: '0.9rem', color: '#0F172A' }}>Radius MD: 10px</strong>
                                <span style={{ fontSize: '0.75rem', color: '#64748B' }}>Inputs, Submit Buttons</span>
                            </div>
                            <div style={{ background: '#FFFFFF', padding: '1.25rem', border: '2px dashed #CBD5E1', borderRadius: '14px', textAlign: 'center' }}>
                                <strong style={{ display: 'block', fontSize: '0.9rem', color: '#0F172A' }}>Radius LG: 14px</strong>
                                <span style={{ fontSize: '0.75rem', color: '#64748B' }}>--radius-lg / Article Cards</span>
                            </div>
                            <div style={{ background: '#FFFFFF', padding: '1.25rem', border: '2px dashed #CBD5E1', borderRadius: '18px', textAlign: 'center' }}>
                                <strong style={{ display: 'block', fontSize: '0.9rem', color: '#0F172A' }}>Radius XL: 18px</strong>
                                <span style={{ fontSize: '0.75rem', color: '#64748B' }}>--radius-xl / Main Feature Cards</span>
                            </div>
                            <div style={{ background: '#FFFFFF', padding: '1.25rem', border: '2px dashed #CBD5E1', borderRadius: '9999px', textAlign: 'center' }}>
                                <strong style={{ display: 'block', fontSize: '0.9rem', color: '#0F172A' }}>Radius Full: 9999px</strong>
                                <span style={{ fontSize: '0.75rem', color: '#64748B' }}>Pills, Action Badges</span>
                            </div>
                        </div>

                        {/* Shadows Grid */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
                            <div style={{ background: '#FFFFFF', padding: '1.5rem', borderRadius: '14px', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}>
                                <strong style={{ fontSize: '0.9rem', color: '#0F172A', display: 'block' }}>Shadow Minimal (--shadow)</strong>
                                <code style={{ fontSize: '0.75rem', color: '#64748B', display: 'block', marginTop: '0.5rem' }}>0 1px 3px rgba(0,0,0,0.08)</code>
                                <span style={{ fontSize: '0.75rem', color: '#94A3B8', marginTop: '0.25rem', display: 'block' }}>Navbar sticky header</span>
                            </div>

                            <div style={{ background: '#FFFFFF', padding: '1.5rem', borderRadius: '14px', boxShadow: '0 4px 16px rgba(11,78,107,0.06)' }}>
                                <strong style={{ fontSize: '0.9rem', color: '#0F172A', display: 'block' }}>Navy Tinted Soft (--shadow-md)</strong>
                                <code style={{ fontSize: '0.75rem', color: '#64748B', display: 'block', marginTop: '0.5rem' }}>0 4px 16px rgba(11,78,107,0.06)</code>
                                <span style={{ fontSize: '0.75rem', color: '#94A3B8', marginTop: '0.25rem', display: 'block' }}>Standard cards default state</span>
                            </div>

                            <div style={{ background: '#FFFFFF', padding: '1.5rem', borderRadius: '14px', boxShadow: '0 12px 28px -4px rgba(11,78,107,0.12)' }}>
                                <strong style={{ fontSize: '0.9rem', color: '#0F172A', display: 'block' }}>Navy Elevated Hover (--shadow-lg)</strong>
                                <code style={{ fontSize: '0.75rem', color: '#64748B', display: 'block', marginTop: '0.5rem' }}>0 12px 28px rgba(11,78,107,0.12)</code>
                                <span style={{ fontSize: '0.75rem', color: '#94A3B8', marginTop: '0.25rem', display: 'block' }}>Hover elevation on feature cards</span>
                            </div>
                        </div>
                    </section>

                    {/* ========================================================= */}
                    {/* 7. ASSEMBLED CARD COMPONENTS (FIGMA READY) */}
                    {/* ========================================================= */}
                    <section id="cards" style={{ marginBottom: '3rem' }}>
                        <div style={{ marginBottom: '1.75rem' }}>
                            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#1A6B4A', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.35rem' }}>
                                <Layers size={16} />
                                <span>ASSEMBLED CARDS</span>
                            </div>
                            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: '700', color: '#0B4E6B', margin: 0 }}>
                                07. Complete Card Components
                            </h2>
                            <p style={{ color: '#64748B', fontSize: '0.95rem', marginTop: '0.35rem' }}>
                                Contoh komponen utuh kartu yang bisa langsung diduplikasi bentuk dan strukturnya di Figma.
                            </p>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.5rem' }}>
                            
                            {/* Card A: Elevated Feature Card (Contact Cards) */}
                            <div className="contact-feature-card">
                                <div className="contact-card-top-action">
                                    <button type="button" className="contact-copy-pill" onClick={() => handleCopy('ecs@kemendag.go.id', 'Email')}>
                                        <Copy size={11} />
                                        <span>Salin</span>
                                    </button>
                                </div>
                                <div className="contact-feature-icon-wrap icon-email">
                                    <Send size={26} />
                                </div>
                                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.15rem', fontWeight: '700', color: '#0F172A', marginBottom: '0.35rem' }}>
                                    Email Sekretariat
                                </h3>
                                <p style={{ fontSize: '0.85rem', color: '#64748B', marginBottom: '1rem', maxWidth: '280px' }}>
                                    Pertanyaan resmi dan jadwal konsultasi pelaku usaha
                                </p>
                                <span style={{ fontFamily: 'monospace', fontWeight: '700', fontSize: '0.95rem', color: '#0B4E6B' }}>
                                    ecs@kemendag.go.id
                                </span>
                            </div>

                            {/* Card B: Statistics Bar Metric */}
                            <div style={{ background: '#FFFFFF', padding: '2rem', borderRadius: '18px', border: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', boxShadow: '0 4px 16px rgba(11,78,107,0.06)' }}>
                                <div style={{ width: '56px', height: '56px', borderRadius: '14px', background: 'rgba(26,107,74,0.1)', color: '#1A6B4A', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                                    <Users size={28} />
                                </div>
                                <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '2.5rem', fontWeight: '800', color: '#0F172A', lineHeight: '1.1', marginBottom: '0.25rem' }}>
                                    1.250+
                                </div>
                                <strong style={{ fontSize: '0.95rem', color: '#0B4E6B', marginBottom: '0.2rem' }}>
                                    Pelaku Usaha Difasilitasi
                                </strong>
                                <span style={{ fontSize: '0.8rem', color: '#64748B' }}>
                                    UMKM & Eksportir Wilayah Jawa Timur
                                </span>
                            </div>

                            {/* Card C: Article Preview Card Mini */}
                            <div style={{ background: '#FFFFFF', borderRadius: '18px', border: '1px solid #E2E8F0', overflow: 'hidden', boxShadow: '0 4px 16px rgba(11,78,107,0.06)' }}>
                                <div style={{ height: '140px', background: 'linear-gradient(135deg, #0B4E6B 0%, #1A6B4A 100%)', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF' }}>
                                    <Ship size={42} opacity={0.4} />
                                    <span style={{ position: 'absolute', top: '12px', left: '12px', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(6px)', padding: '3px 10px', borderRadius: '9999px', fontSize: '0.72rem', fontWeight: '700', color: '#FFFFFF' }}>
                                        Global Trade
                                    </span>
                                </div>
                                <div style={{ padding: '1.25rem' }}>
                                    <span style={{ fontSize: '0.74rem', color: '#94A3B8' }}>14 Sep 2026 • 4 min baca</span>
                                    <h4 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.95rem', fontWeight: '700', color: '#0F172A', margin: '0.4rem 0 0.6rem', lineHeight: '1.35' }}>
                                        Pelepasan Kontainer Ekspor Komoditas Rempah Jatim ke Uni Emirat Arab
                                    </h4>
                                    <Link href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem', fontWeight: '700', color: '#1A6B4A', textDecoration: 'none' }}>
                                        <span>Baca Selengkapnya</span>
                                        <ArrowRight size={14} />
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </section>

                </main>
            </div>
        </>
    );
}

DesignSystem.layout = (page) => <Layout>{page}</Layout>;
