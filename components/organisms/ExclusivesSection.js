import SectionWrapper from "./SectionWrapper";
import PropTypes from "prop-types";

export default function ExclusivesSection({ title, cards }) {
    return (
        <SectionWrapper
            title={title}
            cards={cards}
            cardType="exclusive"
            backgroundColor="#FFFFFF"
        />
    );
}

ExclusivesSection.propTypes = {
    title: PropTypes.string.isRequired,
    cards: PropTypes.arrayOf(PropTypes.object).isRequired,
};
