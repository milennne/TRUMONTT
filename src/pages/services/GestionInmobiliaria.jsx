import React, { useEffect } from 'react';
import './GestionInmobiliaria.css';

// Importing the base asset as requested
import heroImage from '../../assets/servicios/servicio1.jpeg';

const GestionInmobiliaria = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Gestión Inmobiliaria | Trumontt Group';
    }, []);

    return (
        <div className="gestion-inmobiliaria-page">

            {/* 1. HERO PRINCIPAL */}
            <header className="gi-hero" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="gi-hero-overlay"></div>
                <div className="gi-hero-content">
                    <span className="gi-hero-subtitle">Excelencia en Bienes Raíces</span>
                    <h1 className="gi-hero-title">Gestión Inmobiliaria Profesional</h1>
                    <a href="/#contactanos" className="gi-btn-cta">Solicitar Asesoría</a>
                </div>
            </header>

            {/* 2. SECCIÓN: ¿Qué es? */}
            <section className="gi-section-intro container-narrow">
                <div className="gi-intro-grid">
                    <div className="gi-intro-text">
                        <h2>Maximizamos el Valor de su Propiedad</h2>
                        <p>
                            La gestión inmobiliaria profesional es la clave para asegurar la rentabilidad,
                            seguridad y correcto funcionamiento de sus activos. En Trumontt Group, nos encargamos
                            de cada detalle operativo, legal y comercial.
                        </p>
                        <p>
                            Nuestro enfoque integral permite que los propietarios disfruten de los beneficios
                            de sus inversiones sin las preocupaciones de la administración diaria.
                        </p>
                    </div>
                    <div className="gi-intro-image-wrapper">
                        <img src={heroImage} alt="Gestión de edificios profesional" />
                    </div>
                </div>
            </section>

            {/* 3. SECCIÓN: ¿Cómo lo hacemos? */}
            <section className="gi-section-process">
                <div className="container-narrow">
                    <h2 className="section-title-center">Nuestro Enfoque Operativo</h2>
                    <div className="gi-cards-grid">
                        <div className="gi-card">
                            <div className="gi-card-icon">📋</div>
                            <h3>Auditoría Inicial</h3>
                            <p>Evaluamos el estado actual del inmueble para identificar oportunidades de mejora y riesgos.</p>
                        </div>
                        <div className="gi-card">
                            <div className="gi-card-icon">🏢</div>
                            <h3>Administración Total</h3>
                            <p>Gestión completa de servicios, personal y mantenimiento de áreas comunes.</p>
                        </div>
                        <div className="gi-card">
                            <div className="gi-card-icon">👁️</div>
                            <h3>Supervisión 24/7</h3>
                            <p>Monitoreo constante para asegurar la seguridad y el buen funcionamiento.</p>
                        </div>
                        <div className="gi-card">
                            <div className="gi-card-icon">📊</div>
                            <h3>Reportes Mensuales</h3>
                            <p>Informes financieros y operativos detallados para total transparencia.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. SECCIÓN: Servicios que incluye */}
            <section className="gi-section-includes container-narrow">
                <h2 className="section-title-center">Servicios Incluidos</h2>
                <div className="gi-includes-container">
                    <div className="gi-include-block">
                        <h3>Gestión Administrativa</h3>
                        <ul className="gi-check-list">
                            <li>Control y pago de servicios básicos</li>
                            <li>Gestión de proveedores y contratos</li>
                            <li>Planificación presupuestal anual</li>
                            <li>Selección y supervisión de personal</li>
                        </ul>
                    </div>
                    <div className="gi-include-block">
                        <h3>Mantenimiento Técnico</h3>
                        <ul className="gi-check-list">
                            <li>Plan de mantenimiento preventivo</li>
                            <li>Atención de emergencias 24/7</li>
                            <li>Inspección de sistemas críticos</li>
                            <li>Gestión de obras y reparaciones</li>
                        </ul>
                    </div>
                    <div className="gi-include-block">
                        <h3>Gestión Legal</h3>
                        <ul className="gi-check-list">
                            <li>Asesoría en legislación inmobiliaria</li>
                            <li>Gestión y cobro de arriendos / cuotas</li>
                            <li>Representación ante autoridades</li>
                            <li>Resolución de conflictos vecinales</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* 5. SECCIÓN: Gestión de Cobranza */}
            <section className="gi-section-cobranza">
                <div className="container-narrow gi-cobranza-content">
                    <div className="gi-cobranza-text">
                        <h2>Gestión de Cobranza Efectiva</h2>
                        <p>
                            Garantizamos la liquidez de su operación mediante un sistema de cobranza
                            riguroso y profesional. Reducimos la morosidad y aseguramos el flujo de caja
                            necesario para el mantenimiento impecable del inmueble.
                        </p>
                    </div>
                    <div className="gi-actions-box">
                        <ul>
                            <li><span className="gi-icon-bullet">1</span> Emisión y envío digital de recibos</li>
                            <li><span className="gi-icon-bullet">2</span> Seguimiento proactivo de pagos</li>
                            <li><span className="gi-icon-bullet">3</span> Gestión de convenios de pago</li>
                            <li><span className="gi-icon-bullet">4</span> Reportes de morosidad en tiempo real</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* 6. SECCIÓN: Tecnología */}
            <section className="gi-section-tech container-narrow">
                <div className="gi-tech-grid">
                    <div className="gi-tech-image">
                        {/* Reusing asset as placeholder for tech illustration */}
                        <img src={heroImage} alt="Tecnología Inmobiliaria" className="gi-tech-img" style={{ filter: 'grayscale(20%)' }} />
                    </div>
                    <div className="gi-tech-info">
                        <h2>Tecnología y Transparencia</h2>
                        <p style={{ marginBottom: '20px', lineHeight: '1.6' }}>
                            Implementamos herramientas digitales que permiten a los propietarios y residentes
                            acceder a la información de manera ágil y transparente.
                        </p>
                        <ul className="gi-check-list">
                            <li>Plataforma de gestión en la nube</li>
                            <li>Acceso a estados de cuenta online</li>
                            <li>Sistema de tickets para incidencias</li>
                            <li>Digitalización de documentación</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* 7. SECCIÓN: Metodología */}
            <section className="gi-section-methodology">
                <div className="container-narrow">
                    <h2 className="section-title-center">Nuestra Metodología</h2>
                    <div className="gi-methodology-steps">
                        <div className="gi-step">
                            <div className="gi-step-num">1</div>
                            <h4>Diagnóstico</h4>
                            <p>Análisis profundo del estado físico y financiero.</p>
                        </div>
                        <div className="gi-step">
                            <div className="gi-step-num">2</div>
                            <h4>Planificación</h4>
                            <p>Diseño de estrategia operativa a medida.</p>
                        </div>
                        <div className="gi-step">
                            <div className="gi-step-num">3</div>
                            <h4>Ejecución</h4>
                            <p>Implementación rigurosa de procesos.</p>
                        </div>
                        <div className="gi-step">
                            <div className="gi-step-num">4</div>
                            <h4>Control</h4>
                            <p>Supervisión y reporte continuo de resultados.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. SECCIÓN: Por qué elegirnos */}
            <section className="gi-section-why container-narrow">
                <h2 className="section-title-center">¿Por Qué Trumontt Group?</h2>
                <div className="gi-why-grid">
                    <div className="gi-why-item">
                        <div className="gi-why-icon">🛡️</div>
                        <div>
                            <h3>Seguridad Jurídica</h3>
                            <p>Respaldo legal en todas las operaciones y contratos.</p>
                        </div>
                    </div>
                    <div className="gi-why-item">
                        <div className="gi-why-icon">⚡</div>
                        <div>
                            <h3>Respuesta Rápida</h3>
                            <p>Equipo operativo listo para atender urgencias 24/7.</p>
                        </div>
                    </div>
                    <div className="gi-why-item">
                        <div className="gi-why-icon">💎</div>
                        <div>
                            <h3>Plusvalía</h3>
                            <p>Mantenimiento enfocado en aumentar el valor del inmueble.</p>
                        </div>
                    </div>
                    <div className="gi-why-item">
                        <div className="gi-why-icon">🤝</div>
                        <div>
                            <h3>Transparencia Total</h3>
                            <p>Acceso claro a toda la información financiera.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. CTA FINAL */}
            <section className="gi-section-final">
                <div className="container-narrow">
                    <h2>¿Qué podemos hacer por tu inmueble?</h2>
                    <p style={{ fontSize: '1.2rem', marginBottom: '40px', color: '#ccc' }}>
                        Agenda una visita técnica gratuita y descubre el potencial de tu propiedad.
                    </p>
                    <a href="/#contactanos" className="gi-btn-cta gi-btn-large">Solicitar Asesoría</a>
                </div>
            </section>

        </div>
    );
};

export default GestionInmobiliaria;
