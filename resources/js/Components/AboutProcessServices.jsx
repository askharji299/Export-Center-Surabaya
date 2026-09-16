import React from 'react';
import { MessagesSquare, MailCheck, Users, FileText, Settings2 } from 'lucide-react';

const serviceItems = [
    {
        id: 1,
        number: '01',
        title: 'Konsultasi Ekspor',
        desc: 'Layanan ini merupakan aktivitas utama dari ECS, yang menyediakan panduan bagi pelaku usaha dari berbagai skala, masyarakat umum, dan mahasiswa terkait ekspor. Konsultasi mencakup prosedur ekspor, legalitas, sertifikasi produk, standar produk ekspor, serta strategi perluasan pasar.',
        icon: MessagesSquare
    },
    {
        id: 2,
        number: '02',
        title: 'Penyebaran Inquiry',
        desc: 'Melalui proses penyebaran inquiry yang efisien, perusahaan dapat meningkatkan kepuasan pelanggan sekaligus mengoptimalkan produk dan layanan yang mereka tawarkan.',
        icon: MailCheck
    },
    {
        id: 3,
        number: '03',
        title: 'Business Matching',
        desc: 'Dengan business matching yang efektif, perusahaan dapat memaksimalkan potensi mereka dan menciptakan hubungan yang saling menguntungkan di dunia bisnis.',
        icon: Users
    },
    {
        id: 4,
        number: '04',
        title: 'Panduan Aplikasi Inaexport',
        desc: 'Aplikasi ini dikembangkan oleh Direktorat Jenderal Pengembangan Ekspor Nasional dan berfungsi sebagai referensi utama bagi Perwadag saat ada inquiry dari buyer.',
        icon: FileText
    },
    {
        id: 5,
        number: '05',
        title: 'Layanan Lainnya',
        desc: 'ECS juga membantu menyelesaikan sengketa antara pelaku usaha dan buyer, dengan menghubungkan mereka ke Perwadag untuk mediasi dan penyelesaian masalah.',
        icon: Settings2
    }
];

export default function AboutProcessServices() {
    return (
        <section className="about-process-section">
            <div className="about-process-container">
                {/* Left Column: Sticky Title (menggantung saat scroll) */}
                <div className="about-process-left">
                    <div className="about-process-sticky-box">
                        <h2 className="about-process-title">
                            Layanan Komprehensif ECS untuk Mendukung Kesuksesan Ekspor Bisnis Anda.
                        </h2>
                    </div>
                </div>

                {/* Right Column: Clean Editorial List with Numbers & Exact Copywriting */}
                <div className="about-process-right">
                    <div className="about-process-list">
                        {serviceItems.map((item, index) => {
                            const IconComp = item.icon;
                            return (
                                <div key={item.id || index} className="about-process-card-row">
                                    {/* Header Row: Title & Icon on Left, Big Display Number on Right */}
                                    <div className="about-process-card-header">
                                        <div className="about-process-title-group">
                                            <div className="about-process-icon-badge">
                                                <IconComp size={24} strokeWidth={2.2} />
                                            </div>
                                            <h3 className="about-process-item-title">{item.title}</h3>
                                        </div>
                                        <span className="about-process-big-num">{item.number}</span>
                                    </div>

                                    {/* Description (Exact Copywriting Preserved 100%) */}
                                    <p className="about-process-item-desc">{item.desc}</p>

                                    {/* Clean divider line between items */}
                                    {index < serviceItems.length - 1 && (
                                        <div className="about-process-row-divider" />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
