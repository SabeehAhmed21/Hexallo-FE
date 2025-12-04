"use client";

import SectionHeader from "../molecules/SectionHeader";
import CardWrapper from "../molecules/CardWrapper";
import ScrollableCardContainer from "../molecules/ScrollableCardContainer";
import PropTypes from "prop-types";

export default function SectionWrapper({
    title,
    cards = [],
    cardType = "event",
    backgroundColor = "#FFFFFF",
    showArrow = true,
}) {
    return (
        <section
            className="py-8"
            style={{
                backgroundColor: backgroundColor,
            }}
        >
            <div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <SectionHeader
                        title={title}
                        alignLeft={false}
                        showArrow={showArrow}
                    />

                    {/* Responsive Cards Container */}
                    <div className="w-full -mx-4 sm:mx-0">
                        {/* Exclusive cards: Only 2 cards, side by side on medium+ screens */}
                        {cardType === "exclusive" ? (
                            <div className="flex flex-col sm:flex-row overflow-x-auto sm:overflow-x-visible pb-4 scrollbar-hide gap-2 sm:gap-2 md:gap-4 2xl:gap-4 px-4 sm:px-0">
                                {cards.slice(0, 2).map((cardData, index) => (
                                    <CardWrapper
                                        key={index}
                                        cardType={cardType}
                                        cardData={cardData}
                                        index={index}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="px-4 lg:px-1 sm:px-4">
                                <ScrollableCardContainer
                                    gap="8px"
                                    cardJustifyContent="flex-start"
                                >
                                    {cards.map((cardData, index) => (
                                        <CardWrapper
                                            key={index}
                                            cardType={cardType}
                                            cardData={cardData}
                                            index={index}
                                        />
                                    ))}
                                </ScrollableCardContainer>
                            </div>
                        )}
                    </div>
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
    showArrow: PropTypes.bool,
};
