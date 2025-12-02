export default function SearchInput({
    placeholder,
    placeholderColor = "placeholder-gray-400",
    className = "",
}) {
    return (
        <input
            type="text"
            placeholder={placeholder}
            className={`px-4 text-sm text-gray-700 ${placeholderColor} bg-white border-0 rounded-lg focus:outline-none focus:ring-0 h-full ${className}`}
        />
    );
}
