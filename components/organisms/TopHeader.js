"use client";

import PropTypes from "prop-types";
import Dropdown from "../atoms/Dropdown";
import Logo from "../atoms/Logo";

export default function TopHeader({ isMobile = false, isInSidebar = false }) {
    if (isMobile && !isInSidebar) {
        // Show only logo in mobile header
        return <Logo textColor="text-white" className="" />;
    }

    if (isMobile && isInSidebar) {
        // Show full content in sidebar
        return (
            <div className="bg-white text-gray-700 min-h-[37px] px-4 py-3 border-b border-gray-200">
                <div className="flex flex-col gap-3">
                    <div className="flex flex-wrap items-center gap-3 text-[10px] sm:text-[11px] md:text-[12px]">
                        <a
                            href="/events-calendar"
                            className="hover:text-hexallo-business transition-colors"
                        >
                            Events Calendar
                        </a>
                        <a
                            href="/blog"
                            className="hover:text-hexallo-business transition-colors"
                        >
                            Blog
                        </a>
                        <a
                            href="/limelight"
                            className="hover:text-hexallo-business transition-colors"
                        >
                            Limelight
                        </a>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-[10px] sm:text-[11px] md:text-[12px]">
                        <Dropdown icon="🌐" className="text-gray-700">
                            EN(US)
                        </Dropdown>
                        <Dropdown flag="/flags.png" className="text-gray-700">
                            United States
                        </Dropdown>
                        <Dropdown className="text-gray-700">
                            California
                        </Dropdown>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-[10px] sm:text-[11px] md:text-[12px]">
                        <a
                            href="/signin"
                            className="hover:text-hexallo-business transition-colors"
                        >
                            Sign In | Up
                        </a>
                        <a
                            href="/business"
                            className="text-hexallo-business font-semibold hover:opacity-80"
                        >
                            Business
                        </a>
                        <a
                            href="/create-event"
                            className="hover:text-hexallo-business transition-colors font-bold"
                        >
                            Create Event
                        </a>
                    </div>
                </div>
            </div>
        );
    }

    // Desktop view
    return (
        <div className="bg-white text-gray-700 h-[37px] px-1 md:px-2 lg:px-3 xl:px-3.5 2xl:px-4 border-b border-gray-200 flex items-center justify-end overflow-x-auto">
            <div className="max-w-[1920px] w-full flex items-center justify-end min-w-0">
                <div className="flex items-center gap-1 md:gap-2 lg:gap-2.5 xl:gap-3.5 2xl:gap-4 text-[9px] sm:text-[10px] md:text-[11px] lg:text-[12px] 2xl:text-[12px] mr-0 md:mr-[50px] lg:mr-[60px] xl:mr-[68px] 2xl:mr-[76px] flex-nowrap min-w-0">
                    <a
                        href="/events-calendar"
                        className="hover:text-hexallo-business transition-colors"
                    >
                        Events Calendar
                    </a>
                    <a
                        href="/blog"
                        className="hover:text-hexallo-business transition-colors"
                    >
                        Blog
                    </a>
                    <a
                        href="/limelight"
                        className="hover:text-hexallo-business transition-colors"
                    >
                        Limelight
                    </a>
                    <Dropdown icon="🌐" className="text-gray-700">
                        EN(US)
                    </Dropdown>
                    <Dropdown flag="/flags.png" className="text-gray-700">
                        United States
                    </Dropdown>
                    <Dropdown className="text-gray-700">California</Dropdown>
                    <a
                        href="/signin"
                        className="hover:text-hexallo-business transition-colors"
                    >
                        Sign In | Up
                    </a>
                    <a
                        href="/business"
                        className="text-hexallo-business font-semibold hover:opacity-80"
                    >
                        Business
                    </a>
                    <a
                        href="/create-event"
                        className="hover:text-hexallo-business transition-colors font-bold"
                    >
                        Create Event
                    </a>
                </div>
            </div>
        </div>
    );
}

TopHeader.propTypes = {
    isMobile: PropTypes.bool,
    isInSidebar: PropTypes.bool,
};
