import { useState } from "react";

const productData = [
  {
    title: "Upcoming Events",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, nisi.",
    imageUrl: "https://placehold.co/600x400",
  },
  {
    title: "Upcoming Events",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, nisi.",
    imageUrl: "https://placehold.co/600x400",
  },
  {
    title: "Upcoming Events",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, nisi.",
    imageUrl: "https://placehold.co/600x400",
  },
  {
    title: "Upcoming Events",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, nisi.",
    imageUrl: "https://placehold.co/600x400",
  },
  {
    title: "Upcoming Events",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, nisi.",
    imageUrl: "https://placehold.co/600x400",
  },
  {
    title: "Upcoming Events",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, nisi.",
    imageUrl: "https://placehold.co/600x400",
  },
  {
    title: "Upcoming Events",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, nisi.",
    imageUrl: "https://placehold.co/600x400",
  },
  {
    title: "Upcoming Events",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, nisi.",
    imageUrl: "https://placehold.co/600x400",
  },
  {
    title: "Upcoming Events",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, nisi.",
    imageUrl: "https://placehold.co/600x400",
  },
  {
    title: "Upcoming Events",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, nisi.",
    imageUrl: "https://placehold.co/600x400",
  },
  {
    title: "Upcoming Events",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, nisi.",
    imageUrl: "https://placehold.co/600x400",
  },
  {
    title: "Upcoming Events",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, nisi.",
    imageUrl: "https://placehold.co/600x400",
  },
];

const Home = () => {
  return (
    <>
      <div>
        <div className="mx-2 md:mx-4 relative rounded-large bg-white/60 shadow-2xl ring-1 ring-gray-900/10 h-[250px] md:h-[650px] lg:h-[745px] xl:h-[750px] 2xl:h-[830px]">
          {/* Background Image */}
          <img
            className="rounded-large h-full w-full object-cover"
            src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />

          {/* Black Overlay with Opacity */}
          <div className="absolute inset-0 z-10 bg-white/60 opacity-15 rounded-large"></div>

          {/* Text Overlay  */}
          <div className="absolute inset-0 z-20 m-4 sm:m-5 md:m-6 lg:m-8 2xl:m-10 text-white flex flex-col justify-center items-start">
            <h1 className="uppercase m-1 mt-20 md:mt-60 lg:mt-64 xl:mt-64 2xl:mt-24 font-extralight text-4xl sm:text-5xl md:text-8xl lg:text-9xl xl:text-[140px] 2xl:text-[160px]">
              Dream,
              <br />
              Plan,
            </h1>
            <div className="flex justify-center items-center gap-2 md:gap-4 2xl:gap-8">
              <h1 className="uppercase italic font-extralight text-4xl sm:text-5xl md:text-8xl lg:text-9xl xl:text-[140px] 2xl:text-[160px]">
                Enjoy!
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Why Party Plus */}
      <div className="grid md:grid-cols-2 m-4 md:m-6 lg:m-7 xl:m-8">
        <div>
          <h1 className="text-[#D8D8D8] text-left font-bold text-5xl sm:text-6xl md:text-7xl lg:text-9xl xl:text-[140px] 2xl:text-[180px]">
            WHY
            <br />
            PARTY
            <br /> PLUS
          </h1>
        </div>
        <div className="grid grid-rows-2">
          {/* First Tagline */}
          <div className="my-1 md:my-0">
            <h1 className="font-light w-full md:w-11/12 lg:w-11/12 xl:w-10/12 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
              Our primary focus is on Events
            </h1>
            <p className="text-justify my-1 md:my-3 lg:my-4 w-5/6 lg:w-10/12 xl:w-3/4 text-[#808080] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
              facere aliquam laborum numquam, dolorem harum nisi asperiores. Ex
              asperiores, qui laborum magnam vero quos, modi sint veritatis,
              officiis illo impedit.
            </p>
          </div>
          {/* Second Tagline */}
          <div className="my-1 md:my-3 lg:my-4">
            <h1 className="font-light text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
              We focus on Events
            </h1>
            <p className="text-justify my-1 md:my-3 lg:my-4 w-5/6 lg:w-10/12 xl:w-3/4 text-[#808080] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatum molestias totam eligendi, dignissimos necessitatibus
              iusto asperiores veritatis! Veniam corporis neque pariatur
              perspiciatis porro, voluptatibus magni, voluptas provident, iure
              eveniet suscipit!
            </p>
          </div>
        </div>
      </div>

      {/* Box Cards Section */}
      <div className="grid grid-cols-1 justify-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 gap-10 m-8">
        {productData.map((product, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <div className="max-w-[500px] max-h-[700px] w-full relative rounded-2xl bg-white/60 shadow-2xl ring-1 ring-gray-900/10 transition-transform duration-300 ease-in-out hover:scale-105 z-10">
              <img
                className="rounded-2xl w-full h-full object-cover"
                src={product.imageUrl}
                alt={product.title}
              />
            </div>

            <div className="mt-8 text-center">
              <h1 className="text-xl sm:text-2xl lg:text-3xl 2xl:text-3xl m-2 text-center leading-none font-medium">
                {product.title}
              </h1>
              <p className="text-sm sm:text-sm md:text-base lg:text-base xl:text-lg 2xl:text-xl font-normal capitalize text-center m-2 px-2">
                {product.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ;





<div class="p-4 bg-white shadow-md flex flex-wrap gap-4 rounded-md">
{/* <!-- Month Dropdown --> */}
<div class="flex flex-col">
  <label for="month" class="font-semibold">Month</label>
  <select id="month" class="border border-gray-300 rounded-md p-2">
    <option value="">All Months</option>
    <option value="Nov">November</option>
    <option value="Mar">March</option>
    <option value="Aug">August</option>
  </select>
</div>

{/* <!-- Title Search --> */}
<div class="flex flex-col">
  <label for="title" class="font-semibold">Search Title</label>
  <input
    id="title"
    type="text"
    placeholder="Enter Event Title"
    class="border border-gray-300 rounded-md p-2"
  />
</div>

{/* <!-- Price Slider --> */}
<div class="flex flex-col">
  <label for="price" class="font-semibold">Price Range</label>
  <input
    id="price"
    type="range"
    min="1500"
    max="5000"
    step="500"
    class="w-full"
  />
  <div class="flex justify-between text-sm mt-1">
    <span>Rs. 1,500</span>
    <span>Rs. 5,000</span>
  </div>
</div>

{/* <!-- Reset Button --> */}
<div class="flex items-end">
  <button class="bg-blue-500 text-white px-4 py-2 rounded-md">Reset Filters</button>
</div>
</div>




















import React, { useState } from "react";
import { WavyBackground } from "../Components/WavyBackground/WavyBackground";

const He = () => {
  const [visibleEvents, setVisibleEvents] = useState(6);

  const handleSeeMore = () => {
    setVisibleEvents((prev) => prev + 3);
  };

  const filters = ["All", "Today", "Tomorrow", "This Weekend", "Free"];

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

  const categories = [
    {
      id: 1,
      title: "Entertainment",
      imgSrc:
        "https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      title: "Educational & Business",
      imgSrc:
        "https://images.pexels.com/photos/29646491/pexels-photo-29646491/free-photo-of-graduation-celebration-with-cap-toss-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      title: "Cultural & Arts",
      imgSrc:
        "https://images.pexels.com/photos/29636836/pexels-photo-29636836/free-photo-of-traditional-fire-breather-performing-at-festival.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      title: "Sports & Fitness",
      imgSrc:
        "https://images.pexels.com/photos/29694798/pexels-photo-29694798/free-photo-of-group-of-male-runners-competing-in-foggy-marathon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 5,
      title: "Technology &Innovation",
      imgSrc:
        "https://images.pexels.com/photos/8348740/pexels-photo-8348740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 6,
      title: "Travel & Adventure",
      imgSrc:
        "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  return (
    <>
      {/* Hero Video */}
      <div className="relative h-screen max-w-screen">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0  h-full w-full object-cover"
          src="/home/h1.webm"
          autoPlay
          loop
          muted
        ></video>

        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-40 rounded-large h-full w-full object-cover"></div> */}
      </div>

      {/* Explore */}
      <div className="my-5 md:my-7 lg:my-9 mx-2 md:mx-8 lg:mx-10 xl:mx-12">
        <h2 className="font-medium tracking-wider leading-none text-start my-2 p-y2 text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
          Explore Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 my-5 justify-items-center">
          {categories.map((category) => (
            <span key={category.id}>
              <img
                className="w-20 h-20 sm:w-24 md:w-28 lg:w-28 xl:w-36 2xl:w-44 sm:h-24 md:h-28 lg:h-28 xl:h-36 2xl:h-44  rounded-full object-cover"
                src={category.imgSrc}
                alt={category.title}
              />
              <p className="font-normal text-center my-2 py-2 text-xs sm:text-sm md:text-base lg:text-base xl:text-xl 2xl:text-xl">
                {category.title}
              </p>
            </span>
          ))}
        </div>
      </div>

      {/* Popular Events */}
      <div className="mx-2 md:mx-8 lg:mx-10 xl:mx-12">
        {/* Heading */}
        <h2 className="font-medium tracking-wider leading-none text-start my-2 py-2 text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
          Popular Events in Sri Lanka
        </h2>

        <div className="flex gap-4 mb-6">
          {filters.map((filter, index) => (
            <button
              key={index}
              className="hidden sm:block px-4 py-2 bg-none border-2 border-[#2e54ff] text-[#2e54ff] rounded-full shadow-2xl hover:bg-gray-100"
            >
              <p className="md:text-xs lg:text-sm xl:text-base">{filter}</p>
            </button>
          ))}
        </div>

        {/* Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.slice(0, visibleEvents).map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
        {/* See More Button */}
        {visibleEvents < events.length && (
          <div className="flex justify-center m-6">
            <button
              onClick={handleSeeMore}
              className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
            >
              See More
            </button>
          </div>
        )}
      </div>

      {/* Discover Best */}
      <section className="mx-2 md:mx-8 lg:mx-10 xl:mx-12">
        {/* Heading */}
        <h2 className="font-medium tracking-wider leading-none text-start my-2 py-2 text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
          Discover Best of Online Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
          {events.slice(0, visibleEvents).map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
        {/* See More Button */}
        {visibleEvents < events.length && (
          <div className="flex justify-center m-6">
            <button
              onClick={handleSeeMore}
              className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
            >
              See More
            </button>
          </div>
        )}
      </section>

      {/* Banner Section */}
      <div className="relative max-w-full h-[600px] bg-white/60 shadow-2xl ring-1 ring-gray-900/10">
        <img
          className="w-full h-full object-cover"
          src="https://placehold.co/600x400" // Replace with your desired image URL
          alt="Banner"
        />
      </div>

      {/* Trending Events around the Sri Lanka */}
      <section className="mx-2 md:mx-8 lg:mx-10 xl:mx-12">
        {/* Heading */}
        <h2 className="font-medium tracking-wider leading-none text-start my-2 py-2 text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
          Trending Events around the Sri Lanka
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
          {events.slice(0, visibleEvents).map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
        {/* See More Button */}
        {visibleEvents < events.length && (
          <div className="flex justify-center m-6">
            <button
              onClick={handleSeeMore}
              className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
            >
              See More
            </button>
          </div>
        )}
      </section>

      {/* Create an event with Eventify */}
      <WavyBackground />

    </>
  );
};