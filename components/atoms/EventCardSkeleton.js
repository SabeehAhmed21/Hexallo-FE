"use client";

import Skeleton from "./Skeleton";
import PropTypes from "prop-types";

export default function EventCardSkeleton({
    cardWidth = "332px",
    cardHeight,
    imageHeight = "222px",
    contentHeight = "162px",
    sectionTitle,
}) {
    const isForYouSection = sectionTitle === "For you";
    const sectionsWithNewStyle = [
        "Tonight's Spotlight",
        "Hot This Week",
        "Unmissable",
        "Ghana's Top 10s",
    ];
    const shouldApplyNewStyle =
        sectionTitle && sectionsWithNewStyle.includes(sectionTitle);
    const sectionsWith2pxPadding = ["Unmissable", "Ghana's Top 10s"];
    const shouldApply2pxPadding =
        sectionTitle && sectionsWith2pxPadding.includes(sectionTitle);

    return (
        <div
            className="flex-shrink-0 overflow-hidden"
            style={{
                width: cardWidth,
                height: cardHeight,
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
            }}
        >
            {/* Image Skeleton */}
            <Skeleton
                variant="rectangular"
                style={{
                    width: "100%",
                    height: imageHeight,
                    borderRadius:
                        shouldApplyNewStyle || isForYouSection
                            ? "16px 16px 16px 16px"
                            : "12px 12px 0 0",
                }}
            />

            {/* Content Skeleton */}
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
                {/* Tag and Rating */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "6.5px",
                    }}
                >
                    <Skeleton
                        variant="rectangular"
                        width="61px"
                        height="21px"
                        style={{ borderRadius: "8px" }}
                    />
                    {!isForYouSection && (
                        <Skeleton
                            variant="rectangular"
                            width="40px"
                            height="16px"
                        />
                    )}
                </div>

                {/* Title */}
                <Skeleton
                    variant="text"
                    width="80%"
                    height="14px"
                    style={{
                        marginBottom: isForYouSection ? "12px" : "10px",
                    }}
                />

                {/* Date (conditional) */}
                <Skeleton
                    variant="text"
                    width="60%"
                    height="12px"
                    style={{ marginBottom: "4px" }}
                />

                {/* Time */}
                <Skeleton
                    variant="text"
                    width="70%"
                    height="12px"
                    style={{ marginBottom: "4px" }}
                />

                {/* Location */}
                <Skeleton
                    variant="text"
                    width="65%"
                    height="12px"
                    style={{ marginBottom: "7px" }}
                />

                {/* Price */}
                <Skeleton
                    variant="text"
                    width="50%"
                    height="12px"
                    style={{ marginBottom: "18px" }}
                />
            </div>
        </div>
    );
}

EventCardSkeleton.propTypes = {
    cardWidth: PropTypes.string,
    cardHeight: PropTypes.string,
    imageHeight: PropTypes.string,
    contentHeight: PropTypes.string,
    sectionTitle: PropTypes.string,
};
