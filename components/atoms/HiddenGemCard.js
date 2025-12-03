"use client";

import { useState } from "react";
import PropTypes from "prop-types";

export default function HiddenGemCard({ image, title, description }) {
    const [imageError, setImageError] = useState(false);

    return (
        <div
            className="flex-shrink-0 bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            style={{ width: "332px", height: "402px" }}
        >
            {/* Image */}
            <div
                className="relative w-full bg-gradient-to-br from-gray-300 to-gray-400 rounded-t-xl overflow-hidden"
                style={{ height: "240px" }}
            >
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
            <div
                className="flex flex-col"
                style={{ height: "162px", padding: "16px" }}
            >
                {/* Title */}
                <h3
                    style={{
                        fontSize: "12px",
                        fontWeight: 600,
                        color: "#000000",
                        marginBottom: "10px",
                        marginTop: 0,
                    }}
                >
                    {title}
                </h3>

                {/* Description */}
                <p
                    style={{
                        fontSize: "11.9px",
                        fontWeight: 400,
                        color: "#5B5F62",
                        margin: 0,
                        lineHeight: "1.4",
                    }}
                >
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
