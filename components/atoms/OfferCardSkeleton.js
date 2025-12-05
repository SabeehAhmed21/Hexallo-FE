"use client";

import Skeleton from "./Skeleton";

export default function OfferCardSkeleton() {
    return (
        <div
            className="rounded-xl relative overflow-hidden flex-shrink-0"
            style={{
                width: "354px",
                height: "381px",
                boxShadow:
                    "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            }}
        >
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

            {/* Content Overlay Skeleton */}
            <div
                className="absolute inset-0 flex flex-col justify-center items-center text-center"
                style={{
                    padding: "24px",
                }}
            >
                {/* Title Section */}
                <div className="flex flex-col items-center">
                    <Skeleton
                        variant="text"
                        width="100px"
                        height="18px"
                        style={{
                            marginBottom: "4px",
                            borderRadius: "2px",
                        }}
                    />
                    <Skeleton
                        variant="text"
                        width="80px"
                        height="18px"
                        style={{
                            marginBottom: "4px",
                            borderRadius: "2px",
                        }}
                    />
                </div>

                {/* Discount Section - positioned at bottom */}
                <div
                    className="flex flex-col items-center"
                    style={{ marginTop: "auto" }}
                >
                    <Skeleton
                        variant="text"
                        width="50px"
                        height="12px"
                        style={{
                            marginBottom: "4px",
                            borderRadius: "2px",
                        }}
                    />
                    <Skeleton
                        variant="text"
                        width="120px"
                        height="36px"
                        style={{
                            borderRadius: "2px",
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
