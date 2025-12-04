import NavigationWrapper from "../components/organisms/NavigationWrapper";
import HeroSection from "../components/organisms/HeroSection";
import EventSection from "../components/organisms/EventSection";
import SectionWrapper from "../components/organisms/SectionWrapper";
import ExclusivesSection from "../components/organisms/ExclusivesSection";
import BlazingDealsSection from "../components/organisms/BlazingDealsSection";
import ExploreGhanaSection from "../components/organisms/ExploreGhanaSection";
import Footer from "../components/organisms/Footer";

export default function Home() {
    const tonightsSpotlightEvents = [
        {
            image: "/cards/1.jpg",
            tag: "Lounge",
            title: "DJ Liv North Live",
            time: "10:30 PM - 12:30 PM",
            location: "NewYork City",
            price: "From USD 89",
        },
        {
            image: "/cards/2.png",
            tag: "Lounge",
            title: "DJ Liv North Live",
            time: "10:30 PM - 12:30 PM",
            location: "NewYork City",
            price: "From USD 89",
        },
        {
            image: "/cards/3.jpg",
            tag: "Lounge",
            title: "DJ Liv North Live",
            time: "10:30 PM - 12:30 PM",
            location: "NewYork City",
            price: "From USD 89",
        },
        {
            image: "/cards/4.jpg",
            tag: "Lounge",
            title: "DJ Liv North Live",
            time: "10:30 PM - 12:30 PM",
            location: "NewYork City",
            price: "From USD 89",
        },
    ];

    const hotThisWeekEvents = [
        {
            image: "/cards/5.jpg",
            tag: "Lounge",
            title: "DJ Liv North Live",
            time: "10:30 PM - 12:30 PM",
            location: "NewYork City",
            price: "From USD 89",
        },
        {
            image: "/cards/6.jpg",
            tag: "Lounge",
            title: "DJ Liv North Live",
            time: "10:30 PM - 12:30 PM",
            location: "NewYork City",
            price: "From USD 89",
        },
        {
            image: "/cards/7.jpg",
            tag: "Lounge",
            title: "DJ Liv North Live",
            time: "10:30 PM - 12:30 PM",
            location: "NewYork City",
            price: "From USD 89",
        },
        {
            image: "/cards/8.jpg",
            tag: "Lounge",
            title: "DJ Liv North Live",
            time: "10:30 PM - 12:30 PM",
            location: "NewYork City",
            price: "From USD 89",
        },
    ];

    const unmissableEvents = [
        {
            image: "/cards/9.jpg",
            tag: "Lounge",
            title: "DJ Liv North Live",
            date: "Wed, 5th Dec",
            time: "10:30 PM - 12:30 PM",
            location: "NewYork City",
            price: "From USD 89",
        },
        {
            image: "/cards/10.jpg",
            tag: "Lounge",
            title: "DJ Liv North Live",
            date: "Wed, 5th Dec",
            time: "10:30 PM - 12:30 PM",
            location: "NewYork City",
            price: "From USD 89",
        },
        {
            image: "/cards/11.jpg",
            tag: "Lounge",
            title: "DJ Liv North Live",
            date: "Wed, 5th Dec",
            time: "10:30 PM - 12:30 PM",
            location: "NewYork City",
            price: "From USD 89",
        },
        {
            image: "/cards/12.jpg",
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
            image: "/cards/17.jpg",
            title: "Private Tours",
            description:
                "Your guide to the most happening events this weekend — from concerts to pop-ups.",
            cta: "Explore Now",
        },
        {
            image: "/cards/18.jpg",
            title: "Private Tours",
            description:
                "Your guide to the most happening events this weekend — from concerts to pop-ups.",
            cta: "Explore Now",
        },
    ];

    const forYouEvents = [
        {
            image: "/cards/13.jpg",
            tag: "Lounge",
            title: "DJ Liv North Live",
            date: "Wed, 5th Dec",
            time: "10:30 PM - 12:30 PM",
            location: "NewYork City",
            price: "From USD 89",
            rating: "4.8",
        },
        {
            image: "/cards/14.jpg",
            tag: "Lounge",
            title: "DJ Liv North Live",
            date: "Wed, 5th Dec",
            time: "10:30 PM - 12:30 PM",
            location: "NewYork City",
            price: "From USD 89",
            rating: "4.8",
        },
        {
            image: "/cards/15.jpg",
            tag: "Lounge",
            title: "DJ Liv North Live",
            date: "Wed, 5th Dec",
            time: "10:30 PM - 12:30 PM",
            location: "NewYork City",
            price: "From USD 89",
            rating: "4.8",
        },
        {
            image: "/cards/16.jpg",
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
            image: "/cards/19.jpg",
            title: "Kina Mountain",
            checkIns: "1.2k check-ins this week",
            description:
                "Your guide to the most happening events this weekend — from concerts to pop-ups.",
        },
        {
            image: "/cards/20.jpg",
            title: "Kina Mountain",
            checkIns: "1.2k check-ins this week",
            description:
                "Your guide to the most happening events this weekend — from concerts to pop-ups.",
        },
        {
            image: "/cards/21.jpg",
            title: "Kina Mountain",
            checkIns: "1.2k check-ins this week",
            description:
                "Your guide to the most happening events this weekend — from concerts to pop-ups.",
        },
        {
            image: "/cards/22.jpg",
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
            image: "/cards/35.jpg",
            isActive: true,
        },
        {
            title: "Black Friday",
            subtitle: "Offers",
            discount: "20% OFF",
            image: "/cards/36.jpg",
            isActive: false,
        },
        {
            title: "New User",
            subtitle: "Offer",
            discount: "20% OFF",
            image: "/cards/37.jpg",
            isActive: false,
        },
    ];

    const hiddenGems = [
        {
            image: "/cards/23.jpg",
            title: "The Secret Garden Café",
            description:
                "AccraHidden courtyard serving organic brunch & live music evenings.",
        },
        {
            image: "/cards/24.jpg",
            title: "Napa's Underground Jazz",
            description: "Vintage cellar turned into an intimate live stages.",
        },
        {
            image: "/cards/25.jpg",
            title: "Sky Hammock Trail",
            description:
                "BaliSwing over the valley — a serene thrill far from crowds",
        },
        {
            image: "/cards/26.jpg",
            title: "Sky Hammock Trail",
            description:
                "BaliSwing over the valley — a serene thrill far from crowds",
        },
    ];

    const exploreGhanaCategories = [
        // First Row: images 38, 39, 40
        {
            image: "/cards/38.jpg",
            title: "Events",
            rating: "3.5",
        },
        {
            image: "/cards/39.png",
            title: "Activities",
            rating: "3.5",
        },
        {
            image: "/cards/40.jpg",
            title: "Restaurants",
            rating: "3.5",
        },
        // Second Row: images 41, 42
        {
            image: "/cards/41.png",
            title: "Tours",
            rating: "3.5",
        },
        {
            image: "/cards/42.png",
            title: "Services",
            rating: "3.5",
        },
        // Third Row: images 43, 44, 45
        {
            image: "/cards/43.png",
            title: "Destinations",
            rating: "3.5",
        },
        {
            image: "/cards/44.jpg",
            title: "Places",
            rating: "3.5",
        },
        {
            image: "/cards/45.jpg",
            title: "Accommodations",
            rating: "3.5",
        },
    ];

    const ghanasTop10s = [
        {
            image: "/cards/27.jpg",
            tag: "Event",
            title: "DJ Liv North Live",
            date: "Wed, 5th Dec",
            time: "10:30 PM - 12:30 PM",
            location: "NewYork City",
            price: "From USD 89",
            rating: "4.8",
        },
        {
            image: "/cards/28.jpg",
            tag: "Tour",
            title: "DJ Liv North Live",
            time: "10:30 PM - 12:30 PM",
            location: "NewYork City",
            price: "From USD 89",
            rating: "4.8",
        },
        {
            image: "/cards/29.jpg",
            tag: "Activity",
            title: "DJ Liv North Live",
            time: "10:30 PM - 12:30 PM",
            location: "NewYork City",
            price: "From USD 89",
            rating: "4.8",
        },
        {
            image: "/cards/30.jpg",
            tag: "Indulge",
            title: "DJ Liv North Live",
            date: "Wed, 5th Dec",
            time: "10:30 PM - 12:30 PM",
            location: "NewYork City",
            price: "From USD 89",
            rating: "4.8",
        },
    ];

    const globalHighlights = [
        {
            image: "/cards/31.jpg",
            location: "Paris",
            title: "Culinary nights & art walks",
            cta: "Explore Now",
        },
        {
            image: "/cards/32.jpg",
            location: "Tokyo",
            title: "Hidden rooftop bars & pop-up events",
            cta: "Explore Now",
        },
        {
            image: "/cards/33.jpg",
            location: "New York",
            title: "Adventure escapes & wine tours",
            cta: "Explore Now",
        },
        {
            image: "/cards/34.jpg",
            location: "New York",
            title: "Adventure escapes & wine tours",
            cta: "Explore Now",
        },
    ];

    return (
        <main className="min-h-screen bg-white">
            <NavigationWrapper />
            <div
                className="mx-auto px-4 lg:px-0"
                style={{ maxWidth: "84.8rem", width: "100%" }}
            >
                <HeroSection />
                <EventSection
                    title="Tonight's Spotlight"
                    events={tonightsSpotlightEvents}
                />
                <EventSection
                    title="Hot This Week"
                    events={hotThisWeekEvents}
                />
                <EventSection title="Unmissable" events={unmissableEvents} />
                <ExclusivesSection title="Exclusives" cards={exclusivesCards} />
                <EventSection title="For you" events={forYouEvents} />
                <SectionWrapper
                    title="Buzzing Destinations"
                    cards={buzzingDestinations}
                    cardType="destination"
                    backgroundColor="#FFFFFF"
                />
                {/* <BlazingDealsSection
                    title="Blazing Deals"
                    offers={blazingDealsOffers}
                /> */}
                <SectionWrapper
                    title="Discover Hidden Gems"
                    cards={hiddenGems}
                    cardType="hiddenGem"
                    backgroundColor="#FFFFFF"
                />
            </div>
            <ExploreGhanaSection
                title="Explore Ghana"
                categories={exploreGhanaCategories}
            />
            {/* Ghana's Top 10s with full background */}
            <section
                className="w-full lg:px-2"
                style={{
                    backgroundColor: "#FAF8ED",
                    paddingTop: "2rem",
                    paddingBottom: "2rem",
                }}
            >
                <div
                    className="mx-auto px-4 lg:px-0"
                    style={{ maxWidth: "84rem", width: "100%" }}
                >
                    <SectionWrapper
                        title="Ghana's Top 10s"
                        cards={ghanasTop10s}
                        cardType="event"
                        backgroundColor="#FAF8ED"
                        renderAsDiv={true}
                        removePadding={true}
                    />
                </div>
            </section>
            <div
                className="mx-auto px-4 lg:px-2"
                style={{ maxWidth: "84rem", width: "100%" }}
            >
                <SectionWrapper
                    title="Global Highlights"
                    cards={globalHighlights}
                    cardType="globalHighlight"
                    backgroundColor="#FFFFFF"
                />
            </div>

            <Footer />
        </main>
    );
}
