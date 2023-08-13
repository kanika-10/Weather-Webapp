import store from "../Store/store";
import DisplayWeatherCard from "./DisplayWeatherCard";
export default function AnyCityWeather() {
  const state = store.getState();
  const cityWeather = state.weatherReport.cityData;
  if (cityWeather == null) return <div></div>;
  return <DisplayWeatherCard weather={cityWeather} />;
}
