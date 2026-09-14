import { Head } from '@inertiajs/react';
import Layout from '../Layouts/Layout';

function Contact() {
    return (
        <>
            <Head title="Hubungi Kami - Export Center Surabaya" />
            <div className="hero-banner">
                <img src="/images/hero-about.jpg" alt="Hubungi Kami" />
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1>Hubungi Kami</h1>
                    <p>Export Center Surabaya</p>
                </div>
            </div>
            <section className="about-intro-section">
                <div className="about-intro-content-col" style={{ width: '100%' }}>
                    <span className="about-intro-subtitle">KONTAK</span>
                    <h2 className="about-intro-title">Mari Terhubung dengan Kami</h2>
                    <p className="about-intro-description">
                        Punya pertanyaan seputar layanan ekspor, konsulatasi, atau konsultasi produk? Tim Export Center Surabaya siap membantu Anda. Silakan hubungi kami melalui layanan informasi atau kunjungi kantor kami.
                    </p>
                </div>
            </section>
        </>
    );
}

Contact.layout = (page) => <Layout>{page}</Layout>;
export default Contact;
