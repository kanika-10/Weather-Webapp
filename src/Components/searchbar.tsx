import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useState } from "react";
import { useAppDispatch } from "../Store/store";
import { cityDataLoadedReducer } from "../Store/Slices/weatherReportSlice";
import DisplayAnyCityWeather from "./DisplayAnyCityWeather";
import { toast } from "react-toastify";

const searchbar = () => {
  const [city, setCity] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchClicked, setSearchClicked] = useState(false);
  const APIKey = "c78d299413ba4ecf839114309232907";
  const serverURL = `http://api.weatherapi.com/v1/current.json?key=${APIKey}&q=${city}&aqi=no`;
  const dispatch = useAppDispatch();
  const error = () => toast.error("Enter a valid city");
  const getWeather = async () => {
    if (city != "") {
      await axios
        .post(serverURL)
        .then((response) => {
          setIsLoaded(true);
          setSearchClicked(!searchClicked);
          dispatch(
            cityDataLoadedReducer({
              cityDataLoaded: isLoaded,
              cityData: response.data,
            })
          );
        })
        .catch((err) => {
          setIsLoaded(false);
          error();
          dispatch(
            cityDataLoadedReducer({
              cityDataLoaded: isLoaded,
              cityData: null,
            })
          );
          console.log("inside searchbar.tsx error " + err);
        });
    } else {
      setIsLoaded(false);
      error();
      dispatch(
        cityDataLoadedReducer({
          cityDataLoaded: false,
          cityData: null,
        })
      );
    }
  };
  return (
    <div className="searchbar">
      <TextField
        margin="normal"
        id="city"
        label="Enter a Region Name"
        name="city"
        autoComplete="city"
        helperText=""
        type="city"
        onChange={(e) => setCity(e.target.value)}
      />

      <Button
        type="submit"
        variant="contained"
        className="fetchButton"
        sx={{ mt: 3, mb: 2, ml: 2 }}
        onClick={getWeather}
      >
        Fetch Weather
      </Button>

      {!isLoaded ? <div></div> : <DisplayAnyCityWeather />}
    </div>
  );
};
export default searchbar;
