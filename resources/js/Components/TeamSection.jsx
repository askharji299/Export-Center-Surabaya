import React, { useState, useRef } from 'react';

const teamMembers = [
    {
        id: 1,
        name: "Ir. Hendra Wijaya, M.Sc",
        role: "Kepala Tenaga Ahli Ekspor",
        image: "/images/team/member_1.png",
    },
    {
        id: 2,
        name: "Ahmad Zainuri, SE",
        role: "Spesialis Market Intelligence",
        image: "/images/team/member_2.png",
    },
    {
        id: 3,
        name: "Dr. Maya Surtikanti",
        role: "Spesialis Akses Pasar Global",
        image: "/images/team/member_3.png",
    },
    {
        id: 4,
        name: "Budi Santoso, SH, MH",
        role: "Konsultan Hukum & Sengketa Dagang",
        image: "/images/team/member_4.png",
    },
    {
        id: 5,
        name: "David Kurniawan, MM",
        role: "Konsultan Pembiayaan & Logistik",
        image: "/images/team/member_5.png",
    },
    {
        id: 6,
        name: "Drs. Eko Prasetyo",
        role: "Konsultan Standar & Sertifikasi Produk",
        image: "/images/team/member_6.png",
    },
    {
        id: 7,
        name: "Permadani Anggi Palupi",
        role: "Koordinator Tenaga Pendukung Bidang Keuangan",
        image: "/images/team/member_7.png",
    },
    {
        id: 8,
        name: "Farida Utama, M.Si",
        role: "Koordinator Business Matching",
        image: "/images/team/member_8.png",
    },
    {
        id: 9,
        name: "Nabila Rahma, ST",
        role: "Analis Data & InaExport Specialist",
        image: "/images/team/member_9.png",
    },
    {
        id: 10,
        name: "Siti Nurhaliza, SE",
        role: "Administrasi & Pelayanan Konsultasi",
        image: "/images/team/member_10.png",
    }
];

export default function TeamSection() {
    const [membersList, setMembersList] = useState(() => [
        ...teamMembers.map(m => ({ ...m, instanceKey: `initial-${m.id}` })),
        ...teamMembers.map(m => ({ ...m, instanceKey: `clone-1-${m.id}` })),
        ...teamMembers.map(m => ({ ...m, instanceKey: `clone-2-${m.id}` }))
    ]);
    const [hoveredKey, setHoveredKey] = useState(null);
    const scrollContainerRef = useRef(null);
    const animFrameRef = useRef(null);
    const isHoldingRef = useRef(false);

    // Continuous smooth scroll loop when holding button
    const startHoldScroll = (direction) => {
        isHoldingRef.current = true;
        const speed = direction === 'left' ? -8 : 8;

        const step = () => {
            if (scrollContainerRef.current && isHoldingRef.current) {
                scrollContainerRef.current.scrollLeft += speed;
                animFrameRef.current = requestAnimationFrame(step);
            }
        };

        if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
        animFrameRef.current = requestAnimationFrame(step);
    };

    const stopHoldScroll = () => {
        isHoldingRef.current = false;
        if (animFrameRef.current) {
            cancelAnimationFrame(animFrameRef.current);
            animFrameRef.current = null;
        }
    };

    // Single click scroll step
    const handleScrollClick = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = direction === 'left' ? -460 : 460;
            scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    // Watch scroll position: when nearing the right end, append more cards seamlessly
    const onContainerScroll = () => {
        const container = scrollContainerRef.current;
        if (!container) return;

        // If user is within 1200px of the right edge, append another set of members
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 1200) {
            setMembersList((prev) => [
                ...prev,
                ...teamMembers.map((m) => ({
                    ...m,
                    instanceKey: `more-${Date.now()}-${Math.random()}-${m.id}`
                }))
            ]);
        }
    };

    return (
        <section className="team-section-container">
            {/* Top Bar: Heading only */}
            <div className="team-section-top-bar">
                <h2 className="team-section-heading">
                    <span className="team-heading-navy">ANGGOTA </span><span className="team-heading-green">KAMI</span>
                </h2>
            </div>

            {/* Cards Scroll Row */}
            <div
                className="team-grid-scroll-container centered-layout"
                ref={scrollContainerRef}
                onScroll={onContainerScroll}
            >
                {membersList.map((member) => {
                    const isHovered = hoveredKey === member.instanceKey;
                    return (
                        <div
                            key={member.instanceKey}
                            className={`team-card-minimal large-card ${isHovered ? 'active' : ''}`}
                            onMouseEnter={() => setHoveredKey(member.instanceKey)}
                            onMouseLeave={() => setHoveredKey(null)}
                        >
                            {/* Hover Top Header Info */}
                            <div className="team-card-header-info">
                                <span className="team-role-label">{member.role}</span>
                                <h3 className="team-name-label">{member.name}</h3>
                            </div>

                            {/* Minimal Portrait Image */}
                            <div className="team-image-frame">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="team-member-img"
                                />
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Bottom Bar: Nav Buttons */}
            <div className="team-bottom-controls">
                <button
                    onClick={() => handleScrollClick('left')}
                    onMouseDown={() => startHoldScroll('left')}
                    onMouseUp={stopHoldScroll}
                    onMouseLeave={stopHoldScroll}
                    onTouchStart={() => startHoldScroll('left')}
                    onTouchEnd={stopHoldScroll}
                    className="slider-btn-nav"
                    aria-label="Scroll Left"
                >
                    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </button>

                <button
                    onClick={() => handleScrollClick('right')}
                    onMouseDown={() => startHoldScroll('right')}
                    onMouseUp={stopHoldScroll}
                    onMouseLeave={stopHoldScroll}
                    onTouchStart={() => startHoldScroll('right')}
                    onTouchEnd={stopHoldScroll}
                    className="slider-btn-nav"
                    aria-label="Scroll Right"
                >
                    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </button>
            </div>
        </section>
    );
}
