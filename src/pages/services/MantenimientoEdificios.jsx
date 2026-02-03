import React, { useEffect } from 'react';
import './MantenimientoEdificios.css';

// Importing the base asset as placeholder
import heroImage from '../../assets/servicios/servicio2.jpg';

const MantenimientoEdificios = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Mantenimiento de Edificios | Trumontt Group';
    }, []);

    return (
        <div className="mantenimiento-page">

            {/* 1. HERO */}
            <header className="me-hero" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="me-hero-overlay"></div>
                <div className="me-hero-content container-narrow">
                    <span className="me-hero-subtitle">Preservamos el valor de tu inversión</span>
                    <h1 className="me-hero-title">Mantenimiento de Edificios</h1>
                    <a href="/#contactanos" className="me-btn-primary">Solicitar Información</a>
                </div>
            </header>

            {/* 2. CÓMO TRABAJAMOS */}
            <section className="me-section-process container-narrow">
                <h2 className="me-section-title">¿Cómo trabajamos?</h2>
                <div className="me-steps-container">
                    <div className="me-step-item">
                        <div className="me-step-text">Evaluación técnica del inmueble</div>
                    </div>
                    <div className="me-step-item">
                        <div className="me-step-text">Diagnóstico de necesidades</div>
                    </div>
                    <div className="me-step-item">
                        <div className="me-step-text">Plan de mantenimiento personalizado</div>
                    </div>
                    <div className="me-step-item">
                        <div className="me-step-text">Ejecución supervisada</div>
                    </div>
                    <div className="me-step-item">
                        <div className="me-step-text">Reporte final de trabajos</div>
                    </div>
                </div>
            </section>

            {/* 3. TIPOS DE MANTENIMIENTO */}
            <section className="me-section-types">
                <div className="container-narrow">
                    <h2 className="me-section-title">Tipos de Mantenimiento</h2>
                    <div className="me-types-grid">
                        <div className="me-type-card">
                            <h3>Mantenimiento Preventivo</h3>
                            <p>Acciones programadas regularmente para evitar fallos, prolongar la vida útil de los equipos y garantizar la seguridad continua de las instalaciones.</p>
                        </div>
                        <div className="me-type-card">
                            <h3>Mantenimiento Correctivo</h3>
                            <p>Intervención inmediata y eficaz para reparar averías o desperfectos inesperados, minimizando el tiempo de inactividad de los servicios.</p>
                        </div>
                        <div className="me-type-card">
                            <h3>Mantenimiento Integral</h3>
                            <p>Solución completa que combina estrategias preventivas, correctivas y predictivas para una gestión total de la infraestructura.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. ÁREAS QUE ATENDEMOS */}
            <section className="me-section-areas">
                <div className="container-narrow">
                    <h2 className="me-section-title light">Áreas que Atendemos</h2>
                    <div className="me-areas-grid">
                        <div className="me-area-item">
                            <div className="me-area-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                                </svg>
                            </div>
                            <div className="me-area-title">Electricidad</div>
                        </div>
                        <div className="me-area-item">
                            <div className="me-area-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                                </svg>
                            </div>
                            <div className="me-area-title">Gasfitería</div>
                        </div>
                        <div className="me-area-item">
                            <div className="me-area-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
                                </svg>
                            </div>
                            <div className="me-area-title">Pintura y acabados</div>
                        </div>
                        <div className="me-area-item">
                            <div className="me-area-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                                </svg>
                            </div>
                            <div className="me-area-title">Áreas comunes</div>
                        </div>
                        <div className="me-area-item">
                            <div className="me-area-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                                </svg>
                            </div>
                            <div className="me-area-title">Fachadas</div>
                        </div>
                        <div className="me-area-item">
                            <div className="me-area-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
                                </svg>
                            </div>
                            <div className="me-area-title">Sistemas contra incendios</div>
                        </div>
                        <div className="me-area-item">
                            <div className="me-area-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                            </div>
                            <div className="me-area-title">Bombas y equipos</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. BENEFICIOS */}
            <section className="me-section-benefits container-narrow">
                <h2 className="me-section-title">Beneficios para su Inmueble</h2>
                <div className="me-benefits-list">
                    <div className="me-benefit-item">
                        <div className="me-benefit-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181" />
                            </svg>
                        </div>
                        <span className="me-benefit-text">Reducción de costos operativos</span>
                    </div>
                    <div className="me-benefit-item">
                        <div className="me-benefit-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                            </svg>
                        </div>
                        <span className="me-benefit-text">Mayor vida útil de las instalaciones</span>
                    </div>
                    <div className="me-benefit-item">
                        <div className="me-benefit-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                            </svg>
                        </div>
                        <span className="me-benefit-text">Seguridad y cumplimiento normativo</span>
                    </div>
                    <div className="me-benefit-item">
                        <div className="me-benefit-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                            </svg>
                        </div>
                        <span className="me-benefit-text">Valorización del inmueble</span>
                    </div>
                    <div className="me-benefit-item">
                        <div className="me-benefit-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                            </svg>
                        </div>
                        <span className="me-benefit-text">Atención rápida y especializada</span>
                    </div>
                </div>
            </section>

            {/* 6. CTA FINAL */}
            <section className="me-section-cta">
                <div className="container-narrow">
                    <h2>¿Listo para optimizar su infraestructura?</h2>
                    <p>Contacte con nuestros expertos para un diagnóstico inicial y descubra cómo podemos mejorar el rendimiento de su edificio.</p>
                    <a href="/#contactanos" className="me-btn-primary">Solicitar Información</a>
                </div>
            </section>

        </div>
    );
};

export default MantenimientoEdificios;
