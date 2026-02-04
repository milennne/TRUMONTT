import React, { useEffect } from 'react';
import './BusinessIntelligence.css';
import heroImage from '../../assets/servicios/servicio8.jpg';
import im1 from '../../assets/servicios/bussines.jpg';

const BusinessIntelligence = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Trumontt Group | Business Intelligence Estratégico';
    }, []);

    return (
        <div className="bi-page">
            {/* 1. HERO PRINCIPAL */}
            <header className="bi-hero" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="bi-hero-overlay"></div>
                <div className="bi-hero-content">
                    <span className="bi-hero-subtitle">Dirección • Control • Estrategia</span>
                    <h1 className="bi-hero-title">Business Intelligence</h1>
                    <p className="bi-hero-desc">
                        Convertimos datos dispersos en decisiones estratégicas para la alta dirección.
                        Deje de operar a ciegas y recupere el control total de su rentabilidad.
                    </p>
                    <a href="/#contactanos" className="bi-btn-cta">SOLICITAR DIAGNÓSTICO EJECUTIVO</a>
                </div>
            </header>

            {/* 2. ¿QUÉ ES BI? (ENFOQUE CONSULTIVO) */}
            <section className="bi-section-intro">
                <div className="bi-container">
                    <div className="bi-intro-grid">
                        <div className="bi-intro-text">
                            <h2>Más que tecnología, es Madurez Empresarial</h2>
                            <p>
                                En un entorno volátil, la intuición no basta. El verdadero Business Intelligence no se trata de tener "gráficos bonitos", sino de construir una <strong>Estructura de Gobierno de Datos</strong> que elimine la incertidumbre.
                            </p>
                            <p>
                                Implementamos soluciones de analítica avanzada que permiten a la Gerencia General y Directorios visualizar el estado real de la compañía en tiempo real, asegurando que cada decisión operativa esté alineada con los objetivos financieros macro.
                            </p>
                            <p>
                                <strong>El resultado:</strong> Una organización que se anticipa al mercado en lugar de reaccionar a él.
                            </p>
                        </div>
                        <div className="bi-intro-image">
                            <img src={im1} alt="Toma de decisiones corporativas basada en datos" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. NUEVA SECCIÓN: ¿PARA QUIÉN ES BI? */}
            <section className="bi-section-profiles">
                <div className="bi-container">
                    <h2 className="bi-section-title">Impacto por Nivel Directivo</h2>
                    <div className="bi-profiles-grid">
                        <div className="bi-profile-card">
                            <h3>Gerencia General</h3>
                            <p>Visión 360° del negocio. Elimine las "cajas negras" operativas y supervise la rentabilidad real de cada unidad de negocio en tiempo real.</p>
                        </div>
                        <div className="bi-profile-card">
                            <h3>Finanzas</h3>
                            <p>Automatización de estados financieros y control presupuestal. Pase de ser un "generador de reportes" a un analista estratégico de rentabilidad.</p>
                        </div>
                        <div className="bi-profile-card">
                            <h3>Comercial</h3>
                            <p>Seguimiento granular del pipeline de ventas, desempeño de ejecutivos y proyección de cierre (forecast) con precisión matemática.</p>
                        </div>
                        <div className="bi-profile-card">
                            <h3>Operaciones</h3>
                            <p>Detección de cuellos de botella y tiempos muertos. Optimice la cadena de valor basándose en métricas de eficiencia probadas.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. METODOLOGÍA CONSULTIVA (REFINADA) */}
            <section className="bi-section-methodology">
                <div className="bi-container">
                    <h2 className="bi-section-title">Nuestra Metodología de Intervención</h2>
                    <div className="bi-methodology-steps">
                        <div className="bi-step-card">
                            <div className="bi-step-number">01</div>
                            <h3>Entendimiento del Negocio</h3>
                            <p>No hablamos de datos hasta no entender su modelo de rentabilidad y sus objetivos estratégicos anuales.</p>
                        </div>
                        <div className="bi-step-card">
                            <div className="bi-step-number">02</div>
                            <h3>Gobierno de Datos</h3>
                            <p>Establecemos las reglas del juego. Unificamos criterios para que "Venta Neta" signifique lo mismo en todas las áreas.</p>
                        </div>
                        <div className="bi-step-card">
                            <div className="bi-step-number">03</div>
                            <h3>Implementación Ágil</h3>
                            <p>Desarrollamos tableros de control ejecutivos enfocados en responder preguntas de negocio, no en acumular métricas.</p>
                        </div>
                        <div className="bi-step-card">
                            <div className="bi-step-number">04</div>
                            <h3>Adopción y Cultura</h3>
                            <p>Acompañamos a su equipo directivo para asegurar que las decisiones importantes pasen por la plataforma.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. NUEVA SECCIÓN: CASOS DE USO COMUNES */}
            <section className="bi-section-cases">
                <div className="bi-container">
                    <h2 className="bi-section-title">Decisiones que ahora podrá tomar</h2>
                    <div className="bi-cases-list">
                        <div className="bi-case-item">
                            <h4>Control de Margen Bruto</h4>
                            <p>Identifique qué productos o servicios están erosionando su rentabilidad promedio y ajuste precios o costos de inmediato.</p>
                        </div>
                        <div className="bi-case-item">
                            <h4>Gestión de Flujo de Caja</h4>
                            <p>Proyecte con exactitud sus necesidades de liquidez cruzando cuentas por cobrar, pagar y proyecciones de venta.</p>
                        </div>
                        <div className="bi-case-item">
                            <h4>Eficiencia de Inventarios</h4>
                            <p>Detecte sobre-stock inmovilizado y optimice las compras para liberar capital de trabajo.</p>
                        </div>
                        <div className="bi-case-item">
                            <h4>Retención de Clientes</h4>
                            <p>Analice patrones de compra y detecte clientes en riesgo de fuga antes de que dejen de comprar.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. SERVICIOS INCLUIDOS (OPTIMIZADO) */}
            <section className="bi-section-services">
                <div className="bi-container">
                    <h2 className="bi-section-title light">Alcance de la Consultoría</h2>
                    <div className="bi-services-list">
                        <div className="bi-service-item">
                            <div className="bi-check-icon">✓</div>
                            <span className="bi-service-text">Roadmap de Transformación Analítica</span>
                        </div>
                        <div className="bi-service-item">
                            <div className="bi-check-icon">✓</div>
                            <span className="bi-service-text">Unificación de Fuentes de Verdad (Single Source of Truth)</span>
                        </div>
                        <div className="bi-service-item">
                            <div className="bi-check-icon">✓</div>
                            <span className="bi-service-text">Tableros de Control Gerencial (C-Level Dashboards)</span>
                        </div>
                        <div className="bi-service-item">
                            <div className="bi-check-icon">✓</div>
                            <span className="bi-service-text">Automatización de Reporting Financiero / Operativo</span>
                        </div>
                        <div className="bi-service-item">
                            <div className="bi-check-icon">✓</div>
                            <span className="bi-service-text">Gobernanza y Calidad de Datos</span>
                        </div>
                        <div className="bi-service-item">
                            <div className="bi-check-icon">✓</div>
                            <span className="bi-service-text">Capacitación en Lectura Estratégica de Datos</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. BENEFICIOS (REFORZADOS) */}
            <section className="bi-section-benefits">
                <div className="bi-container">
                    <h2 className="bi-section-title light" style={{ marginBottom: '20px' }}>Valor para la Organización</h2>
                    <div className="bi-benefits-grid">
                        <div className="bi-benefit-item">
                            <span className="bi-benefit-icon">
                                {/* Rentabilidad */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                                </svg>
                            </span>
                            Certeza Financiera
                        </div>
                        <div className="bi-benefit-item">
                            <span className="bi-benefit-icon">
                                {/* Control */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                                </svg>
                            </span>
                            Visión Unificada
                        </div>
                        <div className="bi-benefit-item">
                            <span className="bi-benefit-icon">
                                {/* Agilidad */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            </span>
                            Velocidad de Reacción
                        </div>
                        <div className="bi-benefit-item">
                            <span className="bi-benefit-icon">
                                {/* Visibilidad */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                            </span>
                            Transparencia Total
                        </div>
                        <div className="bi-benefit-item">
                            <span className="bi-benefit-icon">
                                {/* Performance */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                                </svg>
                            </span>
                            Excelencia Operativa
                        </div>
                        <div className="bi-benefit-item">
                            <span className="bi-benefit-icon">
                                {/* Information */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                                </svg>
                            </span>
                            Propiedad del Dato
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. TECNOLOGÍA CON ENFOQUE DE SEGURIDAD */}
            <section className="bi-section-tech">
                <div className="bi-container">
                    <div className="bi-tech-content">
                        <h2 className="bi-section-title">Infraestructura Segura y Escalable</h2>
                        <p style={{ fontSize: '1.1rem', color: '#64748b' }}>
                            Garantizamos la integridad y confidencialidad de su información utilizando estándares de seguridad empresarial.
                            Su data, siempre protegida y disponible.
                        </p>
                        <div className="bi-tech-list">
                            <div className="bi-tech-item">Seguridad Enterprise</div>
                            <div className="bi-tech-item">Roles y Permisos</div>
                            <div className="bi-tech-item">Encriptación de Datos</div>
                            <div className="bi-tech-item">Microsoft Power BI</div>
                            <div className="bi-tech-item">Azure Cloud</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. CTA FINAL (CONSULTIVO) */}
            <section className="bi-section-cta" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="bi-cta-overlay"></div>
                <div className="bi-cta-content">
                    <h2>Conozca el estado real de su información</h2>
                    <p style={{ fontSize: '1.2rem', marginBottom: '30px', maxWidth: '700px', margin: '0 auto 30px auto' }}>
                        Lo ayudamos a tomar decisiones con datos, no con suposiciones. Agende una sesión estratégica inicial.
                    </p>
                    <a href="/#contactanos" className="bi-btn-cta">SOLICITAR CONSULTORÍA</a>
                </div>
            </section>
        </div>
    );
};

export default BusinessIntelligence;
