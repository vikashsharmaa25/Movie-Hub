import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Progress, Space } from "antd";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MovieDetails() {
  const location = useLocation();
  const movieData = location.state?.movieData || {};

  const ratingOutOf10 =
    movieData.rating && movieData.rating.average
      ? movieData.rating.average * 10
      : 5.5;

  const formatRatingText = () => {
    return <span style={{ color: "#fff" }}>{movieData.rating.average}</span>;
  };

  const [isButtonDisabled, setIsButtonDisabled] = useState(
    localStorage.getItem(movieData.id) !== null
  );

  const handleBookTicket = () => {
    if (!isButtonDisabled) {
      toast.success("Booking successful!");
      localStorage.setItem(movieData.id, "booked");
      setIsButtonDisabled(true);
    }
  };

  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.removeItem(movieData.id);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [movieData.id]);

  return (
    <div
      style={{
        backgroundImage: `url(${movieData.image?.original})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        zIndex: 1,
      }}
      className="md:flex items-center relative"
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.9)",
          backdropFilter: "blur(2px)",
          zIndex: 1,
        }}
      />

      <div className="md:w-[40%] flex justify-center items-center z-10 ">
        <div className="w-[80%] md:w-[400px] mt-5 z-10">
          <img
            src={movieData.image?.original}
            alt=""
            className="z-10"
            style={{ width: "100%" }}
          />
        </div>
      </div>
      <div className="md:w-[60%] z-50 px-5 relative md:text-start text-center">
        <h1 className="text-white text-4xl font-bold mt-10">
          {movieData.name}
        </h1>
        <h1 className="text-slate-300 text-xl py-2">
          <em>{movieData.network.name}</em>
        </h1>
        <div className="flex gap-2 py-3 md:justify-start justify-center items-center">
          <h1 className="text-slate-300 bg-red-700 px-2 rounded">
            {movieData.genres[0]}
          </h1>
          <h1 className="text-slate-300 bg-red-700 px-2 rounded">
            {movieData.genres[1]}
          </h1>
        </div>
        <div className="mt-5">
          <Space wrap>
            <Progress
              type="circle"
              percent={ratingOutOf10}
              width={80}
              height={80}
              format={formatRatingText}
            />
          </Space>
        </div>
        <div className="text-white mt-5">
          <h1 className="text-3xl font-bold py-2">Overview</h1>
          <p>{movieData.summary}</p>
        </div>
        <div className="py-5 flex flex-col md:flex-row justify-start items-center gap-x-20">
          <div>
            <h1 className="font-bold text-white">
              Status :{"  "}
              <span className="font-normal text-slate-400">
                {movieData.status}
              </span>
            </h1>
          </div>
          <div>
            <h1 className="font-bold text-white">
              Schedule :{"  "}
              <span className="font-normal text-slate-400">
                {movieData.schedule.days}
              </span>{" "}
              -{" "}
              <span className="font-normal text-slate-400">
                {movieData.schedule.time}
              </span>
            </h1>
          </div>
          <div>
            <h1 className="font-bold text-white">
              Runtime :{"  "}
              <span className="font-normal text-slate-400">
                {movieData.runtime}
              </span>
            </h1>
          </div>
        </div>
        <hr />
        <div className="py-3">
          <h1 className="font-bold text-white">
            Country Name :{"  "}
            <span className="font-normal text-slate-400">
              {movieData.network.country.name}
            </span>
          </h1>
        </div>
        <hr />
        <button
          className={`text-white bg-red-600 hover:bg-red-800 duration-300 w-full py-2 my-5 rounded font-bold ${
            isButtonDisabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handleBookTicket}
          disabled={isButtonDisabled}
        >
          {isButtonDisabled ? "Booking Successful" : "Book Ticket"}
        </button>
      </div>
    </div>
  );
}

export default MovieDetails;
