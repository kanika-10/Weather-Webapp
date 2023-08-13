import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface weatherReport {
  isLoaded: boolean;
  data: any;
  cityDataLoaded: boolean;
  cityData: any;
}

const initialState: weatherReport = {
  isLoaded: false,
  data: null,
  cityDataLoaded: false,
  cityData: null,
};
export const weatherReportSlice = createSlice({
  name: "weatherReport",
  initialState,
  reducers: {
    dataLoaded: (
      state,
      action: PayloadAction<{ isLoaded: boolean; data: any }>
    ) => {
      (state.isLoaded = action.payload.isLoaded),
        (state.data = action.payload.data);
    },
    cityDataLoadedReducer: (
      state,
      action: PayloadAction<{
        cityDataLoaded: boolean;
        cityData: any;
      }>
    ) => {
      (state.cityDataLoaded = action.payload.cityDataLoaded),
        (state.cityData = action.payload.cityData);
    },
  },
});

export default weatherReportSlice.reducer;
export const { dataLoaded, cityDataLoadedReducer } = weatherReportSlice.actions;
