const ClientCard = () => {
  return (
    <div className="flex flex-col justify-center items-center max-w-6xl mx-auto p-6">
      <h3 className="text-white text-3xl font-bold mb-8">
        {" "}
        What Our Client Say
      </h3>
      <div className="flex">
        <div className="bg-white/10 backdrop-blur-md rounded-l-2xl">
          <img
            src="./assets/images/founder-moksha-indonesia.png"
            alt="moksha-founder"
            className="max-w-xs max-h-xs object-cover rounded-l-2xl"
          />
        </div>
        <div className="flex flex-col">
          <div className="bg-white/10 backdrop-blur-md pt-2 rounded-r-2xl">
            <p className="text-white text-md font-light mt-10 pr-5">
              Indev mampu menciptakan diorama imaji yang penuh ritmik lewat
              teknologi. Pada akhirnya, kapasitas dan kuota pengetahuannya mampu
              menjawab kebutuhan masa kini. Kami sangat mengapresiasi dan
              mengangkat topi setinggi-tingginya untuk Indev. Sebuah Perusahaan
              pengembang teknologi yang tak hanya berkutat soal kode rumit
              aritmatik tapi mampu menghasilkan gagasan dan produk yang
              ‘kharismatik’.
            </p>
            <p className="text-white text-md font-light mt-4 mb-12 pr-5">
              Indev bagi kami adalah entitas industri yang kukuh mendobrak
              stigma bahwa dunia teknologi dan digital yang kaku, normatif jadi
              luwes dan menyenangkan. Ketepatan dan keahlian menganalisis
              kebutuhan menjadi keunggulan Indev untuk menjawab kebuntuan kami
              dalam mengakslerasi bisnis lewat teknologi. Sukses selalu.
            </p>
            <div className="flex">
              <div className="curve-bottom-client flex flex-col text-white pr-28 pb-[35px] rounded-full">
                <h3 className="text-2xl font-bold">Wawan Speaking</h3>
                <h2>Founder Moksha Indonesia</h2>
              </div>
              <div className="bg-black backdrop-blur-md flex-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
