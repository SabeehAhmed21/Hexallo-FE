"use client";

import { useState } from "react";
import PropTypes from "prop-types";

export default function DestinationCard({
    image,
    title,
    checkIns,
    description,
}) {
    const [imageError, setImageError] = useState(false);

    return (
        <div className="flex-shrink-0 w-80 bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            {/* Image */}
            <div className="relative w-full h-56 bg-gradient-to-br from-gray-300 to-gray-400 rounded-t-xl overflow-hidden">
                {image && !imageError ? (
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                        onError={() => setImageError(true)}
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm">
                        Destination Image
                    </div>
                )}
            </div>

            {/* Content */}
            <div style={{ padding: "16px" }}>
                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {title}
                </h3>

                {/* Check-ins */}
                <p className="text-sm text-gray-600 mb-2">{checkIns}</p>

                {/* Description */}
                <p className="text-xs text-gray-500 leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
}

DestinationCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    checkIns: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};
