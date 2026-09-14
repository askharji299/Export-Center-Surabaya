import { Head } from '@inertiajs/react';
import Layout from '../Layouts/Layout';
import ServicesSection from '../Components/ServicesSection';

function Services() {
    return (
        <>
            <Head title="Layanan Kami - Export Center Surabaya" />
            <div className="hero-banner">
                <img src="/images/hero-about.jpg" alt="Layanan Kami" />
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1>Layanan Kami</h1>
                    <p>Export Center Surabaya</p>
                </div>
            </div>
            <ServicesSection />
        </>
    );
}

Services.layout = (page) => <Layout>{page}</Layout>;
export default Services;
