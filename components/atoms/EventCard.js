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
    sectionTitle,
}) {
    const [imageError, setImageError] = useState(false);

    // Sections that need 326px width
    const sectionsWith326pxWidth = [
        "Tonight's Spotlight",
        "Hot This Week",
        "Unmissable",
        "Ghana's Top 10s",
    ];
    const shouldUse326pxWidth =
        sectionTitle && sectionsWith326pxWidth.includes(sectionTitle);
    const width = cardWidth || (shouldUse326pxWidth ? "326px" : "332px");
    const height = cardHeight;
    const isGhanasTop10s = cardHeight === "407.64178466796875px";
    const imageHeight = isGhanasTop10s ? "240px" : "240px";
    const contentHeight = isGhanasTop10s ? "162px" : "162px";

    // Sections that need the new styling
    const sectionsWithNewStyle = [
        "Tonight's Spotlight",
        "Hot This Week",
        "Unmissable",
        "Ghana's Top 10s",
    ];
    // Sections that need the shadow
    const sectionsWithShadow = [
        "Tonight's Spotlight",
        "Hot This Week",
        "Unmissable",
    ];
    // "For you" section styling
    const isForYouSection = sectionTitle === "For you";
    // Sections with 2px left/right padding
    const sectionsWith2pxPadding = ["Unmissable", "Ghana's Top 10s"];
    const shouldApply2pxPadding =
        sectionTitle && sectionsWith2pxPadding.includes(sectionTitle);
    const shouldApplyNewStyle =
        sectionTitle && sectionsWithNewStyle.includes(sectionTitle);
    const shouldApplyShadow =
        sectionTitle && sectionsWithShadow.includes(sectionTitle);

    return (
        <div
            className="flex-shrink-0 overflow-hidden transition-shadow"
            style={{
                width,
                height,
                backgroundColor: isForYouSection
                    ? "#FFFFFF"
                    : shouldApplyNewStyle
                    ? "#FAF8ED"
                    : "#FEF3C7",
                borderRadius:
                    shouldApplyNewStyle || isForYouSection ? "16px" : "12px",
                border: isForYouSection
                    ? "1px solid rgba(0, 0, 0, 0.03)"
                    : shouldApplyNewStyle
                    ? "2px solid #FFFFFF"
                    : "none",
                paddingTop: isForYouSection
                    ? "7px"
                    : shouldApplyNewStyle
                    ? "8px"
                    : "0",
                paddingRight: isForYouSection
                    ? "7px"
                    : shouldApplyNewStyle
                    ? "7px"
                    : "0",
                paddingBottom: isForYouSection
                    ? "7px"
                    : shouldApplyNewStyle
                    ? "11px"
                    : "0",
                paddingLeft: isForYouSection
                    ? "7px"
                    : shouldApplyNewStyle
                    ? "7px"
                    : "0",
                boxShadow: isForYouSection
                    ? "4px 4px 26px 0px rgba(0, 0, 0, 0.1)"
                    : shouldApplyShadow
                    ? "0px 24px 90px 0px rgba(192, 188, 161, 0.22)"
                    : shouldApplyNewStyle
                    ? "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
                    : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
        >
            {/* Image */}
            <div
                className="relative w-full bg-gradient-to-br from-gray-300 to-gray-400 overflow-hidden"
                style={{
                    height: imageHeight,
                    borderRadius:
                        shouldApplyNewStyle || isForYouSection
                            ? "16px 16px 16px 16px"
                            : "12px 12px 0 0",
                }}
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
                    padding: shouldApply2pxPadding
                        ? "15px 2px 11px 2px"
                        : isForYouSection
                        ? "15px 12px 11px 12px"
                        : shouldApplyNewStyle
                        ? "15px 12px 11px 12px"
                        : "16px",
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
                        {rating && !isForYouSection && (
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
                            marginBottom: isForYouSection ? "12px" : "10px",
                            marginTop: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent:
                                isForYouSection && rating
                                    ? "space-between"
                                    : "flex-start",
                        }}
                    >
                        <span>{title}</span>
                        {isForYouSection && rating && (
                            <span
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "4px",
                                }}
                            >
                                <img
                                    src="/icons/star.svg"
                                    alt="Star"
                                    style={{
                                        width: "9px",
                                        height: "9px",
                                    }}
                                />
                                <span
                                    style={{
                                        fontFamily: "Inter, sans-serif",
                                        fontSize: "9px",
                                        fontWeight: 500,
                                        color: "#5B5F62",
                                    }}
                                >
                                    {rating}
                                </span>
                            </span>
                        )}
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
                            {price && price.includes("USD") ? (
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
    sectionTitle: PropTypes.string,
};
