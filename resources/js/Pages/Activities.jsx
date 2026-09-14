import { Head } from '@inertiajs/react';
import Layout from '../Layouts/Layout';
import ActivitiesHero from '../Components/ActivitiesHero';

function Activities() {
    return (
        <>
            <Head title="Kegiatan & Event - Export Center Surabaya" />
            <ActivitiesHero />
        </>
    );
}

Activities.layout = (page) => <Layout>{page}</Layout>;
export default Activities;
