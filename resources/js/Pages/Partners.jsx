import { Head } from '@inertiajs/react';
import Layout from '../Layouts/Layout';

function Partners() {
    return (
        <>
            <Head title="Mitra Kami - Export Center Surabaya" />
            <div className="hero-banner">
                <img src="/images/hero-about.jpg" alt="Mitra Kami" />
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1>Mitra Kami</h1>
                    <p>Export Center Surabaya</p>
                </div>
            </div>
            <section className="about-intro-section" style={{ minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="about-intro-content-col" style={{ textAlign: 'center' }}>
                    <span className="about-intro-subtitle">PARTNERS & MITRA</span>
                    <h2 className="about-intro-title">Jaringan Mitra Export Center Surabaya</h2>
                    <p className="about-intro-description">
                        Kami bekerja sama dengan berbagai lembaga pemerintah, perwakilan perdagangan luar negeri, asosiasi industri, dan pelaku usaha untuk memperluas jangkauan ekspor produk Indonesia ke pasar global.
                    </p>
                </div>
            </section>
        </>
    );
}

Partners.layout = (page) => <Layout>{page}</Layout>;
export default Partners;
