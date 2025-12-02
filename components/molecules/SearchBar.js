import SearchInput from "../atoms/SearchInput";

export default function SearchBar() {
    return (
        <div className="flex items-center gap-0 bg-white rounded-xl border border-gray-300 w-full shadow-sm overflow-hidden h-[37px]">
            <div className="flex-1 h-full">
                <SearchInput
                    placeholder="Search any event"
                    placeholderColor="placeholder-gray-400"
                    className="w-full h-full border-0 shadow-none focus:ring-0 rounded-l-xl"
                />
            </div>
            <div className="w-52 h-full">
                <SearchInput
                    placeholder="Where"
                    placeholderColor="placeholder-gray-600"
                    className="w-full h-full border-0 shadow-none focus:ring-0 rounded-none"
                />
            </div>
            <div className="w-52 h-full">
                <SearchInput
                    placeholder="When"
                    placeholderColor="placeholder-gray-600"
                    className="w-full h-full border-0 shadow-none focus:ring-0 rounded-none"
                />
            </div>
            <button className="bg-[#ae6f28] text-white w-[35.81px] h-[29.81px] hover:bg-opacity-90 transition-colors flex items-center justify-center rounded-xl mr-2">
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
