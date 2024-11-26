<<<<<<< HEAD
import React from 'react';
import HeroSection from './components/HeroSection';
import ResultCard from './components/Resultcard';
import About from './components/About';
import Services from './components/Services';

const App = () => {
  return (
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
  );
};

export default App;
=======
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";

function App() {
  return (
    <section className="hero-section bg-cover bg-center bg-no-repeat h-screen pt-2" style={{ backgroundImage: "url('./assets/images/background-hero-section.png')" }}>
      <Navbar/>
      <Footer />
    </section>
  );
}

export default App;
>>>>>>> b22d26776ed6e3742eef72d14841b268142a2e11
