import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <section id="contactanos" className="contact-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="main-title">Contáctenos</h2>
                    <p className="section-subtitle">
                        Déjanos tus datos y nuestros asesores se pondrán en contacto contigo.
                    </p>
                </div>

                <div className="contact-layout">
                    {/* Left Column: Map (Desktop) / Bottom (Mobile) */}
                    {/* Note: User requested Map Left, Form Right on Desktop. Form First on Mobile. 
                        
                    */}
                    <div className="map-column">
                        <iframe
                            src="https://maps.google.com/maps?q=Av.%20Republica%20de%20Chile%20Nro.%20478&z=15&hl=es&t=m&output=embed&iwloc=near"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Ubicación Trumontt Group"
                            className="google-map-frame"
                        ></iframe>
                    </div>

                    <div className="form-column">
                        <form className="contact-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="nombre">Nombre</label>
                                    <input type="text" id="nombre" name="nombre" placeholder="Tu nombre" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="apellido">Apellidos</label>
                                    <input type="text" id="apellido" name="apellido" placeholder="Tus apellidos" required />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="email">Correo electrónico</label>
                                    <input type="email" id="email" name="email" placeholder="ejemplo@correo.com" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="telefono">Número de celular</label>
                                    <input type="tel" id="telefono" name="telefono" placeholder="+51 999 999 999" />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="mensaje">Mensaje</label>
                                <textarea id="mensaje" name="mensaje" rows="5" placeholder="¿En qué podemos ayudarte?" required></textarea>
                            </div>

                            <button type="submit" className="btn-submit">
                                Enviar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
