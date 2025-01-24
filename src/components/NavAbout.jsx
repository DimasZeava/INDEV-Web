import Navbar from "./Navbar";

const NavAbout = () => {
  return (
    <div className="min-h-screen text-white">
      <Navbar />

      {/* About Section */}
      <div id="about">
      <section className="text-white py-20 px-6 relative">
      <div className="relative max-w-6xl mx-auto space-y-12 mt-20">
        {/* About Us Section */}
        <div className="flex justify-center items-center">
          <section className="text-white h-[300px] flex flex-col justify-center items-center">
            <div className="flex justify-center items-center w-full">
              <div className="top-contact-curve-left flex-1 bg-white/10 backdrop-blur-md p-5 rounded-tl-3xl h-full">
              </div>
              <h1 className="text-4xl font-normal px-10 py-3">
                About Us
              </h1>
              <div className="top-contact-curve-right flex-1 bg-white/10 backdrop-blur-md p-5 rounded-tr-3xl h-full">
              </div>
            </div>
            <div className="max-w-6xl mx-auto text-center rounded-b-3xl bg-white/10 backdrop-blur-md py-8 px-40">
              <p className="text-lg text-gray-300 mb-8">
              <span className="font-bold">INDEV</span> is an information technology company specializing in web and mobile application development, website development, digital systems, and networking. <span className="font-bold">Established in 2013</span>,
              we have become a seasoned <span className="font-bold">IT company</span> in the industry, providing cutting-edge solutions to clients from various sectors. 
              With our experienced team and dedication to service excellence, we aim to continuously set the standard in IT innovation.
              </p>
          </div>
          </section>
        </div>
        
        {/* Separator with Text */}
        <div className="relative text-center">
          <div className="border-t border-gray-700 absolute inset-0 top-1/2"></div>
          <span className="bg-black px-4 relative text-sm text-gray-300">
            Our Vision & Missions
          </span>
        </div>
        {/* Vision & Missions Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision */}
          <div>
            <div className="flex">
              <h2 className="z-10 flex-none bg-black/90 backgdrop-blur-lg p-4 text-2xl font-bold mb-0">
              Our Vision
              </h2>
            <div
              className="curve-about flex-1 bg-white/10 backdrop-blur-md p-5 rounded-t-3xl"
            ></div>
          </div>
          <div className="bg-white/10 backdrop-blur-md px-5 pt-5 pb-1 rounded-s-3xl rounded-br-3xl">
            <p className="m-3 mb-[100px] text-white text-3xl font-thin">
              To be a <span className="font-bold">trusted partner</span> in providing <span className="font-bold">IT solutions</span> that meet client needs and expectations, 
              while actively driving <span className="font-bold">innovation in the digital world</span>.
            </p>
          </div>
        </div>
          {/* Missions */}
        <div className="relative">
          <div className="flex">
              <h2 className="z-10 flex-none bg-black/90 backgdrop-blur-lg p-4 text-2xl font-bold mb-0">
              Our Mission
              </h2>
            <div
              className="curve-about flex-1 bg-white/10 backdrop-blur-md p-5 rounded-t-3xl"
            ></div>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-5 pb-[80px] rounded-s-3xl rounded-br-3xl text-white ">
            <ul className="list-disc list-inside space-y-2">
                <li>
                  To deliver cutting-edge IT solutions that help clients achieve their goals.
                </li>
                <li>
                  To provide friendly, professional, and high-quality service to every client.
                </li>
                <li>
                  To continuously develop our team&apos;s skills and knowledge to stay relevant in an ever-evolving technological landscape.
                </li>
                <li>
                  To commit to integrity, honesty, and high customer satisfaction.
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Separator with Text for Core Values */}
        <div className="relative text-center mt-16">
          <div className="border-t border-gray-700 absolute inset-0 top-1/2"></div>
          <span className="bg-black px-4 relative text-sm font-semibold text-gray-300">
            Our Core Values
          </span>
        </div>
        {/* Core Values Section */}
        <div className="flex gap-10 items-center">
          {/* Core Values List */}
          <div className="relative w-[800px]">
          <div className="flex">
              <h2 className="z-10 flex-none bg-black/90 backgdrop-blur-lg p-4 text-2xl font-bold mb-0">
              Core Values
              </h2>
            <div
              className="curve-about flex-1 bg-white/10 backdrop-blur-md p-5 rounded-t-3xl"
            ></div>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-5 pb-[80px] rounded-s-3xl rounded-br-3xl text-white">
            <ul className="list-disc list-inside space-y-2">
                <li>
                  Integrity<br/>
                  We uphold the highest standards of honesty and transparency in all our actions.
                </li>
                <li>
                  Innovation<br/>
                  We strive to deliver cutting-edge solutions that meet the evolving needs of our clients.
                </li>
                <li>
                  Excellence<br/>
                  We are committed to providing exceptional quality and service in everything we do.
                </li>
              </ul>
            </div>
            </div>
          {/* Supporting Image */}
          <div className="rounded-lg overflow-hidden">
            <img
              src="assets/images/core-values-images.png"
              alt="Team"
              className="w-80 h-auto object-cover rounded-md"
            />
          </div>
        </div>
        </div>
    </section>
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
