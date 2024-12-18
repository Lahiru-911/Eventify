import { WavySource } from "./WavySource";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

export function WavyBackground() {
  return (
    <WavySource className="font-normal text-black font-inter">
      {/* Main heading section */}
      <div className="text-center">
        <p className="mt-6 md:mt-16 text-3xl sm:text-4xl md:text-5xl lg:text-6xl ">
          Create an event with <a className="text-[#0081FB]">Eventify.</a>
        </p>

        <p className="p-2 m-2 text-base font-light sm:p-3 sm:m-4 sm:text-lg md:text-2xl lg:text-xl xl:text-2xl">
          Have Questions, Need Support, or Want to Share Feedback? Our Team is
          Here to Assist You Every Step of the Way.
          <br />
          Reach Out and Connect with Us Today!
        </p>
      </div>

      {/* Button */}
      <div className="flex justify-center items-center m-4 md:m-6">
        <button className="relative px-2 p-1 rounded-full bg-white text-[#0081FB] isolation-auto z-10 border-2 border-[#0081FB] before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-[#0081FB] before:transition-all before:duration-700 before:hover:w-full before:z-[-1] hover:text-white before:hover:rounded-full before:rounded-full overflow-hidden transition-all duration-500 ease-in-out text-xs sm:text-xs md:text-xs lg:text-sm xl:text-lg 2xl:text-base font-inter font-normal">
          Create Event
        </button>
      </div>
    </WavySource>
  );
}
