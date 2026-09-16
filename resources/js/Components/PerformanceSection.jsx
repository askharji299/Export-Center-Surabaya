import React, { useState, useMemo } from 'react';
import { 
    Building2, 
    Handshake, 
    FileQuestion, 
    DollarSign, 
    Users, 
    Globe2, 
    TrendingUp, 
    ChevronDown, 
    Info, 
    Calendar,
    CheckCircle2,
    ArrowUpRight,
    Search,
    ChevronLeft,
    ChevronRight,
    Layers,
    BarChart3
} from 'lucide-react';

// Monthly consultation data for the chart (Jan - Dec)
const monthlyConsultationData = [
    { month: 'Jan', count: 65, active: false },
    { month: 'Feb', count: 62, active: false },
    { month: 'Mar', count: 45, active: false },
    { month: 'Apr', count: 85, active: false },
    { month: 'May', count: 81, active: false },
    { month: 'Jun', count: 112, active: false },
    { month: 'Jul', count: 123, active: false },
    { month: 'Aug', count: 147, active: true, badge: 'Puncak' }, // Peak
    { month: 'Sep', count: 13, active: false },
    { month: 'Oct', count: 0, active: false },
    { month: 'Nov', count: 0, active: false },
    { month: 'Dec', count: 0, active: false },
];

// All consultation topics data based on the original 13 entries
const allTopicsData = [
    { id: 1, topic: 'Akses Pasar/ Dicarikan buyer', count: 198, category: 'Pasar Global', pct: 27.0 },
    { id: 2, topic: 'Dokumen yang Diperlukan Untuk Ekspor', count: 147, category: 'Kepatuhan & Regulasi', pct: 20.1 },
    { id: 3, topic: 'Persyaratan Menjadi Eksportir', count: 86, category: 'Legalitas', pct: 11.7 },
    { id: 4, topic: 'Pelatihan Register di Inaexport', count: 86, category: 'Digitalisasi', pct: 11.7 },
    { id: 5, topic: 'Pembiayaan Ekspor', count: 36, category: 'Finansial', pct: 4.9 },
    { id: 6, topic: 'Penetapan Harga & Kalkulasi Ekspor', count: 34, category: 'Komersial', pct: 4.6 },
    { id: 7, topic: 'Sertifikasi & Standar Mutu Internasional', count: 32, category: 'Kualitas', pct: 4.4 },
    { id: 8, topic: 'Kemasan & Pelabelan Produk Ekspor', count: 28, category: 'Produksi', pct: 3.8 },
    { id: 9, topic: 'Prosedur Kepabeanan & Custom Clearance', count: 25, category: 'Logistik', pct: 3.4 },
    { id: 10, topic: 'Incoterms & Metode Pembayaran Ekspor', count: 22, category: 'Komersial', pct: 3.0 },
    { id: 11, topic: 'Promosi & Pameran Dagang Mancanegara', count: 21, category: 'Pasar Global', pct: 2.9 },
    { id: 12, topic: 'Penyelesaian Sengketa Dagang Internasional', count: 19, category: 'Hukum Dagang', pct: 2.6 },
    { id: 13, topic: 'Analisis Permintaan Pasar & Buyer Inquiry', count: 15, category: 'Pasar Global', pct: 2.0 }
];

export default function PerformanceSection() {
    const [selectedYear, setSelectedYear] = useState('2024');
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [hoveredMonth, setHoveredMonth] = useState(null);
    const itemsPerPage = 5;

    // Filtered topics based on search
    const filteredTopics = useMemo(() => {
        return allTopicsData.filter(t => 
            t.topic.toLowerCase().includes(searchTerm.toLowerCase()) ||
            t.category.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm]);

    // Pagination
    const totalPages = Math.ceil(filteredTopics.length / itemsPerPage);
    const paginatedTopics = useMemo(() => {
        const start = (currentPage - 1) * itemsPerPage;
        return filteredTopics.slice(start, start + itemsPerPage);
    }, [filteredTopics, currentPage]);

    // Calculate max value for chart scaling
    const maxMonthlyCount = Math.max(...monthlyConsultationData.map(d => d.count), 160);

    return (
        <section className="ecs-performance-section" id="performa-ecs">
            <div className="ecs-performance-container">
                {/* Section Header */}
                <div className="ecs-performance-header">
                    <div className="ecs-performance-kicker">
                        <BarChart3 size={15} className="kicker-icon" />
                        <span>TRANSKIP CAPAIAN RESMI</span>
                    </div>
                    <h2 className="ecs-performance-title">
                        Performa <span className="text-navy">Export Center</span> <span className="text-green">Surabaya</span>
                    </h2>
                    <p className="ecs-performance-desc">
                        Dashboard transparansi data pendampingan ekspor, temu bisnis internasional, dan realisasi transaksi ekspor Jawa Timur.
                    </p>
                </div>

                {/* Main Card Wrapper */}
                <div className="ecs-dashboard-card">
                    {/* Dashboard Toolbar */}
                    <div className="ecs-dashboard-toolbar">
                        <div className="toolbar-left">
                            <div>
                                <h3 className="toolbar-title">Capaian Agregat & Analitik</h3>
                                <p className="toolbar-subtitle">Pembaruan data berkala Ditjen Pengembangan Ekspor Nasional</p>
                            </div>
                        </div>

                        <div className="toolbar-right">
                            <div className="year-selector-wrap">
                                <label htmlFor="year-select" className="year-label">
                                    <Calendar size={15} />
                                    <span>Tahun:</span>
                                </label>
                                <div className="custom-select-box">
                                    <select 
                                        id="year-select"
                                        value={selectedYear} 
                                        onChange={(e) => setSelectedYear(e.target.value)}
                                        className="year-select-input"
                                    >
                                        <option value="2024">2024 (Berjalan)</option>
                                        <option value="2023">2023</option>
                                        <option value="2022">2022</option>
                                    </select>
                                    <ChevronDown size={14} className="select-arrow" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* KPI Cards Grid */}
                    <div className="ecs-kpi-grid">
                        {/* KPI 1: Perusahaan Terdaftar */}
                        <div className="ecs-kpi-card kpi-registered">
                            <div className="kpi-header">
                                <div className="kpi-icon-pill">
                                    <Building2 size={18} />
                                </div>
                                <span className="kpi-tag">Database</span>
                            </div>
                            <div className="kpi-body">
                                <span className="kpi-label">Perusahaan Terdaftar</span>
                                <div className="kpi-value-row">
                                    <span className="kpi-number">9,230</span>
                                    <span className="kpi-unit">UKM</span>
                                </div>
                                <p className="kpi-meta">Pelaku usaha terdaftar di sistem ECS</p>
                            </div>
                            <div className="kpi-footer-progress">
                                <div className="progress-bar-rail">
                                    <div className="progress-bar-fill fill-registered" style={{ width: '85%' }}></div>
                                </div>
                            </div>
                        </div>

                        {/* KPI 2: Business Matching */}
                        <div className="ecs-kpi-card kpi-matching">
                            <div className="kpi-header">
                                <div className="kpi-icon-pill">
                                    <Handshake size={18} />
                                </div>
                                <span className="kpi-tag">B2B Match</span>
                            </div>
                            <div className="kpi-body">
                                <span className="kpi-label">Business Matching</span>
                                <div className="kpi-value-row">
                                    <span className="kpi-number">27<span className="kpi-slash">/176</span></span>
                                </div>
                                <p className="kpi-meta"><strong>27 deal</strong> dari 176 pertemuan bisnis</p>
                            </div>
                            <div className="kpi-footer-progress">
                                <div className="progress-bar-rail">
                                    <div className="progress-bar-fill fill-matching" style={{ width: '15.3%' }}></div>
                                </div>
                            </div>
                        </div>

                        {/* KPI 3: Inquiry */}
                        <div className="ecs-kpi-card kpi-inquiry">
                            <div className="kpi-header">
                                <div className="kpi-icon-pill">
                                    <FileQuestion size={18} />
                                </div>
                                <span className="kpi-tag">Buyer Leads</span>
                            </div>
                            <div className="kpi-body">
                                <span className="kpi-label">Inquiry Dagang</span>
                                <div className="kpi-value-row">
                                    <span className="kpi-number">53<span className="kpi-slash">/265</span></span>
                                </div>
                                <p className="kpi-meta"><strong>53 terkonfirmasi</strong> dari 265 permintaan pasar</p>
                            </div>
                            <div className="kpi-footer-progress">
                                <div className="progress-bar-rail">
                                    <div className="progress-bar-fill fill-inquiry" style={{ width: '20%' }}></div>
                                </div>
                            </div>
                        </div>

                        {/* KPI 4: Realisasi Ekspor (USD) - Highlight */}
                        <div className="ecs-kpi-card kpi-realization kpi-featured">
                            <div className="kpi-header">
                                <div className="kpi-icon-pill">
                                    <DollarSign size={18} />
                                </div>
                                <span className="kpi-badge-gold">Transaksi Utama</span>
                            </div>
                            <div className="kpi-body">
                                <span className="kpi-label">Realisasi Ekspor (USD)</span>
                                <div className="kpi-value-row">
                                    <span className="kpi-currency">$</span>
                                    <span className="kpi-number">236.82M</span>
                                </div>
                                <p className="kpi-meta">Nilai total $236,820,744 ekspor langsung</p>
                            </div>
                            <div className="kpi-footer-progress">
                                <div className="progress-bar-rail">
                                    <div className="progress-bar-fill fill-gold" style={{ width: '100%' }}></div>
                                </div>
                            </div>
                        </div>

                        {/* KPI 5: Jumlah Konsultasi */}
                        <div className="ecs-kpi-card kpi-consultation">
                            <div className="kpi-header">
                                <div className="kpi-icon-pill">
                                    <Users size={18} />
                                </div>
                                <span className="kpi-tag">Pendampingan</span>
                            </div>
                            <div className="kpi-body">
                                <span className="kpi-label">Jumlah Konsultasi</span>
                                <div className="kpi-value-row">
                                    <span className="kpi-number">733</span>
                                    <span className="kpi-unit">Sesi</span>
                                </div>
                                <p className="kpi-meta">Layanan asistensi ekspor tatap muka & online</p>
                            </div>
                            <div className="kpi-footer-progress">
                                <div className="progress-bar-rail">
                                    <div className="progress-bar-fill fill-consultation" style={{ width: '75%' }}></div>
                                </div>
                            </div>
                        </div>

                        {/* KPI 6: InaExport */}
                        <div className="ecs-kpi-card kpi-inaexport">
                            <div className="kpi-header">
                                <div className="kpi-icon-pill">
                                    <Globe2 size={18} />
                                </div>
                                <span className="kpi-tag">Portal Kemendag</span>
                            </div>
                            <div className="kpi-body">
                                <span className="kpi-label">InaExport Aktif</span>
                                <div className="kpi-value-row">
                                    <span className="kpi-number">258</span>
                                    <span className="kpi-unit">Member</span>
                                </div>
                                <p className="kpi-meta">Eksportir binaan onboarding di InaExport</p>
                            </div>
                            <div className="kpi-footer-progress">
                                <div className="progress-bar-rail">
                                    <div className="progress-bar-fill fill-inaexport" style={{ width: '60%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Visual Analytics & Table Split Row */}
                    <div className="ecs-dashboard-split">
                        {/* Left Side: Monthly Consultation Bar Chart */}
                        <div className="ecs-panel ecs-chart-panel">
                            <div className="panel-header">
                                <div className="panel-header-text">
                                    <h4 className="panel-title">Tren Layanan Konsultasi Bulanan</h4>
                                    <p className="panel-subtitle">Total distribusi sesi konsultasi tahun {selectedYear}</p>
                                </div>
                                <div className="chart-legend-wrap">
                                    <span className="legend-dot current-year-dot"></span>
                                    <span className="legend-text">Sesi Konsultasi (Total: 733)</span>
                                </div>
                            </div>

                            {/* Accessible Clean Bar Chart */}
                            <div className="ecs-chart-wrapper">
                                {/* Y-Axis Scale Markers */}
                                <div className="chart-y-axis">
                                    <span>160</span>
                                    <span>120</span>
                                    <span>80</span>
                                    <span>40</span>
                                    <span>0</span>
                                </div>

                                {/* Plot Grid & Bars Area */}
                                <div className="chart-plot-area">
                                    <div className="chart-grid-lines">
                                        <div className="grid-line"></div>
                                        <div className="grid-line"></div>
                                        <div className="grid-line"></div>
                                        <div className="grid-line"></div>
                                        <div className="grid-line baseline"></div>
                                    </div>

                                    <div className="chart-bars-container">
                                        {monthlyConsultationData.map((d, index) => {
                                            const barHeightPct = (d.count / maxMonthlyCount) * 100;
                                            const isHovered = hoveredMonth === index;
                                            const isPeak = d.active;

                                            return (
                                                <div 
                                                    key={d.month} 
                                                    className={`bar-column ${isPeak ? 'is-peak' : ''} ${isHovered ? 'is-hovered' : ''}`}
                                                    onMouseEnter={() => setHoveredMonth(index)}
                                                    onMouseLeave={() => setHoveredMonth(null)}
                                                >
                                                    {/* Tooltip on Hover or Peak */}
                                                    <div className={`bar-tooltip ${isPeak || isHovered ? 'visible' : ''}`}>
                                                        <span className="tooltip-val">{d.count} sesi</span>
                                                        {d.badge && <span className="tooltip-badge">{d.badge}</span>}
                                                    </div>

                                                    {/* Bar Column */}
                                                    <div className="bar-track">
                                                        <div 
                                                            className={`bar-fill ${d.count > 0 ? 'has-value' : 'zero-val'}`}
                                                            style={{ height: `${Math.max(barHeightPct, d.count > 0 ? 4 : 0)}%` }}
                                                        ></div>
                                                    </div>

                                                    {/* X-Axis Label */}
                                                    <span className={`bar-label ${isPeak ? 'peak-label' : ''}`}>{d.month}</span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>

                            {/* Chart Insight Footer */}
                            <div className="chart-insight-footer">
                                <Info size={16} className="insight-icon" />
                                <span>Puncak konsultasi tercatat pada bulan <strong>Agustus (147 sesi)</strong> seiring dengan persiapan pameran dagang Trade Expo Indonesia.</span>
                            </div>
                        </div>

                        {/* Right Side: Data Konsultasi Table with Pagination & Search */}
                        <div className="ecs-panel ecs-table-panel">
                            <div className="panel-header table-panel-header">
                                <div className="panel-header-text">
                                    <h4 className="panel-title">Topik Konsultasi Terbanyak</h4>
                                    <p className="panel-subtitle">Frekuensi permohonan pendampingan menurut subjek</p>
                                </div>

                                {/* Table Search Filter */}
                                <div className="table-search-box">
                                    <Search size={14} className="search-icon" />
                                    <input 
                                        type="text" 
                                        placeholder="Cari topik..." 
                                        value={searchTerm}
                                        onChange={(e) => {
                                            setSearchTerm(e.target.value);
                                            setCurrentPage(1);
                                        }}
                                        className="table-search-input"
                                    />
                                </div>
                            </div>

                            {/* Clean Data Table */}
                            <div className="ecs-table-container">
                                <table className="ecs-data-table">
                                    <thead>
                                        <tr>
                                            <th className="col-rank">No</th>
                                            <th className="col-topic">Topik Konsultasi</th>
                                            <th className="col-category">Kategori</th>
                                            <th className="col-count text-right">Data Konsultasi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {paginatedTopics.length > 0 ? (
                                            paginatedTopics.map((item, index) => {
                                                const globalIndex = (currentPage - 1) * itemsPerPage + index + 1;
                                                return (
                                                    <tr key={item.id} className="table-row">
                                                        <td className="col-rank">
                                                            <span className={`rank-badge ${globalIndex <= 3 ? 'rank-top' : ''}`}>
                                                                {globalIndex}
                                                            </span>
                                                        </td>
                                                        <td className="col-topic">
                                                            <div className="topic-text-wrap">
                                                                <span className="topic-name">{item.topic}</span>
                                                                <div className="topic-bar-mini">
                                                                    <div className="topic-fill-mini" style={{ width: `${item.pct * 3}%` }}></div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="col-category">
                                                            <span className="category-tag">{item.category}</span>
                                                        </td>
                                                        <td className="col-count text-right">
                                                            <span className="count-number">{item.count}</span>
                                                            <span className="count-unit">sesi</span>
                                                        </td>
                                                    </tr>
                                                );
                                            })
                                        ) : (
                                            <tr>
                                                <td colSpan="4" className="empty-state-cell">
                                                    Tidak ditemukan topik konsultasi yang cocok dengan pencarian.
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>

                            {/* Table Pagination & Stats */}
                            <div className="ecs-table-footer">
                                <span className="table-summary">
                                    Menampilkan {Math.min((currentPage - 1) * itemsPerPage + 1, filteredTopics.length)} - {Math.min(currentPage * itemsPerPage, filteredTopics.length)} dari {filteredTopics.length} entri
                                </span>

                                <div className="table-pagination">
                                    <button 
                                        type="button"
                                        onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
                                        disabled={currentPage === 1}
                                        className="pagination-btn"
                                        aria-label="Halaman Sebelumnya"
                                    >
                                        <ChevronLeft size={16} />
                                    </button>

                                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                                        <button
                                            key={pageNum}
                                            type="button"
                                            onClick={() => setCurrentPage(pageNum)}
                                            className={`pagination-num ${currentPage === pageNum ? 'is-active' : ''}`}
                                        >
                                            {pageNum}
                                        </button>
                                    ))}

                                    <button 
                                        type="button"
                                        onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
                                        disabled={currentPage === totalPages || totalPages === 0}
                                        className="pagination-btn"
                                        aria-label="Halaman Selanjutnya"
                                    >
                                        <ChevronRight size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
