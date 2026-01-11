import React, { useEffect } from 'react';
import ServicesList from '../components/ServicesList/ServicesList';
import { servicesData } from '../data/servicesData';
import './Services.css';
import headerBg from '../assets/business.png'; // Using a professional background

const Services = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="services-page">
            {/* Hero Header */}
            <header className="services-page-header" style={{ backgroundImage: `url(${headerBg})` }}>
                <div className="header-overlay"></div>
                <div className="header-content">
                    <span className="header-tag">Soluciones Integrales</span>
                    <h1 className="header-title">Nuestros Servicios</h1>
                    <p className="header-desc">
                        Ofrecemos un portafolio de soluciones especializadas para cubrir todas las necesidades del sector construcción e inmobiliario con estándares de excelencia.
                    </p>
                </div>
            </header>

            <div className="container" style={{ paddingBottom: '80px' }}>
                <ServicesList services={servicesData} />
            </div>
        </div>
    );
};

export default Services;
