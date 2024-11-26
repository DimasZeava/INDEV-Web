import React from 'react';

const HeroSection = () => {
  return (
    <section className="text-white py-20 px-8">
      <div className="max-w-3xl mx-auto text-center rounded-xl bg-white/10 backdrop-blur-md py-12 px-6">
        <h1 className="text-4xl font-bold text-white mb-6">
          Not Offering a Service but Providing a Solution
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Bring Your Tech Dreams to Life with Us! We’re here to transform your
          ideas into innovative and cutting-edge solutions. Let’s combine your
          vision with our expertise to create a brighter digital future
          together.
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded transition">
          Get in touch
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
