"use client";

import CountdownTimer from "../atoms/CountdownTimer";
import SectionWrapper from "./SectionWrapper";
import PropTypes from "prop-types";

export default function BlazingDealsSection({ title, offers }) {
    return (
        <section className="py-8 md:py-12 bg-white w-full overflow-hidden">
            <div className="w-full">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center lg:items-start">
                    {/* Left Section - Fixed padding from viewport edge */}
                    <div
                        className="w-full lg:flex-1 lg:max-w-md flex-shrink-0 px-4 lg:px-0 mx-auto lg:mx-0 pl-4 lg:pl-[2.8rem]"
                        style={{
                            maxWidth: "448px",
                        }}
                    >
                        <div>
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
                    </div>

                    {/* Right Section - Cards extend to right edge of viewport */}
                    <div className="w-full lg:flex-[2] min-w-0 flex-shrink-0 overflow-visible">
                        <div className="w-full pl-4 lg:pl-8 pr-0 overflow-visible">
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
            </div>
        </section>
    );
}

BlazingDealsSection.propTypes = {
    title: PropTypes.string.isRequired,
    offers: PropTypes.arrayOf(PropTypes.object).isRequired,
};
