"use client";

import { useState } from "react";
import PropTypes from "prop-types";

export default function EventCard({
    image,
    tag,
    title,
    date,
    time,
    location,
    price,
    rating,
}) {
    const [imageError, setImageError] = useState(false);

    return (
        <div className="flex-shrink-0 w-80 bg-amber-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            {/* Image */}
            <div className="relative w-full h-48 bg-gradient-to-br from-gray-300 to-gray-400 rounded-t-xl overflow-hidden">
                {image && !imageError ? (
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                        onError={() => setImageError(true)}
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm">
                        Event Image
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-4">
                {/* Tag */}
                <div className="mb-2">
                    <span className="inline-block bg-yellow-200 text-gray-800 text-xs font-medium px-3 py-1 rounded-md">
                        {tag}
                    </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {title}
                </h3>

                {/* Date */}
                {date && <p className="text-sm text-gray-600 mb-1">{date}</p>}

                {/* Time */}
                <p className="text-sm text-gray-600 mb-1">{time}</p>

                {/* Location */}
                <p className="text-sm text-gray-600 mb-3">{location}</p>

                {/* Price and Rating */}
                <div className="flex items-center justify-between">
                    <p className="text-base font-bold text-gray-900">{price}</p>
                    {rating && (
                        <div className="flex items-center gap-1">
                            <svg
                                className="w-4 h-4 text-yellow-400 fill-current"
                                viewBox="0 0 20 20"
                            >
                                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                            </svg>
                            <span className="text-sm font-bold text-gray-900">
                                {rating}
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

EventCard.propTypes = {
    image: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string,
    time: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    rating: PropTypes.string,
};
