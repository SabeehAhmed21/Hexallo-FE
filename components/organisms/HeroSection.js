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
        <div className="w-full px-6 py-6">
            <div className="max-w-[1920px] mx-auto">
                <div className="relative w-full h-[570px] rounded-xl overflow-hidden">
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
                    <div className="relative z-10 h-full flex flex-col items-center justify-center px-8 md:px-24 lg:px-[413px] py-16 md:py-24 lg:py-[161px]">
                        <div className="text-center mb-10 w-full flex flex-col items-center">
                            <h1 className="text-[36px] font-bold text-white mb-2 drop-shadow-lg leading-tight whitespace-nowrap">
                                Discover, Book & Enjoy What's
                            </h1>
                            <h1 className="text-[36px] font-bold text-white mb-5 drop-shadow-lg leading-tight whitespace-nowrap">
                                Happening Around You
                            </h1>
                            <p className="text-[14px] text-white drop-shadow-md whitespace-nowrap">
                                From local events to world-famous experiences -
                                all in one place.
                            </p>
                        </div>
                        <div className="w-full max-w-5xl">
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
