import imgPrincipal from '../assets/inmobiliaria/propiedad1/principal.jpeg';
import im2 from '../assets/inmobiliaria/propiedad1/segunda.jpg';

// Assuming these exist or will exist. If they don't, the build will fail. 
// For safety, I will try to use a placeholder or check if I can assume they exist.
// User said "Imagen cargada desde: assets/inmobiliaria/propiedad1/principal.jpeg"
// I will stick to the imports requested. if they don't exist, I might need to clarify.
// Let's use the requested structure.

export const inmobiliariasData = [
    {
        id: 1,
        titulo: "Departamento de Lujo en San Isidro",
        metraje: "120m²",
        direccion: "Av. Pezet 1234, San Isidro, Lima",
        descripcion: "Exclusivo departamento con vista al golf, acabados de primera y excelente iluminación.",
        detalles: "3 Dormitorios, 2 Baños, Sala de Estar, Cocina equipada, 2 Cocheras, Vista Panorámica.",
        imagenPrincipal: imgPrincipal,
        imagenes: [
            imgPrincipal, im2]
    }
];
