"use client";

import Skeleton from "./Skeleton";
import PropTypes from "prop-types";

export default function NavLinkSkeleton({
    className = "",
    width = "60px",
    active = false,
}) {
    // Match NavLink styling - active has border-b-2 and pb-1
    const baseHeight = "12px";
    const activePadding = active ? "4px" : "0";

    return (
        <div
            className={className}
            style={{
                display: "inline-block",
                height: active
                    ? `calc(${baseHeight} + ${activePadding})`
                    : baseHeight,
            }}
        >
            <Skeleton
                variant="text"
                style={{
                    height: baseHeight,
                    width: width,
                    borderRadius: "2px",
                }}
            />
            {active && (
                <div
                    style={{
                        height: "2px",
                        width: width,
                        marginTop: "2px",
                        backgroundColor: "transparent",
                    }}
                />
            )}
        </div>
    );
}

NavLinkSkeleton.propTypes = {
    className: PropTypes.string,
    width: PropTypes.string,
    active: PropTypes.bool,
};
