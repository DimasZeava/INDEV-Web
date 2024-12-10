import PropTypes from "prop-types";
import React from "react";

const PortoCard = ({ title, image }) => {
    return (
        <div className="text-white rounded-lg p-4 flex flex-col items-center">
            <div className="w-full h-56 flex items-center justify-center bg-white rounded-2xl">
                {image ? (
                    <img
                        src={image}
                        alt={title}
                        className="max-h-full max-w-full object-cover rounded-md"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-400 rounded-md">
                        <span className="text-gray-700">No Image Available</span>
                    </div>
                )}
            </div>
            <h3 className="text-lg self-start pt-3">{title}</h3>
        </div>
    );
};

PortoCard.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
};

export default PortoCard;
