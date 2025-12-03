import SectionWrapper from "./SectionWrapper";
import PropTypes from "prop-types";

export default function GlobalHighlightsSection({ title, highlights }) {
    return (
        <SectionWrapper
            title={title}
            cards={highlights}
            cardType="globalHighlight"
            backgroundColor="#FFFFFF"
            alignLeft={false}
            cardGap="16px"
            cardJustifyContent="flex-start"
            cardMarginLeft="2rem"
            isScrollable={true}
        />
    );
}

GlobalHighlightsSection.propTypes = {
    title: PropTypes.string.isRequired,
    highlights: PropTypes.arrayOf(PropTypes.object).isRequired,
};
