import SectionWrapper from "./SectionWrapper";
import PropTypes from "prop-types";

export default function EventSection({ title, events }) {
    const isGhanasTop10s = title === "Ghana's Top 10s";
    const isBelowBuzzingDestinations = [
        "Discover Hidden Gems",
        "Explore Ghana",
        "Ghana's Top 10s",
        "Global Highlights",
    ].includes(title);

    return (
        <SectionWrapper
            title={title}
            cards={events}
            cardType="event"
            backgroundColor={isGhanasTop10s ? "#FAF8ED" : "#FFFFFF"}
            alignLeft={false}
            cardGap="16px"
            cardJustifyContent={
                isBelowBuzzingDestinations ? "flex-start" : "center"
            }
            cardMarginLeft={
                isGhanasTop10s || isBelowBuzzingDestinations ? "2rem" : null
            }
            isScrollable={true}
            customCardProps={
                isGhanasTop10s
                    ? {
                          cardWidth: "321.7113952636719px",
                          cardHeight: "407.64178466796875px",
                      }
                    : {}
            }
        />
    );
}

EventSection.propTypes = {
    title: PropTypes.string.isRequired,
    events: PropTypes.arrayOf(PropTypes.object).isRequired,
};
