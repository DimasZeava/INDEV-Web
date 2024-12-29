import React from "react";
import { Link } from "react-router-dom";

const NavAbout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-blue-900 text-white">
    <nav className="navbar fixed top-4 left-0 w-full z-10">
      <div className="glass flex justify-between items-center dark:text-white bg-black/10 backdrop-blur-lg rounded-full py-3 px-9 box-border mx-16 my-2">
      <img
          src="./assets/images/logo-indev.png"
          alt="logo-indev"
          className="logo w-36 h-auto"
        />
        <ul className="navigationLink flex justify-between gap-9">
          <li>
          <Link
            to="/"
            className="link relative pb-1 w-12 text-center block transition-all hover:font-semibold text-slate-400 hover:text-white focus:text-white focus:font-semibold"
          >
            HOME
            <span className="underline absolute bottom-0 left-0 right-0 mx-auto h-[2px] w-0 bg-white transition-all"></span>
          </Link>
          </li>
          <li>
          <Link
            to="/about"
            className="link relative pb-1 w-16 text-center block transition-all hover:font-semibold text-slate-400 hover:text-white focus:text-white focus:font-semibold"
          >
            ABOUT
            <span className="underline absolute bottom-0 left-0 right-0 mx-auto h-[2px] w-0 bg-white transition-all"></span>
          </Link>
          </li>
          <li>
          <Link
            to="/services"
            className="link relative pb-1 w-20 text-center block transition-all hover:font-semibold text-slate-400 hover:text-white focus:text-white focus:font-semibold"
          >
            SERVICES
            <span className="underline absolute bottom-0 left-0 right-0 mx-auto h-[2px] w-0 bg-white transition-all"></span>
          </Link>
          </li>
          <li>
          <Link
            to="/portfolio"
            className="link relative pb-1 w-24 text-center block transition-all hover:font-semibold text-slate-400 hover:text-white focus:text-white focus:font-semibold"
          >
            PORTFOLIO
            <span className="underline absolute bottom-0 left-0 right-0 mx-auto h-[2px] w-0 bg-white transition-all"></span>
          </Link>
          </li>
          <li>
          <Link
            to="/contact"
            className="link relative pb-1 w-20 text-center block transition-all hover:font-semibold text-slate-400 hover:text-white focus:text-white focus:font-semibold"
          >
            CONTACT
            <span className="underline absolute bottom-0 left-0 right-0 mx-auto h-[2px] w-0 bg-white transition-all"></span>
          </Link>
          </li>
        </ul>
      </div>
    </nav>

    {/* About Us Section */}
    <div className="px-8 py-16">
    <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
        <p className="text-lg text-center max-w-3xl mx-auto mb-16">
          <strong>INDEV</strong> is an information technology company specializing in web and mobile application development, software development, and IT solutions. Established in 2013, we have been a trusted IT company for various organizations. With a strong dedication to service excellence, we aim to continuously set the standard in IT innovation.
        </p>
    {/* Vision & Mission Section */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Our Vision</h2>
            <p>
              To be a <strong>trusted partner</strong> in providing IT solutions that meet client needs and expectations while actively driving <strong>innovation in the digital world</strong>.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Our Missions</h2>
            <ul className="list-disc list-inside">
              <li>To deliver cutting-edge IT solutions that help clients achieve their goals.</li>
              <li>To consistently provide reliability, technical expertise, and innovation.</li>
              <li>To maintain integrity, honesty, and high customer satisfaction.</li>
            </ul>
          </div>
        </div>
        {/* Core Values Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Integrity</h3>
              <p>We uphold the highest standards of honesty and responsibility in all our actions.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p>We are dedicated to providing exceptional quality and service in everything we do.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-600 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Get Started Today</h2>
        <p className="text-lg mb-8">
          Ready to optimize your business? Start collaborating with us.
        </p>
        <button className="px-6 py-3 bg-blue-900 text-white rounded-lg shadow-lg hover:bg-blue-700">
          Get in Touch
        </button>
      </div>

      {/* Footer */}
      <footer className="bottom-0 w-full">
        <div
          className="w-full flex flex-col md:flex-row justify-between items-start p-10 bg-black/50 backdrop-blur-md rounded-3xl border border-white/10 shadow-lg"
        >
          {/* Logo dan Deskripsi */}
          <div className="mb-6 md:mb-0">
            <div className="flex items-center mb-4 pl-5">
              {/* Logo */}
              <img
                src="/assets/images/logo-indev.png" // Ganti dengan path logo Anda
                alt="Indev Logo"
                className="w-auto h-20"
              />
            </div>
            <p className="text-gray-200 max-w-md pl-5">
              <b>INDEV</b> is an information technology <br></br>company specializing in web and
              mobile <br></br>application development, website <br></br>development, digital
              systems, and <br></br> networking.
            </p>
          </div>

          {/* Menu Navigasi (Vertikal) */}
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
