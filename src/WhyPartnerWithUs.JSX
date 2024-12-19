import React, { useEffect, useState } from "react";

const Counter = ({ target, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseFloat(target.replace(/[^\d.-]/g, ""));
    const duration = 2000; // Animation duration in milliseconds
    const increment = end / (duration / 10);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(counter);
        setCount(target); // Set final value with suffix
      } else {
        setCount(start.toFixed(0) + suffix);
      }
    }, 10);

    return () => clearInterval(counter);
  }, [target, suffix]);

  return <span>{count}</span>;
};

const WhyPartnerWithUs = () => {
  const data = [
    { value: "400k+", label: "Brand awareness" },
    { value: "30M", label: "Lead generation" },
    { value: "0.35%", label: "Thought leadership" },
    { value: "750k+", label: "Drive traffic" },
  ];

  return (
    <div className="bg-black text-white py-10">
      <h2 className="text-center text-3xl font-bold mb-8">Why partner with us?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 max-w-6xl mx-auto">
        {data.map((item, index) => (
          <div key={index} className="text-center">
            <div className="text-4xl font-bold mb-2">
              <Counter target={item.value} />
            </div>
            <p className="text-lg">{item.label}</p>
            <p className="text-sm text-gray-400">
              Strengthening the brand of the product by daily exposure to a targeted audience
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyPartnerWithUs;
