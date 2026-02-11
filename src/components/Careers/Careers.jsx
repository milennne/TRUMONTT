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
                            <span className="benefit-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                                </svg>
                            </span>
                            <h3>Crecimiento Profesional</h3>
                            <p>Fomentamos el desarrollo continuo y la línea de carrera interna.</p>
                        </div>
                        <div className="benefit-card">
                            <span className="benefit-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                                </svg>
                            </span>
                            <h3>Proyectos Desafiantes</h3>
                            <p>Participa en obras de gran envergadura e impacto nacional.</p>
                        </div>
                        <div className="benefit-card">
                            <span className="benefit-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                                </svg>
                            </span>
                            <h3>Ambiente Profesional</h3>
                            <p>Cultura de respeto, colaboración y trabajo en equipo.</p>
                        </div>
                        <div className="benefit-card">
                            <span className="benefit-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                                </svg>
                            </span>
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
