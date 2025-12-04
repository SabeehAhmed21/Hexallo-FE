import PropTypes from "prop-types";

export default function SectionHeader({
    title,
    hasMargin = false,
    alignLeft = false,
    showArrow = true,
}) {
    const titlesWithMargin = [
        "Tonight's Spotlight",
        "Hot This Week",
        "Unmissable",
        "For you",
        "Buzzing Destinations",
        "Discover Hidden Gems",
        "Explore Ghana",
        "Ghana's Top 10s",
        "Global Highlights",
    ];

    const shouldHaveMargin =
        hasMargin || (title && titlesWithMargin.includes(title));
    let marginLeft = "0";

    const marginBottom = title && title === "Explore Ghana" ? "0" : "24px";

    return (
        <div style={{ width: "100%", marginBottom: marginBottom }}>
            <div
                className="flex items-center gap-2"
                style={{
                    marginLeft: marginLeft,
                    justifyContent: "flex-start",
                }}
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
                {showArrow && (
                    <button className="flex items-center text-gray-700 hover:text-hexallo-orange transition-colors">
                        <img
                            src="/icons/arrow right.svg"
                            alt="Arrow right"
                            style={{
                                width: "12px",
                                height: "13px",
                            }}
                        />
                    </button>
                )}
            </div>
        </div>
    );
}

SectionHeader.propTypes = {
    title: PropTypes.string.isRequired,
    hasMargin: PropTypes.bool,
    alignLeft: PropTypes.bool,
    showArrow: PropTypes.bool,
};
