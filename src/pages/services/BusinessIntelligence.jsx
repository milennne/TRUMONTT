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
                            <div className="bi-type-icon">📊</div>
                            <h3>Descriptivo</h3>
                            <p>¿Qué sucedió? Análisis histórico para entender el rendimiento pasado.</p>
                        </div>
                        <div className="bi-type-card">
                            <div className="bi-type-icon">🔍</div>
                            <h3>Diagnóstico</h3>
                            <p>¿Por qué sucedió? Profundización en las causas raíz de los resultados.</p>
                        </div>
                        <div className="bi-type-card">
                            <div className="bi-type-icon">📈</div>
                            <h3>Predictivo</h3>
                            <p>¿Qué sucederá? Proyecciones basadas en tendencias y patrones.</p>
                        </div>
                        <div className="bi-type-card">
                            <div className="bi-type-icon">💡</div>
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
                            <span className="bi-benefit-icon">✅</span> Decisiones basadas en datos
                        </div>
                        <div className="bi-benefit-item">
                            <span className="bi-benefit-icon">🎛️</span> Mayor control del negocio
                        </div>
                        <div className="bi-benefit-item">
                            <span className="bi-benefit-icon">⏱️</span> Ahorro de tiempo en reportes
                        </div>
                        <div className="bi-benefit-item">
                            <span className="bi-benefit-icon">👁️</span> Visibilidad en tiempo real
                        </div>
                        <div className="bi-benefit-item">
                            <span className="bi-benefit-icon">🚀</span> Mejora del rendimiento operativo
                        </div>
                        <div className="bi-benefit-item">
                            <span className="bi-benefit-icon">📂</span> Información centralizada
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
