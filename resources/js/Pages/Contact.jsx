import { Head } from '@inertiajs/react';
import Layout from '../Layouts/Layout';
import ContactHero from '../Components/ContactHero';
import ContactSection from '../Components/ContactSection';

function Contact() {
    return (
        <>
            <Head title="Hubungi Kami - Export Center Surabaya" />
            <ContactHero />
            <ContactSection />
        </>
    );
}

Contact.layout = (page) => <Layout>{page}</Layout>;
export default Contact;

