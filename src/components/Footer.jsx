const Footer = () => {
  return (
    <footer
      className="bottom-0 w-screen"
    >
      <div
        className="w-full flex flex-col md:flex-row justify-between items-start p-10 bg-black/80 backdrop-blur-xl rounded-3xl"
      >
        {/* Logo dan Deskripsi */}
        <div className="mb-6 md:mb-0">
          <div className="flex items-center mb-4">
            {/* Logo */}
            <img
              src="/assets/images/logo-indev.png" // Ganti dengan path logo Anda
              alt="Indev Logo"
              className="w-auto h-20"
            />
          </div>
          <p className="text-gray-200 max-w-md">
            <b>INDEV</b> is an information technology company specializing in web and
            mobile application development, website development, digital
            systems, and networking.
          </p>
        </div>

        {/* Menu Navigasi (Vertikal) */}
        <nav className="w-right">
          <ul className="flex flex-col space-y-3 mr-6 text-center">
            <li>
              <a
                href="#home"
                className="text-white hover:text-gray-400 transition"
              >
                HOME
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-white hover:text-gray-400 transition"
              >
                ABOUT
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-white hover:text-gray-400 transition"
              >
                SERVICES
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="text-white hover:text-gray-400 transition"
              >
                PORTFOLIO
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-white hover:text-gray-400 transition"
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
