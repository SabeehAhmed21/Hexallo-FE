import SectionWrapper from "./SectionWrapper";
import PropTypes from "prop-types";

export default function HiddenGemsSection({ title, gems }) {
    return (
        <SectionWrapper
            title={title}
            cards={gems}
            cardType="hiddenGem"
            backgroundColor="#FFFFFF"
            cardGap="8px"
            cardJustifyContent="flex-start"
            cardMarginLeft="2rem"
            isScrollable={true}
        />
    );
}

HiddenGemsSection.propTypes = {
    title: PropTypes.string.isRequired,
    gems: PropTypes.arrayOf(PropTypes.object).isRequired,
};
