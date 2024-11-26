import React from "react";
import HeroSection from "./components/HeroSection";
import ResultCard from "./components/ResultCard";
import About from "./components/About";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <div
        className="hero-section relative bg-cover bg-center bg-no-repeat h-screen pt-2"
        style={{
          backgroundImage: "url('./assets/images/background-hero-section.png')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-black/0"></div>
        <HeroSection />
      </div>
      <ResultCard />
      <About />
      <Services />
      <Footer />
    </>
  );
};

export default App;
