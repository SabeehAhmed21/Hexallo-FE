"use client";

import CountdownTimer from "../atoms/CountdownTimer";
import SectionWrapper from "./SectionWrapper";
import PropTypes from "prop-types";

export default function BlazingDealsSection({ title, offers }) {
    return (
        <section className="py-12 bg-white">
            <div>
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                    {/* Left Section */}
                    <div className="flex-1 lg:max-w-md">
                        <h2
                            className="mb-4"
                            style={{
                                fontFamily: "Montserrat, sans-serif",
                                fontSize: "18px",
                                fontWeight: 600,
                                lineHeight: "100%",
                                letterSpacing: "0%",
                                color: "#484848",
                            }}
                        >
                            {title}
                        </h2>
                        <p
                            className="mb-6"
                            style={{
                                fontFamily: "Montserrat, sans-serif",
                                fontSize: "11.9px",
                                fontWeight: 400,
                                lineHeight: "15px",
                                letterSpacing: "0%",
                                color: "#8A8A8A",
                            }}
                        >
                            Don&apos;t miss our most exciting limited-time
                            offers and new-user specials.
                        </p>
                        <button
                            className="hover:opacity-90 transition-colors"
                            style={{
                                width: "144px",
                                height: "34px",
                                borderRadius: "15px",
                                paddingTop: "10px",
                                paddingRight: "17px",
                                paddingBottom: "10px",
                                paddingLeft: "17px",
                                marginTop: "28px",
                                marginBottom: "41px",
                                backgroundColor: "#2D3134",
                                fontFamily: "Inter, sans-serif",
                                fontSize: "12px",
                                fontWeight: 400,
                                lineHeight: "14px",
                                letterSpacing: "0%",
                                color: "#FFFFFF",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "10px",
                            }}
                        >
                            Explore Offers Now
                        </button>
                        <CountdownTimer />
                    </div>

                    {/* Right Section - Cards with Arrow Navigation using SectionWrapper */}
                    <div className="flex-1 lg:flex-[2]">
                        <SectionWrapper
                            title=""
                            cards={offers}
                            cardType="offer"
                            backgroundColor="transparent"
                            showArrow={false}
                            removePadding={true}
                            renderAsDiv={true}
                            alwaysShowArrows={true}
                            showPartialLastCard={true}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

BlazingDealsSection.propTypes = {
    title: PropTypes.string.isRequired,
    offers: PropTypes.arrayOf(PropTypes.object).isRequired,
};
