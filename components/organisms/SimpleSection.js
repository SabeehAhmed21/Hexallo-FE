import PropTypes from "prop-types";
import EventCard from "../atoms/EventCard";

export default function SimpleSection({ title, cards, showArrow = true }) {
    return (
        <section className="py-8 bg-white">
            <div className="mx-auto max-w-[1440px] px-[42px]">
                {/* Section Header */}
                <div className="flex items-center gap-2 mb-6">
                    <h2
                        className="text-2xl font-bold"
                        style={{
                            color: "#484848",
                            fontSize: "18.37px",
                            fontWeight: 700,
                        }}
                    >
                        {title}
                    </h2>
                    {showArrow && (
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
                    )}
                </div>

                {/* Cards Container */}
                <div className="flex overflow-x-auto pb-4 scrollbar-hide">
                    {cards.map((card, index) => (
                        <EventCard key={index} {...card} />
                    ))}
                </div>
            </div>
        </section>
    );
}

SimpleSection.propTypes = {
    title: PropTypes.string.isRequired,
    cards: PropTypes.arrayOf(PropTypes.object).isRequired,
    showArrow: PropTypes.bool,
};
