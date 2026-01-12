import React, { useEffect } from 'react';
import CareersComponent from '../components/Careers/Careers';
import '../components/Careers/Careers.css'; // Re-use CSS for header styles if needed, or import specifically
import headerBg from '../assets/quienessomos.jpg'; // Using a corporate image for background

const Careers = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Únete al Equipo | Trumontt Group';
    }, []);

    return (
        <div className="careers-page">
            {/* 1. Hero / Introduction */}
            <header className="careers-page-header" style={{ backgroundImage: `url(${headerBg})` }}>
                <div className="header-overlay"></div>
                <div className="header-content">
                    <span className="header-tag">Talento Trumontt</span>
                    <h1 className="header-title">Sé parte de nuestro equipo</h1>
                    <p className="header-desc">
                        Buscamos personas comprometidas, responsables y apasionadas por construir soluciones de calidad.
                    </p>
                </div>
            </header>

            {/* Component with rest of the sections */}
            <CareersComponent />
        </div>
    );
};

export default Careers;
