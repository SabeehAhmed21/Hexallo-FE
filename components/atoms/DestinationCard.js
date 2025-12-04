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
        <div
            className="flex-shrink-0 bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            style={{ width: "332px" }}
        >
            {/* Image */}
            <div
                className="relative w-full h-56 bg-gradient-to-br from-gray-300 to-gray-400 overflow-hidden"
                style={{
                    borderRadius: "17.64px 17.64px 5.88px 5.88px",
                }}
            >
                {image && !imageError ? (
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                        style={{
                            borderRadius: "17.64px 17.64px 5.88px 5.88px",
                        }}
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
                <h3
                    style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "13.13px",
                        fontWeight: 600,
                        lineHeight: "100%",
                        letterSpacing: "0%",
                        color: "#000000",
                        marginBottom: "8px",
                        marginTop: 0,
                    }}
                >
                    {title}
                </h3>

                {/* Check-ins */}
                <p
                    style={{
                        fontFamily: "Montserrat, sans-serif",
                        fontSize: "13.02px",
                        fontWeight: 500,
                        lineHeight: "120%",
                        letterSpacing: "0%",
                        color: "rgba(0, 0, 0, 0.5)",
                        marginBottom: "8px",
                        marginTop: 0,
                    }}
                >
                    {checkIns}
                </p>

                {/* Description */}
                <p
                    style={{
                        fontFamily: "Montserrat, sans-serif",
                        fontSize: "13.02px",
                        fontWeight: 500,
                        lineHeight: "120%",
                        letterSpacing: "0%",
                        color: "rgba(0, 0, 0, 0.5)",
                        marginTop: 0,
                        marginBottom: 0,
                    }}
                >
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
