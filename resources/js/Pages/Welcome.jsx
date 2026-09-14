import { Head } from '@inertiajs/react';
import Layout from '../Layouts/Layout';
import ServicesSection from '../Components/ServicesSection';

function Welcome() {
    return (
        <>
            <Head title="Home - Export Center Surabaya" />
            <div className="hero-banner">
                <img src="/images/hero-banner.jpg" alt="Perdagangan Indonesia" />
                <div className="hero-overlay"></div>
                <div className="hero-content hero-content--two-tone-left">
                    <h1 className="hero-title-two-tone-left">
                        <span className="text-navy">KEMENTERIAN</span> <span className="text-green-bright">PERDAGANGAN</span>
                    </h1>
                    <p className="hero-subtitle-two-tone-left">REPUBLIK INDONESIA</p>
                </div>
            </div>
            <ServicesSection />
        </>
    );
}

Welcome.layout = (page) => <Layout>{page}</Layout>;
export default Welcome;
