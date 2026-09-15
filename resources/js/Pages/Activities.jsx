import { Head } from '@inertiajs/react';
import Layout from '../Layouts/Layout';
import ActivitiesHero from '../Components/ActivitiesHero';
import ActivitiesNewsSection from '../Components/ActivitiesNewsSection';

function Activities() {
    return (
        <>
            <Head title="Kegiatan & Berita Ekspor - Export Center Surabaya" />
            <ActivitiesHero />
            <ActivitiesNewsSection />
        </>
    );
}

Activities.layout = (page) => <Layout>{page}</Layout>;
export default Activities;
