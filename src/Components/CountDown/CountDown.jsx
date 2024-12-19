import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Counter Component
const Counter = ({ target, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);

  const startCounter = () => {
    let start = 0;
    const end = parseFloat(target.replace(/[^\d.-]/g, ""));
    const duration = 2000; // Animation duration in milliseconds
    const increment = end / (duration / 10);

    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(interval);
        setCount(target); // Set final value with suffix
      } else {
        setCount(start.toFixed(0) + suffix);
      }
    }, 10);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startCounter(); // Start the counter when in view
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [target, suffix]);

  return <span ref={counterRef}>{count}</span>;
};

// CountDown Component
const CountDown = () => {
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

  const data = [
    { value: "400k+", label: "Brand awareness" },
    { value: "30M", label: "Lead generation" },
    { value: "0.35%", label: "Thought leadership" },
    { value: "750k+", label: "Drive traffic" },
  ];

  return (
    <div className="bg-black text-white py-10">
      <h2 className="text-center text-3xl font-bold mb-8">
        Why partner with us?
      </h2>
      <div
        data-aos="zoom-in"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 max-w-6xl mx-auto"
      >
        {data.map((item, index) => (
          <div key={index} className="text-center">
            <div className="text-4xl font-bold mb-2">
              <Counter target={item.value} />
            </div>
            <p className="text-lg">{item.label}</p>
            <p className="text-sm text-gray-400">
              Strengthening the brand of the product by daily exposure to a
              targeted audience
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountDown;
