import ExclusiveCard from "../atoms/ExclusiveCard";
import PropTypes from "prop-types";

export default function ExclusivesSection({ title, cards }) {
    return (
        <section
            className="py-8 bg-white"
            style={{ paddingLeft: "39px", paddingRight: "39px" }}
        >
            {/* Section Header */}
            <div className="mb-6">
                <div className="flex items-center gap-2">
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
            </div>

            {/* Cards Grid */}
            <div className="flex gap-6">
                {cards.map((card, index) => (
                    <ExclusiveCard key={index} {...card} />
                ))}
            </div>
        </section>
    );
}

ExclusivesSection.propTypes = {
    title: PropTypes.string.isRequired,
    cards: PropTypes.arrayOf(PropTypes.object).isRequired,
};
