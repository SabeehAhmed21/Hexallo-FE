"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "../atoms/Logo";
import TopHeader from "./TopHeader";
import MainNav from "./MainNav";
import SubNav from "./SubNav";

export default function NavigationWrapper() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <>
            {/* Mobile Header with Hamburger Button */}
            <div className="lg:hidden bg-[#2f251d] border-b border-amber-900 h-[60px] px-4 flex items-center justify-between sticky top-0 z-50">
                <div className="flex items-center gap-3">
                    <button
                        onClick={toggleSidebar}
                        className="text-white p-2 hover:bg-amber-900/30 rounded transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isSidebarOpen ? (
                            <FiX className="w-6 h-6" />
                        ) : (
                            <FiMenu className="w-6 h-6" />
                        )}
                    </button>
                    <Logo textColor="text-white" className="" />
                </div>
            </div>

            {/* Desktop Navigation - Always Visible */}
            <div className="hidden lg:block">
                <TopHeader />
                <MainNav />
                <SubNav />
            </div>

            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
                <button
                    type="button"
                    className="lg:hidden fixed inset-0 bg-black/50 z-50 transition-opacity border-0 p-0 cursor-pointer"
                    onClick={closeSidebar}
                    onKeyDown={(e) => {
                        if (e.key === "Escape") {
                            closeSidebar();
                        }
                    }}
                    aria-label="Close menu"
                />
            )}

            {/* Mobile Sidebar */}
            <div
                className={`lg:hidden fixed top-0 left-0 h-full w-[85%] max-w-sm bg-white z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
                    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                {/* Sidebar Header */}
                <div className="bg-[#2f251d] border-b border-amber-900 h-[60px] px-4 flex items-center justify-between sticky top-0 z-10">
                    <Logo textColor="text-white" className="" />
                    <button
                        onClick={closeSidebar}
                        className="text-white p-2 hover:bg-amber-900/30 rounded transition-colors"
                        aria-label="Close menu"
                    >
                        <FiX className="w-6 h-6" />
                    </button>
                </div>

                {/* Sidebar Content */}
                <div
                    className="flex flex-col"
                    onClick={(e) => {
                        // Close sidebar when clicking on any link
                        if (e.target.tagName === "A") {
                            closeSidebar();
                        }
                    }}
                >
                    <div className="border-b border-gray-200">
                        <TopHeader isMobile={true} isInSidebar={true} />
                    </div>
                    <div className="border-b border-gray-200">
                        <MainNav isMobile={true} isInSidebar={true} />
                    </div>
                    <div>
                        <SubNav isMobile={true} isInSidebar={true} />
                    </div>
                </div>
            </div>
        </>
    );
}
