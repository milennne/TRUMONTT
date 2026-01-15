import React, { useState } from 'react';
import './Inmobiliarias.css';
import { inmobiliariasData } from '../data/inmobiliariasData';
import InmuebleCard from '../components/inmobiliaria/InmuebleCard';
import ModalInmueble from '../components/inmobiliaria/ModalInmueble';
import imgPrincipal from '../assets/inmobiliaria/propiedad1/principal.jpeg';
import headerBg from '../assets/gestioninmobiliaria.jpg';

const Inmobiliarias = () => {
    const [selectedInmueble, setSelectedInmueble] = useState(null);

    const openModal = (inmueble) => {
        setSelectedInmueble(inmueble);
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    };

    const closeModal = () => {
        setSelectedInmueble(null);
        document.body.style.overflow = 'auto'; // Restore scrolling
    };

    return (
        <div className="inmobiliarias-page">
            <header className="inmobiliarias-page-header" style={{ backgroundImage: `url(${headerBg})` }}>
                <div className="header-overlay"></div>
                <div className="header-content">
                    <span className="header-tag">Propiedades Exclusivas</span>
                    <h1 className="header-title">Nuestras Propiedades</h1>
                    <p className="header-desc">
                        Encuentra el espacio perfecto para tu próximo proyecto de vida o inversión.
                    </p>
                </div>
            </header>

            <section className="inmobiliarias-list-section">
                <div className="container">
                    <div className="inmuebles-grid">
                        {inmobiliariasData.map((inmueble) => (
                            <InmuebleCard
                                key={inmueble.id}
                                inmueble={inmueble}
                                onOpenModal={openModal}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {selectedInmueble && (
                <ModalInmueble
                    inmueble={selectedInmueble}
                    onClose={closeModal}
                />
            )}
        </div>
    );
};

export default Inmobiliarias;
