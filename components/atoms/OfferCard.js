"use client";

import { useState } from "react";
import PropTypes from "prop-types";

export default function OfferCard({
    title,
    subtitle,
    discount,
    image,
    isActive,
}) {
    const [imageError, setImageError] = useState(false);

    return (
        <div
            className="swiper-slide rounded-xl relative overflow-hidden"
            style={{
                width: "354px",
                height: "381px",
                border: isActive ? "2px solid #FBBF24" : "none",
                boxShadow:
                    "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                fontFamily: "Montserrat, sans-serif",
            }}
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
                    <div
                        className="w-full h-full"
                        style={{
                            background:
                                "linear-gradient(to bottom, #FCE7F3, #FDF2F8, #FED7AA)",
                        }}
                    ></div>
                )}
            </div>

            {/* Content Overlay */}
            <div
                className="absolute inset-0 flex flex-col justify-center items-center text-center"
                style={{
                    padding: "24px",
                    fontFamily: "Montserrat, sans-serif",
                }}
            >
                <div>
                    <h3
                        style={{
                            fontSize: "18px",
                            fontWeight: 700,
                            color: "#484848",
                            marginBottom: "4px",
                            fontFamily: "Montserrat, sans-serif",
                        }}
                    >
                        {title}
                    </h3>
                    {subtitle && (
                        <p
                            style={{
                                fontSize: "18px",
                                fontWeight: 700,
                                color: "#484848",
                                fontFamily: "Montserrat, sans-serif",
                            }}
                        >
                            {subtitle}
                        </p>
                    )}
                </div>
                <div style={{ marginTop: "auto" }}>
                    <p
                        style={{
                            fontSize: "12px",
                            color: "#484848",
                            textTransform: "uppercase",
                            marginBottom: "4px",
                            fontWeight: 500,
                            fontFamily: "Montserrat, sans-serif",
                        }}
                    >
                        UP TO
                    </p>
                    <p
                        style={{
                            fontSize: "36px",
                            fontWeight: 700,
                            color: "#484848",
                            fontFamily: "Montserrat, sans-serif",
                        }}
                    >
                        {discount}
                    </p>
                </div>
            </div>
        </div>
    );
}

OfferCard.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    discount: PropTypes.string.isRequired,
    image: PropTypes.string,
    isActive: PropTypes.bool,
};
