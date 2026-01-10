import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projectsData';
import ProjectGallery from '../components/ProjectGallery/ProjectGallery';
import './ProjectDetail.css';

// Reusing Header/Footer is handled in the Layout (App.jsx), 
// so this component only renders the content part.

const ProjectDetail = () => {
    const { slug } = useParams();
    const project = projects.find(p => p.slug === slug);

    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!project) {
        return (
            <div className="project-detail-page">
                <div className="container" style={{ textAlign: 'center', padding: '100px 20px' }}>
                    <h2>Proyecto no encontrado</h2>
                    <Link to="/" className="back-link" style={{ justifyContent: 'center' }}>
                        &larr; Volver al inicio
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="project-detail-page">
            <div className="project-detail-container">
                {/* Back Link */}
                <Link to="/" className="back-link">
                    &larr; Volver a Proyectos
                </Link>

                {/* Header Info */}
                <div className="project-header">
                    <h1 className="project-title">{project.title}</h1>
                    <div className="project-location">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        {project.location}
                    </div>
                </div>

                {/* Gallery Component */}
                <ProjectGallery images={project.images} />

                {/* Content Grid */}
                <div className="project-info-grid">
                    <div className="info-content">
                        <h3>Sobre el Proyecto</h3>
                        <p>{project.description}</p>
                    </div>

                    <div className="info-sidebar">
                        <div className="meta-item">
                            <span className="meta-label">Cliente</span>
                            <span className="meta-value">{project.client}</span>
                        </div>
                        <div className="meta-item">
                            <span className="meta-label">Servicio</span>
                            <span className="meta-value">{project.service}</span>
                        </div>
                        <div className="meta-item">
                            <span className="meta-label">Año</span>
                            <span className="meta-value">{project.year}</span>
                        </div>
                        <div className="meta-item">
                            <span className="meta-label">Estado</span>
                            <span className="meta-value">{project.status}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
