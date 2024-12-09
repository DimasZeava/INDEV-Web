import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSectionResult";
import ResultCard from "./components/Resultcard";
import About from "./components/About";
import Services from "./components/Services";
import Portofolio from "./components/Portofolio";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NavAbout from "./components/NavAbout";
import Testimonial from "./components/Testimonial";
import WhyUs from "./components/WhyUs";
import GetStarted from "./components/GetStarted"; // Import komponen GetStarted

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Rute Halaman Utama */}
        <Route
          path="/"
          element={
            <>
              <div
                className="hero-section relative bg-cover bg-center bg-no-repeat h-[813px] pt-2 flex justify-center items-center"
                style={{
                  backgroundImage:
                    "url('./assets/images/background-hero-section.png')",
                }}
              >
                <Navbar />
                <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-black/0"></div>
                <HeroSection />
              </div>
              <ResultCard />
              <About />
              <Services />
              <Portofolio />
              <Testimonial />
              <WhyUs />
              <GetStarted />
              <Footer />
            </>
          }
        />

        {/* Rute Halaman About */}
        <Route path="/about" element={<NavAbout />} />

        {/* Rute Baru untuk Halaman GetStarted */}
        <Route path="/get-started" element={<GetStarted />} />
      </Routes>
    </Router>
  );
};

export default App;
