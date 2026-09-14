import React from 'react';

const partners = [
    { id: 1, name: 'Badan POM', logo: '/images/partners/badan-pom.png' },
    { id: 2, name: 'Kementerian Perdagangan', logo: '/images/partners/kemendag.png' },
    { id: 3, name: 'Pemerintah Provinsi Jawa Timur', logo: '/images/partners/pemprov-jatim.png' },
    { id: 4, name: 'InaExport', logo: '/images/partners/inaexport.png' },
    { id: 5, name: 'GPEI', logo: '/images/partners/gpei.png' },
    { id: 6, name: 'Indonesia Eximbank', logo: '/images/partners/eximbank.png' }
];

export default function PartnerSliderSection() {
    // Duplicate the 6 logos twice to create a seamless infinite marquee loop
    const marqueeList = [...partners, ...partners];

    return (
        <section className="partner-slider-section">
            <div className="partner-section-wrapper">
                <div className="partner-left-title-col">
                    <h2 className="partner-slider-title">Mitra Kami</h2>
                </div>
                <div className="partner-right-marquee-col">
                    <div className="partner-marquee-wrapper">
                        <div className="partner-marquee-track">
                            {marqueeList.map((partner, index) => (
                                <div key={`${partner.id}-${index}`} className="partner-marquee-item">
                                    <img 
                                        src={partner.logo} 
                                        alt={partner.name} 
                                        className="partner-logo-img" 
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
