import React from "react";
import { Carousel } from "antd";

function truncateSummary(summary, maxLength) {
  if (summary.length <= maxLength) {
    return summary;
  }
  return summary.substr(0, maxLength) + "...";
}

function Caresole({ carouselData }) {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <div className="w-full text-center">
      <Carousel afterChange={onChange} autoplay>
        {carouselData.map((item, index) => (
          <div key={index} className="carousel-slide relative overflow-hidden">
            {item.show.image?.original ? (
              <img
                src={item.show.image.original}
                alt={item.show.name}  
                className="w-full h-96 object-cover"
              />
            ) : (
              <div className="w-full h-80 bg-gray-300"></div>
            )}
            <div className="carousel-content absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white">
              <h3 className="text-xl font-bold mb-2">{item.show.name}</h3>
              <p className="text-sm">
                {truncateSummary(item.show.summary, 200)}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Caresole;
