import NavLink from "../atoms/NavLink";

export default function SubNav() {
    return (
        <nav className="bg-[#f2f2f2] border-b border-gray-200 h-[37px] px-6 flex items-center">
            <div className="max-w-[1920px] mx-auto flex items-center gap-5 overflow-x-auto">
                <NavLink active>Home</NavLink>
                <NavLink>Events</NavLink>
                <NavLink>Tours</NavLink>
                <NavLink>Activities</NavLink>
                <NavLink>Indulge</NavLink>
                <NavLink>Places</NavLink>
                <NavLink>Movies</NavLink>
                <NavLink>Sports</NavLink>
                <NavLink>Restaurants</NavLink>
                <NavLink>Find a table</NavLink>
                <NavLink>Conferences</NavLink>
                <NavLink>Workshops</NavLink>
                <NavLink>Auditions</NavLink>
                <NavLink>People</NavLink>
                <NavLink>World Famous</NavLink>
                <NavLink>Social Buddies</NavLink>
                <NavLink>Virtual Experiences</NavLink>
            </div>
        </nav>
    );
}
