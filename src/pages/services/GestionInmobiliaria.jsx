import React, { useEffect } from 'react';
import './GestionInmobiliaria.css';

// Importing the base asset as requested
import heroImage from '../../assets/servicios/servicio1.jpeg';
import im2 from '../../assets/servicios/gestioninmobiliaria.jpg';
import im3 from '../../assets/servicios/gestion.jpg';


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
                        <img src={im2} alt="Gestión de edificios profesional" />
                    </div>
                </div>
            </section>

            {/* 3. SECCIÓN: ¿Cómo lo hacemos? */}
            <section className="gi-section-process">
                <div className="container-narrow">
                    <h2 className="section-title-center">Nuestro Enfoque Operativo</h2>
                    <div className="gi-cards-grid">
                        <div className="gi-card">
                            <div className="gi-card-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                                </svg>
                            </div>
                            <h3>Auditoría Inicial</h3>
                            <p>Evaluamos el estado actual del inmueble para identificar oportunidades de mejora y riesgos.</p>
                        </div>
                        <div className="gi-card">
                            <div className="gi-card-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                                </svg>
                            </div>
                            <h3>Administración Total</h3>
                            <p>Gestión completa de servicios, personal y mantenimiento de áreas comunes.</p>
                        </div>
                        <div className="gi-card">
                            <div className="gi-card-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                            </div>
                            <h3>Supervisión 24/7</h3>
                            <p>Monitoreo constante para asegurar la seguridad y el buen funcionamiento.</p>
                        </div>
                        <div className="gi-card">
                            <div className="gi-card-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                                </svg>
                            </div>
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
                        <img src={im3} alt="Tecnología Inmobiliaria" className="gi-tech-img" style={{ filter: 'grayscale(20%)' }} />
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
                        <div className="gi-why-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                            </svg>
                        </div>
                        <div>
                            <h3>Seguridad Jurídica</h3>
                            <p>Respaldo legal en todas las operaciones y contratos.</p>
                        </div>
                    </div>
                    <div className="gi-why-item">
                        <div className="gi-why-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </div>
                        <div>
                            <h3>Respuesta Rápida</h3>
                            <p>Equipo operativo listo para atender urgencias 24/7.</p>
                        </div>
                    </div>
                    <div className="gi-why-item">
                        <div className="gi-why-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </div>
                        <div>
                            <h3>Plusvalía</h3>
                            <p>Mantenimiento enfocado en aumentar el valor del inmueble.</p>
                        </div>
                    </div>
                    <div className="gi-why-item">
                        <div className="gi-why-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                            </svg>
                        </div>
                        <div>
                            <h3>Transparencia Total</h3>
                            <p>Acceso claro a toda la información financiera.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. CTA FINAL */}
            {/* 9. CTA FINAL */}
            <section className="gi-section-final" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="gi-cta-overlay"></div>
                <div className="container-narrow gi-cta-content">
                    <h2>¿Qué podemos hacer por tu inmueble?</h2>
                    <p>
                        Agenda una visita técnica gratuita y descubre el potencial de tu propiedad.
                    </p>
                    <a href="/#contactanos" className="gi-btn-cta gi-btn-large">Solicitar Asesoría</a>
                </div>
            </section>

        </div>
    );
};

export default GestionInmobiliaria;
