import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const API = "https://api.openweathermap.org/data/2.5/";
const APIKEY = "2319bc36a1ae5b43d0648846984523d2";

export const fetchGetCity = createAsyncThunk(
  "weather/getWeatherCity",
  async (city) => {
    const res = await axios.get(`${API}weather?q=${city}&appid=${APIKEY}`);
    return res.data;
  }
);

export const fetchWeatherData = createAsyncThunk(
  "weather/weatherData",
  async (cordinat) => {
    const res = await axios.get(
      `${API}forecast?lat=${cordinat.lat}&lon=${cordinat.lon}&cnt=7&appid=${APIKEY}`
    );
    return res.data;
  }
);
