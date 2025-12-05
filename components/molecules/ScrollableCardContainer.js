"use client";

import { useRef, useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import PropTypes from "prop-types";

export default function ScrollableCardContainer({
    children,
    gap = "8px",
    cardJustifyContent = "flex-start",
    cardMarginLeft = "0",
    alwaysShowArrows = false,
    showPartialLastCard = false,
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

            // Show arrows based on alwaysShowArrows prop or default behavior
            if (alwaysShowArrows || showPartialLastCard) {
                // Always show arrows when there's overflow, regardless of screen size
                // Show left arrow if scrolled past start, right arrow if not at end
                if (hasOverflow) {
                    setShowLeftArrow(scrollLeft > 5);
                    const canScrollRight =
                        scrollLeft < scrollWidth - clientWidth - 5;
                    setShowRightArrow(canScrollRight);
                    // Always show right arrow initially if at start and there's overflow
                    if (scrollLeft === 0 || scrollLeft < 10) {
                        setShowRightArrow(true);
                    }
                } else {
                    // If no overflow detected yet, still try to show arrows
                    // This handles cases where content hasn't fully rendered
                    setShowLeftArrow(scrollLeft > 5);
                    // For showPartialLastCard, always show right arrow to indicate more content
                    setShowRightArrow(true);
                }
            } else {
                // Default behavior: Only show arrows if not on large screen and cards overlap
                const shouldShow = hasOverflow && !isLargeScreen;
                setShowLeftArrow(shouldShow && scrollLeft > 0);
                setShowRightArrow(
                    shouldShow && scrollLeft < scrollWidth - clientWidth - 10
                );
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
    }, [
        children,
        isLargeScreen,
        alwaysShowArrows,
        showPartialLastCard,
        checkScrollButtons,
    ]);

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
            {/* Left Arrow - Always visible when alwaysShowArrows or showPartialLastCard is true */}
            {alwaysShowArrows || showPartialLastCard
                ? showLeftArrow && (
                      <button
                          onClick={() => scroll("left")}
                          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all hover:scale-110"
                          aria-label="Scroll left"
                      >
                          <FiChevronLeft className="w-6 h-6 text-gray-700" />
                      </button>
                  )
                : !isLargeScreen &&
                  needsScrolling &&
                  showLeftArrow && (
                      <button
                          onClick={() => scroll("left")}
                          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all hover:scale-110"
                          aria-label="Scroll left"
                      >
                          <FiChevronLeft className="w-6 h-6 text-gray-700" />
                      </button>
                  )}

            {/* Container - Scrollable when alwaysShowArrows is true or below 1440px */}
            <div
                ref={scrollContainerRef}
                className={`pb-4 ${
                    alwaysShowArrows || !isLargeScreen || showPartialLastCard
                        ? "overflow-x-auto scrollbar-hide"
                        : "overflow-x-visible"
                }`}
                style={{
                    width: "100%",
                    scrollBehavior:
                        alwaysShowArrows ||
                        !isLargeScreen ||
                        showPartialLastCard
                            ? "smooth"
                            : "auto",
                    WebkitOverflowScrolling:
                        alwaysShowArrows ||
                        !isLargeScreen ||
                        showPartialLastCard
                            ? "touch"
                            : "auto",
                }}
                onScroll={checkScrollButtons}
            >
                <div
                    className="flex flex-nowrap"
                    style={{
                        gap: gap,
                        justifyContent: "flex-start",
                        marginLeft: cardMarginLeft || "0",
                        marginRight: "0",
                        minWidth:
                            alwaysShowArrows || !isLargeScreen
                                ? "max-content"
                                : "auto",
                        paddingRight: showPartialLastCard
                            ? "0"
                            : alwaysShowArrows || !isLargeScreen
                            ? "0"
                            : "0",
                        paddingLeft: "0",
                        width: "100%",
                    }}
                >
                    {children}
                </div>
            </div>

            {/* Right Arrow - Always visible when alwaysShowArrows or showPartialLastCard is true */}
            {alwaysShowArrows || showPartialLastCard
                ? showRightArrow && (
                      <button
                          onClick={() => scroll("right")}
                          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all hover:scale-110"
                          aria-label="Scroll right"
                      >
                          <FiChevronRight className="w-6 h-6 text-gray-700" />
                      </button>
                  )
                : !isLargeScreen &&
                  needsScrolling &&
                  showRightArrow && (
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
    alwaysShowArrows: PropTypes.bool,
    showPartialLastCard: PropTypes.bool,
};
