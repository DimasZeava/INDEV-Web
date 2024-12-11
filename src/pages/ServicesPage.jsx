import React from "react";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import GetStarted from "../components/GetStarted";
import Footer from "../components/Footer";

const ServicesPage = () => {
  return (
    <>
      <Navbar />
      <div
        className="hero-section relative bg-cover bg-center bg-no-repeat h-[813px] pt-2 flex justify-center items-center"
        style={{
          backgroundImage: "url('./assets/images/background-hero-section.png')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-black/0"></div>
        <section className="text-white">
            <div className="flex flex-col">
                <div className="flex">
                    <h2>
                        Our Services
                    </h2>
                </div>
                <div className="max-w-6xl mx-auto text-center rounded-xl bg-white/10 backdrop-blur-md px-40 py-20">
            <h1 className="text-5xl font-bold text-white mb-6">
              Unleashing the{" "}
              <span className="text-orange-500">Full Potential</span>of Your
              Business with Our Strategic and Forward-thinking services
            </h1>
          </div>
            </div>
        </section>
      </div>
      <Services />
      <GetStarted/>
      <Footer />
    </>
  );
};

export default ServicesPage;
