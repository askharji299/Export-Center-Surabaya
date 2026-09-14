import { Head } from '@inertiajs/react';
import Layout from '../Layouts/Layout';

function Information() {
    return (
        <>
            <Head title="Informasi & Berita - Export Center Surabaya" />
            
            {/* Pure Clean Video Hero Section */}
            <div className="video-hero-container">
                <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="video-hero-bg"
                >
                    <source src="/videos/hero-information.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </>
    );
}

Information.layout = (page) => <Layout>{page}</Layout>;
export default Information;
