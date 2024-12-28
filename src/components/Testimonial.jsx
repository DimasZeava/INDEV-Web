const Testimonial = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-black via-gray-800 p-8 curve-bottom-testiominal">
      <h2 className="text-4xl font-semibold text-white mb-12 text-center">
        What <br /> Our Client Say
      </h2>

      <div className="flex max-w-5xl mx-auto rounded-lg shadow-lg bg-black/50 text-white p-8 items-center">
        <div className="flex">
          <img
            src="assets/images/wawan.png"
            alt="Client"
            className="w-90 h-80 object-cover"
          />
        </div>
        <div>
          <p className="text-lg mb-6 leading-relaxed">
            Indevo mampu menciptakan diorama imaji yang penuh ritmik lewat
            teknologi. Pada akhirnya, kapasitas dan kuota pengetahuan mampu
            menjawab kebutuhan masa kini. Kami sangat mengapresiasi dan
            mengangkat topi setinggi-tingginya untuk Indevo. Sebuah Perusahaan
            pengembang teknologi yang tak hanya berkutat soal kode rumit
            aritmatis tapi mampu menghasilkan gagasan dan produk yang
            &quot;kharismatik&quot;.
          </p>
          <p className="text-lg mb-6 leading-relaxed">
            Indevo bagi kami adalah entitas industri yang kukuh mendobrak stigma
            bahwa dunia teknologi dan digital yang kaku, normatif jadi luwes
            dan menyenangkan. Ketepatan dan keahlian menganalisis kebutuhan
            menjadi kekuatan Indevo untuk menjawab kebutuhan kami dalam
            mengakselerasi bisnis lewat teknologi. Sukses selalu.
          </p>
          <p className="font-semibold text-xl">Wawan Speaking</p>
          <p className="text-sm text-gray-400">Founder Moksha Indonesia</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
