import React, { useEffect } from 'react';
import ProjectsList from '../components/ProjectsList/ProjectsList';
import { projectsList } from '../data/projectsList';
import './Projects.css';
import headerBg from '../assets/construccion.jpg';

const Projects = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="projects-page">
            {/* Hero Header */}
            <header className="projects-page-header" style={{ backgroundImage: `url(${headerBg})` }}>
                <div className="header-overlay"></div>
                <div className="header-content">
                    <span className="header-tag">Portafolio</span>
                    <h1 className="header-title">Nuestros Proyectos</h1>
                    <p className="header-desc">
                        Conoce más sobre nuestras intervenciones en mantenimiento, construcción y consultoría integral.
                    </p>
                </div>
            </header>

            <div className="container" style={{ paddingBottom: '80px' }}>
                <ProjectsList projects={projectsList} />
            </div>
        </div>
    );
};

export default Projects;
