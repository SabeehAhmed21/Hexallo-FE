import Logo from "../atoms/Logo";
import NavLink from "../atoms/NavLink";

export default function MainNav() {
    return (
        <nav className="bg-[#2f251d] border-b border-amber-900 h-[37px] pl-2 pr-6 flex items-center">
            <div className="max-w-[1920px] mx-auto flex items-center justify-between w-full">
                <Logo textColor="text-white" className="ml-20" />
                <div className="flex items-center gap-5 overflow-x-auto mr-28">
                    <NavLink active className="text-white">
                        Explore
                    </NavLink>
                    <NavLink className="text-white">Services</NavLink>
                    <NavLink className="text-white">Nightlife</NavLink>
                    <NavLink className="text-white">Travel</NavLink>
                    <NavLink className="text-white">Accommodation</NavLink>
                    <NavLink className="text-white">Spaces</NavLink>
                    <NavLink className="text-white">Subscriptions</NavLink>
                    <NavLink className="text-white">Vouchers</NavLink>
                    <NavLink className="text-white">Rentals</NavLink>
                    <NavLink className="text-white">Voting</NavLink>
                    <NavLink className="text-white">Shop</NavLink>
                    <NavLink className="text-white">Essentials</NavLink>
                    <NavLink className="text-white">Healthcare</NavLink>
                    <NavLink className="text-white">Jobs</NavLink>
                    <NavLink className="text-white">Marketplace</NavLink>
                </div>
            </div>
        </nav>
    );
}
