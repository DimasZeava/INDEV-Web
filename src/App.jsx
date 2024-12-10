import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSectionResult";
import ResultCard from "./components/Resultcard";
import About from "./components/About";
import Services from "./components/Services";
import Portofolio from "./components/Portofolio";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HeroSectionResult from "./components/HeroSectionResult";

const App = () => {
  return (
    <>
      <div
        className="hero-section relative bg-cover bg-center bg-no-repeat h-[813px] pt-2 flex justify-center items-center"
        style={{
          backgroundImage: "url('./assets/images/background-hero-section.png')",
        }}
      >
        <Navbar />
        <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-black/0"></div>
        <HeroSectionResult />
      </div>
      {/* <ResultCard /> */}
      <About />
      <Services />
      <Portofolio />
      <Footer />
    </>
  );
};

export default App;
