"use client";

import Skeleton from "./Skeleton";

export default function ExclusiveCardSkeleton() {
    return (
        <div className="relative rounded-xl overflow-hidden w-full sm:flex-1 sm:min-w-0 sm:max-w-[calc((100%-0.5rem)/2)] md:max-w-[calc((100%-1rem)/2)] lg:max-w-[calc((100%-1rem)/2)] xl:max-w-[calc((100%-1rem)/2)] 2xl:max-w-[667px] h-[250px] sm:h-[280px] md:h-[300px] lg:h-[310px] 2xl:h-[316px]">
            {/* Left Border Line */}
            <div
                className="absolute left-0 top-0 bottom-0 z-20"
                style={{
                    width: "2px",
                    backgroundColor: "transparent",
                }}
            ></div>

            {/* Background Image Skeleton */}
            <div className="absolute inset-0">
                <Skeleton
                    variant="rectangular"
                    className="w-full h-full"
                    style={{
                        borderRadius: "0.75rem",
                    }}
                />
            </div>

            {/* Semi-transparent Grey Overlay at Bottom */}
            <div
                className="absolute bottom-0 left-0 right-0 z-10"
                style={{
                    height: "111px",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                }}
            ></div>

            {/* Content Skeleton - positioned at bottom left */}
            <div
                className="relative z-20 h-full flex flex-col justify-end"
                style={{
                    paddingLeft: "24px",
                    paddingRight: "24px",
                    paddingBottom: "32.52px",
                }}
            >
                {/* Title Skeleton */}
                <Skeleton
                    variant="text"
                    width="60%"
                    height="14px"
                    style={{
                        marginTop: "14.75px",
                        marginBottom: "0",
                        borderRadius: "2px",
                    }}
                />
                {/* Description Skeleton */}
                <Skeleton
                    variant="text"
                    width="85%"
                    height="13px"
                    style={{
                        marginTop: "5.2px",
                        marginBottom: "0",
                        borderRadius: "2px",
                    }}
                />
                <Skeleton
                    variant="text"
                    width="70%"
                    height="13px"
                    style={{
                        marginTop: "4px",
                        marginBottom: "0",
                        borderRadius: "2px",
                    }}
                />
                {/* CTA Skeleton */}
                <div
                    className="flex items-center"
                    style={{
                        marginTop: "8.67px",
                    }}
                >
                    <Skeleton
                        variant="text"
                        width="80px"
                        height="10px"
                        style={{
                            borderRadius: "2px",
                        }}
                    />
                    <Skeleton
                        variant="rectangular"
                        width="16px"
                        height="16px"
                        style={{
                            marginLeft: "4px",
                            borderRadius: "2px",
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
