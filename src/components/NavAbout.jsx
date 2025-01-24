import React from "react";
import { Link } from "react-router-dom";
import About from "./About"; // Import komponen About

const NavAbout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-blue-900 text-white">
      <nav className="navbar fixed top-4 left-0 w-full z-10">
        <div className="glass flex justify-between items-center dark:text-white bg-black/30 backdrop-blur-lg rounded-full py-3 px-9 box-border mx-16 my-2">
          <img
            src="./assets/images/logo-indev.png"
            alt="logo-indev"
            className="logo w-36 h-auto"
          />
          <ul className="navigationLink flex justify-between gap-9">
            <li>
              <a
                href="#home"
                className="link relative pb-1 w-12 text-center block transition-all hover:font-semibold text-slate-400 hover:text-white focus:text-white focus:font-semibold"
              >
                HOME
                <span className="underline absolute bottom-0 left-0 right-0 mx-auto h-[2px] w-0 bg-white transition-all"></span>
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="link relative pb-1 w-16 text-center block transition-all hover:font-semibold text-slate-400 hover:text-white focus:text-white focus:font-semibold"
              >
                ABOUT
                <span className="underline absolute bottom-0 left-0 right-0 mx-auto h-[2px] w-0 bg-white transition-all"></span>
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="link relative pb-1 w-20 text-center block transition-all hover:font-semibold text-slate-400 hover:text-white focus:text-white focus:font-semibold"
              >
                SERVICES
                <span className="underline absolute bottom-0 left-0 right-0 mx-auto h-[2px] w-0 bg-white transition-all"></span>
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="link relative pb-1 w-24 text-center block transition-all hover:font-semibold text-slate-400 hover:text-white focus:text-white focus:font-semibold"
              >
                PORTFOLIO
                <span className="underline absolute bottom-0 left-0 right-0 mx-auto h-[2px] w-0 bg-white transition-all"></span>
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="link relative pb-1 w-20 text-center block transition-all hover:font-semibold text-slate-400 hover:text-white focus:text-white focus:font-semibold"
              >
                CONTACT
                <span className="underline absolute bottom-0 left-0 right-0 mx-auto h-[2px] w-0 bg-white transition-all"></span>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* About Section */}
      <div id="about">
        <About /> {/* Menyisipkan komponen About di sini */}
      </div>

      {/* Call to Action Section */}
      <div id="home" className="flex flex-col items-center justify-center h-screen bg-black text-white relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('./assets/images/background-hero-section.png')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl font-bold mb-4">Get Started Today</h1>
          <p className="text-lg mb-6">
            Ready to optimize your business? Start collaborating with Us.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
            Get in touch
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bottom-0 w-full bg-black text-white">
  <div className="w-full flex flex-col md:flex-row justify-between items-start p-10 bg-black rounded-t-3xl shadow-lg">
    <div className="mb-6 md:mb-0">
      <div className="flex items-center mb-4 pl-5">
        <img
          src="/assets/images/logo-indev.png"
          alt="Indev Logo"
          className="w-auto h-20"
        />
      </div>
      <p className="text-gray-200 max-w-md pl-5">
        <b>INDEV</b> is an information technology <br />company specializing in web and
        mobile <br />application development, website <br />development, digital
        systems, and <br /> networking.
      </p>
    </div>

    <nav>
      <ul className="flex flex-col space-y-2 text-left pr-20">
        <li>
          <a
            href="#home"
            className="text-gray-400 hover:text-white hover:border-b-2 hover:border-white transition duration-200"
          >
            HOME
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="text-gray-400 hover:text-white hover:border-b-2 hover:border-white transition duration-200"
          >
            ABOUT
          </a>
        </li>
        <li>
          <a
            href="#services"
            className="text-gray-400 hover:text-white hover:border-b-2 hover:border-white transition duration-200"
          >
            SERVICES
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            className="text-gray-400 hover:text-white hover:border-b-2 hover:border-white transition duration-200"
          >
            PORTFOLIO
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="text-gray-400 hover:text-white hover:border-b-2 hover:border-white transition duration-200"
          >
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
  </div>
</footer>

    </div>
  );
};

export default NavAbout;
