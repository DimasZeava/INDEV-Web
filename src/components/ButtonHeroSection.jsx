import React from 'react';

const ButtonHeroSection = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded transition"
    >
      {text}
    </button>
  );
};

export default ButtonHeroSection;
