import React from 'react';
import './ValuesSection.css';
import teamImage from '../../assets/image1.jpg';
import valuesImage from '../../assets/image2.jpg';

const ValuesSection = () => {
    return (
        <section className="values-section-container">
            {/* Left Column: Team / Contact */}
            <div
                className="split-column team-column"
                style={{ backgroundImage: `url(${teamImage})` }}
                role="img"
                aria-label="Equipo de profesionales Trumontt"
            >
                <div className="column-overlay dark-overlay">
                    <div className="content-wrapper team-content">
                        <h2 className="section-title white-text">Únete a Nuestro Equipo</h2>
                        <p className="section-desc white-text">
                            Buscamos profesionales talentosos. <br />
                            Postúlate y crece con nosotros en un entorno dinámico y colaborativo.
                        </p>
                        <a href="#contactanos" className="btn btn-primary contact-btn">CONTÁCTANOS</a>
                    </div>
                </div>
            </div>

            {/* Right Column: Values */}
            <div
                className="split-column values-column"
                style={{ backgroundImage: `url(${valuesImage})` }}
                role="img"
                aria-label="Valores corporativos Trumontt"
            >
                <div className="column-overlay blue-overlay">
                    <div className="content-wrapper values-content">
                        <h2 className="section-title dark-text">Nuestros Valores Organizacionales</h2>
                        <ul className="values-list">
                            <li className="value-item">
                                <span className="icon">
                                    {/* Icon: Innovation (Lightbulb style) */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M9 18h6" /><path d="M10 22h4" /><path d="M12 2a7 7 0 0 0-7 7c0 2.22 1.5 4.16 3.5 5.2V17c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-2.8c2-1.04 3.5-2.98 3.5-5.2a7 7 0 0 0-7-7z" />
                                    </svg>
                                </span>
                                Innovación
                            </li>
                            <li className="value-item">
                                <span className="icon">
                                    {/* Icon: Integrity (Shield/Check) */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                    </svg>
                                </span>
                                Integridad
                            </li>
                            <li className="value-item">
                                <span className="icon">
                                    {/* Icon: Excellence (Star) */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                    </svg>
                                </span>
                                Excelencia
                            </li>
                            <li className="value-item">
                                <span className="icon">
                                    {/* Icon: Teamwork (Users) */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                    </svg>
                                </span>
                                Trabajo en equipo
                            </li>
                            <li className="value-item">
                                <span className="icon">
                                    {/* Icon: Social Responsibility (Globe/Heart-ish) */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                    </svg>
                                </span>
                                Responsabilidad social
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ValuesSection;
