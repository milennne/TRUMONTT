import React from 'react';
import './ProjectsList.css';

const ProjectsList = ({ projects }) => {
    if (!projects || projects.length === 0) {
        return <p className="no-projects">No hay proyectos para mostrar en este momento.</p>;
    }

    return (
        <div className="projects-list">
            {projects.map((project, index) => {
                // Determine layout: even index = text left (or normal), odd index = text right? 
                // Requirement: 
                // Proy 1 (idx 0) -> img left, text right
                // Proy 2 (idx 1) -> img right, text left
                // Proy 3 (idx 2) -> img left, text right

                // We can use CSS :nth-child(even) to reverse direction if we use flex-direction: row.
                // Default row: Img | Text.
                // Reversed row: Text | Img.

                // Let's implement purely via CSS class for robustness or just nth-child in CSS.
                // Keeping jsx clean is better. We'll just map items.

                return (
                    <div key={project.id} className="project-item">
                        <div className="project-img-wrapper">
                            <img src={project.image} alt={project.title} className="project-list-img" />
                        </div>
                        <div className="project-content">
                            <h2 className="project-list-title">{project.title}</h2>
                            <p className="project-list-desc">{project.shortDescription}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ProjectsList;
