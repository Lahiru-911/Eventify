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
    </>
  );
};

export default Home;
