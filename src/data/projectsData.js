import img1 from '../assets/projects/implementacion-cuadros-de-mando/proyecto1imagen1.jpg';
import img2 from '../assets/projects/implementacion-cuadros-de-mando/proyecto1imagen2.jpg';
import img3 from '../assets/projects/implementacion-cuadros-de-mando/proyecto1imagen3.jpg';
import img4 from '../assets/projects/implementacion-cuadros-de-mando/proyecto1imagen4.jpg';
import img5 from '../assets/projects/implementacion-cuadros-de-mando/proyecto1imagen5.jpg';
import img6 from '../assets/projects/implementacion-cuadros-de-mando/proyecto1imagen6.jpg';


export const projects = [
    {
        id: "implementacion-cuadros-de-mando",
        title: "Implementación de cuadros de mandos",
        slug: "implementacion-cuadros-de-mando",
        location: "Lima, Perú",
        year: "2023",
        client: "Navaqui Sac.",
        service: "Análisis de data",
        status: "Terminado",
        description: `El proyecto consistió en desarrollar un conjunto de indicadores visuales en Power BI para facilitar la toma de decisiones a los gerentes. Se diseñaron dashboards interactivos que muestran métricas clave como ventas, gestión de colas y entregas, permitiendo una visualización clara y rápida de la información. Cada indicador fue creado con un enfoque en la usabilidad, asegurando que los gerentes pudieran acceder a datos relevantes en tiempo real. La implementación de estos dashboards optimizó la supervisión del rendimiento, mejoró la eficiencia operativa y potenció la capacidad de respuesta ante cambios en el mercado, fortaleciendo así la estrategia empresarial general.`,
        images: [img1, img2, img3, img4, img5, img6]
    },
    {
        id: "mantenimiento-edificios-1",
        title: "Mantenimiento de edificios",
        slug: "mantenimiento-edificios-1",
        location: "Lima, Perú",
        year: "2024",
        client: "Confidencial",
        service: "Mantenimiento Integral",
        status: "En curso",
        description: "Servicio integral de mantenimiento preventivo y correctivo para edificaciones corporativas. Aseguramos el funcionamiento óptimo de instalaciones eléctricas, sanitarias y sistemas de seguridad, garantizando la operatividad continua y el confort de los usuarios.",
        images: [img1, img2, img3] // Reusing placeholders for now
    },
    {
        id: "mantenimiento-edificios-2",
        title: "Mantenimiento de edificios",
        slug: "mantenimiento-edificios-2",
        location: "Lima, Perú",
        year: "2024",
        client: "Grupo Empresarial",
        service: "Mantenimiento",
        status: "Terminado",
        description: "Gestión y ejecución de mantenimiento de infraestructura para complejo de oficinas. Incluyó renovación de acabados, pintura y optimización de sistemas de iluminación LED para eficiencia energética.",
        images: [img4, img5, img6] // Reusing placeholders for now
    },
    {
        id: "desarrollo-plataforma",
        title: "Desarrollo de plataforma",
        slug: "desarrollo-plataforma",
        location: "Remoto",
        year: "2023",
        client: "Tech Solutions",
        service: "Desarrollo de Software",
        status: "Terminado",
        description: "Desarrollo a medida de una plataforma de gestión interna para optimizar procesos administrativos y operativos. La solución incluye módulos de reportes, gestión de usuarios y dashboard en tiempo real.",
        images: [img1, img3, img5] // Reusing placeholders for now
    }
];
