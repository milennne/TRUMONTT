import React, { useEffect } from 'react';
import './AsesoriaEmpresarial.css';
import heroImage from '../../assets/servicios/servicio7.jpeg';

const AsesoriaEmpresarial = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Asesoría Empresarial | Trumontt Group';
    }, []);

    return (
        <div className="asesoria-page">

            {/* 1. HERO CORPORATIVO */}
            <header className="ae-hero" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="ae-hero-overlay"></div>
                <div className="ae-hero-content">
                    <span className="ae-hero-subtitle">Consultoría Estratégica</span>
                    <h1 className="ae-hero-title">Asesoría Empresarial</h1>
                    <a href="/#contactanos" className="ae-btn-cta">SOLICITAR DIAGNÓSTICO</a>
                </div>
            </header>

            {/* 2. INTRODUCCIÓN */}
            <section className="ae-section-intro">
                <div className="ae-container">
                    <div className="ae-intro-grid">
                        <div className="ae-intro-text">
                            <h2 className="ae-section-title" style={{ textAlign: 'left', marginBottom: '30px' }}>¿Qué es la Asesoría Empresarial?</h2>
                            <p>
                                Es un servicio especializado diseñado para potenciar la toma de decisiones, optimizar la eficiencia operativa y garantizar la rentabilidad de su organización.
                            </p>
                            <p>
                                En Trumontt Group, no solo diagnosticamos problemas, sino que diseñamos e implementamos soluciones estratégicas que permiten a gerentes y empresarios retomar el control y enfocar sus esfuerzos en el crecimiento sostenible.
                            </p>
                        </div>
                        <div className="ae-intro-image">
                            <img src={heroImage} alt="Asesoría Empresarial Trumontt" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. ÁREAS DE ASESORÍA */}
            <section className="ae-section-areas">
                <div className="ae-container">
                    <h2 className="ae-section-title">Áreas de Intervención</h2>
                    <div className="ae-areas-grid">
                        <div className="ae-area-card">
                            <div className="ae-area-icon">🎯</div>
                            <h3>Planificación Estratégica</h3>
                            <p>Definición de visión, misión y hoja de ruta para el mediano y largo plazo.</p>
                        </div>
                        <div className="ae-area-card">
                            <div className="ae-area-icon">💼</div>
                            <h3>Finanzas y Control</h3>
                            <p>Análisis de rentabilidad, flujo de caja y estructuración de costos.</p>
                        </div>
                        <div className="ae-area-card">
                            <div className="ae-area-icon">⚙️</div>
                            <h3>Optimización de Procesos</h3>
                            <p>Mejora de la eficiencia operativa y reducción de desperdicios.</p>
                        </div>
                        <div className="ae-area-card">
                            <div className="ae-area-icon">📋</div>
                            <h3>Gestión de Proyectos (PMO)</h3>
                            <p>Estandarización y control en la ejecución de portafolios de proyectos.</p>
                        </div>
                        <div className="ae-area-card">
                            <div className="ae-area-icon">👥</div>
                            <h3>Organización y Talento</h3>
                            <p>Estructura organizacional, perfiles de puesto y cultura corporativa.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. METODOLOGÍA */}
            <section className="ae-section-methodology">
                <div className="ae-container">
                    <h2 className="ae-section-title light">Nuestra Metodología</h2>
                    <div className="ae-methodology-steps">
                        <div className="ae-step-item">
                            <div className="ae-step-number">1</div>
                            <h3>Diagnóstico</h3>
                            <p>Análisis del estado actual del negocio, procesos y finanzas.</p>
                        </div>
                        <div className="ae-step-item">
                            <div className="ae-step-number">2</div>
                            <h3>Objetivos</h3>
                            <p>Definimos metas claras y medibles alineadas al negocio.</p>
                        </div>
                        <div className="ae-step-item">
                            <div className="ae-step-number">3</div>
                            <h3>Plan</h3>
                            <p>Diseñamos una estrategia accionable con responsables y plazos.</p>
                        </div>
                        <div className="ae-step-item">
                            <div className="ae-step-number">4</div>
                            <h3>Implementación</h3>
                            <p>Ejecutamos el plan junto al equipo de la empresa.</p>
                        </div>
                        <div className="ae-step-item">
                            <div className="ae-step-number">5</div>
                            <h3>Mejora continua</h3>
                            <p>Seguimiento, ajustes y optimización constante.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. SERVICIOS INCLUIDOS */}
            <section className="ae-section-services">
                <div className="ae-container">
                    <h2 className="ae-section-title">Servicios Incluidos</h2>
                    <div className="ae-services-list">
                        <div className="ae-service-item">
                            <div className="ae-check-icon">✓</div>
                            <span className="ae-service-text">Planificación estratégica y operativa</span>
                        </div>
                        <div className="ae-service-item">
                            <div className="ae-check-icon">✓</div>
                            <span className="ae-service-text">Optimización de procesos internos</span>
                        </div>
                        <div className="ae-service-item">
                            <div className="ae-check-icon">✓</div>
                            <span className="ae-service-text">Gestión de proyectos (PMO)</span>
                        </div>
                        <div className="ae-service-item">
                            <div className="ae-check-icon">✓</div>
                            <span className="ae-service-text">Consultoría financiera y administrativa</span>
                        </div>
                        <div className="ae-service-item">
                            <div className="ae-check-icon">✓</div>
                            <span className="ae-service-text">Análisis de indicadores (KPIs)</span>
                        </div>
                        <div className="ae-service-item">
                            <div className="ae-check-icon">✓</div>
                            <span className="ae-service-text">Acompañamiento gerencial</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. BENEFICIOS */}
            <section className="ae-section-benefits">
                <div className="ae-container">
                    <h2 className="ae-section-title light">Beneficios para tu Empresa</h2>
                    <div className="ae-benefits-grid">
                        <div className="ae-benefit-box">
                            <div className="ae-benefit-icon">💡</div>
                            <h3>Mejores Decisiones</h3>
                            <p>Basadas en datos y análisis real.</p>
                        </div>
                        <div className="ae-benefit-box">
                            <div className="ae-benefit-icon">📉</div>
                            <h3>Reducción de Costos</h3>
                            <p>Eliminación de ineficiencias.</p>
                        </div>
                        <div className="ae-benefit-box">
                            <div className="ae-benefit-icon">📈</div>
                            <h3>Mayor Rentabilidad</h3>
                            <p>Enfoque en actividades de valor.</p>
                        </div>
                        <div className="ae-benefit-box">
                            <div className="ae-benefit-icon">👁️</div>
                            <h3>Control Total</h3>
                            <p>Tableros de control y KPIs claros.</p>
                        </div>
                        <div className="ae-benefit-box">
                            <div className="ae-benefit-icon">🌟</div>
                            <h3>Crecimiento</h3>
                            <p>Bases sólidas para escalar.</p>
                        </div>
                    </div>
                </div>
            </section>



            {/* 8. CTA FINAL */}
            <section className="ae-section-cta" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="ae-cta-overlay"></div>
                <div className="ae-cta-content">
                    <h2>Lleva tu empresa al siguiente nivel</h2>
                    <a href="/#contactanos" className="ae-btn-cta">SOLICITAR ASESORÍA</a>
                </div>
            </section>

        </div>
    );
};

export default AsesoriaEmpresarial;
