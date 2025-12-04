import SearchInput from "../atoms/SearchInput";

export default function SearchBar() {
    return (
        <div
            className="flex items-center bg-white shadow-sm overflow-hidden w-full sm:w-auto"
            style={{
                maxWidth: "612.81px",
                height: "37px",
                fontFamily: "Montserrat, sans-serif",
                borderRadius: "12px",
                border: "1.75px solid",
                borderColor: "#E5E7EB",
                paddingTop: "1.5px",
                paddingRight: "6px",
                paddingBottom: "1.5px",
                paddingLeft: "2px",
                gap: "10px",
            }}
        >
            {/* Search any event - Responsive width and padding */}
            <div
                className="h-full flex items-center flex-1 sm:flex-none"
                style={{
                    width: "auto",
                    minWidth: "120px",
                    height: "34px",
                    paddingTop: "8.5px",
                    paddingBottom: "8.5px",
                    paddingLeft: "12px",
                    paddingRight: "8px",
                }}
            >
                <SearchInput
                    placeholder="Search any event"
                    placeholderColor="placeholder-gray-400"
                    className="w-full h-full border-0 shadow-none focus:ring-0 p-0 font-inter font-normal"
                    style={{
                        padding: "0",
                        height: "auto",
                        color: "#6A6A6A",
                        fontSize: "11px",
                        fontWeight: 400,
                        fontFamily: "Inter, sans-serif",
                    }}
                />
            </div>
            {/* Where - Responsive width and padding */}
            <div
                className="h-full items-center hidden sm:flex"
                style={{
                    width: "167px",
                    height: "34px",
                    paddingTop: "7px",
                    paddingBottom: "7px",
                    paddingLeft: "24px",
                    paddingRight: "24px",
                }}
            >
                <SearchInput
                    placeholder="Where"
                    placeholderColor="placeholder-gray-600"
                    className="w-full h-full border-0 shadow-none focus:ring-0 p-0 font-inter font-normal"
                    style={{
                        padding: "0",
                        height: "auto",
                        fontSize: "14px",
                        fontWeight: 400,
                        fontFamily: "Inter, sans-serif",
                        color: "#131314",
                    }}
                />
            </div>
            {/* When - Responsive width and padding */}
            <div
                className="h-full items-center hidden sm:flex"
                style={{
                    width: "165px",
                    height: "34px",
                    paddingTop: "7px",
                    paddingBottom: "7px",
                    paddingLeft: "24px",
                    paddingRight: "24px",
                }}
            >
                <SearchInput
                    placeholder="When"
                    placeholderColor="placeholder-gray-600"
                    className="w-full h-full border-0 shadow-none focus:ring-0 p-0 font-inter font-normal"
                    style={{
                        padding: "0",
                        height: "auto",
                        fontSize: "14px",
                        fontWeight: 400,
                        fontFamily: "Inter, sans-serif",
                        color: "#131314",
                    }}
                />
            </div>
            <button
                className="bg-[#ae6f28] text-white hover:bg-opacity-90 transition-colors flex items-center justify-center rounded-xl flex-shrink-0"
                style={{
                    width: "35.81px",
                    height: "29.81px",
                }}
            >
                <svg
                    className="w-[19.81px] h-[19.81px]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
            </button>
        </div>
    );
}
