import GlobalHighlightCard from "../atoms/GlobalHighlightCard";
import PropTypes from "prop-types";

export default function GlobalHighlightsSection({ title, highlights }) {
    return (
        <section
            className="py-8 overflow-hidden"
            style={{
                paddingLeft: "39px",
                paddingRight: "39px",
                backgroundColor: "rgb(254, 254, 253)",
            }}
        >
            {/* Section Header */}
            <div className="mb-6">
                <div
                    className="flex items-center gap-2"
                    style={{ marginLeft: "2rem" }}
                >
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
            <div
                className="flex"
                style={{
                    gap: "12.27px",
                    marginLeft: "2rem",
                }}
            >
                {highlights.map((highlight, index) => (
                    <GlobalHighlightCard key={index} {...highlight} />
                ))}
            </div>
        </section>
    );
}

GlobalHighlightsSection.propTypes = {
    title: PropTypes.string.isRequired,
    highlights: PropTypes.arrayOf(PropTypes.object).isRequired,
};
