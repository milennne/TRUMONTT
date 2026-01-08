# TRUMONTT - Web Corporativa

## 📄 Descripción General

**Trumontt Group** es una página web corporativa diseñada para presentar de manera clara y profesional la identidad, servicios y proyectos de la empresa. Este proyecto ha sido desarrollado desde cero, enfocado en la escalabilidad, el rendimiento y una experiencia de usuario optimizada para clientes corporativos.

El objetivo principal de la plataforma es consolidar la presencia digital de la empresa, destacando su experiencia en construcción, consultoría y gestión inmobiliaria, además de facilitar el contacto directo con potenciales clientes.

---

## 🛠 Tecnologías Utilizadas

Este proyecto está construido con un stack tecnológico moderno, asegurando rapidez y facilidad de mantenimiento:

- **React**: Biblioteca principal para la construcción de interfaces de usuario interactivas y modulares.
- **Vite**: Entorno de desarrollo de última generación que garantiza tiempos de carga rápidos y una experiencia de desarrollo fluida.
- **CSS3 (Modular)**: Estilos personalizados y organizados por componentes para mantener la consistencia visual y la mantenibilidad del código.
- **JavaScript (ES6+)**: Lógica moderna para la funcionalidad del cliente.

---

## 📂 Estructura del Proyecto

El proyecto sigue una arquitectura basada en **componentes**, lo que permite una fácil escalabilidad y reutilización de código.

```
src/
├── assets/          # Imágenes, iconos y recursos estáticos
├── components/      # Componentes reutilizables de la aplicación
│   ├── AboutUs/     # Sección 'Nosotros' (Misión, Visión, Descripción)
│   ├── Header/      # Barra de navegación y cabecera principal
│   ├── HeroCarousel/# Carrusel de imágenes principal
│   ├── Services/    # Grid de servicios ofrecidos
│   └── ...
├── App.css          # Estilos globales y de layout principal
├── App.jsx          # Componente raíz que orquesta la aplicación
└── main.jsx         # Punto de entrada de la aplicación React
```

Cada componente dentro de `src/components/` cuenta con su propia carpeta que incluye tanto la lógica (`.jsx`) como sus estilos específicos (`.css`), promoviendo el aislamiento y el orden.

---

## 🚀 Instalación y Ejecución

Para ejecutar este proyecto en tu entorno local, sigue estos pasos:

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/milennne/TRUMONTT.git
   cd trumontt
   ```

2. **Instalar dependencias**:
   Asegúrate de tener Node.js instalado.
   ```bash
   npm install
   ```

3. **Ejecutar el servidor de desarrollo**:
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**:
   Por defecto, el proyecto estará disponible en `http://localhost:5173/`.

---

## 🚧 Estado del Proyecto

Actualmente, el proyecto se encuentra en **etapa de desarrollo**. Se han implementado las secciones principales (Header, Carrusel, Nosotros, Servicios) y se continúa trabajando en la integración de nuevas funcionalidades y secciones como últimos proyectos y cantáctanos.

---

## ✅ Buenas Prácticas Aplicadas

- **Componentización**: División de la UI en piezas pequeñas, reutilizables y testables.
- **Git Flow**: Uso de ramas y commits semánticos (e.g., `feat:`, `fix:`, `refactor:`) para un historial de cambios limpio y profesional.
- **Diseño Responsivo**: Adaptabilidad a dispositivos móviles y de escritorio sin uso excesivo de media queries complejos.
- **Clean Code**: Nomenclatura clara de variables y funciones, y código comentado donde es necesario para facilitar la colaboración.

---

## 👩‍💻 Autor

**Milene Fuentes**  
*Practicante de Diseño y Desarrollo de Software*
