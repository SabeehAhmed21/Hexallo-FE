import EventCard from "../atoms/EventCard";
import DestinationCard from "../atoms/DestinationCard";
import HiddenGemCard from "../atoms/HiddenGemCard";
import ExclusiveCard from "../atoms/ExclusiveCard";
import CategoryCard from "../atoms/CategoryCard";
import GlobalHighlightCard from "../atoms/GlobalHighlightCard";
import PropTypes from "prop-types";

export default function CardWrapper({ cardType, cardData, index, ...props }) {
    const cardComponents = {
        event: EventCard,
        destination: DestinationCard,
        hiddenGem: HiddenGemCard,
        exclusive: ExclusiveCard,
        category: CategoryCard,
        globalHighlight: GlobalHighlightCard,
    };

    const CardComponent = cardComponents[cardType];

    if (!CardComponent) {
        console.warn(`Unknown card type: ${cardType}`);
        return null;
    }

    return <CardComponent key={index} {...cardData} {...props} index={index} />;
}

CardWrapper.propTypes = {
    cardType: PropTypes.oneOf([
        "event",
        "destination",
        "hiddenGem",
        "exclusive",
        "category",
        "globalHighlight",
    ]).isRequired,
    cardData: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
};
