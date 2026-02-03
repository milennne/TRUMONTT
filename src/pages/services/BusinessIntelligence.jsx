import React, { useEffect } from 'react';
import './BusinessIntelligence.css';
import heroImage from '../../assets/servicios/servicio8.jpg';
import im1 from '../../assets/servicios/bussines.jpg';

const BusinessIntelligence = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Trumontt Group | Business Intelligence';
    }, []);

    return (
        <div className="bi-page">
            {/* 1. HERO PRINCIPAL */}
            <header className="bi-hero" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="bi-hero-overlay"></div>
                <div className="bi-hero-content">
                    <span className="bi-hero-subtitle">Inteligencia de Negocios</span>
                    <h1 className="bi-hero-title">Business Intelligence</h1>
                    <a href="/#contactanos" className="bi-btn-cta">SOLICITAR DIAGNÓSTICO DE DATOS</a>
                </div>
            </header>

            {/* 2. ¿QUÉ ES BI? */}
            <section className="bi-section-intro">
                <div className="bi-container">
                    <div className="bi-intro-grid">
                        <div className="bi-intro-text">
                            <h2>Decisiones Inteligentes Basadas en Datos</h2>
                            <p>
                                En el entorno competitivo actual, la intuición ya no es suficiente. El Business Intelligence (BI) transforma los datos brutos de su empresa en información procesable y significativa.
                            </p>
                            <p>
                                Ayudamos a su organización a recopilar, analizar y visualizar métricas clave (KPIs) para identificar tendencias, optimizar operaciones y anticipar oportunidades de mercado con total precisión.
                            </p>
                        </div>
                        <div className="bi-intro-image">
                            <img src={im1} alt="Análisis de Datos Corporativos" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. CÓMO TRABAJAMOS (METODOLOGÍA) */}
            <section className="bi-section-methodology">
                <div className="bi-container">
                    <h2 className="bi-section-title">Nuestro Proceso de Trabajo</h2>
                    <div className="bi-methodology-steps">
                        <div className="bi-step-card">
                            <div className="bi-step-number">01</div>
                            <h3>Evaluación de Fuentes</h3>
                            <p>Identificamos y conectamos todas las fuentes de datos (ERPs, CRMs, Excel) de su empresa.</p>
                        </div>
                        <div className="bi-step-card">
                            <div className="bi-step-number">02</div>
                            <h3>Diseño del Modelo</h3>
                            <p>Estructuramos y limpiamos la información para garantizar análisis confiables y rápidos.</p>
                        </div>
                        <div className="bi-step-card">
                            <div className="bi-step-number">03</div>
                            <h3>Desarrollo de Dashboards</h3>
                            <p>Creamos tableros visuales e interactivos adaptados a las necesidades de cada área.</p>
                        </div>
                        <div className="bi-step-card">
                            <div className="bi-step-number">04</div>
                            <h3>Automatización</h3>
                            <p>Configuramos actualizaciones automáticas para que siempre tenga datos en tiempo real.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. SERVICIOS INCLUIDOS */}
            <section className="bi-section-services">
                <div className="bi-container">
                    <h2 className="bi-section-title light">Servicios Incluidos</h2>
                    <div className="bi-services-list">
                        <div className="bi-service-item">
                            <div className="bi-check-icon">✓</div>
                            <span className="bi-service-text">Desarrollo de dashboards interactivos (Power BI)</span>
                        </div>
                        <div className="bi-service-item">
                            <div className="bi-check-icon">✓</div>
                            <span className="bi-service-text">Integración de múltiples fuentes de datos</span>
                        </div>
                        <div className="bi-service-item">
                            <div className="bi-check-icon">✓</div>
                            <span className="bi-service-text">Análisis de datos operativos y comerciales</span>
                        </div>
                        <div className="bi-service-item">
                            <div className="bi-check-icon">✓</div>
                            <span className="bi-service-text">Automatización de reportes gerenciales</span>
                        </div>
                        <div className="bi-service-item">
                            <div className="bi-check-icon">✓</div>
                            <span className="bi-service-text">Visualización de KPIs en tiempo real</span>
                        </div>
                        <div className="bi-service-item">
                            <div className="bi-check-icon">✓</div>
                            <span className="bi-service-text">Soporte y mejora continua</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. TIPOS DE ANÁLISIS */}
            <section className="bi-section-types">
                <div className="bi-container">
                    <h2 className="bi-section-title">Tipos de Análisis</h2>
                    <div className="bi-types-grid">
                        <div className="bi-type-card">
                            <div className="bi-type-icon">
                                {/* Descriptivo - Bar Chart */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
                                </svg>
                            </div>
                            <h3>Descriptivo</h3>
                            <p>¿Qué sucedió? Análisis histórico para entender el rendimiento pasado.</p>
                        </div>
                        <div className="bi-type-card">
                            <div className="bi-type-icon">
                                {/* Diagnóstico - Magnifying Glass */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                            </div>
                            <h3>Diagnóstico</h3>
                            <p>¿Por qué sucedió? Profundización en las causas raíz de los resultados.</p>
                        </div>
                        <div className="bi-type-card">
                            <div className="bi-type-icon">
                                {/* Predictivo - Line Chart */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                                </svg>
                            </div>
                            <h3>Predictivo</h3>
                            <p>¿Qué sucederá? Proyecciones basadas en tendencias y patrones.</p>
                        </div>
                        <div className="bi-type-card">
                            <div className="bi-type-icon">
                                {/* Prescriptivo - Lightbulb */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                                </svg>
                            </div>
                            <h3>Prescriptivo</h3>
                            <p>¿Qué debemos hacer? Recomendaciones para optimizar el futuro.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. BENEFICIOS */}
            <section className="bi-section-benefits">
                <div className="bi-container">
                    <h2 className="bi-section-title light" style={{ marginBottom: '20px' }}>Beneficios para su Empresa</h2>
                    <div className="bi-benefits-grid">
                        <div className="bi-benefit-item">
                            <span className="bi-benefit-icon">
                                {/* Decisiones basadas en datos - Check Badge */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                                </svg>
                            </span>
                            Decisiones basadas en datos
                        </div>
                        <div className="bi-benefit-item">
                            <span className="bi-benefit-icon">
                                {/* Mayor control del negocio - Sliders */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                                </svg>
                            </span>
                            Mayor control del negocio
                        </div>
                        <div className="bi-benefit-item">
                            <span className="bi-benefit-icon">
                                {/* Ahorro de tiempo en reportes - Clock */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            </span>
                            Ahorro de tiempo en reportes
                        </div>
                        <div className="bi-benefit-item">
                            <span className="bi-benefit-icon">
                                {/* Visibilidad en tiempo real - Eye */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                            </span>
                            Visibilidad en tiempo real
                        </div>
                        <div className="bi-benefit-item">
                            <span className="bi-benefit-icon">
                                {/* Mejora del rendimiento operativo - Rocket */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                                </svg>
                            </span>
                            Mejora del rendimiento operativo
                        </div>
                        <div className="bi-benefit-item">
                            <span className="bi-benefit-icon">
                                {/* Información centralizada - Folder */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                                </svg>
                            </span>
                            Información centralizada
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. TECNOLOGÍA */}
            <section className="bi-section-tech">
                <div className="bi-container">
                    <div className="bi-tech-content">
                        <h2 className="bi-section-title">Tecnología y Herramientas</h2>
                        <p style={{ fontSize: '1.1rem', color: '#64748b' }}>
                            Utilizamos las herramientas líderes del mercado para garantizar potencia, seguridad y escalabilidad en sus análisis.
                        </p>
                        <div className="bi-tech-list">
                            <div className="bi-tech-item">Microsoft Power BI</div>
                            <div className="bi-tech-item">SQL Server</div>
                            <div className="bi-tech-item">Excel Avanzado</div>
                            <div className="bi-tech-item">Azure Data</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. CTA FINAL */}
            <section className="bi-section-cta" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="bi-cta-overlay"></div>
                <div className="bi-cta-content">
                    <h2>Transforma tus datos en ventaja competitiva</h2>
                    <a href="/#contactanos" className="bi-btn-cta">SOLICITAR DIAGNÓSTICO DE BI</a>
                </div>
            </section>
        </div>
    );
};

export default BusinessIntelligence;
