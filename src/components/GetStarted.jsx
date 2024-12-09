import React from "react";

const GetStarted = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white relative">
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('./assets/images/background-hero-section.png')", // Ganti dengan path gambar Anda
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
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
  );
};

export default GetStarted;
