"use client";

import SectionHeader from "../molecules/SectionHeader";
import SectionHeaderSkeleton from "../molecules/SectionHeaderSkeleton";
import CardWrapper from "../molecules/CardWrapper";
import EventCardSkeleton from "../atoms/EventCardSkeleton";
import ExclusiveCardSkeleton from "../atoms/ExclusiveCardSkeleton";
import OfferCardSkeleton from "../atoms/OfferCardSkeleton";
import ScrollableCardContainer from "../molecules/ScrollableCardContainer";
import { useLazyLoad } from "../../utils/useLazyLoad";
import PropTypes from "prop-types";

export default function SectionWrapper({
    title,
    cards = [],
    cardType = "event",
    backgroundColor = "#FFFFFF",
    showArrow = true,
    removePadding = false,
    renderAsDiv = false,
    alwaysShowArrows = false,
    showPartialLastCard = false,
}) {
    // For offer cards (BlazingDealsSection), skip lazy loading
    const { elementRef, isLoaded } = useLazyLoad({
        threshold: 0.1,
        rootMargin: "100px",
        delay: 800,
        minDelay: 400,
    });

    // For offer cards, always show content (no skeleton)
    const shouldShowSkeleton =
        cardType !== "offer" && !isLoaded && cards.length > 0;

    const Container = renderAsDiv ? "div" : "section";

    // Determine card dimensions based on section
    const getCardDimensions = () => {
        if (title === "Tonight's Spotlight") {
            return {
                width: "332.9px",
                height: "383.5px",
                imageHeight: "222px",
                contentHeight: "162px",
            };
        } else if (title === "Hot This Week") {
            return {
                width: "332px",
                height: "383px",
                imageHeight: "221px",
                contentHeight: "162px",
            };
        } else if (title === "Unmissable") {
            return {
                width: "332px",
                height: "405px",
                imageHeight: "222px",
                contentHeight: "162px",
            };
        } else if (title === "Ghana's Top 10s") {
            return {
                width: "326px",
                height: "407.64178466796875px",
                imageHeight: "240px",
                contentHeight: "162px",
            };
        }
        return {
            width: "332px",
            height: undefined,
            imageHeight: "240px",
            contentHeight: "162px",
        };
    };

    const cardDimensions = getCardDimensions();

    return (
        <Container
            ref={elementRef}
            className={removePadding ? "" : "py-8"}
            style={
                renderAsDiv
                    ? {}
                    : {
                          backgroundColor: backgroundColor,
                      }
            }
        >
            <div className="w-full">
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                    }}
                >
                    <div className="w-full">
                        {!isLoaded && cardType !== "offer" ? (
                            <SectionHeaderSkeleton showArrow={showArrow} />
                        ) : title ? (
                            <SectionHeader
                                title={title}
                                alignLeft={false}
                                showArrow={showArrow}
                            />
                        ) : null}
                    </div>

                    {/* Responsive Cards Container */}
                    <div className="w-full">
                        {shouldShowSkeleton ? (
                            cardType === "exclusive" ? (
                                <div className="flex flex-col sm:flex-row overflow-x-auto sm:overflow-x-visible pb-4 scrollbar-hide gap-2 sm:gap-2 md:gap-4 2xl:gap-4">
                                    {Array.from({
                                        length: Math.min(2, cards.length),
                                    }).map((_, index) => (
                                        <ExclusiveCardSkeleton
                                            key={`exclusive-skeleton-${title}-${index}`}
                                        />
                                    ))}
                                </div>
                            ) : (
                                <ScrollableCardContainer
                                    gap={
                                        title === "Tonight's Spotlight" ||
                                        title === "Hot This Week" ||
                                        title === "Unmissable"
                                            ? "10px"
                                            : title === "Ghana's Top 10s"
                                            ? "14px"
                                            : "8px"
                                    }
                                    cardJustifyContent="flex-start"
                                    alwaysShowArrows={alwaysShowArrows}
                                    showPartialLastCard={showPartialLastCard}
                                >
                                    {Array.from({
                                        length: Math.min(4, cards.length),
                                    }).map((_, index) => (
                                        <EventCardSkeleton
                                            key={`skeleton-${title}-${index}`}
                                            cardWidth={cardDimensions.width}
                                            cardHeight={cardDimensions.height}
                                            imageHeight={
                                                cardDimensions.imageHeight
                                            }
                                            contentHeight={
                                                cardDimensions.contentHeight
                                            }
                                            sectionTitle={title}
                                        />
                                    ))}
                                </ScrollableCardContainer>
                            )
                        ) : (isLoaded || cardType === "offer") &&
                          cards.length > 0 ? (
                            <>
                                {/* Exclusive cards: Only 2 cards, side by side on medium+ screens */}
                                {cardType === "exclusive" ? (
                                    <div className="flex flex-col sm:flex-row overflow-x-auto sm:overflow-x-visible pb-4 scrollbar-hide gap-2 sm:gap-2 md:gap-4 2xl:gap-4">
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
                                ) : (
                                    <div>
                                        <ScrollableCardContainer
                                            gap={
                                                title ===
                                                    "Tonight's Spotlight" ||
                                                title === "Hot This Week" ||
                                                title === "Unmissable"
                                                    ? "10px"
                                                    : title ===
                                                      "Ghana's Top 10s"
                                                    ? "14px"
                                                    : "8px"
                                            }
                                            cardJustifyContent="flex-start"
                                            alwaysShowArrows={alwaysShowArrows}
                                            showPartialLastCard={
                                                showPartialLastCard
                                            }
                                        >
                                            {cards.map((cardData, index) => (
                                                <CardWrapper
                                                    key={index}
                                                    cardType={cardType}
                                                    cardData={cardData}
                                                    index={index}
                                                    sectionTitle={title}
                                                />
                                            ))}
                                        </ScrollableCardContainer>
                                    </div>
                                )}
                            </>
                        ) : null}
                    </div>
                </div>
            </div>
        </Container>
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
        "offer",
    ]).isRequired,
    backgroundColor: PropTypes.string,
    showArrow: PropTypes.bool,
    removePadding: PropTypes.bool,
    renderAsDiv: PropTypes.bool,
    alwaysShowArrows: PropTypes.bool,
    showPartialLastCard: PropTypes.bool,
};
