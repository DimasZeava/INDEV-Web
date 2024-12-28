import PortoCard from "./PortoCard";

const projects = [
  {
    title: "Startup Studio ID",
    image: "./assets/images/startup-studio-id.png", // Ganti dengan URL gambar sebenarnya
  },
  {
    title: "Moksha Indonesia",
    image: "./assets/images/moksha-indonesia.png", // Ganti dengan URL gambar sebenarnya
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
    <div className="flex flex-col text-white max-w-6xl mx-auto p-6">
      <div className="flex">
            <h2 className="curve-top-portfolio z-10 flex-1 bg-white/10 backdrop-blur-md px-10 py-4 text-3xl font-semibold mb-0 rounded-t-xl">Our Portfolio</h2>
            <h5 className=" bg-black/10 backdrop-blur-md flex-1 text-end pl-32 py-3 pr-6 text-md font-light"> Explore our portfolio to see how we&lsquo;ve transformed ideas into reality </h5>
      </div>
      <div className="p-8 bg-white/10 backdrop-blur-md rounded-r-2xl">
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
      <div className="flex">
        <div className="curve-bottom-portfolio z-10 flex-auto bg-white/10 backdrop-blur-md rounded-b-xl px-48"></div>
        <a className="bg-black/10 backdrop-blur-md flex-1 text-center text-2xl py-3 font-light text-zinc-500 hover:text-white transition-color duration-200 ease-in-out" href=""> See More Project &gt;</a>
      </div>
    </div>
  );
};

export default Portofolio;
