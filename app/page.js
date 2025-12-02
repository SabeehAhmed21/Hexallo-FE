import TopHeader from "../components/organisms/TopHeader";
import MainNav from "../components/organisms/MainNav";
import SubNav from "../components/organisms/SubNav";
import HeroSection from "../components/organisms/HeroSection";
import EventSection from "../components/organisms/EventSection";
import ExclusivesSection from "../components/organisms/ExclusivesSection";
import DestinationsSection from "../components/organisms/DestinationsSection";
import BlazingDealsSection from "../components/organisms/BlazingDealsSection";
import HiddenGemsSection from "../components/organisms/HiddenGemsSection";
import ExploreGhanaSection from "../components/organisms/ExploreGhanaSection";

export default function Home() {
    const tonightsSpotlightEvents = [
        {
            image: "/event-1.jpg",
            tag: "Lounge",
            title: "DJ Liv North Live",
            time: "10:30 PM - 12:30 PM",
            location: "NewYork City",
            price: "From USD 89",
        },
        {
            image: "/event-2.jpg",
            tag: "Lounge",
            title: "DJ Liv North Live",
            time: "10:30 PM - 12:30 PM",
            location: "NewYork City",
            price: "From USD 89",
        },
        {
            image: "/event-3.jpg",
            tag: "Lounge",
            title: "DJ Liv North Live",
            time: "10:30 PM - 12:30 PM",
            location: "NewYork City",
            price: "From USD 89",
        },
        {
            image: "/event-4.jpg",
            tag: "Lounge",
            title: "DJ Liv North Live",
            time: "10:30 PM - 12:30 PM",
            location: "NewYork City",
            price: "From USD 89",
        },
    ];

    const unmissableEvents = [
        {
            image: "/unmissable-1.jpg",
            tag: "Lounge",
            title: "DJ Liv North Live",
            date: "Wed, 5th Dec",
            time: "10:30 PM - 12:30 PM",
            location: "NewYork City",
            price: "From USD 89",
        },
        {
            image: "/unmissable-2.jpg",
            tag: "Lounge",
            title: "DJ Liv North Live",
            date: "Wed, 5th Dec",
            time: "10:30 PM - 12:30 PM",
            location: "NewYork City",
            price: "From USD 89",
        },
        {
            image: "/unmissable-3.jpg",
            tag: "Lounge",
            title: "DJ Liv North Live",
            date: "Wed, 5th Dec",
            time: "10:30 PM - 12:30 PM",
            location: "NewYork City",
            price: "From USD 89",
        },
        {
            image: "/unmissable-4.jpg",
            tag: "Lounge",
            title: "DJ Liv North Live",
            date: "Wed, 5th Dec",
            time: "10:30 PM - 12:30 PM",
            location: "NewYork City",
            price: "From USD 89",
        },
    ];

    const exclusivesCards = [
        {
            image: "/exclusive-1.jpg",
            title: "Private Tours",
            description:
                "Your guide to the most happening events this weekend — from concerts to pop-ups.",
            cta: "Explore Now",
        },
        {
            image: "/exclusive-2.jpg",
            title: "Private Tours",
            description:
                "Your guide to the most happening events this weekend — from concerts to pop-ups.",
            cta: "Explore Now",
        },
    ];

    const forYouEvents = [
        {
            image: "/foryou-1.jpg",
            tag: "Lounge",
            title: "DJ Liv North Live",
            date: "Wed, 5th Dec",
            time: "10:30 PM - 12:30 PM",
            location: "NewYork City",
            price: "From USD 89",
            rating: "4.8",
        },
        {
            image: "/foryou-2.jpg",
            tag: "Lounge",
            title: "DJ Liv North Live",
            date: "Wed, 5th Dec",
            time: "10:30 PM - 12:30 PM",
            location: "NewYork City",
            price: "From USD 89",
            rating: "4.8",
        },
        {
            image: "/foryou-3.jpg",
            tag: "Lounge",
            title: "DJ Liv North Live",
            date: "Wed, 5th Dec",
            time: "10:30 PM - 12:30 PM",
            location: "NewYork City",
            price: "From USD 89",
            rating: "4.8",
        },
        {
            image: "/foryou-4.jpg",
            tag: "Lounge",
            title: "DJ Liv North Live",
            date: "Wed, 5th Dec",
            time: "10:30 PM - 12:30 PM",
            location: "NewYork City",
            price: "From USD 89",
            rating: "4.8",
        },
    ];

    const buzzingDestinations = [
        {
            image: "/destination-1.jpg",
            title: "Kina Mountain",
            checkIns: "1.2k check-ins this week",
            description:
                "Your guide to the most happening events this weekend — from concerts to pop-ups.",
        },
        {
            image: "/destination-2.jpg",
            title: "Kina Mountain",
            checkIns: "1.2k check-ins this week",
            description:
                "Your guide to the most happening events this weekend — from concerts to pop-ups.",
        },
        {
            image: "/destination-3.jpg",
            title: "Kina Mountain",
            checkIns: "1.2k check-ins this week",
            description:
                "Your guide to the most happening events this weekend — from concerts to pop-ups.",
        },
        {
            image: "/destination-4.jpg",
            title: "Kina Mountain",
            checkIns: "1.2k check-ins this week",
            description:
                "Your guide to the most happening events this weekend — from concerts to pop-ups.",
        },
    ];

    const blazingDealsOffers = [
        {
            title: "New User",
            subtitle: "Offer",
            discount: "20% OFF",
            gradient: true,
        },
        {
            title: "Black Friday",
            subtitle: "Offers",
            discount: "20% OFF",
            gradient: false,
        },
        {
            title: "New User",
            subtitle: "Offer",
            discount: "20% OFF",
            gradient: true,
        },
    ];

    const hiddenGems = [
        {
            image: "/hidden-gem-1.jpg",
            title: "The Secret Garden Café",
            description:
                "AccraHidden courtyard serving organic brunch & live music evenings.",
        },
        {
            image: "/hidden-gem-2.jpg",
            title: "Napa's Underground Jazz",
            description: "Vintage cellar turned into an intimate live stages.",
        },
        {
            image: "/hidden-gem-3.jpg",
            title: "Sky Hammock Trail",
            description:
                "BaliSwing over the valley — a serene thrill far from crowds",
        },
        {
            image: "/hidden-gem-4.jpg",
            title: "Sky Hammock Trail",
            description:
                "BaliSwing over the valley — a serene thrill far from crowds",
        },
    ];

    const exploreGhanaCategories = [
        {
            image: "/ghana-events.jpg",
            title: "Events",
            rating: "3.5",
        },
        {
            image: "/ghana-activities.jpg",
            title: "Activities",
            rating: "3.5",
        },
        {
            image: "/ghana-restaurants.jpg",
            title: "Restaurants",
            rating: "3.5",
        },
        {
            image: "/ghana-tours.jpg",
            title: "Tours",
            rating: "3.5",
        },
        {
            image: "/ghana-services.jpg",
            title: "Services",
            rating: "3.5",
        },
        {
            image: "/ghana-destinations.jpg",
            title: "Destinations",
            rating: "3.5",
        },
        {
            image: "/ghana-places.jpg",
            title: "Places",
            rating: "3.5",
        },
        {
            image: "/ghana-accommodations.jpg",
            title: "Accommodations",
            rating: "3.5",
        },
    ];

    return (
        <main className="min-h-screen bg-white">
            <TopHeader />
            <MainNav />
            <SubNav />
            <HeroSection />
            <EventSection
                title="Tonight's Spotlight"
                events={tonightsSpotlightEvents}
            />
            <EventSection
                title="Hot This Week"
                events={tonightsSpotlightEvents}
            />
            <EventSection title="Unmissable" events={unmissableEvents} />
            <ExclusivesSection title="Exclusives" cards={exclusivesCards} />
            <EventSection title="For you" events={forYouEvents} />
            <DestinationsSection
                title="Buzzing Destinations"
                destinations={buzzingDestinations}
            />
            <BlazingDealsSection
                title="Blazing Deals"
                offers={blazingDealsOffers}
            />
            <HiddenGemsSection title="Discover Hidden Gems" gems={hiddenGems} />
            <ExploreGhanaSection
                title="Explore Ghana"
                categories={exploreGhanaCategories}
            />
        </main>
    );
}
