import SectionHeader from "../molecules/SectionHeader";
import CardWrapper from "../molecules/CardWrapper";
import PropTypes from "prop-types";

export default function SectionWrapper({
    title,
    cards = [],
    cardType = "event",
    backgroundColor = "#FFFFFF",
    alignLeft = false,
    showArrow = true,
    cardMarginLeft = null,
    cardGap = "16px",
    cardJustifyContent = "center",
    isScrollable = true,
    layoutType = "flex", // "flex" or "grid"
    customCardProps = {},
}) {
    // Determine if title should have margin
    const shouldAlignLeft = alignLeft || title === "Ghana's Top 10s";

    let shouldHaveCardMargin = "0";
    if (cardMarginLeft !== null) {
        shouldHaveCardMargin = cardMarginLeft;
    } else if (title === "Buzzing Destinations") {
        shouldHaveCardMargin = "2rem";
    }

    return (
        <section
            className={`py-8 ${isScrollable ? "overflow-hidden" : ""}`}
            style={{
                paddingLeft: "39px",
                paddingRight: "39px",
                backgroundColor: backgroundColor,
            }}
        >
            <div
                style={{
                    maxWidth: "1440px",
                    marginLeft: "auto",
                    marginRight: "auto",
                }}
            >
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
                    {isScrollable && (
                        <div
                            className="overflow-x-auto pb-4 scrollbar-hide"
                            style={{ width: "100%" }}
                        >
                            <div
                                className={
                                    layoutType === "grid"
                                        ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3"
                                        : "flex"
                                }
                                style={{
                                    gap: cardGap,
                                    justifyContent: cardJustifyContent,
                                    marginLeft: shouldHaveCardMargin,
                                }}
                            >
                                {cards.map((cardData, index) => (
                                    <CardWrapper
                                        key={index}
                                        cardType={cardType}
                                        cardData={cardData}
                                        index={index}
                                        {...customCardProps}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                    {!isScrollable && layoutType === "grid" && (
                        <div
                            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3"
                            style={{
                                gap: cardGap,
                                marginLeft: shouldHaveCardMargin,
                            }}
                        >
                            {cards.map((cardData, index) => (
                                <CardWrapper
                                    key={index}
                                    cardType={cardType}
                                    cardData={cardData}
                                    index={index}
                                    {...customCardProps}
                                />
                            ))}
                        </div>
                    )}
                    {!isScrollable && layoutType !== "grid" && (
                        <div
                            className="flex"
                            style={{
                                gap: cardGap,
                                justifyContent: cardJustifyContent,
                                width: "100%",
                                marginLeft: shouldHaveCardMargin,
                            }}
                        >
                            {cards.map((cardData, index) => (
                                <CardWrapper
                                    key={index}
                                    cardType={cardType}
                                    cardData={cardData}
                                    index={index}
                                    {...customCardProps}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

SectionWrapper.propTypes = {
    title: PropTypes.string.isRequired,
    cards: PropTypes.arrayOf(PropTypes.object).isRequired,
    cardType: PropTypes.oneOf([
        "event",
        "destination",
        "hiddenGem",
        "exclusive",
        "category",
        "globalHighlight",
    ]).isRequired,
    backgroundColor: PropTypes.string,
    alignLeft: PropTypes.bool,
    showArrow: PropTypes.bool,
    cardMarginLeft: PropTypes.string,
    cardGap: PropTypes.string,
    cardJustifyContent: PropTypes.string,
    isScrollable: PropTypes.bool,
    layoutType: PropTypes.oneOf(["flex", "grid"]),
    customCardProps: PropTypes.object,
};
