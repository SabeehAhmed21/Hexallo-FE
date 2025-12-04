import EventCard from "../atoms/EventCard";
import DestinationCard from "../atoms/DestinationCard";
import HiddenGemCard from "../atoms/HiddenGemCard";
import ExclusiveCard from "../atoms/ExclusiveCard";
import CategoryCard from "../atoms/CategoryCard";
import GlobalHighlightCard from "../atoms/GlobalHighlightCard";
import OfferCard from "../atoms/OfferCard";
import PropTypes from "prop-types";

export default function CardWrapper({
    cardType,
    cardData,
    index,
    sectionTitle,
    ...props
}) {
    const cardComponents = {
        event: EventCard,
        destination: DestinationCard,
        hiddenGem: HiddenGemCard,
        exclusive: ExclusiveCard,
        category: CategoryCard,
        globalHighlight: GlobalHighlightCard,
        offer: OfferCard,
    };

    const CardComponent = cardComponents[cardType];

    if (!CardComponent) {
        console.warn(`Unknown card type: ${cardType}`);
        return null;
    }

    // For offer cards, wrap in a div with fixed width
    if (cardType === "offer") {
        return (
            <div key={index} style={{ width: "354px", flexShrink: 0 }}>
                <CardComponent
                    {...cardData}
                    {...props}
                    index={index}
                    sectionTitle={sectionTitle}
                />
            </div>
        );
    }

    return (
        <CardComponent
            key={index}
            {...cardData}
            {...props}
            index={index}
            sectionTitle={sectionTitle}
        />
    );
}

CardWrapper.propTypes = {
    cardType: PropTypes.oneOf([
        "event",
        "destination",
        "hiddenGem",
        "exclusive",
        "category",
        "globalHighlight",
        "offer",
    ]).isRequired,
    cardData: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    sectionTitle: PropTypes.string,
};
