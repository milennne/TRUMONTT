import React from 'react';
import ServiceLayout from '../../components/Services/ServiceLayout';
import { servicesData } from '../../data/servicesData';

const DesarrolloPlataforma = () => {
    const service = servicesData.find(s => s.slug === 'desarrollo-plataforma');

    if (!service) return <div>Servicio no encontrado</div>;

    return <ServiceLayout {...service} />;
};

export default DesarrolloPlataforma;
