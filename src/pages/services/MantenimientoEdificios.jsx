import React from 'react';
import ServiceLayout from '../../components/Services/ServiceLayout';
import { servicesData } from '../../data/servicesData';

const MantenimientoEdificios = () => {
    const service = servicesData.find(s => s.slug === 'mantenimiento-edificios');

    if (!service) return <div>Servicio no encontrado</div>;

    return <ServiceLayout {...service} />;
};

export default MantenimientoEdificios;
