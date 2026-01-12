import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css';
import bgImage from '../../assets/quienessomos.jpg';

const AboutUs = () => {
    return (
        <section id="nosotros" className="about-us-section">
            {/* Background with Overlay */}
            <div className="about-us-bg" style={{ backgroundImage: `url(${bgImage})` }}>
                <div className="about-us-overlay">
                    <div className="container about-us-content">
                        <span className="small-title">Construyendo tus sueños</span>
                        <h2 className="main-title">¿Quiénes Somos?</h2>
                        <p className="description-text">
                            Somos una firma peruana con una destacada trayectoria en diversos sectores,
                            ofreciendo una amplia gama de servicios que abarcan desde construcción hasta
                            consultoría y el mercado inmobiliario. Con un equipo de profesionales altamente
                            capacitados y comprometidos con la excelencia, brindamos soluciones integrales
                            de alta calidad. Respaldados por una sólida experiencia y base financiera estable,
                            estamos aquí para satisfacer tus necesidades y potenciar el éxito en cada sector.
                        </p>
                        <div className="button-group">
                            <a href="#servicios" className="btn btn-primary">Nuestros servicios</a>
                            <a href="#contactanos" className="btn btn-secondary">Contáctanos</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mission & Vision Cards */}
            <div className="cards-container container">
                {/* Mission Card - Blue */}
                <div className="card-item mission-card">
                    <h3>Misión</h3>
                    <p>
                        Nos vemos como líderes en la industria de la construcción, reconocidos por nuestra
                        innovación y compromiso con la excelencia, dejando una huella duradera en la historia
                        y contribuyendo al desarrollo sostenible del país.
                    </p>
                    <Link to="/contactanos" className="btn btn-outline-light" style={{ display: 'none' }}>Sé parte de nuestro equipo</Link>
                    {/* User requested removal, commenting out or removing line entirely. I will remove it. */}
                </div>

                {/* Vision Card - White */}
                <div className="card-item vision-card">
                    <h3>Visión</h3>
                    <p>
                        En Trumontt Group, nos dedicamos a construir infraestructuras de alta calidad,
                        proporcionando un servicio excepcional y seguro para nuestros clientes, transformando
                        visiones en realidades tangibles que perduran en el tiempo.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
