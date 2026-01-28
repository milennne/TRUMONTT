import React from 'react';
import './Header.css';
import logo from '../../assets/LogoTrumontt.png';

import { useLocation } from 'react-router-dom';

/**
 * Header Component
 * 
 * Displays the top bar with address and the main navigation bar with logo and menu items.
 * Designed to be professional, corporate, and clean.
 */
const Header = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';

    // Mobile Menu State
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = React.useState(false);

    // Toggle specific for mobile services
    const toggleMobileServices = (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault(); // Prevent navigation on mobile click
            setMobileServicesOpen(!mobileServicesOpen);
        }
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        setMobileServicesOpen(false);
    };

    return (
        <header className="header-container">
            {/* Top Bar with Address */}
            <div className="top-bar">
                <div className="container">
                    <span className="address-text">Av. Arequipa 2447, Of. 409, Lince, Lima</span>
                </div>
            </div>

            {/* Main Navbar */}
            <div className="navbar">
                <div className="container navbar-content">
                    {/* Logo Section */}
                    {isHome ? (
                        <h1 className="logo-section" style={{ margin: 0, padding: 0, fontSize: 0 }}>
                            <a href="/#inicio" aria-label="Volver al inicio" onClick={closeMobileMenu}>
                                <img src={logo} alt="Trumontt Group - Construcción y Gestión Inmobiliaria" className="logo-image" />
                            </a>
                        </h1>
                    ) : (
                        <div className="logo-section" style={{ margin: 0, padding: 0, fontSize: 0 }}>
                            <a href="/#inicio" aria-label="Volver al inicio" onClick={closeMobileMenu}>
                                <img src={logo} alt="Trumontt Group - Construcción y Gestión Inmobiliaria" className="logo-image" />
                            </a>
                        </div>
                    )}

                    {/* Hamburger Icon for Mobile */}
                    <button
                        className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Menú"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    {/* Mobile Overlay */}
                    <div
                        className={`nav-overlay ${isMobileMenuOpen ? 'active' : ''}`}
                        onClick={closeMobileMenu}
                    ></div>

                    {/* Navigation Menu */}
                    <nav className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                        <ul className="nav-list">
                            <li className="nav-item">
                                <a href="/#inicio" className="nav-link" onClick={closeMobileMenu}>Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a href="/#nosotros" className="nav-link" onClick={closeMobileMenu}>Nosotros</a>
                            </li>
                            <li className={`nav-item dropdown ${mobileServicesOpen ? 'mobile-open' : ''}`}>
                                <a href="/#servicios" className="nav-link dropdown-toggle" onClick={toggleMobileServices}>
                                    Servicios <span className="arrow">▼</span>
                                </a>
                                <ul className="dropdown-menu">
                                    {/*<li><a href="/servicios/gestion-inmobiliaria" onClick={closeMobileMenu}>Gestión Inmobiliaria</a></li>*/}
                                    <li><a href="/servicios/mantenimiento-edificios" onClick={closeMobileMenu}>Mantenimiento de Edificios</a></li>
                                    <li><a href="/servicios/construccion" onClick={closeMobileMenu}>Construcción</a></li>
                                    <li><a href="/servicios/sistemas-electricos" onClick={closeMobileMenu}>Sistemas Eléctricos</a></li>
                                    <li><a href="/servicios/seguridad-industrial" onClick={closeMobileMenu}>Seguridad Industrial</a></li>
                                    <li><a href="/servicios/diseno-interiores" onClick={closeMobileMenu}>Diseño de Interiores</a></li>
                                    <li><a href="/servicios/asesoria-empresarial" onClick={closeMobileMenu}>Asesoría Empresarial</a></li>
                                    <li><a href="/servicios/business-intelligence" onClick={closeMobileMenu}>Business Intelligence</a></li>
                                    <li><a href="/servicios/desarrollo-plataforma" onClick={closeMobileMenu}>Desarrollo de Plataforma</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="/servicios/gestion-inmobiliaria" className="nav-link" onClick={closeMobileMenu}>Gestión Inmobiliaria</a>
                            </li>
                            <li className="nav-item">
                                <a href="/#proyectos" className="nav-link" onClick={closeMobileMenu}>Proyectos</a>
                            </li>
                            <li className="nav-item">
                                <a href="/inmobiliarias" className="nav-link" onClick={closeMobileMenu}>Inmobiliarias</a>
                            </li>

                            <li className="nav-item">
                                <a href="/#contactanos" className="nav-link" onClick={closeMobileMenu}>Contáctanos</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
