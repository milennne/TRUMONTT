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

            {/* 5. Google Form Link */}
            <section className="careers-section" style={{ backgroundColor: '#f3f4f6' }}>
                <div className="container" style={{ textAlign: 'center', padding: '40px 0' }}>
                    <h2 className="careers-section-title" style={{ left: 'auto', transform: 'none', display: 'inline-block' }}>
                        <a
                            href="https://forms.gle/zqUohFjqu88e9Wu18"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: 'none', color: '#111829', borderBottom: '2px solid #0056b3', paddingBottom: '5px' }}
                            onMouseOver={(e) => e.target.style.color = '#0056b3'}
                            onMouseOut={(e) => e.target.style.color = '#111829'}
                        >
                            Postula Aquí
                        </a>
                    </h2>
                    <p style={{ marginTop: '20px', fontSize: '1.1rem', color: '#555' }}>
                        Haz clic en el enlace de arriba para completar tu postulación a través de nuestro formulario oficial.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Careers;
