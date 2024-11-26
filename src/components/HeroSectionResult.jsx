import React from 'react';

// HeroSection Component
const HeroSection = () => {
  const handleButtonClick = () => {
    alert("Button clicked!"); // Ganti dengan fungsi yang diinginkan
  };

  return (
    <section className="text-white pt-40 pb-20 px-8">
      {/* Wrapper */}
      <div className="max-w-6xl mx-auto rounded-xl bg-white/10 backdrop-blur-md py-12 px-6 flex flex-col items-center gap-8">
        {/* Kontainer Teks */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Not Offering a Service but Providing a Solution
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Bring Your Tech Dreams to Life with Us! We’re here to transform your
            ideas into innovative and cutting-edge solutions. Let’s combine your
            vision with our expertise to create a brighter digital future
            together.
          </p>
        </div>

        {/* Tombol di Tengah */}
        <button
          onClick={handleButtonClick}
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded transition"
        >
          Get in touch
        </button>
      </div>
    </section>
  );
};

// Glass Container
const GlassSection = () => {
  return (
    <div className="glass flex justify-between items-center dark:text-white bg-black/10 backdrop-blur-lg rounded-full py-3 px-9 box-border mx-16 my-2">
      <span>Explore Our Solutions</span>
      <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded transition">
        Learn More
      </button>
    </div>
  );
};

// ResultCard Component
const ResultCard = () => {
  const stats = [
    { value: '10+', label: 'Year Experience' },
    { value: '100+', label: 'Project' },
    { value: '10+', label: 'Collaborator' },
    { value: '25+', label: 'Client' },
  ];

  return (
    <section className="text-white py-8">
      <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
        {stats.map((stat, index) => (
          <div key={index}>
            <p className="text-3xl font-bold">{stat.value}</p>
            <p className="text-lg">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// HeroSectionResult Component (Menggabungkan HeroSection, GlassSection, dan ResultCard)
const HeroSectionResult = () => {
  return (
    <div>
      <HeroSection />
      <GlassSection />
      <ResultCard />
    </div>
  );
};

export default HeroSectionResult;
