// import React from "react";

// const events = [
//   {
//     date: "Nov 25-26",
//     title: "Lakeside Camping at NuwaraEliya",
//     time: "8:30 AM – 5:30 PM",
//     price: "Rs. 1,500",
//     image: "https://via.placeholder.com/300?text=Event+1",
//   },
//   {
//     date: "Mar 21-22",
//     title: "Sound Of Christmas 2024",
//     time: "8:30 AM – 5:30 PM",
//     price: "Rs. 1,500",
//     image: "https://via.placeholder.com/300?text=Event+2",
//   },
//   {
//     date: "Aug 15-16",
//     title: "Lakeside Camping at NuwaraEliya",
//     time: "8:30 AM – 5:30 PM",
//     price: "Rs. 1,500",
//     image: "https://via.placeholder.com/300?text=Event+3",
//   },
//   {
//     date: "May 05-09",
//     title: "Music Festival 2024",
//     time: "8:30 AM – 5:30 PM",
//     price: "Free",
//     image: "https://via.placeholder.com/300?text=Event+4",
//   },
//   {
//     date: "Feb 08-12",
//     title: "Lakeside Camping at NuwaraEliya",
//     time: "8:30 AM – 5:30 PM",
//     price: "Rs. 1,500",
//     image: "https://via.placeholder.com/300?text=Event+5",
//   },
//   {
//     date: "Dec 25-27",
//     title: "Sound Of Christmas 2024",
//     time: "8:30 AM – 5:30 PM",
//     price: "Rs. 499",
//     image: "https://via.placeholder.com/300?text=Event+6",
//   },
//   // Add 6 more similar events for a total of 12
// ];

// const EventCard = ({ date, title, time, price, image }) => (
//   <div className="bg-gray-800 text-white p-4 rounded-lg shadow hover:shadow-lg transition">
//     <img src={image} alt={title} className="rounded-lg mb-4 object-cover w-full h-48" />
//     <div className="flex items-center text-blue-400 font-bold text-lg mb-2">
//       <span className="bg-gray-900 rounded-full px-3 py-1 text-blue-300">{date}</span>
//     </div>
//     <div className="text-xl font-semibold">{title}</div>
//     <div className="text-gray-400 text-sm">{time}</div>
//     <div className="text-gray-200 font-bold mt-2">{price}</div>
//   </div>
// );

// const EventGrid = () => {
//   return (
//     <div className="min-h-screen bg-gray-900 p-8">
//       <h1 className="text-4xl font-bold text-white text-center mb-8">
//         Popular Events in Sri Lanka
//       </h1>
//       <div className="flex justify-center space-x-4 mb-8">
//         {["All", "Today", "Tomorrow", "This Weekend", "Free"].map((filter) => (
//           <button
//             key={filter}
//             className="px-4 py-2 bg-gray-800 text-blue-300 border border-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition"
//           >
//             {filter}
//           </button>
//         ))}
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {events.map((event, index) => (
//           <EventCard key={index} {...event} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default EventGrid;
