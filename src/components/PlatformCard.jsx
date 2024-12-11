import React from "react";
import EmailCard from "./EmailCard";

const PlatformCard = () => {
  return (
    <div className="flex flex-col">
      <div className="flex">
        <h3 className="text-white">Our Platform</h3>
        <div className=""></div>
      </div>
      <div className="px-5 py-2 bg-white/10 backdrop-blur-md gap-3 flex flex-col justify-center items-center max-w-md rounded-l-3xl rounded-b-3xl">
        <EmailCard />
        <EmailCard />
        <EmailCard />
        <EmailCard />
      </div>
    </div>
  );
};

export default PlatformCard;
