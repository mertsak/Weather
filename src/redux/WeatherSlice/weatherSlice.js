import { createSlice } from "@reduxjs/toolkit";

import { fetchGetCity, fetchWeatherData } from "./service";

export const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    getCityName: "",
    getCityCoord: { lat: 41.015137, lon: 28.97953 },
    getCityData: [],
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [fetchGetCity.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [fetchGetCity.fulfilled]: (state, action) => {
      const { coord, name } = action.payload;
      state.getCityName = name;
      state.getCityCoord = coord;
      state.loading = false;
    },
    [fetchGetCity.rejected]: (state) => {
      state.error = true;
      state.loading = false;
    },
    [fetchWeatherData.pending]: (state) => {
      state.error = false;
      state.loading = true;
    },
    [fetchWeatherData.fulfilled]: (state, action) => {
      state.getCityData = action.payload.list;
      state.loading = false;
    },
    [fetchWeatherData.rejected]: (state) => {
      state.error = true;
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
// export const {  } = counterSlice.actions;

export default weatherSlice.reducer;
