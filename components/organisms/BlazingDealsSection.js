"use client";

import { useRef } from "react";
import CountdownTimer from "../atoms/CountdownTimer";
import OfferCard from "../atoms/OfferCard";
import PropTypes from "prop-types";

export default function BlazingDealsSection({ title, offers }) {
    const carouselRef = useRef(null);

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: -280,
                behavior: "smooth",
            });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: 280,
                behavior: "smooth",
            });
        }
    };

    return (
        <section
            className="py-12 bg-white"
            style={{ paddingLeft: "39px", paddingRight: "39px" }}
        >
            <div className="max-w-[1920px] mx-auto">
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                    {/* Left Section */}
                    <div className="flex-1 lg:max-w-md">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            {title}
                        </h2>
                        <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                            Don't miss our most exciting limited-time offers and
                            new-user specials.
                        </p>
                        <button className="bg-gray-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors mb-8 text-sm">
                            Explore Offers Now
                        </button>
                        <CountdownTimer />
                    </div>

                    {/* Right Section - Carousel */}
                    <div className="flex-1 lg:flex-[2] relative">
                        <div className="relative">
                            {/* Carousel Container */}
                            <div className="relative">
                                {/* Left Arrow - positioned on left edge */}
                                <button
                                    onClick={scrollLeft}
                                    className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors"
                                >
                                    <svg
                                        className="w-5 h-5 text-gray-700"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 19l-7-7 7-7"
                                        />
                                    </svg>
                                </button>

                                {/* Carousel */}
                                <div
                                    ref={carouselRef}
                                    className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pl-12 pr-12"
                                >
                                    {offers.map((offer, index) => (
                                        <OfferCard key={index} {...offer} />
                                    ))}
                                </div>

                                {/* Right Arrow - positioned on right edge */}
                                <button
                                    onClick={scrollRight}
                                    className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors"
                                >
                                    <svg
                                        className="w-5 h-5 text-gray-700"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </button>
                            </div>
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
