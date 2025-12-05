"use client";

import Skeleton from "../atoms/Skeleton";

export default function SectionHeaderSkeleton({ showArrow = true }) {
    return (
        <div style={{ width: "100%", marginBottom: "24px" }}>
            <div
                className="flex items-center gap-2"
                style={{
                    marginLeft: "0",
                    justifyContent: "flex-start",
                }}
            >
                <Skeleton
                    variant="text"
                    width="200px"
                    height="18px"
                    style={{
                        borderRadius: "4px",
                    }}
                />
                {showArrow && (
                    <Skeleton
                        variant="rectangular"
                        width="12px"
                        height="13px"
                        style={{
                            borderRadius: "2px",
                        }}
                    />
                )}
            </div>
        </div>
    );
}
