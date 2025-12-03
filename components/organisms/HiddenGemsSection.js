import HiddenGemCard from "../atoms/HiddenGemCard";
import PropTypes from "prop-types";

export default function HiddenGemsSection({ title, gems }) {
    return (
        <section
            className="py-8 bg-white overflow-hidden"
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

            {/* Scrollable Cards */}
            <div className="overflow-x-auto pb-4 scrollbar-hide">
                <div className="flex gap-4 justify-center">
                    {gems.map((gem, index) => (
                        <HiddenGemCard key={index} {...gem} />
                    ))}
                </div>
            </div>
        </section>
    );
}

HiddenGemsSection.propTypes = {
    title: PropTypes.string.isRequired,
    gems: PropTypes.arrayOf(PropTypes.object).isRequired,
};
