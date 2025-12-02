"use client";

import { useState } from "react";
import PropTypes from "prop-types";

export default function CategoryCard({ image, title, rating }) {
    const [imageError, setImageError] = useState(false);

    return (
        <div className="relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer group aspect-[4/3]">
            {/* Image */}
            <div className="relative w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 overflow-hidden">
                {image && !imageError ? (
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={() => setImageError(true)}
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm">
                        Category Image
                    </div>
                )}

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-opacity"></div>

                {/* Rating Badge */}
                <div className="absolute top-3 left-3 bg-white rounded-md px-2 py-1 flex items-center gap-1 z-10">
                    <svg
                        className="w-3.5 h-3.5 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                    >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                    <span className="text-xs font-bold text-gray-900">
                        {rating}
                    </span>
                </div>

                {/* Text Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 z-10">
                    <h3 className="text-xl font-bold mb-1 text-center">
                        {title}
                    </h3>
                    <p className="text-base font-medium">Explore</p>
                </div>
            </div>
        </div>
    );
}

CategoryCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
};
