import React from 'react';
import './Header.css';
import logo from '../../assets/LogoTrumontt.png';

/**
 * Header Component
 * 
 * Displays the top bar with address and the main navigation bar with logo and menu items.
 * Designed to be professional, corporate, and clean.
 */
const Header = () => {
    return (
        <header className="header-container">
            {/* Top Bar with Address */}
            <div className="top-bar">
                <div className="container">
                    <span className="address-text">Av. República de Chile 478, Jesús María</span>
                </div>
            </div>

            {/* Main Navbar */}
            <div className="navbar">
                <div className="container navbar-content">
                    {/* Logo Section - H1 for SEO */}
                    <h1 className="logo-section" style={{ margin: 0, padding: 0, fontSize: 0 }}>
                        <a href="/#inicio" aria-label="Volver al inicio">
                            <img src={logo} alt="Trumontt Group - Construcción y Gestión Inmobiliaria" className="logo-image" />
                        </a>
                    </h1>

                    {/* Navigation Menu */}
                    <nav className="nav-menu">
                        <ul className="nav-list">
                            <li className="nav-item"><a href="/#inicio" className="nav-link">Inicio</a></li>
                            <li className="nav-item"><a href="/#nosotros" className="nav-link">Nosotros</a></li>
                            <li className="nav-item dropdown">
                                <a href="/#servicios" className="nav-link dropdown-toggle">
                                    Servicios <span className="arrow">▼</span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a href="/#gestion-inmobiliaria">Gestión Inmobiliaria</a></li>
                                    <li><a href="/#mantenimiento">Mantenimiento de Edificios</a></li>
                                    <li><a href="/#construccion">Construcción</a></li>
                                    <li><a href="/#sistemas-electricos">Sistemas Eléctricos</a></li>
                                    <li><a href="/#seguridad">Seguridad Industrial</a></li>
                                    <li><a href="/#diseno">Diseño de Interiores</a></li>
                                    <li><a href="/#asesoria">Asesoría Empresarial</a></li>
                                    <li><a href="/#bi">Business Intelligence</a></li>
                                    <li><a href="/#programador">Programador de Plataforma</a></li>
                                </ul>
                            </li>
                            <li className="nav-item"><a href="/#clientes" className="nav-link">Clientes</a></li>
                            <li className="nav-item"><a href="/#proyectos" className="nav-link">Proyectos</a></li>
                            <li className="nav-item"><a href="/#contactanos" className="nav-link">Contáctanos</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
