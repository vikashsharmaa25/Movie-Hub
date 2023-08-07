import axios from "axios";
import { useState } from "react";

const fetchDataFromApi = async () => {
  try {
    const { data } = await axios.get(
      "https://api.tvmaze.com/search/shows?q=all"
    );
  } catch (error) {
    console.log(error);
  }
};

export default fetchDataFromApi;
