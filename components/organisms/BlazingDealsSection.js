"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import CountdownTimer from "../atoms/CountdownTimer";
import OfferCard from "../atoms/OfferCard";
import PropTypes from "prop-types";

export default function BlazingDealsSection({ title, offers }) {
    const swiperRef = useRef(null);

    return (
        <section
            className="py-12 bg-white"
            style={{ paddingLeft: "39px", paddingRight: "39px" }}
        >
            <div
                style={{
                    maxWidth: "1440px",
                    marginLeft: "auto",
                    marginRight: "auto",
                }}
            >
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                    {/* Left Section */}
                    <div className="flex-1 lg:max-w-md">
                        <h2
                            className="font-bold mb-4"
                            style={{
                                color: "#484848",
                                fontSize: "18.37px",
                                fontWeight: 700,
                            }}
                        >
                            {title}
                        </h2>
                        <p
                            className="mb-6 leading-relaxed"
                            style={{
                                color: "#5B5F62",
                                fontSize: "14px",
                                fontWeight: 400,
                            }}
                        >
                            Don&apos;t miss our most exciting limited-time
                            offers and new-user specials.
                        </p>
                        <button
                            className="px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-colors mb-8"
                            style={{
                                backgroundColor: "#484848",
                                color: "#FFFFFF",
                                fontSize: "14px",
                            }}
                        >
                            Explore Offers Now
                        </button>
                        <CountdownTimer />
                    </div>

                    {/* Right Section - Carousel */}
                    <div className="flex-1 lg:flex-[2] relative">
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={14}
                            slidesPerView="auto"
                            loop={true}
                            loopedSlides={offers.length}
                            navigation={{
                                prevEl: ".swiper-button-prev-custom",
                                nextEl: ".swiper-button-next-custom",
                            }}
                            onSwiper={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                            style={{
                                paddingLeft: "40px",
                                paddingRight: "40px",
                            }}
                            breakpoints={{
                                320: {
                                    spaceBetween: 14,
                                },
                            }}
                        >
                            {offers.map((offer, index) => (
                                <SwiperSlide
                                    key={index}
                                    style={{ width: "354px" }}
                                >
                                    <OfferCard {...offer} />
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Custom Navigation Buttons */}
                        <button
                            className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors"
                            onClick={() => swiperRef.current?.slidePrev()}
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
                        <button
                            className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors"
                            onClick={() => swiperRef.current?.slideNext()}
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
        </section>
    );
}

BlazingDealsSection.propTypes = {
    title: PropTypes.string.isRequired,
    offers: PropTypes.arrayOf(PropTypes.object).isRequired,
};
