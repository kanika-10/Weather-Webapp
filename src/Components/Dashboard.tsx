import WeatherReport from "./WeatherReport";
import "./css/Dashboard.css";
import Searchbar from "./searchbar";
import { useAppDispatch } from "../Store/store";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { logout } from "../Store/Slices/userSlice";
import { Suspense, lazy } from "react";
const FavoriteLocations = lazy(() => import("./FavoriteLocations"));

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <div className="container">
      <Button
        type="submit"
        variant="contained"
        sx={{ mt: 3, mb: 2, ml: 2 }}
        onClick={() => {
          dispatch(logout);
          navigate("/homepage");
        }}
        className="logout"
      >
        Logout
      </Button>
      <Searchbar />
      <div className="leftpane">
        <h1 style={{ textAlign: "center" }} className="header-1">
          Current Area Weather
        </h1>
        <WeatherReport />
      </div>
      <div className="middlepane">
        <h1 style={{ textAlign: "center" }} className="header-1">
          Your Favourite Locations
        </h1>
        <Suspense fallback={<div>Loading</div>}>
          <FavoriteLocations />
        </Suspense>
      </div>
      <div className="rightpane" style={{ textAlign: "center" }}></div>
    </div>
  );
};

export default Dashboard;
