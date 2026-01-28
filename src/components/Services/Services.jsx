import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

// Import images (paying attention to extensions found in assets)
import img1 from '../../assets/serviceinicio1.jpg';
import img2 from '../../assets/serviceinicio2.jpeg';
import img3 from '../../assets/serviceinicio3.jpg';
import img4 from '../../assets/serviceinicio4.png';
import img5 from '../../assets/serviceinicio5.jpg';
import img6 from '../../assets/serviceinicio6.jpg';
import img7 from '../../assets/serviceinicio7.jpg';
import img8 from '../../assets/serviceinicio8.png';
import img9 from '../../assets/serviceinicio9.jpg';

const servicesData = [
    {
        img: img1,
        title: 'Gestión Inmobiliaria',
        desc: 'Gestión y optimización de bienes inmuebles para maximizar su valor y funcionalidad.'
    },
    {
        img: img2,
        title: 'Mantenimiento de edificios',
        desc: 'Conservamos y mejoramos el estado de instalaciones para prolongar su vida útil.'
    },
    {
        img: img3,
        title: 'Construcción',
        desc: 'Desarrollamos proyectos de construcción de alta calidad, adaptados a sus necesidades.'
    },
    {
        img: img4,
        title: 'Sistemas Eléctricos',
        desc: 'Instalamos y mantenemos sistemas eléctricos seguros y eficientes.'
    },
    {
        img: img5,
        title: 'Seguridad Industrial',
        desc: 'Proveemos soluciones para proteger y asegurar sus instalaciones.'
    },
    {
        img: img6,
        title: 'Diseño de interiores',
        desc: 'Creamos espacios funcionales y estéticamente atractivos, adaptados a su estilo.'
    },
    {
        img: img7,
        title: 'Asesoría empresarial',
        desc: 'Apoyamos el crecimiento de su negocio con estrategias efectivas y personalizadas.'
    },
    {
        img: img8,
        title: 'Business Intelligence',
        desc: 'Convertimos datos en información valiosa para decisiones estratégicas.'
    },
    {
        img: img9,
        title: 'Desarrollo de plataforma',
        desc: 'Creamos soluciones digitales innovadoras para optimizar procesos y mejorar la experiencia del usuario.'
    }
];

const Services = () => {
    return (
        <section id="servicios" className="services-section container">
            <div className="services-header">
                <div className="header-text">
                    <span className="small-title">Construye tus sueños</span>
                    <h2 className="main-title-services">Servicios de calidad</h2>
                </div>
                {/* Button removed as requested */}
            </div>

            <div className="services-grid">
                {servicesData.map((service, index) => {
                    const slugs = [
                        'gestion-inmobiliaria', 'mantenimiento-edificios', 'construccion',
                        'sistemas-electricos', 'seguridad-industrial', 'diseno-interiores',
                        'asesoria-empresarial', 'business-intelligence', 'desarrollo-plataforma'
                    ];

                    return (
                        <Link
                            to={`/servicios/${slugs[index]}`}
                            key={index}
                            className="service-card"
                            style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                            <div className="service-image-wrapper">
                                <img src={service.img} alt={service.title} className="service-img" />
                            </div>
                            <div className="service-info">
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-desc">{service.desc}</p>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
};

export default Services;
