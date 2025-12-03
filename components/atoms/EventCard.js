"use client";

import { useState } from "react";
import PropTypes from "prop-types";

export default function EventCard({
    image,
    tag,
    title,
    date,
    time,
    location,
    price,
    rating,
    cardWidth,
    cardHeight,
}) {
    const [imageError, setImageError] = useState(false);

    const width = cardWidth || "332px";
    const height = cardHeight || "402px";
    const isGhanasTop10s = cardHeight === "407.64178466796875px";
    const imageHeight = isGhanasTop10s ? "240px" : "240px";
    const contentHeight = isGhanasTop10s ? "162px" : "162px";

    return (
        <div
            className="flex-shrink-0 bg-amber-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            style={{ width, height }}
        >
            {/* Image */}
            <div
                className="relative w-full bg-gradient-to-br from-gray-300 to-gray-400 rounded-t-xl overflow-hidden"
                style={{ height: imageHeight }}
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
                        Event Image
                    </div>
                )}
            </div>

            {/* Content */}
            <div
                className="flex flex-col"
                style={{
                    height: contentHeight,
                    padding: "16px",
                }}
            >
                <div>
                    {/* Tag and Rating */}
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: "6.5px",
                        }}
                    >
                        <span
                            style={{
                                display: "flex",
                                backgroundColor: "#F7E4B6",
                                color: "#000000",
                                width: "61px",
                                height: "21px",
                                fontSize: "11px",
                                fontWeight: 400,
                                borderRadius: "8px",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            {tag}
                        </span>
                        {rating && (
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "4px",
                                }}
                            >
                                <svg
                                    style={{
                                        width: "16px",
                                        height: "16px",
                                        color: "#FBBF24",
                                    }}
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                </svg>
                                <span
                                    style={{
                                        fontSize: "11.9px",
                                        fontWeight: 400,
                                        color: "#000000",
                                    }}
                                >
                                    {rating}
                                </span>
                            </div>
                        )}
                    </div>

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

                    {/* Date */}
                    {date && (
                        <p
                            style={{
                                fontSize: "11.9px",
                                fontWeight: 400,
                                color: "#5B5F62",
                                marginBottom: 0,
                                marginTop: 0,
                            }}
                        >
                            {date}
                        </p>
                    )}

                    {/* Time */}
                    <p
                        style={{
                            fontSize: "11.9px",
                            fontWeight: 400,
                            color: "#5B5F62",
                            marginBottom: 0,
                            marginTop: 0,
                        }}
                    >
                        {time}
                    </p>

                    {/* Location */}
                    <p
                        style={{
                            fontSize: "11.9px",
                            fontWeight: 400,
                            color: "#5B5F62",
                            marginBottom: "7px",
                            marginTop: 0,
                        }}
                    >
                        {location}
                    </p>

                    {/* Price */}
                    <div
                        style={{
                            marginBottom: "18px",
                        }}
                    >
                        <p
                            style={{
                                fontSize: "11.9px",
                                fontWeight: 400,
                                color: "#000000",
                                margin: 0,
                            }}
                        >
                            {price.includes("USD") ? (
                                <>
                                    {price.substring(0, price.indexOf("USD"))}
                                    <span style={{ fontWeight: 600 }}>
                                        {price.substring(price.indexOf("USD"))}
                                    </span>
                                </>
                            ) : (
                                price
                            )}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

EventCard.propTypes = {
    image: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string,
    time: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    rating: PropTypes.string,
    cardWidth: PropTypes.string,
    cardHeight: PropTypes.string,
};
