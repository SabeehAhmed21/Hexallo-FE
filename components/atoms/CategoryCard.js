"use client";

import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

export default function CategoryCard({
    image,
    title,
    rating,
    cardWidth,
    cardHeight,
}) {
    const [imageError, setImageError] = useState(false);
    const cardRef = useRef(null);

    useEffect(() => {
        const updateStyles = () => {
            if (cardRef.current) {
                if (window.innerWidth >= 1350) {
                    // 1350px and above: use custom dimensions if provided
                    if (cardWidth && cardHeight) {
                        cardRef.current.style.width = cardWidth;
                        cardRef.current.style.height = cardHeight;
                    } else {
                        cardRef.current.style.width = "";
                        cardRef.current.style.height = "";
                    }
                } else {
                    // Below 1350px: use responsive classes, clear inline styles
                    cardRef.current.style.width = "";
                    cardRef.current.style.height = "";
                }
            }
        };

        updateStyles();
        window.addEventListener("resize", updateStyles);
        return () => window.removeEventListener("resize", updateStyles);
    }, [cardWidth, cardHeight]);

    return (
        <div
            ref={cardRef}
            className="relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer bg-gray-600 flex-shrink-0 w-64 h-48 sm:w-72 sm:h-56 md:w-80 md:h-60 lg:w-96 lg:h-64 xl:w-[400px] xl:h-[280px]"
            style={
                !cardWidth || !cardHeight ? { aspectRatio: "4/3" } : undefined
            }
        >
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

            {/* Rating Badge */}
            <div className="absolute top-3 left-3 bg-gray-700 rounded-md px-2 py-1 z-10">
                <span className="text-xs font-bold text-white">{rating}</span>
            </div>

            {/* Text Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 z-10">
                <h3 className="text-xl font-bold mb-1 text-center">{title}</h3>
                <p className="text-base font-medium">Explore</p>
            </div>
        </div>
    );
}

CategoryCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    cardWidth: PropTypes.string,
    cardHeight: PropTypes.string,
};
