import React from 'react';
import ServiceLayout from '../../components/Services/ServiceLayout';
import { servicesData } from '../../data/servicesData';

const BusinessIntelligence = () => {
    const service = servicesData.find(s => s.slug === 'business-intelligence');

    if (!service) return <div>Servicio no encontrado</div>;

    return <ServiceLayout {...service} />;
};

export default BusinessIntelligence;
