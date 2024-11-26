import React from 'react';

const About = () => {
  return (
    <section className="text-white py-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Judul di luar kotak transparan */}
        <h2 className="text-3xl font-bold mb-6">About Us</h2>

        {/* Kontainer transparan untuk teks dan gambar */}
        <div className="bg-black/10 backdrop-blur-lg rounded-xl p-8 shadow-lg flex flex-col lg:flex-row gap-8 items-center">
          {/* Deskripsi */}
          <div className="flex-1">
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-white">INDEV</strong> is an information technology company specializing in web and mobile application development, website development, digital systems, and networking. Established in 2013, we have become a seasoned IT company in the industry, providing cutting-edge solutions to clients from various sectors.
            </p>
          </div>

          {/* Gambar */}
          <div className="flex-1">
            <img
              src="https://via.placeholder.com/400x300" // Ganti dengan URL gambar sebenarnya
              alt="Team working in a meeting room"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
