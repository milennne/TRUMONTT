import React, { useEffect } from 'react';
import ProjectsList from '../components/ProjectsList/ProjectsList';
import { projectsList } from '../data/projectsList';

const Projects = () => {
    // Ensure we start at the top of the page
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ padding: '100px 0 60px' }}>
            <div className="container">
                <div style={{ marginBottom: '60px', textAlign: 'center' }}>
                    <h1 style={{
                        color: '#111829',
                        fontSize: '3rem',
                        marginBottom: '20px',
                        fontWeight: '800'
                    }}>
                        Nuestros Proyectos
                    </h1>
                    <p style={{
                        color: '#4b5563',
                        fontSize: '1.2rem',
                        maxWidth: '700px',
                        margin: '0 auto'
                    }}>
                        Conoce más sobre nuestras intervenciones en mantenimiento, construcción y consultoría integral.
                    </p>
                </div>

                <ProjectsList projects={projectsList} />
            </div>
        </div>
    );
};

export default Projects;
