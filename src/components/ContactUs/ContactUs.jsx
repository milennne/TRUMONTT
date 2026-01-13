import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactUs.css';

const ContactUs = () => {
    const form = useRef();
    const [status, setStatus] = useState(''); // 'sending', 'success', 'error'

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_CLIENTS,
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then((result) => {
                console.log('SUCCESS!', result.text);
                setStatus('success');
                form.current.reset();
                setTimeout(() => setStatus(''), 5000);
            }, (error) => {
                console.log('FAILED...', error.text);
                setStatus('error');
                setTimeout(() => setStatus(''), 5000);
            });
    };

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
                    {/* Left Column: Map */}
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
                        <form ref={form} onSubmit={sendEmail} className="contact-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="nombre">Nombre</label>
                                    <input type="text" id="nombre" name="nombre" placeholder="Tu nombre" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="apellido">Apellidos</label>
                                    <input type="text" id="apellido" name="apellido" placeholder="Tus apellidos" />
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

                            <button type="submit" className="btn-submit" disabled={status === 'sending'}>
                                {status === 'sending' ? 'Enviando...' : 'Enviar'}
                            </button>

                            {status === 'success' && (
                                <p style={{ color: 'green', marginTop: '10px', textAlign: 'center' }}>
                                    ¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.
                                </p>
                            )}
                            {status === 'error' && (
                                <p style={{ color: 'red', marginTop: '10px', textAlign: 'center' }}>
                                    Hubo un error al enviar. Por favor intenta nuevamente o contáctanos por WhatsApp.
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
