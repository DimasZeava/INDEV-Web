import React from 'react';
import HeroSection from './components/HeroSection';
import ResultCard from './components/Resultcard';
import About from './components/About';
import Services from './components/Services';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <section className="hero-section bg-cover bg-center bg-no-repeat h-screen pt-2" style={{ backgroundImage: "url('./assets/images/background-hero-section.png')" }}>
      <Navbar/>
      
    
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Result Card */}
      <ResultCard />

      {/* About Section */}
      <About />

      {/* Services Section */}
      <Services />

    </div>
    <Footer />
    </section>
  );
};

export default App;
