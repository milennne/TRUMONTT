import React, { useState, useEffect } from 'react';
import './FeaturedProjects.css';
import { featuredProjects } from '../../data/projects';

const FeaturedProjects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(3);

    // Responsive logic: update itemsPerPage based on window width
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setItemsPerPage(1);
            } else if (window.innerWidth < 1024) {
                setItemsPerPage(2);
            } else {
                setItemsPerPage(3);
            }
        };

        // Initial set
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Ensure currentIndex never exceeds the valid range when itemsPerPage changes
    useEffect(() => {
        const maxIndex = Math.max(0, featuredProjects.length - itemsPerPage);
        if (currentIndex > maxIndex) {
            setCurrentIndex(maxIndex);
        }
    }, [itemsPerPage, currentIndex]);

    // Carousel Navigation
    const nextSlide = () => {
        const maxIndex = Math.max(0, featuredProjects.length - itemsPerPage);
        if (currentIndex < maxIndex) {
            setCurrentIndex(prev => prev + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    };

    const isPrevDisabled = currentIndex === 0;
    const isNextDisabled = currentIndex >= Math.max(0, featuredProjects.length - itemsPerPage);

    return (
        <section id="proyectos" className="featured-projects-section">
            <div className="container">
                <div className="section-header">
                    <span className="small-title">Innovación y Calidad</span>
                    <h2 className="main-title">Nuestros últimos trabajos</h2>
                </div>

                <div className="projects-slider-container">
                    {/* Navigation Buttons */}
                    <button
                        className={`slider-arrow prev ${isPrevDisabled ? 'disabled' : ''}`}
                        onClick={prevSlide}
                        disabled={isPrevDisabled}
                        aria-label="Anterior"
                    >
                        &#10094;
                    </button>

                    <div className="slider-viewport">
                        <div
                            className="slider-track"
                            style={{
                                transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`
                            }}
                        >
                            {featuredProjects.map((project) => (
                                <div
                                    key={project.id}
                                    className="slider-item"
                                    style={{ flex: `0 0 ${100 / itemsPerPage}%` }}
                                >
                                    <div className="project-card">
                                        <div className="image-wrapper">
                                            <img src={project.image} alt={project.title} className="project-img" />

                                            {/* Gradient Overlay with Content */}
                                            <div className="content-overlay">
                                                <div className="text-content">
                                                    <h3 className="project-title">{project.title}</h3>
                                                    <p className="project-location">
                                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                                            <circle cx="12" cy="10" r="3"></circle>
                                                        </svg>
                                                        {project.location}
                                                    </p>
                                                    <div className="action-area">
                                                        <a href={`/projects/${project.slug}`} className="btn-view-project">
                                                            VER PROYECTO
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        className={`slider-arrow next ${isNextDisabled ? 'disabled' : ''}`}
                        onClick={nextSlide}
                        disabled={isNextDisabled}
                        aria-label="Siguiente"
                    >
                        &#10095;
                    </button>
                </div>

                <div className="view-more-container">
                    <a href="/projects" className="btn-link-more">
                        Ver más proyectos &rarr;
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects;
