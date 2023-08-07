import React from "react";
import { useNavigate } from "react-router-dom";

function Card({ item }) {
  const defaultRating = 5.5; // Default rating value
  const defaultthetvdb = 994422; // Default thetvdb value

  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(`/movie/${item.show.id}`, { state: { movieData: item.show } });
  };

  return (
    <div
      className="w-[350px] min-h-[400px] bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer"
      onClick={clickHandler}
    >
      <div className="relative">
        {item.show.image?.original ? (
          <img
            src={item.show.image.original}
            alt={item.show.name}
            className="w-full h-[350px] object-cover"
          />
        ) : (
          <div className="w-full h-[250px] bg-gray-300"></div>
        )}
        <div className="absolute top-3 left-3 bg-white p-2 rounded z-10 shadow-md">
          <h1 className="text-[15px]">
            ❤️ {item.show.rating.average || defaultRating}
          </h1>
          <h1 className="text-[12px] text-center">
            {item.show.externals.thetvdb || defaultthetvdb}
          </h1>
        </div>
      </div>

      <div className="p-4 flex justify-between items-center">
        <div>
          <h1 className="font-bold text-xl text-slate-700 mb-2">
            {item.show.name}
          </h1>
          <h1 className="text-slate-600">{item.show.language}</h1>
        </div>
        <div className="text-center">
          <h1 className="text-red-600">{item.show.schedule.time}</h1>
          <h1 className="text-red-600">{item.show.schedule.days}</h1>
        </div>
      </div>
    </div>
  );
}

export default Card;
