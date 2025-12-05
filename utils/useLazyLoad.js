"use client";

import { useState, useEffect, useRef } from "react";

export function useLazyLoad(options = {}) {
    const {
        threshold = 0.1,
        rootMargin = "50px",
        delay = 500,
        minDelay = 300,
    } = options;

    const [isVisible, setIsVisible] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);

                        // Add delay before loading content
                        const loadDelay =
                            Math.random() * (delay - minDelay) + minDelay;

                        setTimeout(() => {
                            setIsLoaded(true);
                        }, loadDelay);

                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold,
                rootMargin,
            }
        );

        observer.observe(element);

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [threshold, rootMargin, delay, minDelay]);

    return { elementRef, isVisible, isLoaded };
}
