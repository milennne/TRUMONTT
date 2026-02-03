import React, { useEffect } from 'react';
import './DesarrolloPlataforma.css';
import heroImage from '../../assets/servicios/servicio9.jpeg';

const DesarrolloPlataforma = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Trumontt Group | Desarrollo de Plataforma';
    }, []);

    return (
        <div className="dp-page">
            {/* 1. HERO PRINCIPAL */}
            <header className="dp-hero" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="dp-hero-overlay"></div>
                <div className="dp-hero-content">
                    <span className="dp-hero-subtitle">Innovación Tecnológica</span>
                    <h1 className="dp-hero-title">Desarrollo de Plataforma</h1>
                    <a href="/#contactanos" className="dp-btn-cta">SOLICITAR ASESORÍA TECNOLÓGICA</a>
                </div>
            </header>

            {/* 2. ¿QUÉ HACEMOS? */}
            <section className="dp-section-intro">
                <div className="dp-container">
                    <div className="dp-intro-grid">
                        <div className="dp-intro-text">
                            <h2>Software a Medida para Escalar su Negocio</h2>
                            <p>
                                En un mundo digital, las soluciones genéricas no siempre son suficientes. Diseñamos y desarrollamos plataformas tecnológicas personalizadas que se integran perfectamente con sus operaciones existentes.
                            </p>
                            <p>
                                Nuestro enfoque garantiza escalabilidad, seguridad y una experiencia de usuario (UX) optimizada, permitiéndole automatizar procesos y reducir costos operativos significativamente.
                            </p>
                        </div>
                        <div className="dp-intro-image">
                            <img src={heroImage} alt="Desarrollo de Software a Medida" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. TIPOS DE SOLUCIONES */}
            <section className="dp-section-solutions">
                <div className="dp-container">
                    <h2 className="dp-section-title">Soluciones Digitales</h2>
                    <div className="dp-solutions-grid">
                        <div className="dp-card">
                            <div className="dp-card-icon">💻</div>
                            <h3>Aplicaciones Web</h3>
                            <p>Plataformas robustas accesibles desde cualquier navegador, ideales para gestión empresarial (ERP, CRM).</p>
                        </div>
                        <div className="dp-card">
                            <div className="dp-card-icon">📱</div>
                            <h3>Aplicaciones Móviles</h3>
                            <p>Apps nativas o híbridas (iOS/Android) para conectar con sus clientes o equipo de campo.</p>
                        </div>
                        <div className="dp-card">
                            <div className="dp-card-icon">☁️</div>
                            <h3>Sistemas Cloud</h3>
                            <p>Infraestructura escalable en la nube para garantizar disponibilidad y seguridad de datos.</p>
                        </div>
                        <div className="dp-card">
                            <div className="dp-card-icon">🔗</div>
                            <h3>Integraciones (API)</h3>
                            <p>Conectamos sus sistemas actuales para que fluyan los datos sin fricción.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. PROCESO DE DESARROLLO */}
            <section className="dp-section-process">
                <div className="dp-container">
                    <h2 className="dp-section-title light">Nuestro Flujo de Desarrollo</h2>
                    <div className="dp-process-timeline">
                        <div className="dp-process-step">
                            <div className="dp-step-number">1</div>
                            <h3>Análisis</h3>
                            <p>Levantamiento detallado de requerimientos y objetivos.</p>
                        </div>
                        <div className="dp-process-step">
                            <div className="dp-step-number">2</div>
                            <h3>Diseño UX/UI</h3>
                            <p>Prototipado centrado en la usabilidad del usuario.</p>
                        </div>
                        <div className="dp-process-step">
                            <div className="dp-step-number">3</div>
                            <h3>Desarrollo</h3>
                            <p>Codificación con estándares de calidad y arquitectura limpia.</p>
                        </div>
                        <div className="dp-process-step">
                            <div className="dp-step-number">4</div>
                            <h3>Pruebas</h3>
                            <p>QA exhaustivo para asegurar un producto libre de errores.</p>
                        </div>
                        <div className="dp-process-step">
                            <div className="dp-step-number">5</div>
                            <h3>Despliegue</h3>
                            <p>Puesta en producción y capacitación al equipo.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. SERVICIOS INCLUIDOS */}
            <section className="dp-section-services">
                <div className="dp-container">
                    <h2 className="dp-section-title">Servicios Incluidos</h2>
                    <div className="dp-services-list">
                        <div className="dp-service-item">
                            <div className="dp-check-icon">✓</div>
                            <span className="dp-service-text">Desarrollo de aplicaciones web y móviles</span>
                        </div>
                        <div className="dp-service-item">
                            <div className="dp-check-icon">✓</div>
                            <span className="dp-service-text">Integración de APIs y sistemas legacy</span>
                        </div>
                        <div className="dp-service-item">
                            <div className="dp-check-icon">✓</div>
                            <span className="dp-service-text">Diseño UX/UI centrado en el usuario</span>
                        </div>
                        <div className="dp-service-item">
                            <div className="dp-check-icon">✓</div>
                            <span className="dp-service-text">Mantenimiento y soporte de software</span>
                        </div>
                        <div className="dp-service-item">
                            <div className="dp-check-icon">✓</div>
                            <span className="dp-service-text">Escalabilidad y optimización de rendimiento</span>
                        </div>
                        <div className="dp-service-item">
                            <div className="dp-check-icon">✓</div>
                            <span className="dp-service-text">Seguridad y control de accesos</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. TECNOLOGÍA Y STACK */}
            <section className="dp-section-tech">
                <div className="dp-container">
                    <div className="dp-tech-content">
                        <h2 className="dp-section-title">Tecnologías que Utilizamos</h2>
                        <p style={{ fontSize: '1.1rem', color: '#64748b' }}>
                            Trabajamos con un stack moderno y probado para garantizar que su plataforma sea rápida, segura y fácil de mantener.
                        </p>
                        <div className="dp-tech-grid">
                            <div className="dp-tech-badge">React / Next.js</div>
                            <div className="dp-tech-badge">Node.js / Python</div>
                            <div className="dp-tech-badge">AWS / Azure</div>
                            <div className="dp-tech-badge">PostgreSQL / MongoDB</div>
                            <div className="dp-tech-badge">Docker / Kubernetes</div>
                            <div className="dp-tech-badge">Flutter / React Native</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. BENEFICIOS */}
            <section className="dp-section-benefits">
                <div className="dp-container">
                    <h2 className="dp-section-title light">Beneficios para su Negocio</h2>
                    <div className="dp-benefits-grid">
                        <div className="dp-benefit-item">
                            <span className="dp-benefit-icon">⚙️</span>
                            <h3>Automatización</h3>
                        </div>
                        <div className="dp-benefit-item">
                            <span className="dp-benefit-icon">🛡️</span>
                            <h3>Reducción de Errores</h3>
                        </div>
                        <div className="dp-benefit-item">
                            <span className="dp-benefit-icon">😊</span>
                            <h3>Mejor Experiencia</h3>
                        </div>
                        <div className="dp-benefit-item">
                            <span className="dp-benefit-icon">📈</span>
                            <h3>Escalabilidad Total</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. FINAL CTA */}
            <section className="dp-section-cta" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="dp-cta-overlay"></div>
                <div className="dp-cta-content">
                    <h2>Transforma tu operación con tecnología a medida</h2>
                    <a href="/#contactanos" className="dp-btn-cta">SOLICITAR ASESORÍA TECNOLÓGICA</a>
                </div>
            </section>
        </div>
    );
};

export default DesarrolloPlataforma;
