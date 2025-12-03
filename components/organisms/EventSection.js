import EventCard from "../atoms/EventCard";
import PropTypes from "prop-types";

export default function EventSection({ title, events }) {
    const titlesWithMargin = [
        "Tonight's Spotlight",
        "Hot This Week",
        "Unmissable",
        "For you",
    ];
    const hasMargin = titlesWithMargin.includes(title);
    const alignLeft = title === "Ghana's Top 10s";

    return (
        <section
            className="py-8 bg-white overflow-hidden"
            style={{
                paddingLeft: "39px",
                paddingRight: "39px",
            }}
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
                            marginLeft: hasMargin || alignLeft ? "2rem" : "0",
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

            {/* Scrollable Event Cards - Centered with 39px margins */}
            <div className="overflow-x-auto pb-4 scrollbar-hide">
                <div
                    className="flex gap-4"
                    style={{
                        justifyContent: alignLeft ? "flex-start" : "center",
                        marginLeft: alignLeft ? "2rem" : "0",
                    }}
                >
                    {events.map((event, index) => (
                        <EventCard
                            key={index}
                            {...event}
                            cardWidth={
                                title === "Ghana's Top 10s"
                                    ? "321.7113952636719px"
                                    : undefined
                            }
                            cardHeight={
                                title === "Ghana's Top 10s"
                                    ? "407.64178466796875px"
                                    : undefined
                            }
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

EventSection.propTypes = {
    title: PropTypes.string.isRequired,
    events: PropTypes.arrayOf(PropTypes.object).isRequired,
};
