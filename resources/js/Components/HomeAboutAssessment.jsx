import React, { useState } from 'react';

const keyMilestones = [
    {
        id: '01',
        label: 'Amanah & Kebijakan',
        text: 'Kementerian Perdagangan Republik Indonesia sebagai pengemban amanah Peraturan Pemerintah Pengganti Undang-Undang (Perpu) Nomor 2 Tahun 2022 tentang Cipta Kerja Pasal 74 yang bertugas melakukan pembinaan terhadap Pelaku Usaha dalam rangka pengembangan Ekspor untuk perluasan akses Pasar bagi Barang dan Jasa produksi dalam negeri. Pada Peraturan Menteri Perdagangan Republik Indonesia Nomor 29 Tahun 2022, Direktorat Pengembangan Pasar dan Informasi Ekspor, Direktorat Jenderal Pengembangan Ekspor Nasional (Ditjen. PEN), mempunyai tugas melaksanakan perumusan dan pelaksanaan kebijakan di bidang pengembangan dan peningkatan daya saing pasar ekspor, pelaku ekspor, dan pengembangan kelembagaan promosi.'
    },
    {
        id: '02',
        label: 'Peran Strategis ECS',
        text: 'Export Center Surabaya (ECS), as the regional extension of the Directorate of Market Development and Export Information, plays a role in optimizing the role of regional exporters in utilizing export opportunities, including the distribution of inquiries and Market Intelligence results obtained from Trade Representatives Abroad, the utilization of Free Trade Agreements (FTA), and export promotion. With the presence of Export Center Surabaya, policies issued by the Ministry of Trade can be delivered and utilized optimally by business actors. Additionally, information sourced from Trade Representatives abroad can be delivered accurately and quickly to expand the export market.'
    },
    {
        id: '03',
        label: 'Maksud & Tujuan',
        text: 'Maksud Penyelenggaraan Export Center Surabaya adalah untuk mengoptimalkan peluang pasar ekspor di pasar internasional agar dapat dimanfaatkan oleh para pelaku usaha ekspor. Tujuan dari kegiatan penyelenggaraan Export Center Surabaya adalah menyediakan layanan publik yang berfungsi sebagai tempat para pelaku usaha untuk memperoleh konsultasi dan informasi mengenai peluang pasar ekspor diantaranya buyers inquiry yang diperoleh dari Perwakilan Perdagangan di Luar Negeri, Market Intelligence, pemanfaatan Free Trade Agreement maupun promosi ekspor.'
    }
];

export default function HomeAboutAssessment() {
    const [activeMilestone, setActiveMilestone] = useState('01');

    return (
        <section className="about-journey-section" id="tentang-ecs">
            <div className="about-journey-container">
                {/* 3-Column Layout */}
                <div className="about-journey-grid">
                    
                    {/* LEFT COLUMN: Main Heading */}
                    <div className="about-journey-left">
                        <div className="journey-title-block">
                            <h2 className="journey-main-title">
                                About Export Center Surabaya (ECS)
                            </h2>
                        </div>
                    </div>

                    {/* MIDDLE COLUMN: Tall Rounded Vertical Photo with Overlaid Number Badges 01, 02, 03 */}
                    <div className="about-journey-middle">
                        <div className="journey-image-wrapper">
                            <img 
                                src="/images/about-assessment.jpg" 
                                alt="Konsultasi & Asesmen Ekspor - Export Center Surabaya" 
                                className="journey-tall-img"
                            />
                            
                            {/* Number Badges (01, 02, 03) overlapping on the right edge of image */}
                            <div className="journey-badges-column">
                                {keyMilestones.map((milestone) => (
                                    <button 
                                        key={milestone.id}
                                        type="button"
                                        onClick={() => setActiveMilestone(milestone.id)}
                                        className={`journey-step-badge ${activeMilestone === milestone.id ? 'is-active' : ''}`}
                                        aria-label={`Tahapan ${milestone.id}`}
                                    >
                                        <span>{milestone.id}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Key milestones text stream */}
                    <div className="about-journey-right">
                        <div className="journey-milestones-block">
                            <div className="milestones-stream">
                                {keyMilestones.map((item) => (
                                    <div 
                                        key={item.id} 
                                        className={`milestone-text-item ${activeMilestone === item.id ? 'is-highlighted' : ''}`}
                                        onClick={() => setActiveMilestone(item.id)}
                                    >
                                        <p className="milestone-paragraph">
                                            {item.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
