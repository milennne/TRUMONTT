import React, { useEffect } from 'react';
import './SistemasElectricos.css';
import heroImage from '../../assets/servicios/servicio4.jpg';
import im1 from '../../assets/servicios/electricidad.jpg';


const SistemasElectricos = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Sistemas Eléctricos | Trumontt Group';
    }, []);

    return (
        <div className="electrico-page">

            {/* 1. HERO */}
            <header className="electrico-hero" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="electrico-hero-overlay"></div>
                <div className="electrico-hero-content electrico-container">
                    <span className="electrico-hero-subtitle">Seguridad y Eficiencia Energética</span>
                    <h1 className="electrico-hero-title">Sistemas Eléctricos Integrales</h1>
                    <a href="/#contactanos" className="electrico-btn-cta">Solicitar Evaluación Técnica</a>
                </div>
            </header>

            {/* 2. INTRODUCCIÓN */}
            {/* 2. INTRODUCCIÓN */}
            <section className="electrico-section-intro">
                <div className="electrico-container">
                    <div className="electrico-intro-grid">
                        <div className="electrico-intro-text">
                            <h2>Potencia y Seguridad para su Infraestructura</h2>
                            <p>
                                Un sistema eléctrico eficiente y normativo es el corazón de cualquier edificación moderna.
                                En Trumontt Group, diseñamos e implementamos soluciones eléctricas que garantizan la
                                continuidad operativa, minimizan riesgos y optimizan el consumo energético de sus instalaciones.
                            </p>
                        </div>
                        <div className="electrico-intro-image">
                            <img src={im1} alt="Ingeniería Eléctrica Trumontt" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. CÓMO TRABAJAMOS (WORKFLOW) */}
            <section className="electrico-section-workflow">
                <div className="electrico-container">
                    <h2 className="electrico-section-title">Metodología de Trabajo</h2>
                    <div className="electrico-workflow-steps">
                        <div className="electrico-step-card">
                            <div className="electrico-step-num">1</div>
                            <h3>Evaluación Técnica</h3>
                            <p>Inspección detallada del estado actual de las instalaciones y mediciones de carga.</p>
                        </div>
                        <div className="electrico-step-card">
                            <div className="electrico-step-num">2</div>
                            <h3>Diagnóstico & Diseño</h3>
                            <p>Identificación de puntos críticos y elaboración de planos para la solución ideal.</p>
                        </div>
                        <div className="electrico-step-card">
                            <div className="electrico-step-num">3</div>
                            <h3>Ejecución Normativa</h3>
                            <p>Instalación rigurosa cumpliendo el Código Nacional de Electricidad (CNE).</p>
                        </div>
                        <div className="electrico-step-card">
                            <div className="electrico-step-num">4</div>
                            <h3>Pruebas y Entrega</h3>
                            <p>Protocolos de prueba, certificación de operatividad y dossier de calidad.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. TIPOS DE SISTEMAS */}
            <section className="electrico-section-types">
                <div className="electrico-container">
                    <h2 className="electrico-section-title">Especializaciones</h2>
                    <div className="electrico-types-grid">
                        <div className="electrico-type-box">
                            <div className="electrico-type-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
                                </svg>
                            </div>
                            <h3>Residencial</h3>
                            <p>Cableado seguro y eficiente para edificios multifamiliares y condominios.</p>
                        </div>
                        <div className="electrico-type-box">
                            <div className="electrico-type-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                                </svg>
                            </div>
                            <h3>Comercial</h3>
                            <p>Sistemas de alta demanda para oficinas, locales y centros comerciales.</p>
                        </div>
                        <div className="electrico-type-box">
                            <div className="electrico-type-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                                </svg>
                            </div>
                            <h3>Industrial</h3>
                            <p>Potencia y control para plantas, almacenes y maquinaria pesada.</p>
                        </div>
                        <div className="electrico-type-box">
                            <div className="electrico-type-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5H18V15H4.5v-4.5ZM3.75 18h15A2.25 2.25 0 0 0 21 15.75v-6a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 1.5 9.75v6A2.25 2.25 0 0 0 3.75 18Z" />
                                </svg>
                            </div>
                            <h3>Sistemas de Emergencia</h3>
                            <p>Grupos electrógenos, UPS y luces de emergencia certificadas.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. SERVICIOS INCLUIDOS */}
            <section className="electrico-section-services">
                <div className="electrico-container">
                    <h2 className="electrico-section-title">Catálogo de Servicios</h2>
                    <div className="electrico-services-grid">
                        <div className="electrico-service-card">
                            <div className="service-icon-box">✓</div>
                            <div>
                                <h3>Tableros Eléctricos</h3>
                                <p>Instalación, mantenimiento y balance de cargas.</p>
                            </div>
                        </div>
                        <div className="electrico-service-card">
                            <div className="service-icon-box">✓</div>
                            <div>
                                <h3>Cableado Estructurado</h3>
                                <p>Redes de datos y voz certificadas.</p>
                            </div>
                        </div>
                        <div className="electrico-service-card">
                            <div className="service-icon-box">✓</div>
                            <div>
                                <h3>Pozos a Tierra</h3>
                                <p>Medición, construcción y certificación de la resistencia.</p>
                            </div>
                        </div>
                        <div className="electrico-service-card">
                            <div className="service-icon-box">✓</div>
                            <div>
                                <h3>Iluminación LED</h3>
                                <p>Proyectos de eficiencia energética y automatización.</p>
                            </div>
                        </div>
                        <div className="electrico-service-card">
                            <div className="service-icon-box">✓</div>
                            <div>
                                <h3>Mantenimiento Preventivo</h3>
                                <p>Planes anuales para evitar fallas críticas.</p>
                            </div>
                        </div>
                        <div className="electrico-service-card">
                            <div className="service-icon-box">✓</div>
                            <div>
                                <h3>Fugas a Tierra</h3>
                                <p>Detección especializada y corrección de fugas.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. SEGURIDAD Y NORMATIVAS */}
            <section className="electrico-section-security">
                <div className="electrico-container electrico-security-content">
                    <div className="electrico-security-text">
                        <h2>Cumplimiento Normativo y Seguridad</h2>
                        <p>
                            La seguridad no es negociable. Todos nuestros proyectos se ejecutan bajo estrictos
                            estándares de calidad y cumplimiento normativo, asegurando instalaciones aptas
                            para inspecciones de INDECI y aseguradoras.
                        </p>
                        <div className="electrico-cert-badges">
                            <span className="electrico-badge">Normativa CNE</span>
                            <span className="electrico-badge">Certificación INDECI</span>
                            <span className="electrico-badge">Materiales UL/IEC</span>
                        </div>
                    </div>
                    <div className="electrico-security-visual">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z" />
                        </svg>
                    </div>
                </div>
            </section>

            {/* 7. BENEFICIOS */}
            <section className="electrico-section-benefits">
                <div className="electrico-container">
                    <h2 className="electrico-section-title">Beneficios de nuestro servicio</h2>
                    <div className="electrico-benefits-grid">
                        <div className="electrico-benefit-card">
                            <div className="electrico-benefit-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                                </svg>
                            </div>
                            <h4>Seguridad Garantizada</h4>
                            <p>Reducción drástica de riesgos de corto circuito e incendios.</p>
                        </div>
                        <div className="electrico-benefit-card">
                            <div className="electrico-benefit-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181" />
                                </svg>
                            </div>
                            <h4>Ahorro Energético</h4>
                            <p>Optimización de consumo mediante balance de cargas y tecnología LED.</p>
                        </div>
                        <div className="electrico-benefit-card">
                            <div className="electrico-benefit-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                                </svg>
                            </div>
                            <h4>Continuidad Operativa</h4>
                            <p>Sistemas confiables que evitan paradas no programadas.</p>
                        </div>
                        <div className="electrico-benefit-card">
                            <div className="electrico-benefit-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                                </svg>
                            </div>
                            <h4>Soporte Especializado</h4>
                            <p>Ingenieros y técnicos calificados a su disposición.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. CTA FINAL */}
            <section className="electrico-section-cta" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="electrico-cta-overlay"></div>
                <div className="electrico-cta-content">
                    <h2>¿Sus instalaciones eléctricas son seguras?</h2>
                    <p>No espere a que ocurra una falla. Solicite hoy mismo una evaluación técnica profesional.</p>
                    <a href="/#contactanos" className="electrico-btn-cta">Solicitar Evaluación Técnica</a>
                </div>
            </section>

        </div>
    );
};

export default SistemasElectricos;
