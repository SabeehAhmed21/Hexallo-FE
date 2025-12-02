export default function Logo({ textColor = "text-gray-900", className = "" }) {
    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <img
                src="/hexalo_logo.png"
                alt="Hexallo Logo"
                className="h-8 w-auto"
            />
            <span className={`text-xl font-bold ${textColor}`}>Hexallo</span>
        </div>
    );
}
