// PortoCard.jsx
import React from "react";

const PortoCard = ({ title, image }) => {
    return (
        <div className="bg-gray-800 text-white rounded-lg shadow-md p-4 flex flex-col items-center">
            <div className="w-full h-48 bg-gray-700 rounded-md mb-4 flex items-center justify-center">
                {image ? (
                    <img
                        src={image}
                        alt={title}
                        className="max-h-full max-w-full object-cover rounded-md"
                    />
                ) : (
                    <span className="text-gray-400">No Image Available</span>
                )}
            </div>
            <h3 className="text-lg font-semibold">{title}</h3>
        </div>
    );
};

export default PortoCard;
