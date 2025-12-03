import SectionWrapper from "./SectionWrapper";
import PropTypes from "prop-types";

export default function EventSection({ title, events }) {
    return (
        <SectionWrapper
            title={title}
            cards={events}
            cardType="event"
            backgroundColor="#FFFFFF"
        />
    );
}

EventSection.propTypes = {
    title: PropTypes.string.isRequired,
    events: PropTypes.arrayOf(PropTypes.object).isRequired,
};
