import React, { useEffect } from 'react';
import './DesarrolloPlataforma.css';
import heroImage from '../../assets/servicios/servicio9.jpeg';
import im1 from '../../assets/servicios/plataforma.jpg';

const DesarrolloPlataforma = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Trumontt Group | Desarrollo de Plataforma';
    }, []);

    return (
        <div className="dp-page">
            {/* 1. HERO PRINCIPAL */}
            <header className="dp-hero" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="dp-hero-overlay"></div>
                <div className="dp-hero-content">
                    <span className="dp-hero-subtitle">Innovación Tecnológica</span>
                    <h1 className="dp-hero-title">Desarrollo de Plataforma</h1>
                    <a href="/#contactanos" className="dp-btn-cta">SOLICITAR ASESORÍA TECNOLÓGICA</a>
                </div>
            </header>

            {/* 2. ¿QUÉ HACEMOS? */}
            <section className="dp-section-intro">
                <div className="dp-container">
                    <div className="dp-intro-grid">
                        <div className="dp-intro-text">
                            <h2>Software a Medida para Escalar su Negocio</h2>
                            <p>
                                En un mundo digital, las soluciones genéricas no siempre son suficientes. Diseñamos y desarrollamos plataformas tecnológicas personalizadas que se integran perfectamente con sus operaciones existentes.
                            </p>
                            <p>
                                Nuestro enfoque garantiza escalabilidad, seguridad y una experiencia de usuario (UX) optimizada, permitiéndole automatizar procesos y reducir costos operativos significativamente.
                            </p>
                        </div>
                        <div className="dp-intro-image">
                            <img src={im1} alt="Desarrollo de Software a Medida" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. TIPOS DE SOLUCIONES */}
            <section className="dp-section-solutions">
                <div className="dp-container">
                    <h2 className="dp-section-title">Soluciones Digitales</h2>
                    <div className="dp-solutions-grid">
                        <div className="dp-card">
                            <div className="dp-card-icon">
                                {/* Aplicaciones Web - Monitor */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                                </svg>
                            </div>
                            <h3>Aplicaciones Web</h3>
                            <p>Plataformas robustas accesibles desde cualquier navegador, ideales para gestión empresarial (ERP, CRM).</p>
                        </div>
                        <div className="dp-card">
                            <div className="dp-card-icon">
                                {/* Aplicaciones Móviles - Phone */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                </svg>
                            </div>
                            <h3>Aplicaciones Móviles</h3>
                            <p>Apps nativas o híbridas (iOS/Android) para conectar con sus clientes o equipo de campo.</p>
                        </div>
                        <div className="dp-card">
                            <div className="dp-card-icon">
                                {/* Sistemas Cloud - Cloud */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
                                </svg>
                            </div>
                            <h3>Sistemas Cloud</h3>
                            <p>Infraestructura escalable en la nube para garantizar disponibilidad y seguridad de datos.</p>
                        </div>
                        <div className="dp-card">
                            <div className="dp-card-icon">
                                {/* Integraciones API - Link */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                                </svg>
                            </div>
                            <h3>Integraciones (API)</h3>
                            <p>Conectamos sus sistemas actuales para que fluyan los datos sin fricción.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. PROCESO DE DESARROLLO */}
            <section className="dp-section-process">
                <div className="dp-container">
                    <h2 className="dp-section-title light">Nuestro Flujo de Desarrollo</h2>
                    <div className="dp-process-timeline">
                        <div className="dp-process-step">
                            <div className="dp-step-number">1</div>
                            <h3>Análisis</h3>
                            <p>Levantamiento detallado de requerimientos y objetivos.</p>
                        </div>
                        <div className="dp-process-step">
                            <div className="dp-step-number">2</div>
                            <h3>Diseño UX/UI</h3>
                            <p>Prototipado centrado en la usabilidad del usuario.</p>
                        </div>
                        <div className="dp-process-step">
                            <div className="dp-step-number">3</div>
                            <h3>Desarrollo</h3>
                            <p>Codificación con estándares de calidad y arquitectura limpia.</p>
                        </div>
                        <div className="dp-process-step">
                            <div className="dp-step-number">4</div>
                            <h3>Pruebas</h3>
                            <p>QA exhaustivo para asegurar un producto libre de errores.</p>
                        </div>
                        <div className="dp-process-step">
                            <div className="dp-step-number">5</div>
                            <h3>Despliegue</h3>
                            <p>Puesta en producción y capacitación al equipo.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. SERVICIOS INCLUIDOS */}
            <section className="dp-section-services">
                <div className="dp-container">
                    <h2 className="dp-section-title">Servicios Incluidos</h2>
                    <div className="dp-services-list">
                        <div className="dp-service-item">
                            <div className="dp-check-icon">✓</div>
                            <span className="dp-service-text">Desarrollo de aplicaciones web y móviles</span>
                        </div>
                        <div className="dp-service-item">
                            <div className="dp-check-icon">✓</div>
                            <span className="dp-service-text">Integración de APIs y sistemas legacy</span>
                        </div>
                        <div className="dp-service-item">
                            <div className="dp-check-icon">✓</div>
                            <span className="dp-service-text">Diseño UX/UI centrado en el usuario</span>
                        </div>
                        <div className="dp-service-item">
                            <div className="dp-check-icon">✓</div>
                            <span className="dp-service-text">Mantenimiento y soporte de software</span>
                        </div>
                        <div className="dp-service-item">
                            <div className="dp-check-icon">✓</div>
                            <span className="dp-service-text">Escalabilidad y optimización de rendimiento</span>
                        </div>
                        <div className="dp-service-item">
                            <div className="dp-check-icon">✓</div>
                            <span className="dp-service-text">Seguridad y control de accesos</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. TECNOLOGÍA Y STACK */}
            <section className="dp-section-tech">
                <div className="dp-container">
                    <div className="dp-tech-content">
                        <h2 className="dp-section-title">Tecnologías que Utilizamos</h2>
                        <p style={{ fontSize: '1.1rem', color: '#64748b' }}>
                            Trabajamos con un stack moderno y probado para garantizar que su plataforma sea rápida, segura y fácil de mantener.
                        </p>
                        <div className="dp-tech-grid">
                            <div className="dp-tech-badge">React / Next.js</div>
                            <div className="dp-tech-badge">Node.js / Python</div>
                            <div className="dp-tech-badge">AWS / Azure</div>
                            <div className="dp-tech-badge">PostgreSQL / MongoDB</div>
                            <div className="dp-tech-badge">Docker / Kubernetes</div>
                            <div className="dp-tech-badge">Flutter / React Native</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. BENEFICIOS */}
            <section className="dp-section-benefits">
                <div className="dp-container">
                    <h2 className="dp-section-title light">Beneficios para su Negocio</h2>
                    <div className="dp-benefits-grid">
                        <div className="dp-benefit-item">
                            <span className="dp-benefit-icon">
                                {/* Automatización - Gear */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                            </span>
                            <h3>Automatización</h3>
                        </div>
                        <div className="dp-benefit-item">
                            <span className="dp-benefit-icon">
                                {/* Reducción de Errores - Shield Check */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                                </svg>
                            </span>
                            <h3>Reducción de Errores</h3>
                        </div>
                        <div className="dp-benefit-item">
                            <span className="dp-benefit-icon">
                                {/* Mejor Experiencia - Smile */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                                </svg>
                            </span>
                            <h3>Mejor Experiencia</h3>
                        </div>
                        <div className="dp-benefit-item">
                            <span className="dp-benefit-icon">
                                {/* Escalabilidad Total - Chart Up */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                                </svg>
                            </span>
                            <h3>Escalabilidad Total</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. FINAL CTA */}
            <section className="dp-section-cta" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="dp-cta-overlay"></div>
                <div className="dp-cta-content">
                    <h2>Transforma tu operación con tecnología a medida</h2>
                    <a href="/#contactanos" className="dp-btn-cta">SOLICITAR ASESORÍA TECNOLÓGICA</a>
                </div>
            </section>
        </div>
    );
};

export default DesarrolloPlataforma;
