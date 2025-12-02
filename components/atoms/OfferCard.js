import PropTypes from "prop-types";

export default function OfferCard({ title, subtitle, discount, gradient }) {
    const bgClass = gradient
        ? "bg-gradient-to-b from-pink-100 via-pink-50 to-orange-100"
        : "bg-gray-100";

    return (
        <div
            className={`flex-shrink-0 w-64 h-48 rounded-xl p-6 shadow-lg relative ${bgClass} ${
                gradient ? "border-2 border-yellow-400" : ""
            }`}
        >
            <div className="flex flex-col justify-between h-full">
                <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-0.5">
                        {title}
                    </h3>
                    <p className="text-lg font-bold text-gray-900">
                        {subtitle}
                    </p>
                </div>
                <div>
                    <p className="text-xs text-gray-700 uppercase mb-1 font-medium">
                        UP TO
                    </p>
                    <p className="text-4xl font-bold text-gray-900">
                        {discount}
                    </p>
                </div>
            </div>
        </div>
    );
}

OfferCard.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    discount: PropTypes.string.isRequired,
    gradient: PropTypes.bool,
};
