import Dropdown from "../atoms/Dropdown";

export default function TopHeader() {
    return (
        <div className="bg-white text-gray-700 h-[37px] px-6 border-b border-gray-200 flex items-center justify-end">
            <div className="max-w-[1920px] w-full flex items-center justify-end">
                <div className="flex items-center gap-6 text-[12px] mr-24">
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
                        className="hover:text-hexallo-business transition-colors font-semibold"
                    >
                        Create Event
                    </a>
                </div>
            </div>
        </div>
    );
}
