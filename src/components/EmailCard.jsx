import React from "react";

const EmailCard = () => {
  const cardStyle = {
    width: "100%",
    height: "77px",
    backgroundColor: "#444",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    padding: "20px 20px",
    gap: "20px",
    marginBottom: "10px", // Jarak antar kotak
    color: "#fff",
  };

  const iconStyle = {
    width: "40px",
    height: "40px",
    backgroundColor: "#666",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px",
    fontWeight: "bold",
  };

  const textStyle = {
    display: "flex",
    flexDirection: "column",
    fontSize: "14px",
  };

  const emailStyle = {
    fontSize: "12px",
    color: "#bbb",
  };

  return (
    <div style={cardStyle}>
      <div style={iconStyle}>✉️</div>
      <div style={textStyle}>
        <span>Email</span>
        <span style={emailStyle}>example@gmail.com</span>
      </div>
    </div>
  );
};

export default EmailCard;
