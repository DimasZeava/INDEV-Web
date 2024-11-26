import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Web and Mobile Application Development',
      icon: '💻', // Replace this with an SVG or icon component
    },
    {
      title: 'Digital System',
      icon: '🖱️',
    },
    {
      title: 'Network Infrastructure',
      icon: '🌐',
    },
    {
      title: 'Visual Branding',
      icon: '🎨',
    },
  ];

  return (
    <section className=" text-white py-10 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Our Services</h2>
        <p className="text-gray-300 mb-8">
          What you consider a problem, we consider our specialty
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-700 p-6 rounded-lg shadow-lg flex flex-col items-center"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
