import BannerSlider from "../Components/BannerSlider/BannerSlider";
import { useEffect, useState } from "react";
import EventCards from "../Components/EventsData/EventsCards";

// Categories list
const categories = [
  "All",
  "Entertainment",
  "Educational",
  "Cultural",
  "Sports",
  "Technology",
  "Business",
];

const Events = ({ eventsList }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredEvents =
    activeCategory === "All"
      ? eventsList
      : eventsList.filter((event) => event.category === activeCategory);

  return (
    <>
      <BannerSlider />

      {/* NavBar Product */}
      <div className="flex justify-center">
        <div className="hidden sm:flex justify-center items-center h-11 lg:h-14 bg-white/60 m-5 mt-8 rounded-full md:w-full lg:w-11/12 2xl:w-2/3 shadow-xl ring-1 ring-gray-900/10">
          <ul className="flex justify-center items-center space-x-3 lg:space-x-8 2xl:space-x-14 text-gray-600 text-xs lg:text-sm xl:text-base 2xl:text-lg">
            {categories.map((category) => (
              <li key={category}>
                <a
                  href="#"
                  onClick={() => setActiveCategory(category)}
                  className={`hover:text-[#0081FB] ${
                    activeCategory === category
                      ? "text-[#0081FB] font-semibold"
                      : ""
                  }`}
                >
                  {category}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <EventCards eventsList={filteredEvents} />
    </>
  );
};

export default Events;
