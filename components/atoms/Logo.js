import PropTypes from "prop-types";

export default function Logo({ textColor = "text-gray-900", className = "" }) {
    return (
        <div className={`flex items-center gap-1 md:gap-2 ${className}`}>
            <img
                src="/hexalo_logo.png"
                alt="Hexallo Logo"
                className="h-5 md:h-6 lg:h-8 w-auto"
            />
            <span
                className={`text-sm md:text-base lg:text-xl font-bold ${textColor}`}
            >
                Hexallo
            </span>
        </div>
    );
}

Logo.propTypes = {
    textColor: PropTypes.string,
    className: PropTypes.string,
};
