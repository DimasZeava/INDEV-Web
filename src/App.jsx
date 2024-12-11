import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ResultCard from "./components/Resultcard";
import About from "./components/About";
import ServicesPage from "./pages/ServicesPage";
import Services from "./components/Services";
import Portofolio from "./components/Portofolio";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NavAbout from "./components/NavAbout";
import WhyUs from "./components/WhyUs";
import GetStarted from "./components/GetStarted"; // Import komponen GetStarted
import ClientCard from "./components/ClientCard";
import HeroSection from "./components/HeroSection";
import ContactPage from "./pages/ContactPage";

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
              <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-3xl font-bold mb-4 text-white">Our Services</h3>
                <p className="text-gray-300 mb-2">
                  What you consider a problem, we consider our specialty
                </p>
                <Services />
              </div>
              <Portofolio />
              <ClientCard />
              <WhyUs />
              <GetStarted />
              <Footer />
            </>
          }
        />

        {/* Rute Halaman About */}
        <Route path="/about" element={<NavAbout />} />

        <Route path="/services" element={<ServicesPage />} />

        <Route path="/contact" element={<ContactPage />} />

        {/* Rute Baru untuk Halaman GetStarted */}
        <Route path="/get-started" element={<GetStarted />} />
      </Routes>
    </Router>
  );
};

export default App;
