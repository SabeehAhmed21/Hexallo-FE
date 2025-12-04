import SearchInput from "../atoms/SearchInput";

export default function SearchBar() {
    return (
        <div
            className="flex items-center bg-white shadow-sm overflow-hidden"
            style={{
                width: "100%",
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
            {/* Search any event - Width: 228px, Padding: 8.5px top/bottom, 24px left, 72px right */}
            <div
                className="h-full flex items-center"
                style={{
                    width: "228px",
                    height: "34px",
                    paddingTop: "8.5px",
                    paddingBottom: "8.5px",
                    paddingLeft: "24px",
                    paddingRight: "72px",
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
                        fontSize: "12px",
                        fontWeight: 400,
                        fontFamily: "Inter, sans-serif",
                    }}
                />
            </div>
            {/* Where - Width: 167px, Padding: 7px top/bottom, 24px left/right */}
            <div
                className="h-full flex items-center"
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
            {/* When - Width: 165px, Padding: 7px top/bottom, 24px left/right */}
            <div
                className="h-full flex items-center"
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
                className="bg-[#ae6f28] text-white hover:bg-opacity-90 transition-colors flex items-center justify-center rounded-xl"
                style={{
                    width: "35.81px",
                    height: "29.81px",
                    flexShrink: 0,
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
