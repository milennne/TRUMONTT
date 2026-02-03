import React, { useEffect } from 'react';
import './SeguridadIndustrial.css';
import heroImage from '../../assets/servicios/servicio5.jpg';
import im1 from '../../assets/servicios/seguridad.jpg';

const SeguridadIndustrial = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Seguridad Industrial | Trumontt Group';
    }, []);

    return (
        <div className="seguridad-page">

            {/* 1. HERO */}
            <header className="seguridad-hero" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="seguridad-hero-overlay"></div>
                <div className="seguridad-hero-content seguridad-container">
                    <span className="seguridad-hero-subtitle">Prevención, Protección y Cumplimiento</span>
                    <h1 className="seguridad-hero-title">Seguridad Industrial</h1>
                    <a href="/#contactanos" className="seguridad-btn-cta">Solicitar Asesoría en Seguridad</a>
                </div>
            </header>

            {/* 2. INTRODUCCIÓN - ¿Qué es? */}
            <section className="seguridad-section-intro">
                <div className="seguridad-container">
                    <div className="seguridad-intro-grid">
                        <div className="seguridad-intro-text">
                            <h2>Importancia de la Seguridad Industrial</h2>
                            <p>
                                La seguridad industrial no es solo un requisito legal, sino una inversión estratégica
                                para la sostenibilidad de su negocio. En Trumontt Group, nos enfocamos en crear entornos
                                de trabajo seguros, protegiendo su activo más valioso: su equipo humano, asi como su infraestructura
                                y operaciones, minimizando riesgos y garantizando la continuidad operativa.
                            </p>
                        </div>
                        <div className="seguridad-intro-image">
                            <img src={im1} alt="Seguridad Industrial Trumontt" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. CÓMO TRABAJAMOS (WORKFLOW) */}
            <section className="seguridad-section-workflow">
                <div className="seguridad-container">
                    <h2 className="seguridad-section-title">Nuestra Metodología</h2>
                    <div className="seguridad-workflow-steps">
                        <div className="seguridad-step-card">
                            <div className="seguridad-step-num">1</div>
                            <h3>Evaluación de Riesgos</h3>
                            <p>Análisis exhaustivo de las instalaciones y procesos para identificar peligros potenciales.</p>
                        </div>
                        <div className="seguridad-step-card">
                            <div className="seguridad-step-num">2</div>
                            <h3>Diagnóstico</h3>
                            <p>Evaluación del nivel de cumplimiento normativo y brechas de seguridad existentes.</p>
                        </div>
                        <div className="seguridad-step-card">
                            <div className="seguridad-step-num">3</div>
                            <h3>Diseño de Protocolos</h3>
                            <p>Elaboración de planes de seguridad personalizados y medidas correctivas.</p>
                        </div>
                        <div className="seguridad-step-card">
                            <div className="seguridad-step-num">4</div>
                            <h3>Implementación</h3>
                            <p>Puesta en marcha de sistemas, señalética y equipos de protección necesarios.</p>
                        </div>
                        <div className="seguridad-step-card">
                            <div className="seguridad-step-num">5</div>
                            <h3>Capacitación</h3>
                            <p>Entrenamiento al personal en protocolos de seguridad y respuesta ante emergencias.</p>
                        </div>
                        <div className="seguridad-step-card">
                            <div className="seguridad-step-num">6</div>
                            <h3>Mejora Continua</h3>
                            <p>Auditorías periódicas y seguimiento para asegurar la eficacia de las medidas.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. SERVICIOS INCLUIDOS */}
            <section className="seguridad-section-services">
                <div className="seguridad-container">
                    <h2 className="seguridad-section-title">Servicios Especializados</h2>
                    <div className="seguridad-services-grid">
                        <div className="seguridad-service-card">
                            <div className="service-icon-box">✓</div>
                            <div>
                                <h3>Sistemas Contra Incendios</h3>
                                <p>Instalación y mantenimiento de detección y extinción.</p>
                            </div>
                        </div>
                        <div className="seguridad-service-card">
                            <div className="service-icon-box">✓</div>
                            <div>
                                <h3>Señalización Normativa</h3>
                                <p>Implementación de señalética de seguridad según normas.</p>
                            </div>
                        </div>
                        <div className="seguridad-service-card">
                            <div className="service-icon-box">✓</div>
                            <div>
                                <h3>Planes de Contingencia</h3>
                                <p>Elaboración de planes de evacuación y respuesta a emergencias.</p>
                            </div>
                        </div>
                        <div className="seguridad-service-card">
                            <div className="service-icon-box">✓</div>
                            <div>
                                <h3>Capacitación SST</h3>
                                <p>Formación en seguridad y salud en el trabajo para el personal.</p>
                            </div>
                        </div>
                        <div className="seguridad-service-card">
                            <div className="service-icon-box">✓</div>
                            <div>
                                <h3>Auditorías de Seguridad</h3>
                                <p>Inspecciones técnicas para verificar cumplimiento y seguridad.</p>
                            </div>
                        </div>
                        <div className="seguridad-service-card">
                            <div className="service-icon-box">✓</div>
                            <div>
                                <h3>Gestión de Riesgos</h3>
                                <p>Identificación y control de riesgos laborales.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. ÁREAS DE APLICACIÓN */}
            <section className="seguridad-section-areas">
                <div className="seguridad-container">
                    <h2 className="seguridad-section-title">Áreas de Aplicación</h2>
                    <div className="seguridad-areas-grid">
                        <div className="seguridad-area-box">
                            <div className="seguridad-area-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                                </svg>
                            </div>
                            <h3>Edificios Corporativos</h3>
                        </div>
                        <div className="seguridad-area-box">
                            <div className="seguridad-area-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                                </svg>
                            </div>
                            <h3>Plantas Industriales</h3>
                        </div>
                        <div className="seguridad-area-box">
                            <div className="seguridad-area-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                                </svg>
                            </div>
                            <h3>Obras de Construcción</h3>
                        </div>
                        <div className="seguridad-area-box">
                            <div className="seguridad-area-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>
                            </div>
                            <h3>Centros Comerciales</h3>
                        </div>
                        <div className="seguridad-area-box">
                            <div className="seguridad-area-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                                </svg>
                            </div>
                            <h3>Almacenes y Logística</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. NORMATIVAS Y CUMPLIMIENTO */}
            <section className="seguridad-section-regulations">
                <div className="seguridad-container seguridad-regulations-content">
                    <div className="seguridad-regulations-text">
                        <h2>Cumplimiento Normativo y Estándares</h2>
                        <p>
                            Nuestras soluciones están estrictamente alineadas con las normativas nacionales e internacionales
                            vigentes. Garantizamos el cumplimiento de protocolos de seguridad industrial para evitar multas,
                            pero sobre todo, asegurar la integridad física de todos.
                        </p>
                        <div className="seguridad-cert-badges">
                            <span className="seguridad-badge">Ley SST 29783</span>
                            <span className="seguridad-badge">Normas Técnicas Peruanas</span>
                            <span className="seguridad-badge">Defensa Civil</span>
                        </div>
                    </div>
                    <div className="seguridad-regulations-visual">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                        </svg>
                    </div>
                </div>
            </section>

            {/* 7. BENEFICIOS */}
            <section className="seguridad-section-benefits">
                <div className="seguridad-container">
                    <h2 className="seguridad-section-title">Beneficios Clave</h2>
                    <div className="seguridad-benefits-grid">
                        <div className="seguridad-benefit-card">
                            <div className="seguridad-benefit-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                                </svg>
                            </div>
                            <h4>Reducción de Accidentes</h4>
                            <p>Minimización de riesgos y entornos laborales más seguros.</p>
                        </div>
                        <div className="seguridad-benefit-card">
                            <div className="seguridad-benefit-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                                </svg>
                            </div>
                            <h4>Protección del Personal</h4>
                            <p>Cuidado integral de la salud y bienestar de los colaboradores.</p>
                        </div>
                        <div className="seguridad-benefit-card">
                            <div className="seguridad-benefit-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
                                </svg>
                            </div>
                            <h4>Cumplimiento Legal</h4>
                            <p>Evite sanciones cumpliendo con todas las normativas exigidas.</p>
                        </div>
                        <div className="seguridad-benefit-card">
                            <div className="seguridad-benefit-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                                </svg>
                            </div>
                            <h4>Continuidad Operativa</h4>
                            <p>Procesos sin interrupciones por incidentes de seguridad.</p>
                        </div>
                        <div className="seguridad-benefit-card">
                            <div className="seguridad-benefit-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                                </svg>
                            </div>
                            <h4>Cultura de Seguridad</h4>
                            <p>Fomento de una actitud preventiva en toda la organización.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. CTA FINAL */}
            <section className="seguridad-section-cta" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="seguridad-cta-overlay"></div>
                <div className="seguridad-cta-content">
                    <h2>Proteja a su equipo y su operación</h2>
                    <p>La seguridad es prioridad. Contáctenos para evaluar y mejorar sus estándares de seguridad.</p>
                    <a href="/#contactanos" className="seguridad-btn-cta">Solicitar Asesoría en Seguridad</a>
                </div>
            </section>

        </div>
    );
};

export default SeguridadIndustrial;
