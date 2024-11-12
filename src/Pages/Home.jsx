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
          <div className="absolute inset-0 z-20 m-4 sm:m-5 md:m-6 lg:m- xl:m-8 2xl:m-10 text-white flex flex-col justify-center items-start">
            <h1 className="uppercase m-1 mt-20 md:mt-60 lg:mt-64 xl:mt-64 2xl:mt-24 font-extralight text-4xl sm:text-5xl md:text-8xl lg:text-9xl xl:text-[140px] 2xl:text-[160px]">
              Dream,
              <br />
              Plan,
            </h1>
            <div className="flex justify-center items-center gap-2 md:gap-4 2xl:gap-8">
              {/* <Link to="/contact">
                <MagnetButton />
              </Link> */}
              <h1 className="uppercase italic font-extralight text-4xl sm:text-5xl md:text-8xl lg:text-9xl xl:text-[140px] 2xl:text-[160px]">
                Enjoy!
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Why Residue Solution */}
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
    </>
  );
};

export default Home;
