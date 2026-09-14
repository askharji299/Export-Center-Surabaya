import React from 'react';

const servicesData = [
    {
        id: 'business-matching',
        title: 'Business Matching',
        description: 'Business Matching connects business actors with potential trade partners through needs analysis a...',
        iconUrl: '/images/services/service-1.png'
    },
    {
        id: 'export-consultation',
        title: 'Export Consultation',
        description: 'Export Consultation provides comprehensive guidance on the export process, including legal...',
        iconUrl: '/images/services/service-2.png'
    },
    {
        id: 'inaexport-mentoring',
        title: 'InaExport Mentoring',
        description: 'InaExport Assistance supports companies in leveraging the InaExport platform, providing...',
        iconUrl: '/images/services/service-3.png'
    },
    {
        id: 'inquiry-dissemination',
        title: 'Inquiry Dissemination',
        description: 'Inquiry Distribution promotes your products to potential buyers in the global market by managing and...',
        iconUrl: '/images/services/service-4.png'
    },
    {
        id: 'other-services',
        title: 'Other Services',
        description: 'Other services include Trade Case Mediation, which offers dispute resolution with professional...',
        iconUrl: '/images/services/service-5.png'
    }
];

export default function ServicesSection() {
    return (
        <section className="services-section">
            <div className="services-container">
                <div className="services-header">
                    <span className="services-subtitle">OUR SERVICES</span>
                    <h2 className="services-title">Explore Our Services</h2>
                </div>
                <div className="services-grid">
                    {servicesData.map((service) => (
                        <div key={service.id} className="custom-service-card">
                            <div className="card-top-icon">
                                <img src={service.iconUrl} alt={service.title} className="card-top-icon-img" />
                            </div>
                            <h3 className="card-item-title">{service.title}</h3>
                            <p className="card-item-description">{service.description}</p>
                            <div className="card-action-wrapper">
                                <button className="card-tampilkan-btn">
                                    Baca Selengkapnya
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
