"use client";

import PropTypes from "prop-types";
import Logo from "../atoms/Logo";
import NavLink from "../atoms/NavLink";

export default function MainNav({ isMobile = false, isInSidebar = false }) {
    if (isMobile && !isInSidebar) {
        // Show only logo in mobile header
        return <Logo textColor="text-white" className="" />;
    }

    if (isMobile && isInSidebar) {
        // Show full content in sidebar
        return (
            <nav className="bg-[#2f251d] border-b border-amber-900 min-h-[37px] px-4 py-3">
                <div className="flex flex-col gap-3">
                    <NavLink active className="text-white">
                        Explore
                    </NavLink>
                    <NavLink className="text-white">Services</NavLink>
                    <NavLink className="text-white">Nightlife</NavLink>
                    <NavLink className="text-white">Travel</NavLink>
                    <NavLink className="text-white">Accommodation</NavLink>
                    <NavLink className="text-white">Spaces</NavLink>
                    <NavLink className="text-white">Subscriptions</NavLink>
                    <NavLink className="text-white">Vouchers</NavLink>
                    <NavLink className="text-white">Rentals</NavLink>
                    <NavLink className="text-white">Voting</NavLink>
                    <NavLink className="text-white">Shop</NavLink>
                    <NavLink className="text-white">Essentials</NavLink>
                    <NavLink className="text-white">Healthcare</NavLink>
                    <NavLink className="text-white">Jobs</NavLink>
                    <NavLink className="text-white">Marketplace</NavLink>
                </div>
            </nav>
        );
    }

    // Desktop view
    return (
        <nav className="bg-[#2f251d] border-b border-amber-900 h-[37px] flex items-center overflow-x-auto">
            <div className="w-full flex items-center justify-center min-w-0">
                <div className="flex items-center flex-nowrap min-w-0 mx-auto">
                    <Logo textColor="text-white" className="flex-shrink-0" />
                    <div className="flex items-center ml-[109px] gap-[0.94rem] flex-nowrap min-w-0">
                        <NavLink
                            active
                            className="text-white whitespace-nowrap flex-shrink-0"
                        >
                            Explore
                        </NavLink>
                        <NavLink className="text-white whitespace-nowrap flex-shrink-0">
                            Services
                        </NavLink>
                        <NavLink className="text-white whitespace-nowrap flex-shrink-0">
                            Nightlife
                        </NavLink>
                        <NavLink className="text-white whitespace-nowrap flex-shrink-0">
                            Travel
                        </NavLink>
                        <NavLink className="text-white whitespace-nowrap flex-shrink-0">
                            Accommodation
                        </NavLink>
                        <NavLink className="text-white whitespace-nowrap flex-shrink-0">
                            Spaces
                        </NavLink>
                        <NavLink className="text-white whitespace-nowrap flex-shrink-0">
                            Subscriptions
                        </NavLink>
                        <NavLink className="text-white whitespace-nowrap flex-shrink-0">
                            Vouchers
                        </NavLink>
                        <NavLink className="text-white whitespace-nowrap flex-shrink-0">
                            Rentals
                        </NavLink>
                        <NavLink className="text-white whitespace-nowrap flex-shrink-0">
                            Voting
                        </NavLink>
                        <NavLink className="text-white whitespace-nowrap flex-shrink-0">
                            Shop
                        </NavLink>
                        <NavLink className="text-white whitespace-nowrap flex-shrink-0">
                            Essentials
                        </NavLink>
                        <NavLink className="text-white whitespace-nowrap flex-shrink-0">
                            Healthcare
                        </NavLink>
                        <NavLink className="text-white whitespace-nowrap flex-shrink-0">
                            Jobs
                        </NavLink>
                        <NavLink className="text-white whitespace-nowrap flex-shrink-0">
                            Marketplace
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}

MainNav.propTypes = {
    isMobile: PropTypes.bool,
    isInSidebar: PropTypes.bool,
};
