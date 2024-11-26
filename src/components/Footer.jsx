import React from "react";

const Footer = () => {
  return (
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
  );
};

export default Footer;
