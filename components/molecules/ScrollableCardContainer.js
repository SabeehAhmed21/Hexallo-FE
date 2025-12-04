"use client";

import { useRef, useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import PropTypes from "prop-types";

export default function ScrollableCardContainer({
    children,
    gap = "8px",
    cardJustifyContent = "flex-start",
    cardMarginLeft = "0",
}) {
    const scrollContainerRef = useRef(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(false);
    const [needsScrolling, setNeedsScrolling] = useState(false);
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    const checkScreenSize = () => {
        setIsLargeScreen(window.innerWidth >= 1440); // 1440px breakpoint
    };

    const checkScrollButtons = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } =
                scrollContainerRef.current;
            const hasOverflow = scrollWidth > clientWidth + 5; // 5px threshold for rounding errors

            setNeedsScrolling(hasOverflow);

            // Only show arrows if not on large screen and cards overlap
            if (hasOverflow && !isLargeScreen) {
                setShowLeftArrow(scrollLeft > 0);
                setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
            } else {
                setShowLeftArrow(false);
                setShowRightArrow(false);
            }
        }
    };

    useEffect(() => {
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            // Check immediately
            checkScrollButtons();

            // Check after a short delay to ensure content is rendered
            const timeoutId = setTimeout(() => {
                checkScrollButtons();
            }, 100);

            container.addEventListener("scroll", checkScrollButtons);
            window.addEventListener("resize", checkScrollButtons);

            return () => {
                clearTimeout(timeoutId);
                container.removeEventListener("scroll", checkScrollButtons);
                window.removeEventListener("resize", checkScrollButtons);
            };
        }
    }, [children, isLargeScreen]);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const scrollAmount = 400; // Scroll by 400px
            const currentScroll = container.scrollLeft;
            const maxScroll = container.scrollWidth - container.clientWidth;

            let newScrollLeft;
            if (direction === "left") {
                newScrollLeft = Math.max(0, currentScroll - scrollAmount);
            } else {
                newScrollLeft = Math.min(
                    maxScroll,
                    currentScroll + scrollAmount
                );
            }

            container.scrollTo({
                left: newScrollLeft,
                behavior: "smooth",
            });

            // Update button visibility after scroll
            setTimeout(() => {
                checkScrollButtons();
            }, 100);
        }
    };

    return (
        <div className="relative w-full">
            {/* Left Arrow - Only show when cards overlap and NOT on large screens */}
            {!isLargeScreen && needsScrolling && showLeftArrow && (
                <button
                    onClick={() => scroll("left")}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all hover:scale-110"
                    aria-label="Scroll left"
                >
                    <FiChevronLeft className="w-6 h-6 text-gray-700" />
                </button>
            )}

            {/* Container - Scrollable below 1440px, visible above 1440px */}
            <div
                ref={scrollContainerRef}
                className={`pb-4 ${
                    !isLargeScreen
                        ? "overflow-x-auto scrollbar-hide"
                        : "overflow-x-visible"
                }`}
                style={{
                    width: "100%",
                    scrollBehavior: !isLargeScreen ? "smooth" : "auto",
                    WebkitOverflowScrolling: !isLargeScreen ? "touch" : "auto",
                }}
                onScroll={checkScrollButtons}
            >
                <div
                    className="flex flex-nowrap"
                    style={{
                        gap: gap,
                        justifyContent: isLargeScreen
                            ? "flex-start"
                            : cardJustifyContent,
                        marginLeft: cardMarginLeft,
                        minWidth: !isLargeScreen ? "max-content" : "auto",
                        paddingRight: !isLargeScreen ? "1rem" : "0",
                        width: isLargeScreen ? "100%" : "auto",
                    }}
                >
                    {children}
                </div>
            </div>

            {/* Right Arrow - Only show when cards overlap and NOT on large screens */}
            {!isLargeScreen && needsScrolling && showRightArrow && (
                <button
                    onClick={() => scroll("right")}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all hover:scale-110"
                    aria-label="Scroll right"
                >
                    <FiChevronRight className="w-6 h-6 text-gray-700" />
                </button>
            )}
        </div>
    );
}

ScrollableCardContainer.propTypes = {
    children: PropTypes.node.isRequired,
    gap: PropTypes.string,
    cardJustifyContent: PropTypes.string,
    cardMarginLeft: PropTypes.string,
};
