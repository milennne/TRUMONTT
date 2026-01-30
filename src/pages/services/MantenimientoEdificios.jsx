import React, { useEffect } from 'react';
import './MantenimientoEdificios.css';

// Importing the base asset as placeholder
import heroImage from '../../assets/servicios/servicio2.jpg';

const MantenimientoEdificios = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Mantenimiento de Edificios | Trumontt Group';
    }, []);

    return (
        <div className="mantenimiento-page">

            {/* 1. HERO */}
            <header className="me-hero" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="me-hero-overlay"></div>
                <div className="me-hero-content container-narrow">
                    <span className="me-hero-subtitle">Preservamos el valor de tu inversión</span>
                    <h1 className="me-hero-title">Mantenimiento de Edificios</h1>
                    <a href="/#contactanos" className="me-btn-primary">Solicitar Información</a>
                </div>
            </header>

            {/* 2. CÓMO TRABAJAMOS */}
            <section className="me-section-process container-narrow">
                <h2 className="me-section-title">¿Cómo trabajamos?</h2>
                <div className="me-steps-container">
                    <div className="me-step-item">
                        <div className="me-step-text">Evaluación técnica del inmueble</div>
                    </div>
                    <div className="me-step-item">
                        <div className="me-step-text">Diagnóstico de necesidades</div>
                    </div>
                    <div className="me-step-item">
                        <div className="me-step-text">Plan de mantenimiento personalizado</div>
                    </div>
                    <div className="me-step-item">
                        <div className="me-step-text">Ejecución supervisada</div>
                    </div>
                    <div className="me-step-item">
                        <div className="me-step-text">Reporte final de trabajos</div>
                    </div>
                </div>
            </section>

            {/* 3. TIPOS DE MANTENIMIENTO */}
            <section className="me-section-types">
                <div className="container-narrow">
                    <h2 className="me-section-title">Tipos de Mantenimiento</h2>
                    <div className="me-types-grid">
                        <div className="me-type-card">
                            <h3>Mantenimiento Preventivo</h3>
                            <p>Acciones programadas regularmente para evitar fallos, prolongar la vida útil de los equipos y garantizar la seguridad continua de las instalaciones.</p>
                        </div>
                        <div className="me-type-card">
                            <h3>Mantenimiento Correctivo</h3>
                            <p>Intervención inmediata y eficaz para reparar averías o desperfectos inesperados, minimizando el tiempo de inactividad de los servicios.</p>
                        </div>
                        <div className="me-type-card">
                            <h3>Mantenimiento Integral</h3>
                            <p>Solución completa que combina estrategias preventivas, correctivas y predictivas para una gestión total de la infraestructura.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. ÁREAS QUE ATENDEMOS */}
            <section className="me-section-areas">
                <div className="container-narrow">
                    <h2 className="me-section-title light">Áreas que Atendemos</h2>
                    <div className="me-areas-grid">
                        <div className="me-area-item">
                            <div className="me-area-icon">⚡</div>
                            <div className="me-area-title">Electricidad</div>
                        </div>
                        <div className="me-area-item">
                            <div className="me-area-icon">🔧</div>
                            <div className="me-area-title">Gasfitería</div>
                        </div>
                        <div className="me-area-item">
                            <div className="me-area-icon">🎨</div>
                            <div className="me-area-title">Pintura y acabados</div>
                        </div>
                        <div className="me-area-item">
                            <div className="me-area-icon">🏢</div>
                            <div className="me-area-title">Áreas comunes</div>
                        </div>
                        <div className="me-area-item">
                            <div className="me-area-icon">🏗️</div>
                            <div className="me-area-title">Fachadas</div>
                        </div>
                        <div className="me-area-item">
                            <div className="me-area-icon">🔥</div>
                            <div className="me-area-title">Sistemas contra incendios</div>
                        </div>
                        <div className="me-area-item">
                            <div className="me-area-icon">⚙️</div>
                            <div className="me-area-title">Bombas y equipos</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. BENEFICIOS */}
            <section className="me-section-benefits container-narrow">
                <h2 className="me-section-title">Beneficios para su Inmueble</h2>
                <div className="me-benefits-list">
                    <div className="me-benefit-item">
                        <span className="me-benefit-icon">📉</span>
                        <span className="me-benefit-text">Reducción de costos operativos</span>
                    </div>
                    <div className="me-benefit-item">
                        <span className="me-benefit-icon">⏳</span>
                        <span className="me-benefit-text">Mayor vida útil de las instalaciones</span>
                    </div>
                    <div className="me-benefit-item">
                        <span className="me-benefit-icon">🛡️</span>
                        <span className="me-benefit-text">Seguridad y cumplimiento normativo</span>
                    </div>
                    <div className="me-benefit-item">
                        <span className="me-benefit-icon">📈</span>
                        <span className="me-benefit-text">Valorización del inmueble</span>
                    </div>
                    <div className="me-benefit-item">
                        <span className="me-benefit-icon">🚀</span>
                        <span className="me-benefit-text">Atención rápida y especializada</span>
                    </div>
                </div>
            </section>

            {/* 6. CTA FINAL */}
            <section className="me-section-cta">
                <div className="container-narrow">
                    <h2>¿Listo para optimizar su infraestructura?</h2>
                    <p>Contacte con nuestros expertos para un diagnóstico inicial y descubra cómo podemos mejorar el rendimiento de su edificio.</p>
                    <a href="/#contactanos" className="me-btn-primary">Solicitar Información</a>
                </div>
            </section>

        </div>
    );
};

export default MantenimientoEdificios;
