import BannerSlider from "../Components/BannerSlider/BannerSlider";
import { useEffect, useState } from "react";

const eventsList = [
  {
    category: "Entertainment",
    image:
      "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Lakeside Camping at ",
    time: "8.30 AM - 17.30 PM",
    price: "Rs. 1,500",
    month: "Nov",
    date: "25-26",
  },
  {
    category: "Educational",
    image:
      "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Sound Of Christmas 2024",
    time: "8.30 AM - 17.30 PM",
    price: "Rs. 1,500",
    month: "Mar",
    date: "21-22",
  },
  {
    category: "Cultural",
    image:
      "https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Sound Of Christmas 2024",
    time: "8.30 AM - 17.30 PM",
    price: "Rs. 1,500",
    month: "Aug",
    date: "15-16",
  },
  {
    category: "Sports",
    image:
      "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Lakeside Camping at ",
    time: "8.30 AM - 17.30 PM",
    price: "Rs. 1,500",
    month: "Nov",
    date: "25-26",
  },
  {
    category: "Technology",
    image:
      "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Sound Of Christmas 2024",
    time: "8.30 AM - 17.30 PM",
    price: "Rs. 1,500",
    month: "Mar",
    date: "21-22",
  },
  {
    category: "Business",
    image:
      "https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Sound Of Christmas 2024",
    time: "8.30 AM - 17.30 PM",
    price: "Rs. 1,500",
    month: "Aug",
    date: "15-16",
  },
  {
    category: "Sports",
    image:
      "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Lakeside Camping at NuwaraEliya",
    time: "8.30 AM - 17.30 PM",
    price: "Rs. 1,500",
    month: "Nov",
    date: "25-26",
  },
  {
    category: "Cultural",
    image:
      "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Sound Of Christmas 2024",
    time: "8.30 AM - 17.30 PM",
    price: "Rs. 1,500",
    month: "Mar",
    date: "21-22",
  },
  {
    category: "Entertainment",
    image:
      "https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Sound Of Christmas 2024",
    time: "8.30 AM - 17.30 PM",
    price: "Rs. 1,500",
    month: "Aug",
    date: "15-16",
  },
];

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

const Events = () => {
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((event, index) => (
          <div key={index} className=" rounded-2xl flex flex-col ">
            <div className="mb-5">
              <img
                src={event.image}
                alt={event.title}
                className="rounded-2xl object-cover w-full h-full"
              />
            </div>
            <div className="flex justify-between items-center px-5 bg-none">
              <div className="w-20 h-20  flex flex-col items-center justify-center border-2 border-[#2e54ff] hover:bg-blue-100 text-blue-700 font-semibold rounded-full">
                <span className="text-sm">{event.month}</span>
                <span className="text-lg">{event.date}</span>
              </div>
              <div>
                <h2 className="font-semibold text-lg mb-1">{event.title}</h2>

                <p className="text-sm">{event.time}</p>

                <p>
                  <span>🎟 </span>
                  {event.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Events;
