import CategoryCard from "../atoms/CategoryCard";
import PropTypes from "prop-types";

export default function ExploreGhanaSection({ title, categories }) {
    return (
        <section
            className="py-8 bg-white"
            style={{ paddingLeft: "39px", paddingRight: "39px" }}
        >
            {/* Section Header */}
            <div className="mb-6">
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
            </div>

            {/* Grid of Category Cards - Responsive grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {categories.map((category, index) => (
                    <CategoryCard key={index} {...category} />
                ))}
            </div>
        </section>
    );
}

ExploreGhanaSection.propTypes = {
    title: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};
