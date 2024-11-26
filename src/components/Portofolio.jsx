// Portofolio.jsx
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
        <div className="bg-black text-white min-h-screen p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Portofolio</h2>
            <p className="text-center mb-8 text-gray-400">
                Explore our portfolio to see how we’ve transformed ideas into reality.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {projects.map((project, index) => (
                    <PortoCard key={index} title={project.title} image={project.image} />
                ))}
            </div>
        </div>
    );
};

export default Portofolio;
