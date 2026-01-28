import React from 'react';
import ServiceLayout from '../../components/Services/ServiceLayout';
import { servicesData } from '../../data/servicesData';

const SistemasElectricos = () => {
    const service = servicesData.find(s => s.slug === 'sistemas-electricos');

    if (!service) return <div>Servicio no encontrado</div>;

    return <ServiceLayout {...service} />;
};

export default SistemasElectricos;
