import { Link } from "react-router-dom";
import { SiWhatsapp } from "react-icons/si";
const FooterContent = () => {
  return (
    <>
      <div className="flex flex-col  gap-4 lg:gap-12 md:mx-4 lg:mx-6 xl:mx-8">
        <div className="grid grid-cols-2 lg:grid-cols-12 mt-5 md:mt-16 m-8 md:m-0">
          <div className="col-span-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-2 lg:gap- xl:gap- 2xl:gap-14">
            {/* Contact Us */}
            <div className="flex flex-col">
              <h1 className="font-medium m-2 sm:m-2 lg:m-2 xl:m-3 capitalize text-lg md:text-xl lg:text-2xl xl:text-3xl">
                Contact us
              </h1>
              <p className="m-2 sm:m-2 lg:m-2 xl:m-3 text-sm lg:text-base xl:text-xl">
                <span className="font-medium"> Our Email</span> <br /> 
                <a
                  className="text-black hover:text-[#0081FB]"
                  href="mailto:prabath@residuesolution.com"
                >
                  info@eventify.com
                </a>
              </p>
              <p className="m-2 sm:m-2 lg:m-2 xl:m-3 text-sm lg:text-base xl:text-xl">
                <span className="font-medium">Our Phone Number</span> <br />
                <a
                  href="tel:(+94) 74 277 7201"
                  className="text-black hover:text-[#0081FB]"
                >
                  (+94) 77 578 8667
                </a>
                <br />
                <a
                  href="tel:(+94) 74 271 8994"
                  className="text-black hover:text-[#0081FB]"
                >
                  (+94) 77 777 7788
                </a>
              </p>
              <address className="not-italic text-black hover:text-[#0081FB] m-2 sm:m-2 lg:m-2 xl:m-3 text-sm lg:text-base xl:text-xl">
                <a
                  href="https://maps.app.goo.gl/bnu6oNjbhpJUdtbEA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>Eventify Inc.</p>
                  <p>123 Event Street, City, Country</p>
                </a>
              </address>
            </div>

            {/* Follow Us */}
            <div className=" flex flex-col ">
              <h1 className="font-medium m-2 sm:m-2 lg:m-2 xl:m-3 capitalize text-lg md:text-xl lg:text-2xl xl:text-3xl">
                Follow us
              </h1>
              <a
                href="https://www.facebook.com/profile.php?id=61556773601191"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0081FB] m-2 sm:m-2 lg:m-2 xl:m-3 text-sm lg:text-base xl:text-xl"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/residuesolution_/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0081FB] m-2 sm:m-2 lg:m-2 xl:m-3 text-sm lg:text-base xl:text-xl"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/company/residuesolutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0081FB] m-2 sm:m-2 lg:m-2 xl:m-3 text-sm lg:text-base xl:text-xl"
              >
                LinkedIn
              </a>
              <a
                href="https://www.tiktok.com/@technook.lk?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0081FB] m-2 sm:m-2 lg:m-2 xl:m-3 text-sm lg:text-base xl:text-xl"
              >
                TikTok
              </a>
            </div>

            {/* Services */}
            <div className=" flex flex-col ">
              <h1 className="font-medium m-2 sm:m-2 lg:m-2 xl:m-3 capitalize text-lg md:text-xl lg:text-2xl xl:text-3xl">
                Our Support
              </h1>
              <Link
                to="/services"
                className="hover:text-[#0081FB] m-2 sm:m-2 lg:m-2 xl:m-3 text-sm lg:text-base xl:text-xl"
              >
                Upcoming Events
              </Link>
              <Link
                to="/services"
                className="hover:text-[#0081FB] m-2 sm:m-2 lg:m-2 xl:m-3 text-sm lg:text-base xl:text-xl"
              >
                Organize an Event
              </Link>
              <Link
                to="/services"
                className="hover:text-[#0081FB] m-2 sm:m-2 lg:m-2 xl:m-3 text-sm lg:text-base xl:text-xl"
              >
                Privacy Policy
              </Link>
              <Link
                to="/services"
                className="hover:text-[#0081FB] m-2 sm:m-2 lg:m-2 xl:m-3 text-sm lg:text-base xl:text-xl"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
          <div className="col-span-4 content-center">
            {/* Connect Tab */}
            <div className="lg:flex justify-end items-center">
              <div className="bg-white  w-[250px] md:w-full h-fit lg:w-[400px] lg:h-[330px]">
                <div className="m-7">
                  <h1 className="text-4xl md:text-5xl font-normal">
                    We’d love to connect!
                  </h1>
                  <p className="pt-5">
                    Whether you're interested in collaborating <br />
                    or just want to chat, feel <br />
                    free to reach out.
                  </p>
                  <Link to="/contact">
                    <button className="relative px-4 py-2 rounded-full bg-white text-[#0081FB] isolation-auto z-10 border-2 border-[#0081FB] before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-[#0081FB] before:transition-all before:duration-700 before:hover:w-full before:z-[-1] hover:text-white before:hover:rounded-full before:rounded-full overflow-hidden transition-all duration-500 ease-in-out text-base font-inter font-normal my-5">
                      + Create Event
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Under Section */}
        <div className="grid lg:grid-cols-3 mt-6 gap-3 font-medium text-center lg:text-start">
          {/* Copyright Section */}
          <div className=" text-sm lg:text-base xl:text-lg">
            <p>
              © Copyright 2025. Powered By
              <a href="/" className="text-[#0081FB]">
                {" "}
                Eventify
              </a>
            </p>
          </div>
          {/* Policy Section */}
          <div className="flex justify-center items-center m-3 md:m-0 gap-8 md:gap-3 xl:gap-16 text-sm lg:text-base xl:text-lg">
            <a href="#" className="hover:text-[#0081FB]">
              Terms of Use
            </a>
            <a href="#" className="hover:text-[#0081FB]">
              Privacy Policy
            </a>
            <Link to="/about" className="hover:text-[#0081FB]">
              About Us
            </Link>
          </div>
          {/* Whatsapp Icon */}
          <div>
            <a
              href="https://wa.me/94742777201"
              target="_blank"
              rel="noopener noreferrer"
              className="fixed bottom-8 right-4 w-16 h-16 z-50 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
            >
              <SiWhatsapp size={35} fill="white" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterContent;
