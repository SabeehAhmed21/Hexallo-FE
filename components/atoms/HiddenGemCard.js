"use client";

import { useState } from "react";
import PropTypes from "prop-types";

export default function HiddenGemCard({ image, title, description }) {
    const [imageError, setImageError] = useState(false);

    return (
        <div
            className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-[1.02] flex-shrink-0"
            style={{
                width: "332px",
                height: "361.3606872558594px",
            }}
        >
            {/* Left Border Line */}
            <div
                className="absolute left-0 top-0 bottom-0 z-20"
                style={{}}
            ></div>

            {/* Background Image - No Blur */}
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

            {/* Semi-transparent Grey Overlay at Bottom */}
            <div
                className="absolute bottom-0 left-0 right-0 z-10"
                style={{
                    height: "105px",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                }}
            ></div>

            {/* Content - positioned at bottom left */}
            <div
                className="relative z-20 h-full flex flex-col justify-end text-white"
                style={{
                    paddingLeft: "24px",
                    paddingRight: "24px",
                    paddingBottom: "32.52px",
                    fontFamily: "Montserrat, sans-serif",
                }}
            >
                {/* Title */}
                <h3
                    style={{
                        marginTop: "14.75px",
                        marginBottom: 0,
                        fontSize: "12.14px",
                        fontWeight: 700,
                        lineHeight: "1.3",
                        color: "#FFFFFF",
                        fontFamily: "Montserrat, sans-serif",
                    }}
                >
                    {title}
                </h3>
                {/* Description */}
                <p
                    style={{
                        marginTop: "5.2px",
                        marginBottom: 0,
                        fontSize: "11.27px",
                        fontWeight: 600,
                        color: "#FFFFFF",
                        fontFamily: "Montserrat, sans-serif",
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
