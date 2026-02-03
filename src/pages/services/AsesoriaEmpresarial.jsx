import React, { useEffect } from 'react';
import './AsesoriaEmpresarial.css';
import heroImage from '../../assets/servicios/servicio7.jpeg';
import im1 from '../../assets/servicios/asesoria.jpg';

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
                            <img src={im1} alt="Asesoría Empresarial Trumontt" />
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
                            <div className="ae-area-icon">
                                {/* Planificación Estratégica - Target/Globe */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                                </svg>
                            </div>
                            <h3>Planificación Estratégica</h3>
                            <p>Definición de visión, misión y hoja de ruta para el mediano y largo plazo.</p>
                        </div>
                        <div className="ae-area-card">
                            <div className="ae-area-icon">
                                {/* Finanzas y Control - Chart */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
                                </svg>
                            </div>
                            <h3>Finanzas y Control</h3>
                            <p>Análisis de rentabilidad, flujo de caja y estructuración de costos.</p>
                        </div>
                        <div className="ae-area-card">
                            <div className="ae-area-icon">
                                {/* Optimización de Procesos - Gear */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                                </svg>
                            </div>
                            <h3>Optimización de Procesos</h3>
                            <p>Mejora de la eficiencia operativa y reducción de desperdicios.</p>
                        </div>
                        <div className="ae-area-card">
                            <div className="ae-area-icon">
                                {/* Gestión de Proyectos - Clipboard */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                                </svg>
                            </div>
                            <h3>Gestión de Proyectos (PMO)</h3>
                            <p>Estandarización y control en la ejecución de portafolios de proyectos.</p>
                        </div>
                        <div className="ae-area-card">
                            <div className="ae-area-icon">
                                {/* Organización y Talento - Org Chart */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z" />
                                </svg>
                            </div>
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
                            <div className="ae-benefit-icon">
                                {/* Mejores Decisiones - Lightbulb */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                                </svg>
                            </div>
                            <h3>Mejores Decisiones</h3>
                            <p>Basadas en datos y análisis real.</p>
                        </div>
                        <div className="ae-benefit-box">
                            <div className="ae-benefit-icon">
                                {/* Reducción de Costos - Chart Down */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181" />
                                </svg>
                            </div>
                            <h3>Reducción de Costos</h3>
                            <p>Eliminación de ineficiencias.</p>
                        </div>
                        <div className="ae-benefit-box">
                            <div className="ae-benefit-icon">
                                {/* Mayor Rentabilidad - Chart Up */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                                </svg>
                            </div>
                            <h3>Mayor Rentabilidad</h3>
                            <p>Enfoque en actividades de valor.</p>
                        </div>
                        <div className="ae-benefit-box">
                            <div className="ae-benefit-icon">
                                {/* Control Total - Eye */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                            </div>
                            <h3>Control Total</h3>
                            <p>Tableros de control y KPIs claros.</p>
                        </div>
                        <div className="ae-benefit-box">
                            <div className="ae-benefit-icon">
                                {/* Crecimiento - Badge/Star */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                                </svg>
                            </div>
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
