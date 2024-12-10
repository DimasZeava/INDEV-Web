import React from "react";

const Testimonial = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-black to-blue-900">
      <div className="max-w-4xl mx-4 rounded-lg shadow-xl bg-gradient-to-r from-black/80 via-gray-800 to-black/80 text-white p-8 flex">
        {/* Client Image Section */}
        <div className="flex-shrink-0">
          <img
            src="/path/to/WhatsApp_Image_2024-06-07_at_13.45_1.png" // Ganti dengan path gambar Anda
            alt="Client"
            className="w-32 h-32 rounded-full object-cover"
          />
        </div>

        {/* Testimonial Text Section */}
        <div className="ml-8 flex flex-col justify-center">
          <h2 className="text-3xl font-semibold mb-4">What Our Client Say</h2>
          <p className="text-lg mb-6">
            Indevo mampu menciptakan diorama imaji yang penuh ritmik lewat teknologi. Pada akhirnya, kapasitas dan kuota pengetahuan
            mampu menjawab kebutuhan masa kini. Kami sangat mengapresiasi dan mengangkat topi setinggi-tingginya untuk Indevo.
            Sebuah Perusahaan pengembang teknologi yang tak hanya berkutat soal kode rumit aritmatis tapi mampu menghasilkan gagasan
            dan produk yang 'kharsimatik'.
          </p>
          <p className="font-semibold">Wawan Speaking</p>
          <p className="text-sm text-gray-400">Founder Moksha Indonesia</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
