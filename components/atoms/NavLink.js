import PropTypes from "prop-types";

export default function NavLink({ children, active = false, className = "" }) {
    const isWhite = className.includes("text-white");
    const baseColor = isWhite ? "text-white" : "text-gray-700";
    // MainNav (with white text) uses hexallo-nav, SubNav uses hexallo-business
    const hoverBorder = isWhite
        ? "hover:border-hexallo-nav"
        : "hover:border-hexallo-business";
    const activeBorder = isWhite
        ? "border-hexallo-nav"
        : "border-hexallo-business";

    return (
        <a
            href="/"
            className={`text-[9px] sm:text-[10px] md:text-[11px] lg:text-[12px] font-medium ${baseColor} hover:border-b-2 ${hoverBorder} transition-colors ${
                active ? `border-b-2 ${activeBorder} pb-1` : ""
            } ${className}`}
        >
            {children}
        </a>
    );
}

NavLink.propTypes = {
    children: PropTypes.node.isRequired,
    active: PropTypes.bool,
    className: PropTypes.string,
};
