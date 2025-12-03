import SectionWrapper from "./SectionWrapper";
import PropTypes from "prop-types";

export default function DestinationsSection({ title, destinations }) {
    return (
        <SectionWrapper
            title={title}
            cards={destinations}
            cardType="destination"
            backgroundColor="#FFFFFF"
            cardGap="16px"
            cardJustifyContent="flex-start"
            cardMarginLeft={title === "Buzzing Destinations" ? "2rem" : "0"}
            isScrollable={true}
        />
    );
}

DestinationsSection.propTypes = {
    title: PropTypes.string.isRequired,
    destinations: PropTypes.arrayOf(PropTypes.object).isRequired,
};
