import React from "react";

const WhyUs = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient from-black to-gray-900 px-4">
      <div className="max-w-4xl rounded-lg shadow-lg bg-black/80 text-white p-8">
      <div className='flex'>
        <h2 className="z-10 flex-none bg-black/90 backgdrop-blur-lg p-4 font-bold mb-0 text-3xl">Why Must Us?</h2>
        <div className="curve-about flex-1 bg-white/10 backdrop-blur-md p-5 rounded-tr-3xl" style={{
          clipPath: "polygon(4% 0, 100% 0, 100% 0, 100% 100%, 0% 100%)",
        }}></div>
        </div>
        <ul className="bg-white/10 backdrop-blur-md p-5 rounded-l-3xl rounded-br-3xl space-y-6">
          <li>
            <p className="font-bold text-lg">Customized Solutions</p>
            <p className="text-sm text-gray-300 mt-1">
              We provide IT solutions specifically designed to meet your business needs and goals.
            </p>
          </li>
          <li>
            <p className="font-bold text-lg">Competitive Advantage</p>
            <p className="text-sm text-gray-300 mt-1">
              By using the latest technology and industry best practices, we help you maintain a competitive edge.
            </p>
          </li>
          {/* Item 3 */}
          <li>
            <p className="font-bold text-lg">Operational Efficiency</p>
            <p className="text-sm text-gray-300 mt-1">
              Our digital solutions can help improve operational efficiency and reduce overhead costs.
            </p>
          </li>
          {/* Item 4 */}
          <li>
            <p className="font-bold text-lg">Superior User Experience</p>
            <p className="text-sm text-gray-300 mt-1">
              We focus on intuitive design and user experience to ensure maximum user satisfaction.
            </p>
          </li>
          {/* Item 5 */}
          <li>
            <p className="font-bold text-lg">Ongoing Support</p>
            <p className="text-sm text-gray-300 mt-1">
              After implementation, we continue to provide necessary technical support and maintenance for the solutions we provide.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WhyUs;
