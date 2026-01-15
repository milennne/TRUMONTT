import React from 'react';
import './InmuebleCard.css'; // We'll create a shared css or specific one. Let's use inline or a shared file. 
// Actually user asked for specific structure. Let's put styles in Inmobiliarias.css generally or simple inline.
// But keeping components clean is better. 
// User asked for "Estilos simples y consistentes".
// Let's create the functional component receiving props.

const InmuebleCard = ({ inmueble, onOpenModal }) => {
    return (
        <div className="inmueble-card" onClick={() => onOpenModal(inmueble)}>
            <div className="card-image-container">
                <img src={inmueble.imagenPrincipal} alt={inmueble.titulo} className="card-image" />
                <div className="card-overlay">
                    <span className="ver-mas-btn">Ver más</span>
                </div>
            </div>
            <div className="card-content">
                <h3 className="card-titulo">{inmueble.titulo}</h3>
                <div className="card-info-row">
                    <span className="card-metraje">📏 {inmueble.metraje}</span>
                    <span className="card-direccion">📍 {inmueble.direccion}</span>
                </div>
                <p className="card-descripcion">{inmueble.descripcion}</p>
            </div>
        </div>
    );
};

export default InmuebleCard;
