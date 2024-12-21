import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function BannerSlider() {
  const settings = {
    dots: true, // Enables dots
    arrows: false, // Removes the left and right controllers
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    centerMode: true,
    centerPadding: "300px", // Adjust padding for how much of the adjacent slides to show
    appendDots: (dots) => (
      <div
        style={{
          backgroundColor: "transparent",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul
          style={{ margin: "0px", display: "flex", justifyContent: "center" }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: "white",
          opacity: 0.5,
          transition: "opacity 0.3s",
        }}
      />
    ),
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
    <div className="w-full p-4 mb-5">
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
