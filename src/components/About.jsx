import React from "react";

const About = () => {
  return (
    <section className="text-white py-20 px-6 relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('./assets/images/background-hero-section.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      <div className="relative max-w-6xl mx-auto space-y-12 mt-20">
        {/* About Us Section */}
        <div className="flex justify-center items-center">
          <div className="bg-white/10 backdrop-blur-md px-8 py-10 rounded-lg max-w-3xl text-center">
            <h2 className="text-2xl font-bold mb-6 bg-black/90 backdrop-blur-lg inline-block px-4 py-2 rounded-md">
              About Us
            </h2>
            <p>
              <span className="font-bold text-white">INDEV</span> adalah
              perusahaan teknologi informasi yang mengkhususkan diri dalam
              pengembangan aplikasi web dan mobile, pengembangan situs web,
              sistem digital, dan jaringan. Didirikan pada tahun 2013, kami
              telah menjadi perusahaan TI yang berpengalaman di industri ini,
              menyediakan solusi mutakhir untuk klien dari berbagai sektor.
              Dengan tim berpengalaman dan dedikasi terhadap layanan terbaik,
              kami berupaya untuk terus menetapkan standar inovasi TI.
            </p>
          </div>
        </div>

        {/* Separator with Text */}
        <div className="relative text-center">
          <div className="border-t border-gray-700 absolute inset-0 top-1/2"></div>
          <span className="bg-black px-4 relative text-sm font-semibold text-gray-300">
            Our Vision & Missions
          </span>
        </div>

        {/* Vision & Missions Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision */}
          <div className="relative">
            <h4 className="text-lg font-semibold mb-4 relative z-10 bg-gradient-to-r from-transparent to-transparent px-2">
              Visi Kami
            </h4>
            <div className="bg-gradient-to-tr from-black via-gray-900 to-gray-800 px-6 py-8 rounded-lg shadow-lg">
              <p>
                Menjadi <span className="font-bold">mitra terpercaya</span> dalam
                menyediakan <span className="font-bold">solusi TI</span> yang
                memenuhi kebutuhan dan harapan klien, sambil secara aktif
                mendorong <span className="font-bold">inovasi di dunia digital</span>.
              </p>
            </div>
          </div>

          {/* Missions */}
          <div className="relative">
            <h4 className="text-lg font-semibold mb-4 relative z-10 bg-gradient-to-r from-transparent to-transparent px-2">
              Misi Kami
            </h4>
            <div className="bg-gradient-to-tr from-gray-900 via-gray-800 to-black px-6 py-8 rounded-lg shadow-lg">
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Menyediakan solusi TI mutakhir yang membantu klien mencapai tujuan
                  mereka.
                </li>
                <li>
                  Memberikan layanan yang ramah, profesional, dan berkualitas tinggi
                  untuk setiap klien.
                </li>
                <li>
                  Terus mengembangkan keterampilan dan pengetahuan tim kami untuk
                  tetap relevan dalam lanskap teknologi yang selalu berkembang.
                </li>
                <li>
                  Berkomitmen pada integritas, kejujuran, dan kepuasan pelanggan yang
                  tinggi.
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Core Values List */}
          <div className="bg-white/10 backdrop-blur-md px-6 py-8 rounded-lg">
            <ul className="list-disc list-inside space-y-4">
              <li>
                <span className="font-bold">Integritas</span>: Kami menjunjung
                standar tertinggi kejujuran dan transparansi dalam semua tindakan
                kami.
              </li>
              <li>
                <span className="font-bold">Inovasi</span>: Kami berusaha untuk
                memberikan solusi mutakhir yang memenuhi kebutuhan klien yang
                terus berkembang.
              </li>
              <li>
                <span className="font-bold">Keunggulan</span>: Kami berkomitmen
                untuk memberikan kualitas dan layanan terbaik dalam semua yang
                kami lakukan.
              </li>
            </ul>
          </div>
          {/* Supporting Image */}
          <div className="rounded-lg overflow-hidden">
            <img
              src="assets/images/office.png"
              alt="Team"
              className="w-full h-auto object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
