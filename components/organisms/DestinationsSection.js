import DestinationCard from "../atoms/DestinationCard";
import PropTypes from "prop-types";

export default function DestinationsSection({ title, destinations }) {
    return (
        <section className="py-8 px-6 bg-white">
            <div className="max-w-[1920px] mx-auto">
                {/* Section Header */}
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">
                        {title}
                    </h2>
                    <button className="flex items-center text-gray-700 hover:text-hexallo-orange transition-colors">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </button>
                </div>

                {/* Scrollable Destination Cards */}
                <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide -mx-6 px-6">
                    {destinations.map((destination, index) => (
                        <DestinationCard key={index} {...destination} />
                    ))}
                </div>
            </div>
        </section>
    );
}

DestinationsSection.propTypes = {
    title: PropTypes.string.isRequired,
    destinations: PropTypes.arrayOf(PropTypes.object).isRequired,
};
