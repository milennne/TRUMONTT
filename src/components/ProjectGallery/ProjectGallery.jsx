import React, { useState } from 'react';
import './ProjectGallery.css';

const ProjectGallery = ({ images }) => {
    // If no images or empty array, return nothing
    if (!images || images.length === 0) return null;

    const [selectedImage, setSelectedImage] = useState(images[0]);

    return (
        <div className="project-gallery">
            {/* Main large image */}
            <div className="gallery-main">
                <img src={selectedImage} alt="Vista del proyecto" className="main-img" />
            </div>

            {/* Thumbnails / Slider */}
            <div className="gallery-thumbs-container">
                <div className="gallery-thumbs">
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className={`thumb-item ${selectedImage === img ? 'active' : ''}`}
                            onClick={() => setSelectedImage(img)}
                        >
                            <img src={img} alt={`Vista ${index + 1}`} className="thumb-img" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectGallery;
