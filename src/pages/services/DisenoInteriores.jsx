import React from 'react';
import ServiceLayout from '../../components/Services/ServiceLayout';
import { servicesData } from '../../data/servicesData';

const DisenoInteriores = () => {
    const service = servicesData.find(s => s.slug === 'diseno-interiores');

    if (!service) return <div>Servicio no encontrado</div>;

    return <ServiceLayout {...service} />;
};

export default DisenoInteriores;
