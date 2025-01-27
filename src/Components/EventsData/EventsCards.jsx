import React, { useState } from "react";
import EventsData from "../../data/EventsData.json";

const EventCards = () => {
  const [visibleEvents, setVisibleEvents] = useState(6);

  const handleSeeMore = () => {
    setVisibleEvents((prev) => prev + 3);
  };

  // Use all events from the data
  const eventDatas = EventsData || [];

  const EventCard = ({ date, title, time, price, image, month }) => (
    <div className="rounded-2xl flex flex-col">
      <div className="mb-5">
        <img
          src={image}
          alt={title}
          className="rounded-2xl object-cover w-full h-full"
        />
      </div>
      <div className="flex justify-between items-center px-5 bg-none">
        <div className="w-20 h-20 flex flex-col items-center justify-center border-2 border-[#2e54ff] hover:bg-blue-100 text-blue-700 font-semibold rounded-full">
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

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {eventDatas.slice(0, visibleEvents).map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
      {/* See More Button */}
      {visibleEvents < eventDatas.length && (
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
