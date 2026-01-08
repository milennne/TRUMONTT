import React, { useState, useEffect } from 'react';
import './ClientsCarousel.css';

// Import logos
import alamo from '../../assets/alamo.png';
import eeinmobiliaria from '../../assets/eeinmobiliaria.png';
import nexo from '../../assets/nexo.png';
import robles from '../../assets/robles.png';
import tecsup from '../../assets/tecsup.jpg';
import utec from '../../assets/utec.jpg';

const clients = [
    { id: 1, name: 'Alamo', logo: alamo },
    { id: 2, name: 'EE Inmobiliaria', logo: eeinmobiliaria },
    { id: 3, name: 'Nexo', logo: nexo },
    { id: 4, name: 'Robles', logo: robles },
    { id: 5, name: 'Tecsup', logo: tecsup },
    { id: 6, name: 'UTEC', logo: utec },
];

const ClientsCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    // Auto-scroll every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000);
        return () => clearInterval(interval);
    }, [activeIndex]);

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % clients.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + clients.length) % clients.length);
    };

    // Determine the class for each item based on its position relative to activeIndex (5 items visible)
    const getClassName = (index) => {
        if (index === activeIndex) return 'client-slide active';

        const len = clients.length;

        // Calculate distance with wrap-around consideration
        let distance = (index - activeIndex + len) % len;

        // Normalize distance to be between -len/2 and len/2
        if (distance > len / 2) distance -= len;

        if (distance === -1) return 'client-slide prev';
        if (distance === 1) return 'client-slide next';
        if (distance === -2) return 'client-slide far-prev';
        if (distance === 2) return 'client-slide far-next';

        return 'client-slide hidden';
    };

    return (
        <section id="clientes" className="clients-section">
            <div className="container">
                <h2 className="clients-title">Nuestros Clientes</h2>

                <div className="carousel-container">
                    <button className="nav-arrow left" onClick={prevSlide}>&#10094;</button>

                    <div className="carousel-track">
                        {clients.map((client, index) => (
                            <div
                                key={client.id}
                                className={getClassName(index)}
                                onClick={() => setActiveIndex(index)}
                            >
                                <img src={client.logo} alt={client.name} className="client-logo" />
                            </div>
                        ))}
                    </div>

                    <button className="nav-arrow right" onClick={nextSlide}>&#10095;</button>
                </div>

                {/* Dots for navigation */}
                <div className="carousel-dots">
                    {clients.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${index === activeIndex ? 'active' : ''}`}
                            onClick={() => setActiveIndex(index)}
                        ></span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientsCarousel;
