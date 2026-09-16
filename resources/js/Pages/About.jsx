import React from 'react';
import { Head } from '@inertiajs/react';
import Layout from '../Layouts/Layout';
import TeamSection from '../Components/TeamSection';
import AboutEditorialIntro from '../Components/AboutEditorialIntro';
import AboutFactsSection from '../Components/AboutFactsSection';
import AboutProcessServices from '../Components/AboutProcessServices';

function About() {
    return (
        <>
            <Head title="Tentang Kami" />
            <div className="hero-banner">
                <img src="/images/hero-about.jpg" alt="Tentang Kami - Export Center Surabaya" />
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1>Tentang Kami</h1>
                    <p>Export Center Surabaya</p>
                </div>
            </div>

            {/* Editorial Intro Section (Selamat Datang di Export Center Surabaya) */}
            <AboutEditorialIntro />

            {/* Facts & Showcase Section (2-Column: Left 3 vertical stats, Right Trusted by + Heading + 3 Photos) */}
            <AboutFactsSection />

            {/* Layanan Kami Section */}
            <AboutProcessServices />
            <TeamSection />
        </>
    );
}

About.layout = (page) => <Layout>{page}</Layout>;
export default About;
