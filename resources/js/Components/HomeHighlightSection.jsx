import React from 'react';

export default function HomeHighlightSection() {
    return (
        <section className="home-fullscreen-section">
            <div className="home-half-split">
                <div className="home-half-image-side">
                    <img 
                        src="/images/home-ship-cargo.jpg?v=20260911_round" 
                        alt="Kapal Kargo Ekspor" 
                        className="home-half-img" 
                    />
                </div>
                <div className="home-half-content-side">
                    {/* Area Teks Konten Sisi Kanan */}
                    <div className="home-highlight-description-container">
                        <p className="home-highlight-paragraph">
                            Kementerian Perdagangan Republik Indonesia sebagai pengemban amanah Peraturan Pemerintah Pengganti Undang-Undang (Perpu) Nomor 2 Tahun 2022 tentang Cipta Kerja Pasal 74 yang bertugas melakukan pembinaan terhadap Pelaku Usaha dalam rangka pengembangan Ekspor untuk perluasan akses Pasar bagi Barang dan Jasa produksi dalam negeri. Pada Peraturan Menteri Perdagangan Republik Indonesia Nomor 29 Tahun 2022, Direktorat Pengembangan Pasar dan Informasi Ekspor, Direktorat Jenderal Pengembangan Ekspor Nasional (Ditjen. PEN), mempunyai tugas melaksanakan perumusan dan pelaksanaan kebijakan di bidang pengembangan dan peningkatan daya saing pasar ekspor, pelaku ekspor, dan pengembangan kelembagaan promosi.
                        </p>

                        <p className="home-highlight-paragraph">
                            Export Center Surabaya (ECS), as the regional extension of the Directorate of Market Development and Export Information, plays a role in optimizing the role of regional exporters in utilizing export opportunities, including the distribution of inquiries and Market Intelligence results obtained from Trade Representatives Abroad, the utilization of Free Trade Agreements (FTA), and export promotion. With the presence of Export Center Surabaya, policies issued by the Ministry of Trade can be delivered and utilized optimally by business actors. Additionally, information sourced from Trade Representatives abroad can be delivered accurately and quickly to expand the export market.
                        </p>

                        <p className="home-highlight-paragraph">
                            Maksud Penyelenggaraan Export Center Surabaya adalah untuk mengoptimalkan peluang pasar ekspor di pasar internasional agar dapat dimanfaatkan oleh para pelaku usaha ekspor. Tujuan dari kegiatan penyelenggaraan Export Center Surabaya adalah menyediakan layanan publik yang berfungsi sebagai tempat para pelaku usaha untuk memperoleh konsultasi dan informasi mengenai peluang pasar ekspor diantaranya buyers inquiry yang diperoleh dari Perwakilan Perdagangan di Luar Negeri, Market Intelligence, pemanfaatan Free Trade Agreement maupun promosi ekspor.
                        </p>
                    </div>
                </div>
            </div>

            {/* Header teks besar di area putih, mulai dari batas curve kiri memanjang ke kanan */}
            <div className="home-highlight-global-title-wrapper">
                <h2 className="home-highlight-large-title">
                    About Export Center Surabaya
                </h2>
            </div>
        </section>
    );
}
