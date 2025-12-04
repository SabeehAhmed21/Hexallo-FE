"use client";

import PropTypes from "prop-types";
import NavLink from "../atoms/NavLink";

export default function SubNav({ isMobile = false, isInSidebar = false }) {
    if (isMobile && isInSidebar) {
        // Show full content in sidebar
        return (
            <nav className="bg-[#f2f2f2] border-b border-gray-200 min-h-[37px] px-4 py-3">
                <div className="flex flex-col gap-3">
                    <NavLink active>Home</NavLink>
                    <NavLink>Events</NavLink>
                    <NavLink>Tours</NavLink>
                    <NavLink>Activities</NavLink>
                    <NavLink>Indulge</NavLink>
                    <NavLink>Places</NavLink>
                    <NavLink>Movies</NavLink>
                    <NavLink>Sports</NavLink>
                    <NavLink>Restaurants</NavLink>
                    <NavLink>Find a table</NavLink>
                    <NavLink>Conferences</NavLink>
                    <NavLink>Workshops</NavLink>
                    <NavLink>Auditions</NavLink>
                    <NavLink>People</NavLink>
                    <NavLink>World Famous</NavLink>
                    <NavLink>Social Buddies</NavLink>
                    <NavLink>Virtual Experiences</NavLink>
                </div>
            </nav>
        );
    }

    // Desktop view
    return (
        <nav className="bg-[#f2f2f2] border-b border-gray-200 h-[37px] px-1 md:px-2 lg:px-3 xl:px-3.5 2xl:px-4 flex items-center overflow-x-auto">
            <div className="max-w-[1920px] mx-auto flex items-center ml-[65px] lg:ml-[80px] xl:ml-[90px] 2xl:ml-[99px] gap-[0.6rem] lg:gap-[0.7rem] xl:gap-[0.78rem] 2xl:gap-[0.85rem] flex-nowrap min-w-0">
                <NavLink active className="whitespace-nowrap flex-shrink-0">
                    Home
                </NavLink>
                <NavLink className="whitespace-nowrap flex-shrink-0">
                    Events
                </NavLink>
                <NavLink className="whitespace-nowrap flex-shrink-0">
                    Tours
                </NavLink>
                <NavLink className="whitespace-nowrap flex-shrink-0">
                    Activities
                </NavLink>
                <NavLink className="whitespace-nowrap flex-shrink-0">
                    Indulge
                </NavLink>
                <NavLink className="whitespace-nowrap flex-shrink-0">
                    Places
                </NavLink>
                <NavLink className="whitespace-nowrap flex-shrink-0">
                    Movies
                </NavLink>
                <NavLink className="whitespace-nowrap flex-shrink-0">
                    Sports
                </NavLink>
                <NavLink className="whitespace-nowrap flex-shrink-0">
                    Restaurants
                </NavLink>
                <NavLink className="whitespace-nowrap flex-shrink-0">
                    Find a table
                </NavLink>
                <NavLink className="whitespace-nowrap flex-shrink-0">
                    Conferences
                </NavLink>
                <NavLink className="whitespace-nowrap flex-shrink-0">
                    Workshops
                </NavLink>
                <NavLink className="whitespace-nowrap flex-shrink-0">
                    Auditions
                </NavLink>
                <NavLink className="whitespace-nowrap flex-shrink-0">
                    People
                </NavLink>
                <NavLink className="whitespace-nowrap flex-shrink-0">
                    World Famous
                </NavLink>
                <NavLink className="whitespace-nowrap flex-shrink-0">
                    Social Buddies
                </NavLink>
                <NavLink className="whitespace-nowrap flex-shrink-0">
                    Virtual Experiences
                </NavLink>
            </div>
        </nav>
    );
}

SubNav.propTypes = {
    isMobile: PropTypes.bool,
    isInSidebar: PropTypes.bool,
};
