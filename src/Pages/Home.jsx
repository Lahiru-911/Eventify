import React from "react";

const Home = () => {
  return (
    <>
      <div className="m-2 md:m-4 relative rounded-large bg-white/60 shadow-2xl ring-1 ring-gray-900/10 h-[250px] md:h-[650px] lg:h-[745px] xl:h-[750px] 2xl:h-[830px]">
        {/* Background Video */}
        <video
        className="absolute top-0 left-0 rounded-large h-full w-full object-cover"
        src="https://videos.pexels.com/video-files/854982/854982-hd_1280_720_25fps.mp4"
        autoPlay
        loop
        muted
      ></video>

        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}

      
      </div>
    </>
  );
};

export default Home;
