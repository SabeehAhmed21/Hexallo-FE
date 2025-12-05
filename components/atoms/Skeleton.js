"use client";

import PropTypes from "prop-types";

export default function Skeleton({
    className = "",
    style = {},
    variant = "rectangular",
    width,
    height,
    ...props
}) {
    const baseClasses = "animate-pulse bg-gray-300 rounded";

    const variantClasses = {
        rectangular: "",
        circular: "rounded-full",
        text: "h-4",
    };

    const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

    return (
        <div
            className={classes}
            style={{
                width,
                height,
                ...style,
            }}
            {...props}
        />
    );
}

Skeleton.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    variant: PropTypes.oneOf(["rectangular", "circular", "text"]),
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
