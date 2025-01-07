import React, { useState } from "react";

const EventCard = ({ date, title, time, price, image, month }) => (
  <div className=" rounded-2xl flex flex-col ">
    <div className="mb-5">
      <img
        src={image}
        alt={title}
        className="rounded-2xl object-cover w-full h-full"
      />
    </div>
    <div className="flex justify-between items-center px-5 bg-none">
      <div className="w-20 h-20  flex flex-col items-center justify-center border-2 border-[#2e54ff] hover:bg-blue-100 text-blue-700 font-semibold rounded-full">
        <span className="text-sm">{month}</span>
        <span className="text-lg">{date}</span>
      </div>
      <div>
        <h2 className="font-semibold text-lg mb-1">{title}</h2>

        <p className="text-sm">{time}</p>

        <p>
          <span>🎟 </span>
          {price}
        </p>
      </div>
    </div>
  </div>
);

const EventCards = () => {
  const [visibleEvents, setVisibleEvents] = useState(6);

  const handleSeeMore = () => {
    setVisibleEvents((prev) => prev + 3);
  };

  const events = [
    {
      image:
        "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Lakeside Camping at ",
      time: "8.30 AM - 17.30 PM",
      price: "Rs. 1,500",
      month: "Nov",
      date: "25-26",
    },
    {
      image:
        "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Sound Of Christmas 2024",
      time: "8.30 AM - 17.30 PM",
      price: "Rs. 1,500",
      month: "Mar",
      date: "21-22",
    },
    {
      image:
        "https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Sound Of Christmas 2024",
      time: "8.30 AM - 17.30 PM",
      price: "Rs. 1,500",
      month: "Aug",
      date: "15-16",
    },
    {
      image:
        "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Lakeside Camping at ",
      time: "8.30 AM - 17.30 PM",
      price: "Rs. 1,500",
      month: "Nov",
      date: "25-26",
    },
    {
      image:
        "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Sound Of Christmas 2024",
      time: "8.30 AM - 17.30 PM",
      price: "Rs. 1,500",
      month: "Mar",
      date: "21-22",
    },
    {
      image:
        "https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Sound Of Christmas 2024",
      time: "8.30 AM - 17.30 PM",
      price: "Rs. 1,500",
      month: "Aug",
      date: "15-16",
    },
    {
      image:
        "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Lakeside Camping at NuwaraEliya",
      time: "8.30 AM - 17.30 PM",
      price: "Rs. 1,500",
      month: "Nov",
      date: "25-26",
    },
    {
      image:
        "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Sound Of Christmas 2024",
      time: "8.30 AM - 17.30 PM",
      price: "Rs. 1,500",
      month: "Mar",
      date: "21-22",
    },
    {
      image:
        "https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Sound Of Christmas 2024",
      time: "8.30 AM - 17.30 PM",
      price: "Rs. 1,500",
      month: "Aug",
      date: "15-16",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.slice(0, visibleEvents).map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
       {/* See More Button */}
      {visibleEvents < events.length && (
        <div className="text-center mt-6">
          <button
            onClick={handleSeeMore}
            className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
          >
            See More
          </button>
        </div>
      )}
    </>
  );
};

export default EventCards;
