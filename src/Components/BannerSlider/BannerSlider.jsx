import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function BannerSlider() {
  const settings = {
    dots: true,
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
          centerPadding: "40px",
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

  const images = [
    "https://tickets.lk/assets/banner/4.jpg",
    "https://tickets.lk/assets/banner/2.jpg",
    "https://tickets.lk/assets/banner/3.jpg",
    "https://tickets.lk/assets/banner/5.jpg",
  ];

  return (
    <div className="max-h-screen mt-2 mb-10 ">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="group overflow-hidden px-2">
            <div className="w-full h-auto">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default BannerSlider;
