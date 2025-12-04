"use client";

import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

export default function CategoryCard({
    image,
    title,
    rating,
    cardWidth,
    cardHeight,
    isFirstRowFirstImage = false,
    isFirstRowSecondImage = false,
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
            {isFirstRowFirstImage ? (
                <div
                    className="absolute z-10"
                    style={{
                        width: "48.83px",
                        height: "21.37px",
                        top: "21.37px",
                        left: "27.9px",
                        borderRadius: "11.02px",
                        backgroundColor: "#FFFFFF",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <span
                        style={{
                            fontFamily: "Inter, sans-serif",
                            fontSize: "12.86px",
                            fontWeight: 500,
                            lineHeight: "12.86px",
                            letterSpacing: "0%",
                            color: "#2D3134",
                        }}
                    >
                        {rating}
                    </span>
                </div>
            ) : isFirstRowSecondImage ? (
                <div
                    className="absolute z-10"
                    style={{
                        width: "51.47px",
                        height: "18.08px",
                        top: "16.87px",
                        left: "24px",
                        borderRadius: "12.91px",
                        backgroundColor: "#2D3134",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <span
                        style={{
                            fontFamily: "Inter, sans-serif",
                            fontSize: "12.86px",
                            fontWeight: 500,
                            lineHeight: "12.86px",
                            letterSpacing: "0%",
                            color: "#FFFFFF",
                        }}
                    >
                        {rating}
                    </span>
                </div>
            ) : (
                <div
                    className="absolute top-3 left-3 z-10"
                    style={{
                        width: "48.83px",
                        height: "21.37px",
                        borderRadius: "11.02px",
                        backgroundColor: "#FFFFFF",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <span
                        style={{
                            fontFamily: "Inter, sans-serif",
                            fontSize: "12.86px",
                            fontWeight: 500,
                            lineHeight: "12.86px",
                            letterSpacing: "0%",
                            color: "#2D3134",
                        }}
                    >
                        {rating}
                    </span>
                </div>
            )}

            {/* Text Content - Bottom Left */}
            <div className="absolute inset-0 flex flex-col items-start justify-end text-white p-4 z-10">
                <h3
                    style={{
                        fontFamily: "Montserrat, sans-serif",
                        fontSize: "12.05px",
                        fontWeight: 600,
                        lineHeight: "18.37px",
                        letterSpacing: "0%",
                        color: "#FFFFFF",
                        marginBottom: "4px",
                        marginTop: 0,
                    }}
                >
                    {title}
                </h3>
                <p
                    style={{
                        fontFamily: "Montserrat, sans-serif",
                        fontSize: "10.33px",
                        fontWeight: 400,
                        lineHeight: "12.86px",
                        letterSpacing: "0%",
                        color: "#FFFFFF",
                        margin: 0,
                    }}
                >
                    Explore
                </p>
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
    isFirstRowFirstImage: PropTypes.bool,
    isFirstRowSecondImage: PropTypes.bool,
};
