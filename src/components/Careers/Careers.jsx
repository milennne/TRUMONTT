import React from 'react';
import './Careers.css';

const Careers = () => {
    return (
        <div className="careers-container">
            {/* 2. Why Work With Us */}
            <section className="careers-section">
                <div className="container">
                    <h2 className="careers-section-title">¿Por qué trabajar con nosotros?</h2>
                    <div className="benefits-grid">
                        <div className="benefit-card">
                            <span className="benefit-icon">🚀</span>
                            <h3>Crecimiento Profesional</h3>
                            <p>Fomentamos el desarrollo continuo y la línea de carrera interna.</p>
                        </div>
                        <div className="benefit-card">
                            <span className="benefit-icon">🏗️</span>
                            <h3>Proyectos Desafiantes</h3>
                            <p>Participa en obras de gran envergadura e impacto nacional.</p>
                        </div>
                        <div className="benefit-card">
                            <span className="benefit-icon">🤝</span>
                            <h3>Ambiente Profesional</h3>
                            <p>Cultura de respeto, colaboración y trabajo en equipo.</p>
                        </div>
                        <div className="benefit-card">
                            <span className="benefit-icon">🛡️</span>
                            <h3>Seguridad y Calidad</h3>
                            <p>Compromiso inquebrantable con los más altos estándares.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Profiles We Look For */}
            <section className="careers-section" style={{ backgroundColor: '#f3f4f6' }}>
                <div className="container">
                    <h2 className="careers-section-title">Perfiles que buscamos</h2>
                    <div className="profiles-grid">
                        <div className="profile-card"><h4>Técnicos Electricistas</h4></div>
                        <div className="profile-card"><h4>Ingenieros Civiles</h4></div>
                        <div className="profile-card"><h4>Supervisores de Obra</h4></div>
                        <div className="profile-card"><h4>Personal Administrativo</h4></div>
                        <div className="profile-card"><h4>Practicantes</h4></div>
                        <div className="profile-card"><h4>Arquitectos</h4></div>
                    </div>
                </div>
            </section>

            {/* 4. Process */}
            <section className="careers-section">
                <div className="container">
                    <h2 className="careers-section-title">Proceso de Postulación</h2>
                    <div className="process-steps">
                        <div className="process-step">
                            <div className="step-number">1</div>
                            <h3>Completa el formulario</h3>
                            <p>Ingresa tus datos personales y profesionales en el formulario de abajo.</p>
                        </div>
                        <div className="process-step">
                            <div className="step-number">2</div>
                            <h3>Adjunta tu CV</h3>
                            <p>Sube tu hoja de vida actualizada en formato PDF.</p>
                        </div>
                        <div className="process-step">
                            <div className="step-number">3</div>
                            <h3>Contacto</h3>
                            <p>Nuestro equipo de RR.HH. revisará tu perfil y te contactará.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Application Form */}
            <section className="careers-section" style={{ backgroundColor: '#f3f4f6' }}>
                <div className="container">
                    <h2 className="careers-section-title">Postula Aquí</h2>
                    <div className="form-container">
                        <form onSubmit={(e) => e.preventDefault()}> {/* Prevent default submission */}
                            <div className="form-group">
                                <label htmlFor="fullname">Nombre Completo</label>
                                <input type="text" id="fullname" className="form-control" placeholder="Juan Pérez" />
                            </div>

                            <div className="form-group">
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                    <div>
                                        <label htmlFor="email">Correo Electrónico</label>
                                        <input type="email" id="email" className="form-control" placeholder="juan@ejemplo.com" />
                                    </div>
                                    <div>
                                        <label htmlFor="phone">Teléfono</label>
                                        <input type="tel" id="phone" className="form-control" placeholder="+51 999 999 999" />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="position">Puesto al que postula</label>
                                <select id="position" className="form-control">
                                    <option value="">Selecciona un puesto</option>
                                    <option value="tecnico">Técnico Electricista</option>
                                    <option value="ingeniero">Ingeniero Civil</option>
                                    <option value="supervisor">Supervisor de Obra</option>
                                    <option value="admin">Administrativo</option>
                                    <option value="practicante">Practicante</option>
                                    <option value="otro">Otro</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Mensaje / Presentación</label>
                                <textarea id="message" className="form-control" placeholder="Cuéntanos brevemente sobre ti..."></textarea>
                            </div>

                            <div className="form-group">
                                <label htmlFor="cv">Adjuntar CV (PDF)</label>
                                <input type="file" id="cv" className="form-control" accept=".pdf,.doc,.docx" />
                            </div>

                            <button type="button" className="submit-btn" onClick={() => alert('Esta es una demostración de UI. El envío no está implementado.')}>
                                Enviar Postulación
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Careers;
