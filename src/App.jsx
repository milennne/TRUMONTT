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
import ServicesPage from './pages/Services';
import Careers from './pages/Careers';
import Projects from './pages/Projects'
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
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/careers" element={<Careers />} /> {/* Added Careers route */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          {/* Fallback route could go here */}
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App

