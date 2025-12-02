"use client";

import { useState } from "react";
import PropTypes from "prop-types";

export default function HiddenGemCard({ image, title, description }) {
    const [imageError, setImageError] = useState(false);

    return (
        <div className="flex-shrink-0 w-80 bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            {/* Image */}
            <div className="relative w-full h-48 bg-gradient-to-br from-gray-300 to-gray-400 rounded-t-xl overflow-hidden">
                {image && !imageError ? (
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                        onError={() => setImageError(true)}
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm">
                        Hidden Gem Image
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-4">
                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
}

HiddenGemCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};
