
import React, { useState } from 'react';

const Ths = () => {
  const filters = ["All", "Today", "Tomorrow", "This Weekend", "Free"];

  const events = [
    { id: 1, month: "Nov", dates: "25-26", title: "Lakeside Camping at NuwaraEliya", time: "8:30 AM – 5:30 PM", price: "Rs. 1,500" },
    { id: 2, month: "Mar", dates: "21-22", title: "Lakeside Camping at NuwaraEliya", time: "8:30 AM – 5:30 PM", price: "Rs. 1,500" },
    { id: 3, month: "May", dates: "05-09", title: "Lakeside Camping at NuwaraEliya", time: "8:30 AM – 5:30 PM", price: "Rs. 1,500" },
    { id: 4, month: "Aug", dates: "15-16", title: "Lakeside Camping at NuwaraEliya", time: "8:30 AM – 5:30 PM", price: "Rs. 1,500" },
    { id: 5, month: "Feb", dates: "08-12", title: "Lakeside Camping at NuwaraEliya", time: "8:30 AM – 5:30 PM", price: "Free" },
    { id: 6, month: "Dec", dates: "25-27", title: "Sound Of Christmas 2024", time: "8:30 AM – 5:30 PM", price: "Rs. 499" },
  ];

  const [visibleEvents, setVisibleEvents] = useState(3);

  const handleSeeMore = () => {
    setVisibleEvents((prev) => prev + 3);
  };

  return (
    <div className="p-6 bg-pink-50 min-h-screen">
      {/* Heading */}
      <h1 className="text-2xl font-bold mb-4">Popular Events in Sri Lanka</h1>

      {/* Filters */}
      <div className="flex gap-4 mb-6">
        {filters.map((filter, index) => (
          <button
            key={index}
            className="px-4 py-2 bg-white text-gray-800 rounded-full shadow hover:bg-gray-100"
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Event Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {events.slice(0, visibleEvents).map((event) => (
          <div
            key={event.id}
            className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center"
          >
            {/* Date Circle */}
            <div className="w-16 h-16 flex flex-col items-center justify-center bg-blue-100 text-blue-700 font-semibold rounded-full mb-4">
              <span className="text-sm">{event.month}</span>
              <span className="text-lg">{event.dates}</span>
            </div>

            {/* Event Details */}
            <h2 className="font-medium text-gray-800 mb-2">{event.title}</h2>
            <p className="text-gray-600 text-sm">{event.time}</p>

            {/* Price */}
            <div className="flex items-center gap-2 mt-4">
              <span className="text-gray-500 text-sm">🎟 {event.price}</span>
            </div>
          </div>
        ))}
      </div>

      {/* See More Button */}
      {visibleEvents < events.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleSeeMore}
            className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
          >
            See More
          </button>
        </div>
      )}
    </div>
  );
};

export default Ths;
