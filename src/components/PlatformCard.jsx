import EmailCard from "./EmailCard"; // Menggunakan EmailCard yang sudah ada

const PlatformCard = () => {
  return (
    <div className="platform-card">
      <div className="flex justify-center items-center w-full">
        <h3 className="font-normal px-5 text-white">
          Our Platforms
        </h3>
        <div className="top-platform-curve-right flex-1 bg-white/10 backdrop-blur-md p-5 rounded-tr-3xl h-full">
        </div>
    </div>
    <div className="flex-1 bg-white/10 backdrop-blur-md p-5 rounded-l-3xl rounded-br-3xl h-full">
      <form className="folder-form">
        <div className="email-list">
          <EmailCard />
          <EmailCard />
          <EmailCard />
          <EmailCard />
        </div>
      </form>
    </div>
    </div>
  );
};

export default PlatformCard;
