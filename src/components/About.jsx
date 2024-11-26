import React from 'react';

const About = () => {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-10 px-6">
      <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-8">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-md">
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-white">INDEV</strong> is an information technology company specializing in web and mobile application development, website development, digital systems, and networking. Established in 2013, we have become a seasoned IT company in the industry, providing cutting-edge solutions to clients from various sectors.
            </p>
          </div>
        </div>
        <div className="flex-1">
          <img
            src="https://via.placeholder.com/400x300" // Replace this with your actual image URL or import
            alt="Team working in a meeting room"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
