"use client";

import { useState } from "react";
import PropTypes from "prop-types";

export default function GlobalHighlightCard({ image, location, title, cta }) {
    const [imageError, setImageError] = useState(false);

    return (
        <div
            className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex-shrink-0"
            style={{
                width: "326px",
                height: "387.7423095703125px",
            }}
        >
            {/* Left Border Line */}
            <div
                className="absolute left-0 top-0 bottom-0 z-20"
                style={{
                    width: "2px",
                }}
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
                {/* Location - Paris, Tokyo, New York */}
                <p
                    style={{
                        marginTop: "14.75px",
                        marginBottom: 0,
                        fontSize: "11.27px",
                        fontWeight: 600,
                        color: "#FFFFFF",
                        fontFamily: "Montserrat, sans-serif",
                    }}
                >
                    {location}
                </p>
                {/* Title - Culinary nights & art walks, etc. */}
                <h3
                    style={{
                        marginTop: "5.2px",
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
                {/* CTA with arrow - Explore Now */}
                <a
                    href="#"
                    className="inline-flex items-center text-white hover:text-hexallo-orange transition-colors"
                    style={{
                        marginTop: "8.67px",
                        marginBottom: 0,
                        fontSize: "9.54px",
                        fontWeight: 500,
                        fontFamily: "Montserrat, sans-serif",
                    }}
                >
                    {cta}
                    <svg
                        className="w-4 h-4 ml-1"
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

GlobalHighlightCard.propTypes = {
    image: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cta: PropTypes.string.isRequired,
};
