import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import HeroCarousel from './components/HeroCarousel/HeroCarousel'
import AboutUs from './components/AboutUs/AboutUs'
import Services from './components/Services/Services'
import ValuesSection from './components/ValuesSection/ValuesSection'
import ClientsCarousel from './components/ClientsCarousel/ClientsCarousel'
import FeaturedProjects from './components/FeaturedProjects/FeaturedProjects'
import ContactUs from './components/ContactUs/ContactUs'
import Footer from './components/Footer/Footer'
import ProjectDetail from './pages/ProjectDetail'
// Service Pages
import GestionInmobiliaria from './pages/services/GestionInmobiliaria';
import MantenimientoEdificios from './pages/services/MantenimientoEdificios';
import Construccion from './pages/services/Construccion';
import SistemasElectricos from './pages/services/SistemasElectricos';
import SeguridadIndustrial from './pages/services/SeguridadIndustrial';
import DisenoInteriores from './pages/services/DisenoInteriores';
import AsesoriaEmpresarial from './pages/services/AsesoriaEmpresarial';
import BusinessIntelligence from './pages/services/BusinessIntelligence';
import DesarrolloPlataforma from './pages/services/DesarrolloPlataforma';

import Careers from './pages/Careers';
import Projects from './pages/Projects'
import Inmobiliarias from './pages/Inmobiliarias';
import ScrollToAnchor from './components/ScrollToAnchor'
import './App.css'

// Internal Home Component to keep App clean
const Home = () => (
  <>
    <HeroCarousel />
    <div className="section-separator"></div>
    <AboutUs />
    <Services />
    <ValuesSection />
    <ClientsCarousel />
    <FeaturedProjects />
    <ContactUs />
  </>
);

function App() {
  return (
    <Router>
      <ScrollToAnchor />
      <div className="app-wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Individual Service Routes */}
          <Route path="/servicios/gestion-inmobiliaria" element={<GestionInmobiliaria />} />
          <Route path="/servicios/mantenimiento-edificios" element={<MantenimientoEdificios />} />
          <Route path="/servicios/construccion" element={<Construccion />} />
          <Route path="/servicios/sistemas-electricos" element={<SistemasElectricos />} />
          <Route path="/servicios/seguridad-industrial" element={<SeguridadIndustrial />} />
          <Route path="/servicios/diseno-interiores" element={<DisenoInteriores />} />
          <Route path="/servicios/asesoria-empresarial" element={<AsesoriaEmpresarial />} />
          <Route path="/servicios/business-intelligence" element={<BusinessIntelligence />} />
          <Route path="/servicios/desarrollo-plataforma" element={<DesarrolloPlataforma />} />

          <Route path="/careers" element={<Careers />} /> {/* Added Careers route */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/inmobiliarias" element={<Inmobiliarias />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          {/* Fallback route could go here */}
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App

