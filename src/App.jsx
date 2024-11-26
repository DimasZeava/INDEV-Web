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
