import React from "react";
import './PlatformCard.css'; // Import file CSS untuk SC 3
import EmailCard from "./EmailCard"; // Menggunakan EmailCard yang sudah ada

const PlatformCard = () => {
  return (
    <div className="folder-containeR platform-card">
      <form className="folder-form">
        
        <div className="email-list">
          <EmailCard />
          <EmailCard />
          <EmailCard />
          <EmailCard />
        </div>
      </form>
    </div>
  );
};

export default PlatformCard;
