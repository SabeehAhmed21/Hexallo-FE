"use client";

import PropTypes from "prop-types";

export default function CategoryCard({ image, title, rating }) {
    return (
        <div className="relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer aspect-[4/3] bg-gray-600">
            {/* Rating Badge */}
            <div className="absolute top-3 left-3 bg-gray-700 rounded-md px-2 py-1 flex items-center gap-1 z-10">
                <svg
                    className="w-3.5 h-3.5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <span className="text-xs font-bold text-white">{rating}</span>
            </div>

            {/* Text Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 z-10">
                <h3 className="text-xl font-bold mb-1 text-center">{title}</h3>
                <p className="text-base font-medium">Explore</p>
            </div>
        </div>
    );
}

CategoryCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
};
