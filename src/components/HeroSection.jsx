const HeroSection = () => {
  const handleButtonClick = () => {
    alert("Button clicked!"); // Ganti dengan fungsi yang diinginkan
  };

  return (
    <section className="text-white">
      <div className="hero-card max-w-6xl mx-auto text-center rounded-xl bg-white/10 backdrop-blur-md py-8 px-40">
        <h1 className="text-5xl font-bold text-white mb-6">
          Not Offering a Service but Providing a Solution
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Bring Your Tech Dreams to Life with Us! We’re here to transform your
          ideas into innovative and cutting-edge solutions. Let’s combine your
          vision with our expertise to create a brighter digital future
          together.
        </p>
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

export default HeroSection;
