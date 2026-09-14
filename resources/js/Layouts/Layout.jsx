import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function Layout({ children }) {
    const { url } = usePage();
    const [servicesOpen, setServicesOpen] = useState(false);
    const [partnersOpen, setPartnersOpen] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    const isActive = (path) => url === path;

    const navLinks = [
        { name: 'HOME', href: '/' },
        { name: 'ABOUT', href: '/about' },
        {
            name: 'SERVICES',
            href: '/services',
            dropdown: [
                { name: 'Export Consultation', href: '/services/konsultasi' },
                { name: 'Inquiry Dissemination', href: '/services/inquiries' },
                { name: 'Business Matching', href: '/services/business-matching' },
                { name: 'InaExport Mentoring', href: '/services/inaexport' },
                { name: 'Other Services', href: '/services/other' },
            ],
        },
        {
            name: 'PARTNERS',
            href: '/partners',
            dropdown: [
                { name: 'Suppliers', href: '/partners/suppliers' },
                { name: 'Market', href: '/partners/market' },
                { name: 'Other Relations', href: '/partners/other-relations' },
            ],
        },
        { name: 'ACTIVITIES', href: '/activities' },
        { name: 'INFORMATION', href: '/information' },
        { name: 'CONTACT', href: '/contact' },
    ];

    return (
        <div className="app-layout">
            <nav className="navbar">
                <div className="navbar-inner">
                    <Link href="/" className="navbar-brand">
                        <img src="/images/logo-kemendag.png" alt="Kementerian Perdagangan Republik Indonesia" className="brand-logo" />
                    </Link>

                    <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
                        <span className={`hamburger ${mobileOpen ? 'active' : ''}`}></span>
                    </button>

                    <div className={`navbar-nav ${mobileOpen ? 'open' : ''}`}>
                        <ul className="nav-links">
                            {navLinks.map((link) => (
                                <li
                                    key={link.name}
                                    className={`nav-item ${link.dropdown ? 'has-dropdown' : ''}`}
                                    onMouseEnter={() => {
                                        if (link.name === 'SERVICES') setServicesOpen(true);
                                        if (link.name === 'PARTNERS') setPartnersOpen(true);
                                    }}
                                    onMouseLeave={() => {
                                        if (link.name === 'SERVICES') setServicesOpen(false);
                                        if (link.name === 'PARTNERS') setPartnersOpen(false);
                                    }}
                                >
                                    <Link
                                        href={link.href}
                                        className={`nav-link ${isActive(link.href) ? 'active' : ''}`}
                                    >
                                        {link.name}
                                        {link.dropdown && (
                                            <svg className="chevron" viewBox="0 0 12 12" width="10" height="10">
                                                <path d="M3 4.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        )}
                                    </Link>
                                    {link.dropdown && (
                                        <ul className={`dropdown ${(link.name === 'SERVICES' && servicesOpen) || (link.name === 'PARTNERS' && partnersOpen) ? 'show' : ''}`}>
                                            {link.dropdown.map((sub) => (
                                                <li key={sub.name}>
                                                    <Link href={sub.href} className="dropdown-link">
                                                        {sub.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>

                        <div className="nav-actions">
                            <Link href="/login" className="login-btn">LOGIN</Link>
                            <div className="flag-icon" title="Indonesia">
                                <div className="flag-red"></div>
                                <div className="flag-white"></div>
                            </div>
                            <div className="social-icons">
                                <a href="#" aria-label="Instagram" className="social-link">
                                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none">
                                        <rect x="2" y="2" width="20" height="20" rx="5"/>
                                        <circle cx="12" cy="12" r="5"/>
                                        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
                                    </svg>
                                </a>
                                <a href="#" aria-label="YouTube" className="social-link">
                                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none">
                                        <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 001.94-2A29 29 0 0023 12a29 29 0 00-.46-5.58z"/>
                                        <polygon points="9.75,15.02 15.5,12 9.75,8.98" fill="currentColor" stroke="none"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <main className="main-content">
                {children}
            </main>
        </div>
    );
}
