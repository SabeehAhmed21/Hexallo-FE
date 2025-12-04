"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import SearchBar from "../molecules/SearchBar";

export default function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        { image: "/header2.jpg" },
        { image: "/header2.jpg" },
        { image: "/header2.jpg" },
        { image: "/header2.jpg" },
        { image: "/header2.jpg" },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="w-full py-6 ">
            <div>
                <div
                    className="relative rounded-xl overflow-hidden mx-auto"
                    style={{
                        height: "570px",
                    }}
                >
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <Image
                            src={slides[currentSlide].image}
                            alt="Hero background"
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* Dark overlay for better text readability */}
                        <div className="absolute inset-0 bg-black/20"></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col items-center justify-center">
                        <div className="text-center mb-8 flex flex-col items-center">
                            <h1 className="font-bold text-white mb-2 drop-shadow-lg leading-tight text-[36px] font-montserrat">
                                Discover, Book & Enjoy What&apos;s
                            </h1>
                            <h1 className="font-bold text-white mb-5 drop-shadow-lg leading-tight text-[36px] font-montserrat">
                                Happening Around You
                            </h1>
                            <p className="text-white drop-shadow-md text-sm font-montserrat">
                                From local events to world-famous experiences —
                                all in one place.
                            </p>
                        </div>
                        <div className="flex justify-center w-full px-4 sm:px-0">
                            <SearchBar />
                        </div>
                    </div>
                </div>

                {/* Carousel Indicators - Outside the hero section */}
                <div className="flex justify-center gap-2.5 mt-4">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-2.5 h-2.5 rounded-full transition-all ${
                                index === currentSlide
                                    ? "bg-[#AE6F28]"
                                    : "bg-[#D9D9D9] hover:bg-[#D9D9D9]"
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
