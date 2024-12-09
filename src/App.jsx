import React from "react";
import Hero from "./pages/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portofolio from "./components/Portofolio";
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
        <Hero />
      </div>
      <About />
      <Services />
      <Portofolio />
      <Footer />
    </>
  );
};

export default App;
