import React from "react";

const Services = () => {
  const services = [
    {
      title: "Web and Mobile Application Development",
      image: "./assets/images/computer.png",
    },
    {
      title: "Digital System",
      image: "./assets/images/control-center.png",
    },
    {
      title: "Network Infrastructure",
      image: "./assets/images/world-wide-web.png",
    },
    {
      title: "Network Infrastructure",
      image: "./assets/images/network.png",
    },
    {
      title: "Visual Branding",
      image: "./assets/images/graphic-design.png",
    },
  ];

  return (
    <section className=" text-white py-10 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-12">
          {services.map((service, index) => (
            <div
            key={index}
            className="flex flex-col items-center"
          >
            <div className="bg-white/10 backdrop-blur-lg p-5 rounded-2xl">
              <img src={service.image} className="text-4xl" alt={services.title}/>
            </div>
            <h3 className="text-sm w-full text-center mt-2">{service.title}</h3>
          </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
