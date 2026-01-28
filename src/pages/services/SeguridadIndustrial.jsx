import React from 'react';
import ServiceLayout from '../../components/Services/ServiceLayout';
import { servicesData } from '../../data/servicesData';

const SeguridadIndustrial = () => {
    const service = servicesData.find(s => s.slug === 'seguridad-industrial');

    if (!service) return <div>Servicio no encontrado</div>;

    return <ServiceLayout {...service} />;
};

export default SeguridadIndustrial;
