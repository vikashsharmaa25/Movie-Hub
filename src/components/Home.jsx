import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import Caresole from "./Caresole";
import { Space, Spin } from "antd";

function Home() {
  const [data, setData] = useState([]);
  const [carouselData, setCarouselData] = useState([]);

  const fetchDataFromApi = async () => {
    try {
      const response = await axios.get(
        "https://api.tvmaze.com/search/shows?q=all"
      );
      setData(response.data);
      setCarouselData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDataFromApi();
  }, []);

  return (
    <>
      <Caresole carouselData={carouselData} />
      <div>
        {data.length === 0 ? (
          <div className="flex justify-center items-center min-h-[90vh]">
            <Space size="middle">
              <Spin size="small" />
              <Spin />
              <Spin size="large" />
            </Space>
          </div>
        ) : (
          <>
            <div className="flex flex-wrap justify-center gap-3 p-2">
              {data.map((item, index) => (
                <Card key={index} item={item} />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Home;
