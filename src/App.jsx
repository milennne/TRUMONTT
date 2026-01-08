import { useState } from 'react'
import Header from './components/Header/Header'
import HeroCarousel from './components/HeroCarousel/HeroCarousel'
import AboutUs from './components/AboutUs/AboutUs'
import Services from './components/Services/Services'
import ValuesSection from './components/ValuesSection/ValuesSection'
import ClientsCarousel from './components/ClientsCarousel/ClientsCarousel'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <HeroCarousel />
      <div className="section-separator"></div>
      <AboutUs />
      <Services />
      <ValuesSection />
      <ClientsCarousel />
      <main style={{ minHeight: '80vh', padding: '20px' }}>
        <div className="container">
          {/* Main content can follow here */}
        </div>
      </main>
    </>
  )
}

export default App
