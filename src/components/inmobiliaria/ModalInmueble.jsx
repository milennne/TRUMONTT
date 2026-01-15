import React, { useState } from 'react';
import './ModalInmueble.css';

const ModalInmueble = ({ inmueble, onClose }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    if (!inmueble) return null;

    const nextImage = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev + 1) % inmueble.imagenes.length);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev - 1 + inmueble.imagenes.length) % inmueble.imagenes.length);
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-btn" onClick={onClose}>×</button>

                <div className="modal-carousel">
                    {inmueble.imagenes.length > 1 && (
                        <button className="carousel-btn prev" onClick={prevImage}>&#10094;</button>
                    )}
                    <img
                        src={inmueble.imagenes[currentImageIndex]}
                        alt={`Vista ${currentImageIndex + 1}`}
                        className="modal-image"
                    />
                    {inmueble.imagenes.length > 1 && (
                        <button className="carousel-btn next" onClick={nextImage}>&#10095;</button>
                    )}
                </div>

                <div className="modal-info">
                    <h2>{inmueble.titulo}</h2>
                    <p className="modal-direccion">📍 {inmueble.direccion} | 📏 {inmueble.metraje}</p>
                    <p className="modal-descripcion">{inmueble.descripcion}</p>
                    <div className="modal-detalles">
                        <h3>Detalles:</h3>
                        <p>{inmueble.detalles}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalInmueble;
