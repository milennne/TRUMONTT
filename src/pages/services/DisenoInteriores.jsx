import React, { useEffect } from 'react';
import './DisenoInteriores.css';
import heroImage from '../../assets/servicios/servicio6.jpg';

const DisenoInteriores = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Diseño de Interiores | Trumontt Group';
    }, []);

    return (
        <div className="interior-page">

            {/* 1. HERO VISUAL */}
            {/* 1. HERO VISUAL */}
            <header className="interior-hero" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="interior-hero-overlay"></div>
                <div className="interior-hero-content">
                    <span className="interior-hero-subtitle">Preservamos el valor de tu inversión</span>
                    <h1 className="interior-hero-title">Diseño de Interiores</h1>
                    <a href="/#contactanos" className="interior-btn-cta">SOLICITAR INFORMACIÓN</a>
                </div>
            </header>

            {/* 2. NUESTRA FILOSOFÍA */}
            <section className="interior-philosophy">
                <div className="interior-container">
                    <div className="interior-philosophy-grid">
                        <div className="interior-philosophy-text">
                            <h2>Nuestra Filosofía</h2>
                            <p>
                                Creemos que el diseño interior va más allá de la decoración; es la creación de atmósferas
                                que potencian el bienestar y la productividad. Fusionamos la estética con la funcionalidad
                                para crear entornos que narran la identidad de quienes los habitan.
                            </p>
                            <p>
                                Cada proyecto es un lienzo único donde la luz, las texturas y el espacio dialogan para
                                generar experiencias sensoriales memorables.
                            </p>
                        </div>
                        <div className="interior-philosophy-image"></div>
                    </div>
                </div>
            </section>

            {/* 3. QUÉ DISEÑAMOS */}
            <section className="interior-designs-section">
                <div className="interior-container">
                    <h2 className="interior-section-title">Espacios que Transformamos</h2>
                    <div className="interior-designs-grid">
                        <div className="interior-design-card">
                            <h3>Oficinas Corporativas</h3>
                            <p>Entornos de trabajo que inspiran colaboración y refuerzan la cultura de marca.</p>
                        </div>
                        <div className="interior-design-card">
                            <h3>Locales Comerciales</h3>
                            <p>Diseño retail estratégico para maximizar la experiencia de compra.</p>
                        </div>
                        <div className="interior-design-card">
                            <h3>Espacios Residenciales</h3>
                            <p>Hogares personalizados que reflejan estilo de vida y confort absoluto.</p>
                        </div>
                        <div className="interior-design-card">
                            <h3>Áreas Comunes</h3>
                            <p>Lobbies, recepciones y zonas de descanso que cautivan desde el primer momento.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. PROCESO CREATIVO */}
            <section className="interior-process-section">
                <div className="interior-container">
                    <h2 className="interior-section-title">Proceso Creativo</h2>
                    <div className="interior-timeline">
                        <div className="interior-process-step">
                            <div className="interior-step-dot">1</div>
                            <h4>Conceptualización</h4>
                            <p>Briefing y definición de estilo.</p>
                        </div>
                        <div className="interior-process-step">
                            <div className="interior-step-dot">2</div>
                            <h4>Diseño 3D</h4>
                            <p>Visualización fotorrealista del espacio.</p>
                        </div>
                        <div className="interior-process-step">
                            <div className="interior-step-dot">3</div>
                            <h4>Materiales</h4>
                            <p>Selección de acabados y texturas.</p>
                        </div>
                        <div className="interior-process-step">
                            <div className="interior-step-dot">4</div>
                            <h4>Ejecución</h4>
                            <p>Supervisión de obra y montaje.</p>
                        </div>
                        <div className="interior-process-step">
                            <div className="interior-step-dot">5</div>
                            <h4>Entrega</h4>
                            <p>El espacio listo para habitar.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. SERVICIOS INCLUIDOS */}
            <section className="interior-services-section">
                <div className="interior-container">
                    <h2 className="interior-section-title">Servicios Integrales</h2>
                    <div className="interior-services-list">
                        <div className="interior-service-item">
                            <div className="interior-service-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                                </svg>
                            </div>
                            <h4>Diseño Conceptual</h4>
                        </div>
                        <div className="interior-service-item">
                            <div className="interior-service-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                                </svg>
                            </div>
                            <h4>Renderizado 3D</h4>
                        </div>
                        <div className="interior-service-item">
                            <div className="interior-service-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
                                </svg>
                            </div>
                            <h4>Mobiliario y Acabados</h4>
                        </div>
                        <div className="interior-service-item">
                            <div className="interior-service-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
                                </svg>
                            </div>
                            <h4>Optimización de Espacios</h4>
                        </div>
                        <div className="interior-service-item">
                            <div className="interior-service-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                                </svg>
                            </div>
                            <h4>Remodelación Integral</h4>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. BENEFICIOS */}
            <section className="interior-benefits-section">
                <div className="interior-container">
                    <h2 className="interior-section-title">¿Por qué invertir en diseño?</h2>
                    <div className="interior-benefits-grid">
                        <div className="interior-benefit-card">
                            <h4>Mayor Productividad</h4>
                            <p>Espacios ergonómicos y bien iluminados mejoran el rendimiento.</p>
                        </div>
                        <div className="interior-benefit-card">
                            <h4>Experiencia del Usuario</h4>
                            <p>Ambientes que invitan a quedarse y disfrutar.</p>
                        </div>
                        <div className="interior-benefit-card">
                            <h4>Optimización</h4>
                            <p>Aprovechamiento inteligente de cada metro cuadrado.</p>
                        </div>
                        <div className="interior-benefit-card">
                            <h4>Identidad Visual</h4>
                            <p>Coherencia entre el espacio físico y la marca.</p>
                        </div>
                        <div className="interior-benefit-card">
                            <h4>Valorización</h4>
                            <p>Incremento del valor comercial o patrimonial del inmueble.</p>
                        </div>
                        <div className="interior-benefit-card">
                            <h4>Bienestar</h4>
                            <p>Entornos saludables que impactan positivamente en el ánimo.</p>
                        </div>
                    </div>
                </div>
            </section>



            {/* 8. CTA FINAL */}
            <section className="interior-cta-section" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="interior-hero-overlay"></div>
                <div className="interior-cta-container">
                    <h2>Transformemos tu espacio</h2>
                    <a href="/#contactanos" className="interior-btn-cta">Solicitar Propuesta de Diseño</a>
                </div>
            </section>

        </div>
    );
};

export default DisenoInteriores;
