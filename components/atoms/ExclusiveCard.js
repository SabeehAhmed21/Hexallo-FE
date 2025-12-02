"use client";

import { useState } from "react";
import PropTypes from "prop-types";

export default function ExclusiveCard({ image, title, description, cta }) {
    const [imageError, setImageError] = useState(false);

    return (
        <div className="relative flex-1 h-96 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            {/* Background Image */}
            <div className="absolute inset-0">
                {image && !imageError ? (
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                        onError={() => setImageError(true)}
                    />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600"></div>
                )}
            </div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-end p-8 text-white">
                <h3 className="text-3xl font-bold mb-3">{title}</h3>
                <p className="text-base mb-6 opacity-90">{description}</p>
                <a
                    href="#"
                    className="inline-flex items-center text-white font-medium hover:text-hexallo-orange transition-colors"
                >
                    {cta}
                    <svg
                        className="w-5 h-5 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </a>
            </div>
        </div>
    );
}

ExclusiveCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    cta: PropTypes.string.isRequired,
};
