import React, { useEffect } from 'react';
import './SistemasElectricos.css';
import heroImage from '../../assets/servicios/servicio4.jpg';

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
                            <img src={heroImage} alt="Ingeniería Eléctrica Trumontt" />
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
                            <div className="electrico-type-icon">🏠</div>
                            <h3>Residencial</h3>
                            <p>Cableado seguro y eficiente para edificios multifamiliares y condominios.</p>
                        </div>
                        <div className="electrico-type-box">
                            <div className="electrico-type-icon">🏢</div>
                            <h3>Comercial</h3>
                            <p>Sistemas de alta demanda para oficinas, locales y centros comerciales.</p>
                        </div>
                        <div className="electrico-type-box">
                            <div className="electrico-type-icon">🏭</div>
                            <h3>Industrial</h3>
                            <p>Potencia y control para plantas, almacenes y maquinaria pesada.</p>
                        </div>
                        <div className="electrico-type-box">
                            <div className="electrico-type-icon">🔋</div>
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
                        <span style={{ fontSize: '8rem' }}>🛡️</span>
                    </div>
                </div>
            </section>

            {/* 7. BENEFICIOS */}
            <section className="electrico-section-benefits">
                <div className="electrico-container">
                    <h2 className="electrico-section-title">Beneficios de nuestro servicio</h2>
                    <div className="electrico-benefits-grid">
                        <div className="electrico-benefit-card">
                            <div className="electrico-benefit-icon">⚡</div>
                            <h4>Seguridad Garantizada</h4>
                            <p>Reducción drástica de riesgos de corto circuito e incendios.</p>
                        </div>
                        <div className="electrico-benefit-card">
                            <div className="electrico-benefit-icon">📉</div>
                            <h4>Ahorro Energético</h4>
                            <p>Optimización de consumo mediante balance de cargas y tecnología LED.</p>
                        </div>
                        <div className="electrico-benefit-card">
                            <div className="electrico-benefit-icon">🔄</div>
                            <h4>Continuidad Operativa</h4>
                            <p>Sistemas confiables que evitan paradas no programadas.</p>
                        </div>
                        <div className="electrico-benefit-card">
                            <div className="electrico-benefit-icon">👷</div>
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
