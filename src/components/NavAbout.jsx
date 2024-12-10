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
            <Link to="/" className="hover:underline">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:underline text-white-400 transition-all">
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:underline">
              SERVICES
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className="hover:underline">
              PORTFOLIO
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:underline">
              CONTACT
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
          Contact Us
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-black text-center text-gray-400 py-4">
        <p>© 2024 INDEV. All rights reserved. Designed with passion.</p>
      </footer>

      {/* Curve Effect */}
      <div className="curve-about"></div>
    </div>
  );
};

export default NavAbout;
