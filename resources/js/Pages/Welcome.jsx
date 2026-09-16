import { Head } from '@inertiajs/react';
import Layout from '../Layouts/Layout';
import HomeHeroInteractive from '../Components/HomeHeroInteractive';
import HomeAboutAssessment from '../Components/HomeAboutAssessment';
import ServicesSection from '../Components/ServicesSection';
import SelectedActivitiesSection from '../Components/SelectedActivitiesSection';
import HomeHighlightSection from '../Components/HomeHighlightSection';
import PartnerSliderSection from '../Components/PartnerSliderSection';

function Welcome() {
    return (
        <>
            <Head title="Home - Export Center Surabaya" />
            <HomeHeroInteractive isRevealed={true} />

            {/* 1. About / Customer Journey: Client Assessment Layout */}
            <HomeAboutAssessment />

            {/* 2. Explore Our Services */}
            <ServicesSection />

            {/* 3. News (Berita) */}
            <SelectedActivitiesSection />

            {/* 4. Indonesian Products with Great Potential */}
            <HomeHighlightSection />

            {/* 5. Mitra Kami */}
            <PartnerSliderSection />
        </>
    );
}

Welcome.layout = (page) => <Layout>{page}</Layout>;
export default Welcome;
