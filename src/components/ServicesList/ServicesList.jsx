import React from 'react';
import './ServicesList.css';

const ServicesList = ({ services }) => {
    return (
        <div className="services-list-container">
            {services.map((service) => (
                <div key={service.id} id={service.slug} className="service-full-item">
                    {/* Image Section */}
                    <div className="service-full-image-wrapper">
                        <img
                            src={service.image}
                            alt={service.title}
                            className="service-full-img"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="service-full-content">
                        <div className="service-description-col">
                            <h2 className="service-full-title">{service.title}</h2>
                            <p className="service-full-desc">{service.description}</p>
                        </div>

                        <div className="service-includes-col">
                            <h3 className="includes-title">Lo que incluye:</h3>
                            <ul className="includes-list">
                                {service.includes.map((item, index) => (
                                    <li key={index} className="includes-item">
                                        <span className="bullet-check">✓</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ServicesList;
