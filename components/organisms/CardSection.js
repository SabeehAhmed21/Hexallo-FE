import SectionHeader from "../molecules/SectionHeader";
import PropTypes from "prop-types";

export default function CardSection({
    title,
    children,
    backgroundColor = "#FFFFFF",
    alignLeft = false,
    showArrow = true,
    cardMarginLeft = null,
    cardGap = "8px",
    cardJustifyContent = "center",
    isScrollable = true,
    customCardWidth = null,
    customCardHeight = null,
}) {
    // Determine if title should have margin
    const titlesWithMargin = [
        "Tonight's Spotlight",
        "Hot This Week",
        "Unmissable",
        "For you",
        "Buzzing Destinations",
    ];
    const shouldAlignLeft = alignLeft || title === "Ghana's Top 10s";
    const shouldHaveCardMargin =
        cardMarginLeft !== null
            ? cardMarginLeft
            : title === "Buzzing Destinations"
            ? "2rem"
            : "0";

    return (
        <section
            className={`py-8 ${isScrollable ? "overflow-hidden" : ""}`}
            style={{
                backgroundColor: backgroundColor,
            }}
        >
            <div>
                {/* Section Wrapper */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    {/* Section Header */}
                    <SectionHeader
                        title={title}
                        alignLeft={shouldAlignLeft}
                        showArrow={showArrow}
                    />

                    {/* Cards Container */}
                    {isScrollable ? (
                        <div
                            className="overflow-x-auto pb-4 scrollbar-hide"
                            style={{ width: "100%" }}
                        >
                            <div
                                className="flex"
                                style={{
                                    gap: cardGap,
                                    justifyContent: cardJustifyContent,
                                    marginLeft: shouldHaveCardMargin,
                                }}
                            >
                                {children}
                            </div>
                        </div>
                    ) : title === "Explore Ghana" ? (
                        <div
                            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3"
                            style={{
                                gap: cardGap,
                            }}
                        >
                            {children}
                        </div>
                    ) : (
                        <div
                            className="flex"
                            style={{
                                gap: cardGap,
                                justifyContent: cardJustifyContent,
                                width: "100%",
                                marginLeft: shouldHaveCardMargin,
                            }}
                        >
                            {children}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

CardSection.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    backgroundColor: PropTypes.string,
    alignLeft: PropTypes.bool,
    showArrow: PropTypes.bool,
    cardMarginLeft: PropTypes.string,
    cardGap: PropTypes.string,
    cardJustifyContent: PropTypes.string,
    isScrollable: PropTypes.bool,
    customCardWidth: PropTypes.string,
    customCardHeight: PropTypes.string,
};
