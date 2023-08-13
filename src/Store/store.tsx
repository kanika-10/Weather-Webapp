import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { userSlice } from "./Slices/userSlice";
import { weatherReportSlice } from "./Slices/weatherReportSlice";

const reducers = combineReducers({
  [userSlice.name]: userSlice.reducer,
  [weatherReportSlice.name]: weatherReportSlice.reducer,
});
export const store = configureStore({
  reducer: reducers,
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
export default store;
