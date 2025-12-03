"use client";

import { useState, useEffect } from "react";
import SectionWrapper from "./SectionWrapper";
import CategoryCard from "../atoms/CategoryCard";
import PropTypes from "prop-types";

export default function ExploreGhanaSection({ title, categories }) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 640);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
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
            style={{
                backgroundColor: "#FAF8ED",
                marginTop: "37.33px",
                marginBottom: "24.4px",
            }}
        >
            <div>
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
                    />
                </div>
                {/* First Row with Custom Dimensions */}
                <div
                    className="flex flex-wrap justify-center"
                    style={{
                        gap: "8px",
                        marginBottom: "16px",
                    }}
                >
                    {categories.slice(0, 3).map((category, index) => (
                        <div
                            key={`first-row-${category.title}-${index}`}
                            className="w-full sm:w-auto"
                            style={{
                                width: isMobile
                                    ? "100%"
                                    : firstRowDimensions[index].width,
                            }}
                        >
                            <CategoryCard
                                {...category}
                                cardWidth={
                                    isMobile
                                        ? undefined
                                        : firstRowDimensions[index].width
                                }
                                cardHeight={
                                    isMobile
                                        ? undefined
                                        : firstRowDimensions[index].height
                                }
                            />
                        </div>
                    ))}
                </div>
                {/* Second Row with Custom Dimensions - Only 2 images */}
                <div
                    className="flex flex-wrap justify-center"
                    style={{
                        gap: "8px",
                        marginBottom: "16px",
                    }}
                >
                    {categories.slice(3, 5).map((category, index) => (
                        <div
                            key={`second-row-${category.title}-${index}`}
                            className="w-full sm:w-auto"
                            style={{
                                width: isMobile
                                    ? "100%"
                                    : secondRowDimensions[index].width,
                            }}
                        >
                            <CategoryCard
                                {...category}
                                cardWidth={
                                    isMobile
                                        ? undefined
                                        : secondRowDimensions[index].width
                                }
                                cardHeight={
                                    isMobile
                                        ? undefined
                                        : secondRowDimensions[index].height
                                }
                            />
                        </div>
                    ))}
                </div>
                {/* Third Row with Custom Dimensions - 3 images */}
                <div
                    className="flex flex-wrap justify-center"
                    style={{
                        gap: "8px",
                    }}
                >
                    {categories.slice(5, 8).map((category, index) => (
                        <div
                            key={`third-row-${category.title}-${index}`}
                            className="w-full sm:w-auto"
                            style={{
                                width: isMobile
                                    ? "100%"
                                    : thirdRowDimensions[index].width,
                            }}
                        >
                            <CategoryCard
                                {...category}
                                cardWidth={
                                    isMobile
                                        ? undefined
                                        : thirdRowDimensions[index].width
                                }
                                cardHeight={
                                    isMobile
                                        ? undefined
                                        : thirdRowDimensions[index].height
                                }
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

ExploreGhanaSection.propTypes = {
    title: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};
