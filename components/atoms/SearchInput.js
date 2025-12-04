export default function SearchInput({
    placeholder,
    placeholderColor = "placeholder-gray-400",
    className = "",
}) {
    return (
        <input
            type="text"
            placeholder={placeholder}
            className={`text-sm text-gray-700 ${placeholderColor} bg-transparent border-0 rounded-lg focus:outline-none focus:ring-0 w-full h-full ${className}`}
            style={{
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "nowrap",
            }}
        />
    );
}
