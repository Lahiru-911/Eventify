import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function BannerSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024, // For tablets and small screens
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // For mobile devices
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container mx-auto max-w-7xl px-4">
      <Slider {...settings}>
        <div className="px-2">
          <img
            src="https://cdn.britannica.com/70/234870-050-D4D024BB/Orange-colored-cat-yawns-displaying-teeth.jpg"
            alt="Cat"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="px-2">
          <img
            src="https://cdn.britannica.com/70/234870-050-D4D024BB/Orange-colored-cat-yawns-displaying-teeth.jpg"
            alt="Cat"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="px-2">
          <img
            src="https://cdn.britannica.com/70/234870-050-D4D024BB/Orange-colored-cat-yawns-displaying-teeth.jpg"
            alt="Cat"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="px-2">
          <img
            src="https://cdn.britannica.com/70/234870-050-D4D024BB/Orange-colored-cat-yawns-displaying-teeth.jpg"
            alt="Cat"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="px-2">
          <img
            src="https://cdn.britannica.com/70/234870-050-D4D024BB/Orange-colored-cat-yawns-displaying-teeth.jpg"
            alt="Cat"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="px-2">
          <img
            src="https://cdn.britannica.com/70/234870-050-D4D024BB/Orange-colored-cat-yawns-displaying-teeth.jpg"
            alt="Cat"
            className="rounded-lg shadow-lg"
          />
        </div>
      </Slider>
    </div>
  );
}

export default BannerSlider;
