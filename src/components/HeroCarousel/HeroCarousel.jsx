import React, { useState, useEffect } from 'react';
import './HeroCarousel.css';

// Import images
import imgConstruccion from '../../assets/construccion.jpg';
import imgConsultorias from '../../assets/consultorias.jpg';
import imgGestion from '../../assets/gestioninmobiliaria.jpg';
import imgBusiness from '../../assets/business.png';

const HeroCarousel = () => {
    const slides = [
         {
            src: imgGestion,
            alt: 'Gestión Inmobiliaria',
            title: 'Gestión Inmobiliaria',
            subtitle: 'Garantizando el Mantenimiento y Funcionamiento Óptimo de tus Inmuebles'
        },
        {
            src: imgConstruccion,
            alt: 'Construcción',
            title: 'Construcción',
            subtitle: 'Construyendo Futuro con Ingeniería de Precisión y Proyectos Sólidos'
        },
        {
            src: imgConsultorias,
            alt: 'Consultorías',
            title: 'Consultorías',
            subtitle: 'Asesoría Estratégica que Impulsa Resultados y Crecimiento Asegurado'
        },
        {
            src: imgBusiness,
            alt: 'Business Intelligence',
            title: 'Business Intelligence',
            subtitle: 'Transformando Datos en Estrategias para Decisiones Empresariales Efectivas'
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-slide every 6 seconds
    useEffect(() => {
        const slideInterval = setInterval(() => {
            nextSlide();
        }, 6000);
        return () => clearInterval(slideInterval);
    }, [currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };

    return (
        <div id="inicio" className="hero-carousel">
            {/* Slides */}
            <div
                className="carousel-slide"
                style={{ backgroundImage: `url(${slides[currentIndex].src})` }}
                role="img"
                aria-label={slides[currentIndex].alt}
            >
                <div className="carousel-overlay">
                    <div className="carousel-caption">
                        <h2 className="slide-title">{slides[currentIndex].title}</h2>
                        <p className="slide-subtitle">{slides[currentIndex].subtitle}</p>
                    </div>
                </div>
            </div>

            {/* Controls */}
            <button className="carousel-control prev" onClick={prevSlide}>&#10094;</button>
            <button className="carousel-control next" onClick={nextSlide}>&#10095;</button>

            {/* Indicators (dots) */}
            <div className="carousel-indicators">
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default HeroCarousel;
