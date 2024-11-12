import { useState } from "react";

const productData = [
  {
    title: "Boat Yard Projects",
    description: "Transforming the Boat Yard: With our IT solutions...",
    imageUrl: "https://residuesolution.com/assets/img/products/boat.png",
  },
  {
    title: "Travels & Tour Projects",
    description: "Embarking on an Exciting Journey: Leveraging our IT...",
    imageUrl: "https://residuesolution.com/assets/img/products/tourist.png",
  },
  {
    title: "Garment Company Projects",
    description: "Crafting Efficiency with Technology: Our IT Solutions...",
    imageUrl: "https://residuesolution.com/assets/img/products/garment.png",
  },
  {
    title: "HP Servers & Switches",
    description: "HP Server delivers unparalleled performance and...",
    imageUrl: "https://residuesolution.com/assets/img/products/800x800.png",
  },
  {
    title: "Dell Servers & Switches",
    description: "Elevate your IT infrastructure with Dell Servers. Trusted...",
    imageUrl: "https://residuesolution.com/assets/img/products/dellservers.png",
  },
  {
    title: "Lenovo Servers",
    description: "Lenovo servers provide unmatched performance and...",
    imageUrl:
      "https://residuesolution.com/assets/img/products/lenovoservers.png",
  },
  {
    title: "Web Development",
    description: "Elevating Your Online Presence: Our IT Solutions Company...",
    imageUrl: "https://residuesolution.com/assets/img/products/website.png",
  },
  {
    title: "Mobile App Development",
    description: "Innovating Your Digital Experience: Our IT Solutions...",
    imageUrl: "https://residuesolution.com/assets/img/products/mobileapp.png",
  },
  {
    title: "Maintains",
    description: "Our IT solution company provides seamless software...",
    imageUrl: "https://residuesolution.com/assets/img/products/800x8002.png",
  },
  {
    title: "Cisco Products",
    description: "Boost your network with top-notch Cisco products from...",
    imageUrl: "https://residuesolution.com/assets/img/products/cisco.png",
  },
  {
    title: "Aruba Products",
    description: "Our IT Solutions Company Offers High-Quality Laptops...",
    imageUrl: "https://residuesolution.com/assets/img/products/aruba.png",
  },
  {
    title: "Laptops",
    description: "Crafting Efficiency with Technology: Our IT Solutions...",
    imageUrl:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba13-midnight-select-202402?wid=904&hei=840&fmt=jpeg&qlt=95&.v=1708367688034",
  },
  {
    title: "Desktops",
    description: "Our IT Solutions Company Provides Premium Desktops,...",
    imageUrl: "https://residuesolution.com/assets/img/products/desktop.png",
  },
  {
    title: "Accessories",
    description: "Our IT Solutions Company Offers a Range...",
    imageUrl: "https://residuesolution.com/assets/img/products/accessories.png",
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
                className="rounded-2xl"
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

export default Home;
