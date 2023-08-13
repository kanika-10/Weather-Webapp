import store from "../Store/store";
import DisplayWeatherCard from "./DisplayWeatherCard";
export default function DisplayWeather({}) {
  const state = store.getState();
  const weatherReport = state.weatherReport.data;
  if (weatherReport == null) return <div></div>;
  return <DisplayWeatherCard weather={weatherReport} />;
}
