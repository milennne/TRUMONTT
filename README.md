# TRUMONTT - Web Corporativa

## 📄 Descripción General

**Trumontt Group** es una página web corporativa de alto rendimiento diseñada para presentar la identidad, servicios y proyectos de la empresa líder en construcción y gestión inmobiliaria.

El proyecto ha sido completado con un enfoque en:
*   **Diseño Corporativo**: Estética profesional, limpia y alineada con la identidad de marca (Azul/Gris).
*   **Experiencia de Usuario (UX)**: Navegación fluida, transiciones suaves y estructura lógica.
*   **SEO Técnico**: Optimización completa para motores de búsqueda (Etiquetas semánticas, Meta tags, H1, Alt attributes, Enlaces tel/mailto).
*   **Responsive Design**: Adaptabilidad total desde móviles hasta pantallas de escritorio.

---

## 🛠 Tecnologías Utilizadas

- **React 18**: Construcción de interfaz basada en componentes funcionales y Hooks.
- **Vite**: Build tool rápido para desarrollo y producción.
- **CSS3 Puro (Módulos)**: Estilización personalizada sin dependencias externas pesadas.
- **HTML5 Semántico**: Estructura optimizada para accesibilidad y SEO.

---

## 📂 Estructura y Secciones Completadas

La aplicación se ha modularizado completamente en `src/components/`:

1.  **Header**: Navegación responsiva con menú dropdown y diseño "sticky".
2.  **Hero Carousel**: Slider automático con imágenes de alto impacto y copy persuasivo.
3.  **About Us**: Sección de identidad con misión, visión y estilos visuales nítidos.
4.  **Services**: Grid de 9 servicios clave con iconografía y diseño interactivo.
5.  **Values & Team**: Layout dividido resaltando el equipo humano y valores corporativos.
6.  **Clients Carousel**: Slider infinito con efecto 3D para mostrar partners y clientes.
7.  **Featured Projects**: Carrusel personalizado de proyectos destacados con overlay interactivo y lógica sin espacios vacíos.
8.  **Páginas de Detalle (Premium)**:
    *   **Servicios (`/services`)**: Página dedicada con cabecera Hero, navegación por hash (`#slug`) y lista detallada con viñetas de inclusiones.
    *   **Proyectos (`/projects`)**: Listado completo con diseño alternado y cabecera inmersiva.
    *   **Navegación**: Enrutamiento SPA con `react-router-dom` y scroll automático inteligente (`ScrollToAnchor`).
9.  **Contact Us**: Sección funcional con integración de Google Maps (iframe) y formulario de contacto validado.
10. **Footer**: Pie de página de 3 columnas (Marca, Contacto Directo, Redes Sociales) con sección "Powered by" integrada y enlaces funcionales.

---

## 🚀 Características Destacadas

*   **Navegación Inteligente**: Menús desplegables y enlaces de anclaje suave (`React Router + ScrollToAnchor`).
*   **Interacción Premium**: Efectos hover, transiciones suaves y validaciones de formularios en tiempo real.
*   **Diseño de Alto Impacto**:
    *   Cabeceras tipo "Hero" con superposiciones de degradado y tipografía corporativa.
    *   Diseño en Zig-Zag y Grid responsivo para listados de proyectos y servicios.
    *   Footer profesional con sección "Powered by" estilizada (Flexbox horizontal).
*   **SEO Técnico Avanzado (ESO Compliant)**:
    *   **Títulos Dinámicos**: El título de la pestaña cambia según la página (`document.title`).
    *   **Jerarquía Inteligente**: Logo es `H1` en Home y `div` en internas para evitar duplicidad de H1.
    *   **Metadatos**: Open Graph para redes sociales y descripciones completas.
    *   **Accesibilidad**: Atributos `alt` dinámicos en componentes reutilizables.
    *   Enlaces de contacto directo (`tel:`, `mailto:`, `wa.me`).
*   **Performance**: Carga diferida de recursos y optimización de assets.

---

## 👩‍💻 Instalación

1.  **Clonar el repositorio**:
    ```bash
    git clone https://github.com/milennne/TRUMONTT.git
    cd trumontt
    ```

2.  **Instalar dependencias**:
    ```bash
    npm install
    ```

3.  **Desarrollo**:
    ```bash
    npm run dev
    ```

---

## 👩‍💻 Autor

**Milene Fuentes**
*Practicante de Diseño y Desarrollo de Software*
