import React from 'react';
import ResultCard from './ResultCard'; // Import ResultCard

const HeroSection = () => {
  const handleButtonClick = () => {
    alert('Button clicked!'); // Ganti dengan fungsi yang diinginkan
  };

  return (
    <section className="relative bg-transparent text-white pt-40 pb-20 px-8">
      {/* Wrapper */}
      <div className="max-w-4xl mx-auto rounded-xl bg-white/10 backdrop-blur-md py-12 px-6 text-center">
        {/* Judul dan Deskripsi */}
        <h1 className="text-4xl font-bold text-white mb-6">
          Not Offering a Service but Providing a Solution
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Bring Your Tech Dreams to Life with Us! We’re here to transform your
          ideas into innovative and cutting-edge solutions. Let’s combine your
          vision with our expertise to create a brighter digital future together.
        </p>
        {/* Tombol */}
        <button
          onClick={handleButtonClick}
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg transition"
        >
          get in touch
        </button>
      </div>
    </section>
  );
};

const HeroSectionResult = () => {
  return (
    <div className="bg-transparent min-h-screen">
      <HeroSection />
      <ResultCard /> {/* Hanya dipanggil sekali */}
    </div>
  );
};

export default HeroSectionResult;
