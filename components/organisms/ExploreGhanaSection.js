"use client";

import { useState, useEffect } from "react";
import SectionWrapper from "./SectionWrapper";
import ScrollableCardContainer from "../molecules/ScrollableCardContainer";
import CardWrapper from "../molecules/CardWrapper";
import PropTypes from "prop-types";

export default function ExploreGhanaSection({ title, categories }) {
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsLargeScreen(window.innerWidth >= 1350);
        };
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);
    // First row custom dimensions
    const firstRowDimensions = [
        { width: "313.9233703613281px", height: "222.5647735595703px" },
        { width: "460.5663146972656px", height: "221.64117431640625px" },
        { width: "531.3306274414062px", height: "222.5647735595703px" },
    ];

    // Second row custom dimensions
    const secondRowDimensions = [
        { width: "713.7252807617188px", height: "233.84161376953125px" },
        { width: "609.0048828125px", height: "233.84161376953125px" },
    ];

    // Third row custom dimensions
    const thirdRowDimensions = [
        { width: "399.56414794921875px", height: "234.3876953125px" },
        { width: "316.0572204589844px", height: "234.38790893554688px" },
        { width: "591.0787963867188px", height: "234.33982849121094px" },
    ];

    return (
        <section
            className="w-full"
            style={{
                backgroundColor: "#FAF8ED",
                marginTop: "37.33px",
                paddingTop: "2rem",
                paddingBottom: "2rem",
            }}
        >
            <div
                className="w-full"
                style={{ maxWidth: "84rem", width: "100%", margin: "auto" }}
            >
                <div style={{ marginBottom: 0 }}>
                    <SectionWrapper
                        title={title}
                        cards={[]}
                        cardType="category"
                        backgroundColor="#FAF8ED"
                        showArrow={false}
                        cardGap="8px"
                        cardMarginLeft="0"
                        isScrollable={false}
                        layoutType="grid"
                        removePadding={true}
                    />
                </div>
                {/* Large screens (>=1350px): Original 3-row layout with custom dimensions */}
                {isLargeScreen && (
                    <div
                        className="w-full"
                        style={{ backgroundColor: "#FAF8ED" }}
                    >
                        {/* First Row: images 38, 39, 40 (indices 3, 4, 5) */}
                        <div
                            className="flex flex-wrap justify-center"
                            style={{
                                gap: "8px",
                                marginBottom: "16px",
                            }}
                        >
                            {categories.slice(3, 6).map((category, index) => (
                                <CardWrapper
                                    key={`first-row-${category.title}-${index}`}
                                    cardType="category"
                                    cardData={{
                                        ...category,
                                        cardWidth:
                                            firstRowDimensions[index].width,
                                        cardHeight:
                                            firstRowDimensions[index].height,
                                    }}
                                    index={index}
                                />
                            ))}
                        </div>
                        {/* Second Row: images 41, 42 (indices 6, 7) */}
                        <div
                            className="flex flex-wrap justify-center"
                            style={{
                                gap: "8px",
                                marginBottom: "16px",
                            }}
                        >
                            {categories.slice(6, 8).map((category, index) => (
                                <CardWrapper
                                    key={`second-row-${category.title}-${index}`}
                                    cardType="category"
                                    cardData={{
                                        ...category,
                                        cardWidth:
                                            secondRowDimensions[index].width,
                                        cardHeight:
                                            secondRowDimensions[index].height,
                                    }}
                                    index={index}
                                />
                            ))}
                        </div>
                        {/* Third Row: images 43, 44, 45 (indices 0, 1, 2) */}
                        <div
                            className="flex flex-wrap justify-center"
                            style={{
                                gap: "8px",
                            }}
                        >
                            {categories.slice(0, 3).map((category, index) => (
                                <CardWrapper
                                    key={`third-row-${category.title}-${index}`}
                                    cardType="category"
                                    cardData={{
                                        ...category,
                                        cardWidth:
                                            thirdRowDimensions[index].width,
                                        cardHeight:
                                            thirdRowDimensions[index].height,
                                    }}
                                    index={index}
                                />
                            ))}
                        </div>
                    </div>
                )}

                {/* Below 1350px: Horizontal scroll with arrow navigation */}
                {!isLargeScreen && (
                    <div
                        className="px-4 sm:px-0 w-full"
                        style={{ backgroundColor: "#FAF8ED" }}
                    >
                        <ScrollableCardContainer
                            gap="8px"
                            cardJustifyContent="flex-start"
                        >
                            {categories.map((category, index) => (
                                <CardWrapper
                                    key={`category-${category.title}-${index}`}
                                    cardType="category"
                                    cardData={category}
                                    index={index}
                                />
                            ))}
                        </ScrollableCardContainer>
                    </div>
                )}
            </div>
        </section>
    );
}

ExploreGhanaSection.propTypes = {
    title: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};
