import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function BannerSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    centerMode: true,
    centerPadding: "300px", // Adjust padding for how much of the adjacent slides to show
    responsive: [
      {
        breakpoint: 1536, // 2xl
        settings: {
          slidesToShow: 1,
          centerPadding: "100px", // Adjust for larger screens
        },
      },
      {
        breakpoint: 1280, // xl
        settings: {
          slidesToShow: 1,
          centerPadding: "80px",
        },
      },
      {
        breakpoint: 1024, // lg
        settings: {
          slidesToShow: 1,
          centerPadding: "60px",
        },
      },
      {
        breakpoint: 768, // md
        settings: {
          slidesToShow: 1,
          centerPadding: "120px",
        },
      },
      {
        breakpoint: 640, // sm
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <div className="w-full p-4">
      <Slider {...settings}>
        <div className="px-2">
          <img
            src="https://tickets.lk/assets/banner/4.jpg"
            alt="Cat"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="px-2">
          <img
            src="https://tickets.lk/assets/banner/2.jpg"
            alt="Cat"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="px-2">
          <img
            src="https://tickets.lk/assets/banner/3.jpg"
            alt="Cat"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="px-2">
          <img
            src="https://tickets.lk/assets/banner/5.jpg"
            alt="Cat"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="px-2">
          <img
            src="https://tickets.lk/assets/banner/4.jpg"
            alt="Cat"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="px-2">
          <img
            src="https://tickets.lk/assets/banner/2.jpg"
            alt="Cat"
            className="rounded-lg shadow-lg"
          />
        </div>
      </Slider>
    </div>
  );
}

export default BannerSlider;
