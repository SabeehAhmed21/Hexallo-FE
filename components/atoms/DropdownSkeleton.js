"use client";

import Skeleton from "./Skeleton";
import PropTypes from "prop-types";

export default function DropdownSkeleton({ className = "" }) {
    return (
        <div className={`flex items-center gap-1.5 ${className}`}>
            <Skeleton
                variant="rectangular"
                width="16px"
                height="16px"
                style={{ borderRadius: "2px" }}
            />
            <Skeleton
                variant="text"
                width="70px"
                height="12px"
                style={{ borderRadius: "2px" }}
            />
            <Skeleton
                variant="rectangular"
                width="12px"
                height="12px"
                style={{ borderRadius: "2px" }}
            />
        </div>
    );
}

DropdownSkeleton.propTypes = {
    className: PropTypes.string,
};
