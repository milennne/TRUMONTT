import React, { useEffect } from 'react';
import './ServiceLayout.css'; // We'll create this CSS next

const ServiceLayout = ({ title, image, description, includes }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="service-page-layout">
            <header className="service-hero" style={{ backgroundImage: `url(${image})` }}>
                <div className="service-hero-overlay"></div>
                <div className="service-hero-content container">
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
            </header>

            <section className="service-content container">
                <div className="service-details">
                    <div className="service-description-full">
                        <h2>Descripción del Servicio</h2>
                        <p>{description}</p>
                        {/* Note: In a real app we might want a longer 'longDescription' field, 
                            but for now we reuse 'description' or can fetch more data if added later. 
                            The user asked to "Mantener el mismo estilo visual actual".
                        */}
                    </div>

                    <div className="service-includes">
                        <h3>¿Qué incluye?</h3>
                        <ul>
                            {includes && includes.map((item, index) => (
                                <li key={index}>
                                    <span className="check-icon">✓</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceLayout;
