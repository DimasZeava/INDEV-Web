import React from "react";

const About = () => {
  return (
    <section className="flex text-white py-10 px-6 max-w-6xl mx-auto">
      <div>
        <div className="flex">
          <h2 className="z-10 flex-none bg-black/90 backgdrop-blur-lg p-4 text-2xl font-bold mb-0">
            About Us
          </h2>
          <div
            className="curve-about flex-1 bg-white/10 backdrop-blur-md p-5 rounded-tl-full"
          ></div>
        </div>
        <div className="bg-white/10 backdrop-blur-md px-5 pt-5 pb-1 rounded-s-3xl">
          <p className="mb-[34px]">
            <span className="font-bold text-white">INDEV</span> is an
            information technology company specializing in web and mobile
            application development, website development, digital systems, and
            networking. Established in 2013, we have become a seasoned IT
            company in the industry, providing cutting-edge solutions to clients
            from various sectors.
          </p>
        </div>
      </div>
      <div className="bg-white/10 backdrop-blur-md py-2 pr-2 rounded-e-3xl">
        <img src="assets/images/office.png" alt="Office" className="w-full h-auto" />
      </div>
    </section>
  );
};

export default About;
