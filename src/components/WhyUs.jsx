import React from "react";

const WhyUs = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-black to-gray-900 px-4">
      <div className="max-w-4xl rounded-lg shadow-lg bg-black/80 text-white p-8">
        <h2 className="text-3xl font-semibold mb-6">Why Must Us?</h2>
        <ul className="space-y-6">
          {/* Item 1 */}
          <li>
            <p className="font-bold text-lg">Customized Solutions</p>
            <p className="text-sm text-gray-300 mt-1">
              We provide IT solutions specifically designed to meet your business needs and goals.
            </p>
          </li>
          {/* Item 2 */}
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
