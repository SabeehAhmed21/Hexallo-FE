import SectionHeader from "../molecules/SectionHeader";
import CardWrapper from "../molecules/CardWrapper";
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
                    <div className="w-full">
                        {/* Exclusive cards: Only 2 cards, side by side on medium+ screens */}
                        {cardType === "exclusive" ? (
                            <>
                                {/* Mobile: Horizontal scroll with smaller cards */}
                                <div className="flex overflow-x-auto pb-4 scrollbar-hide md:hidden gap-2">
                                    {cards
                                        .slice(0, 2)
                                        .map((cardData, index) => (
                                            <CardWrapper
                                                key={index}
                                                cardType={cardType}
                                                cardData={cardData}
                                                index={index}
                                            />
                                        ))}
                                </div>

                                {/* Medium and Large: 2 cards side by side */}
                                <div className="hidden md:flex md:gap-4 md:justify-center">
                                    {cards
                                        .slice(0, 2)
                                        .map((cardData, index) => (
                                            <CardWrapper
                                                key={index}
                                                cardType={cardType}
                                                cardData={cardData}
                                                index={index}
                                            />
                                        ))}
                                </div>
                            </>
                        ) : (
                            <>
                                {/* Mobile: Horizontal scroll */}
                                <div className="flex overflow-x-auto pb-4 scrollbar-hide md:hidden gap-2">
                                    {cards.map((cardData, index) => (
                                        <CardWrapper
                                            key={index}
                                            cardType={cardType}
                                            cardData={cardData}
                                            index={index}
                                        />
                                    ))}
                                </div>

                                {/* Tablet and Desktop: Grid layout */}
                                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                                    {cards.map((cardData, index) => (
                                        <CardWrapper
                                            key={index}
                                            cardType={cardType}
                                            cardData={cardData}
                                            index={index}
                                        />
                                    ))}
                                </div>
                            </>
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
