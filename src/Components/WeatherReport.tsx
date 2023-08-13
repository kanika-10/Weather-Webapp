import { useAppDispatch } from "../Store/store";
import { useEffect, useState } from "react";
import axios from "axios";
import DisplayCurrentRegionWeather from "./DisplayCurrentRegionWeather";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { dataLoaded } from "../Store/Slices/weatherReportSlice";
import store from "../Store/store";
import LoadingComponentSpinner from "./LoadingComponentSpinner";

export default function WeatherReport() {
  const state = store.getState();
  const longitude = state.user.longitude;
  const latitude = state.user.latitude;
  const [isLoaded, setIsLoaded] = useState(false);

  const dispatch = useAppDispatch();

  const APIKey = "c78d299413ba4ecf839114309232907";
  const serverURLGeopoints = `http://api.weatherapi.com/v1/current.json?key=${APIKey}&q=${latitude},${longitude}&aqi=no`;

  const error = () => toast.error("Unable to load the data.Please Refresh");

  const getWeatherReport = async () => {
    await axios
      .post(serverURLGeopoints)
      .then((response) => {
        setIsLoaded(true);
        dispatch(
          dataLoaded({
            isLoaded: true,
            data: response.data,
          })
        );
      })
      .catch((err) => {
        error();
        setIsLoaded(false);
        console.log("inside weatherReport.tsx error" + err);
        dispatch(dataLoaded({ isLoaded: false, data: [] }));
      });
  };
  useEffect(() => {
    getWeatherReport();
  }, []);
  if (!isLoaded) {
    return <LoadingComponentSpinner />;
  }
  return (
    <div
      style={{
        textAlign: "center",
        alignSelf: "center",
      }}
    >
      <DisplayCurrentRegionWeather />
      <ToastContainer autoClose={1000} />
    </div>
  );
}
