import SearchInput from "../atoms/SearchInput";

export default function SearchBar() {
    return (
        <div
            className="flex items-center bg-white rounded-xl border border-gray-300 shadow-sm overflow-hidden"
            style={{
                width: "597.8125px",
                height: "34px",
                fontFamily: "Montserrat, sans-serif",
            }}
        >
            <div className="flex-1 h-full border-r border-gray-300">
                <SearchInput
                    placeholder="Search any event"
                    placeholderColor="placeholder-gray-400"
                    className="w-full h-full border-0 shadow-none focus:ring-0 rounded-l-xl px-4"
                />
            </div>
            <div
                className="h-full border-r border-gray-300"
                style={{ width: "200px" }}
            >
                <SearchInput
                    placeholder="Where"
                    placeholderColor="placeholder-gray-600"
                    className="w-full h-full border-0 shadow-none focus:ring-0 rounded-none px-4"
                />
            </div>
            <div className="h-full" style={{ width: "200px" }}>
                <SearchInput
                    placeholder="When"
                    placeholderColor="placeholder-gray-600"
                    className="w-full h-full border-0 shadow-none focus:ring-0 rounded-none px-4"
                />
            </div>
            <button
                className="bg-[#ae6f28] text-white hover:bg-opacity-90 transition-colors flex items-center justify-center rounded-xl mx-2"
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
