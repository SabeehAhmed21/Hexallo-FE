"use client";

import PropTypes from "prop-types";
import { useState } from "react";

export default function Dropdown({ children, icon, flag, className = "" }) {
    const [imageError, setImageError] = useState(false);
    const isWhite = className.includes("text-white");
    return (
        <div
            className={`flex items-center gap-1.5 cursor-pointer hover:text-hexallo-orange transition-colors ${className}`}
        >
            {icon && <span className="text-sm">{icon}</span>}
            {flag && !imageError && (
                <img
                    src={flag}
                    alt=""
                    className="w-5 h-4 object-contain rounded-sm flex-shrink-0"
                    onError={() => setImageError(true)}
                />
            )}
            <span
                className={`text-[9px] sm:text-[10px] md:text-[11px] lg:text-[12px] ${
                    isWhite ? "text-white" : "text-gray-700"
                }`}
            >
                {children}
            </span>
            <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                />
            </svg>
        </div>
    );
}

Dropdown.propTypes = {
    children: PropTypes.node.isRequired,
    icon: PropTypes.string,
    flag: PropTypes.string,
    className: PropTypes.string,
};
