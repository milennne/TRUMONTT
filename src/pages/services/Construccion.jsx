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
                            <div className="const-type-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                                </svg>
                            </div>
                            <h3>Obras Civiles</h3>
                            <p>Infraestructura, movimiento de tierras y cimentaciones complejas.</p>
                        </div>
                        <div className="const-type-card">
                            <div className="const-type-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                                </svg>
                            </div>
                            <h3>Edificaciones</h3>
                            <p>Construcción vertical para uso residencial, comercial o corporativo.</p>
                        </div>
                        <div className="const-type-card">
                            <div className="const-type-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008Z" />
                                </svg>
                            </div>
                            <h3>Remodelaciones</h3>
                            <p>Transformación y modernización de espacios existentes.</p>
                        </div>
                        <div className="const-type-card">
                            <div className="const-type-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                                </svg>
                            </div>
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
                                <div className="const-license-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                    </svg>
                                </div>
                                <span>Trámites municipales completos</span>
                            </div>
                            <div className="const-license-item">
                                <div className="const-license-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                                    </svg>
                                </div>
                                <span>Licencias de construcción</span>
                            </div>
                            <div className="const-license-item">
                                <div className="const-license-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
                                    </svg>
                                </div>
                                <span>Cumplimiento normativo y técnico</span>
                            </div>
                            <div className="const-license-item">
                                <div className="const-license-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
                                    </svg>
                                </div>
                                <span>Permisos de defensa civil</span>
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
                            <div className="const-benefit-icon-wrapper">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            </div>
                            <h4>Cumplimiento de Plazos</h4>
                            <p>Tu tiempo es dinero. Entregamos en la fecha acordada.</p>
                        </div>
                        <div className="const-benefit-box">
                            <div className="const-benefit-icon-wrapper">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                                </svg>
                            </div>
                            <h4>Seguridad en Obra</h4>
                            <p>Protocolos estrictos de seguridad industrial.</p>
                        </div>
                        <div className="const-benefit-box">
                            <div className="const-benefit-icon-wrapper">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            </div>
                            <h4>Optimización de Costos</h4>
                            <p>Presupuestos eficientes sin sacrificar calidad.</p>
                        </div>
                        <div className="const-benefit-box">
                            <div className="const-benefit-icon-wrapper">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                </svg>
                            </div>
                            <h4>Calidad Constructiva</h4>
                            <p>Materiales y acabados de primera categoría.</p>
                        </div>
                        <div className="const-benefit-box">
                            <div className="const-benefit-icon-wrapper">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                                </svg>
                            </div>
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
