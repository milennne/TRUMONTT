import React from 'react';
import ServiceLayout from '../../components/Services/ServiceLayout';
import { servicesData } from '../../data/servicesData';

const AsesoriaEmpresarial = () => {
    const service = servicesData.find(s => s.slug === 'asesoria-empresarial');

    if (!service) return <div>Servicio no encontrado</div>;

    return <ServiceLayout {...service} />;
};

export default AsesoriaEmpresarial;
