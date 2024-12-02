import React from 'react';

const About = () => {
  return (
    <section className="flex text-white py-10 px-6 max-w-6xl mx-auto">
      <div>
        <div className='flex'>
          <h2 className="flex-none bg-black/90 backgdrop-blur-lg p-4 text-2xl font-bold mb-0">About Us</h2>
          <div className="flex-1 bg-white/10 backdrop-blur-md p-5 rounded-tl-full" style={{
          clipPath: "polygon(2% 0, 100% 0, 100% 0, 100% 100%, 0% 100%)",
        }}></div>
        </div>
        <div className='bg-white/10 backdrop-blur-md p-5 rounded-s-3xl'>
        <p className='mb-[64px]'>
        <span className="font-bold text-white">INDEV</span> is an information technology company specializing in web
          and mobile application development, website development, digital systems, and networking. Established in
          2013, we have become a seasoned IT company in the industry, providing cutting-edge solutions to clients from
          various sectors.
        </p>
        </div>
      </div>
      <div className='bg-white/10 backdrop-blur-md p-5 rounded-e-3xl'>
      <img
          src="https://via.placeholder.com/700x600"
          alt="Office"
          className="rounded-lg shadow-lg"
        />
      </div>
      {/* <div className="text-white p-8 rounded-xl flex flex-col bg-white/10 backdrop-blur-md py-4 px-14 md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-4">About Us</h2>
        <p className="text-gray-300 leading-relaxed">
          <span className="font-bold text-white">INDEV</span> is an information technology company specializing in web
          and mobile application development, website development, digital systems, and networking. Established in
          2013, we have become a seasoned IT company in the industry, providing cutting-edge solutions to clients from
          various sectors.
        </p>
      </div>
      <div className="flex-shrink-0">
        <img
          src="https://via.placeholder.com/300x200"
          alt="Office"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div> */}
    </section>
  );
};

export default About;
