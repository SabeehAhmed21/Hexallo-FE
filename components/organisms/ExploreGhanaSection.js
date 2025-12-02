import CategoryCard from "../atoms/CategoryCard";
import PropTypes from "prop-types";

export default function ExploreGhanaSection({ title, categories }) {
    return (
        <section className="py-8 px-6 bg-white">
            <div className="max-w-[1920px] mx-auto">
                {/* Section Header */}
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">
                        {title}
                    </h2>
                </div>

                {/* Grid of Category Cards - 3 columns */}
                <div className="grid grid-cols-3 gap-4">
                    {categories.map((category, index) => (
                        <CategoryCard key={index} {...category} />
                    ))}
                </div>
            </div>
        </section>
    );
}

ExploreGhanaSection.propTypes = {
    title: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};
