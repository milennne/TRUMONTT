import React, { useEffect } from 'react';
import './Construccion.css';
import heroImage from '../../assets/servicios/servicio3.jpg';

const Construccion = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Servicios de Construcción | Trumontt Group';
    }, []);

    return (
        <div className="construccion-page">

            {/* 1. HERO */}
            <header className="const-hero" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="const-hero-overlay"></div>
                <div className="const-hero-content const-container">
                    <span className="const-hero-subtitle">Ingeniería y Ejecución</span>
                    <h1 className="const-hero-title">Construcción de Proyectos Integrales</h1>
                    <a href="/#contactanos" className="const-btn-cta">Solicitar Cotización</a>
                </div>
            </header>

            {/* 2. PROCESO DE DESARROLLO */}
            <section className="const-section-process">
                <div className="const-container">
                    <h2 className="const-section-title">¿Cómo desarrollamos nuestros proyectos?</h2>
                    <div className="const-process-grid">
                        <div className="const-process-step">
                            <span className="const-step-number">01</span>
                            <h3>Análisis y Planificación</h3>
                            <p>Evaluamos la viabilidad técnica y financiera para establecer una hoja de ruta clara.</p>
                        </div>
                        <div className="const-process-step">
                            <span className="const-step-number">02</span>
                            <h3>Diseño y Presupuesto</h3>
                            <p>Desarrollo de planos detallados y costos transparentes sin sorpresas.</p>
                        </div>
                        <div className="const-process-step">
                            <span className="const-step-number">03</span>
                            <h3>Licencias y Permisos</h3>
                            <p>Gestión integral de toda la documentación legal y municipal necesaria.</p>
                        </div>
                        <div className="const-process-step">
                            <span className="const-step-number">04</span>
                            <h3>Ejecución de Obra</h3>
                            <p>Construcción bajo estándares rigurosos de seguridad y calidad.</p>
                        </div>
                        <div className="const-process-step">
                            <span className="const-step-number">05</span>
                            <h3>Control de Calidad</h3>
                            <p>Supervisión continua para asegurar el cumplimiento de las especificaciones.</p>
                        </div>
                        <div className="const-process-step">
                            <span className="const-step-number">06</span>
                            <h3>Entrega Final</h3>
                            <p>Entrega del proyecto llave en mano con toda la documentación técnica.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. TIPOS DE PROYECTOS */}
            <section className="const-section-types">
                <div className="const-container">
                    <h2 className="const-section-title">Tipos de Proyectos</h2>
                    <div className="const-types-grid">
                        <div className="const-type-card">
                            <div className="const-type-icon">🏗️</div>
                            <h3>Obras Civiles</h3>
                            <p>Infraestructura, movimiento de tierras y cimentaciones complejas.</p>
                        </div>
                        <div className="const-type-card">
                            <div className="const-type-icon">🏢</div>
                            <h3>Edificaciones</h3>
                            <p>Construcción vertical para uso residencial, comercial o corporativo.</p>
                        </div>
                        <div className="const-type-card">
                            <div className="const-type-icon">🔨</div>
                            <h3>Remodelaciones</h3>
                            <p>Transformación y modernización de espacios existentes.</p>
                        </div>
                        <div className="const-type-card">
                            <div className="const-type-icon">📐</div>
                            <h3>Ampliaciones</h3>
                            <p>Expansión de áreas construidas optimizando el espacio disponible.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. SERVICIOS INCLUIDOS */}
            <section className="const-section-services">
                <div className="const-container">
                    <h2 className="const-section-title">Alcance de Nuestros Servicios</h2>
                    <div className="const-services-list">
                        <div className="const-service-item">
                            <div className="const-check-icon">✓</div>
                            <span className="const-service-text">Ejecución integral de obras civiles</span>
                        </div>
                        <div className="const-service-item">
                            <div className="const-check-icon">✓</div>
                            <span className="const-service-text">Construcción de edificaciones nuevas</span>
                        </div>
                        <div className="const-service-item">
                            <div className="const-check-icon">✓</div>
                            <span className="const-service-text">Servicios de remodelación y ampliación</span>
                        </div>
                        <div className="const-service-item">
                            <div className="const-check-icon">✓</div>
                            <span className="const-service-text">Supervisión técnica y residencia de obra</span>
                        </div>
                        <div className="const-service-item">
                            <div className="const-check-icon">✓</div>
                            <span className="const-service-text">Control estricto de cronogramas y costos</span>
                        </div>
                        <div className="const-service-item">
                            <div className="const-check-icon">✓</div>
                            <span className="const-service-text">Gestión y coordinación de proveedores</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. GESTIÓN DE LICENCIAS */}
            <section className="const-section-licenses">
                <div className="const-container">
                    <div className="const-licenses-block">
                        <div className="const-licenses-content">
                            <h2>Gestión de Licencias y Permisos</h2>
                            <p>
                                Sabemos que la parte burocrática puede ser un dolor de cabeza. Por eso, nos encargamos
                                de todo el saneamiento legal y técnico necesario para que tu obra cumpla con todas las normativas
                                vigentes sin contratiempos.
                            </p>
                        </div>
                        <div className="const-licenses-info">
                            <div className="const-license-item">
                                <span className="const-license-icon">📄</span> Trámites municipales completos
                            </div>
                            <div className="const-license-item">
                                <span className="const-license-icon">✅</span> Licencias de construcción
                            </div>
                            <div className="const-license-item">
                                <span className="const-license-icon">⚖️</span> Cumplimiento normativo y técnico
                            </div>
                            <div className="const-license-item">
                                <span className="const-license-icon">👷</span> Permisos de defensa civil
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. BENEFICIOS */}
            <section className="const-section-benefits">
                <div className="const-container">
                    <h2 className="const-section-title">Garantía Trumontt</h2>
                    <div className="const-benefits-grid">
                        <div className="const-benefit-box">
                            <div className="const-benefit-icon-wrapper">⏱️</div>
                            <h4>Cumplimiento de Plazos</h4>
                            <p>Tu tiempo es dinero. Entregamos en la fecha acordada.</p>
                        </div>
                        <div className="const-benefit-box">
                            <div className="const-benefit-icon-wrapper">🛡️</div>
                            <h4>Seguridad en Obra</h4>
                            <p>Protocolos estrictos de seguridad industrial.</p>
                        </div>
                        <div className="const-benefit-box">
                            <div className="const-benefit-icon-wrapper">💰</div>
                            <h4>Optimización de Costos</h4>
                            <p>Presupuestos eficientes sin sacrificar calidad.</p>
                        </div>
                        <div className="const-benefit-box">
                            <div className="const-benefit-icon-wrapper">🏆</div>
                            <h4>Calidad Constructiva</h4>
                            <p>Materiales y acabados de primera categoría.</p>
                        </div>
                        <div className="const-benefit-box">
                            <div className="const-benefit-icon-wrapper">🤝</div>
                            <h4>Asesoría Constante</h4>
                            <p>Te acompañamos en cada decisión técnica.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. FINAL CTA */}
            <section className="const-section-cta">
                <div className="const-cta-overlay"></div>
                <div className="const-cta-content">
                    <h2>¿Listo para iniciar tu proyecto?</h2>
                    <p>Cuéntanos tus ideas y nuestro equipo de ingeniería te ayudará a hacerlas realidad.</p>
                    <a href="/#contactanos" className="const-btn-cta">Solicitar Cotización</a>
                </div>
            </section>

        </div>
    );
};

export default Construccion;
