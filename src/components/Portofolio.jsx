import React from "react";
import PortoCard from "./PortoCard";

const projects = [
  {
    title: "Startup Studio ID",
    image: "path/to/startup-studio-id.jpg", // Ganti dengan URL gambar sebenarnya
  },
  {
    title: "Moksha Indonesia",
    image: "path/to/moksha-indonesia.jpg", // Ganti dengan URL gambar sebenarnya
  },
  {
    title: "WePro Communication",
    image: null, // Jika gambar tidak tersedia
  },
  {
    title: "Natal Nasional 2023",
    image: null, // Jika gambar tidak tersedia
  },
];

const Portofolio = () => {
  return (
    <div className="flex flex-col text-white max-w-5xl mx-auto">
      <div className="flex">
            <h2 className="z-10 flex-1 bg-white/10 backdrop-blur-md px-10 py-4 text-3xl font-semibold mb-0 rounded-t-xl">Our Portfolio</h2>
            <h5 className="curve-top-portfolio bg-white/10 backdrop-blur-md flex-1 text-end pl-32 py-3 pr-6 text-md font-light"> Explore our portfolio to see how we&lsquo;ve transformed ideas into reality </h5>
      </div>
      <div className="p-8 bg-white/10 backdrop-blur-md rounded-tr-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <PortoCard
              key={index}
              title={project.title}
              image={project.image}
            />
          ))}
        </div>
      </div>
      <div className="bg-white/10 backdrop-blur-md">
        <div className="bg-white/10 backdrop-blur-md"></div>
        <div className="curve-bottom-portfolio bg-white/10 backdrop-blur-md flex-1 text-end pl-32 py-3 pr-6 text-md font-light"></div>
      </div>
    </div>
  );
};

export default Portofolio;
