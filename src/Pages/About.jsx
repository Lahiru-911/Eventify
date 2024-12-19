import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CountDown from "../Components/CountDown/countdown";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // Allow animations to trigger multiple times
    });

    const handleScroll = () => {
      AOS.refresh(); // Refresh AOS animations on scroll
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Section 01 */}
      <div className="flex flex-col justify-center items-center">
        <div className="relative w-full h-screen">
          <img
            className="w-full h-full object-cover"
            src="/about/a1.webp"
            alt=""
          />
        </div>
        <div className="absolute z-20 flex flex-col justify-center items-center text-white text-center w-full h-auto p-2">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
            WE ARE
          </h1>
          <p className="mt-2 font-medium text-xs md:text-sm lg:text-lg">
            EXPERIENCE CREATORS FESTIVAL PRODUCERS
          </p>
          <p className="mt-4 text-xs md:text-sm lg:text-base w-5/6 lg:w-2/3">
            Fathom Producers is a full-spectrum production powerhouse that
            creates, promotes, and produces world-class events, festivals, and
            live concerts. Known for crafting powerful brands, our creative
            energy drives the passion we have for producing amazing experiences
            that we can share with the world.
          </p>
        </div>
      </div>

      {/* Section 02 */}
      <div className="flex flex-col justify-center">
        <div className="relative w-full h-screen">
          <img
            className="w-full h-full object-cover"
            src="/about/a2.webp"
            alt=""
          />
        </div>
        <div className="absolute z-20 flex justify-between mx-2 md:mx-8 lg:mx-10 xl:mx-12">
          <div className="flex flex-col justify-center items-start text-black text-left w-full h-auto p-2">
            <h1 className="font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
              About Us
            </h1>
            <p className="mt-4 text-xs lg:text-sm xl:text-base w-5/6 lg:w-2/3 text-justify">
              Welcome to Eventify – your ultimate event management platform! We
              are passionate about helping individuals and organizations bring
              their visions to life with ease and creativity. At Eventify, we
              believe that every event, big or small, deserves to be
              unforgettable. Our mission is to simplify the event planning
              process by providing tools that inspire collaboration, foster
              innovation, and ensure flawless execution. From conferences and
              weddings to festivals and private parties, Eventify is here to
              empower you at every step of the journey. With our intuitive
              platform, you can manage everything from creating schedules and
              coordinating vendors to tracking budgets and sharing real-time
              updates. Let us handle the complexities, so you can focus on what
              truly matters – creating moments that leave a lasting impression.
              Join us in redefining how events are planned and experienced.
              Together, let's make magic happen!
            </p>
          </div>
          <div
            data-aos="fade-left"
            className="hidden sm:block max-w-[500px] max-h-[700px] w-full rounded-lg bg-white/60 shadow-2xl ring-1 ring-gray-900/10 "
          >
            <img src="" alt="" />
          </div>
        </div>
      </div>

      {/* Section 03 */}
      <CountDown />
    </>
  );
};

export default About;
