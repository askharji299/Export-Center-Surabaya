import { Head } from '@inertiajs/react';
import Layout from '../Layouts/Layout';
import HomeHeroInteractive from '../Components/HomeHeroInteractive';
import ServicesSection from '../Components/ServicesSection';

function Welcome() {
    return (
        <>
            <Head title="Export Center Surabaya - Kementerian Perdagangan Republik Indonesia" />
            <HomeHeroInteractive isRevealed={true} />
            <ServicesSection />
        </>
    );
}

Welcome.layout = (page) => <Layout>{page}</Layout>;
export default Welcome;
