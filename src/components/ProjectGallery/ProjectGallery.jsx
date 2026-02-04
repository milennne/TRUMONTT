import React, { useState } from 'react';
import './ProjectGallery.css';

const ProjectGallery = ({ images }) => {
    // If no images or empty array, return nothing
    if (!images || images.length === 0) return null;

    const [selectedIndex, setSelectedIndex] = useState(0);

    const handlePrev = () => {
        setSelectedIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setSelectedIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="project-gallery">
            {/* Main large image */}
            <div className="gallery-main">
                {images.length > 1 && (
                    <button className="gallery-nav prev" onClick={handlePrev}>
                        &#10094;
                    </button>
                )}

                <img
                    src={images[selectedIndex]}
                    alt={`Vista del proyecto`}
                    className="main-img"
                />

                {images.length > 1 && (
                    <button className="gallery-nav next" onClick={handleNext}>
                        &#10095;
                    </button>
                )}
            </div>

            {/* Thumbnails / Slider */}
            <div className="gallery-thumbs-container">
                <div className="gallery-thumbs">
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className={`thumb-item ${selectedIndex === index ? 'active' : ''}`}
                            onClick={() => setSelectedIndex(index)}
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
