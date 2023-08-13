import Button from "@mui/material/Button";
import StarIcon from "@mui/icons-material/Star";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import store from "../Store/store";
import { toast } from "react-toastify";

const FavoriteLocations = () => {
  const errorfavourites = () =>
    toast.error("Already present in favorites", {
      position: toast.POSITION.TOP_CENTER,
    });
  const successfavourites = () =>
    toast.success("Sucessfully Added to favorites", {
      position: toast.POSITION.TOP_CENTER,
    });
  const successfavouritesRemoved = () =>
    toast.success("Sucessfully Removed from favorites", {
      position: toast.POSITION.TOP_CENTER,
    });
  const capacityError = () =>
    toast.error("You can only store upto 5 Favorite Locations", {
      position: toast.POSITION.TOP_CENTER,
    });
  const [favoriteLocations, setFavouriteLocations] = useState<string[]>([]);

  const AddLocationToList = () => {
    const state = store.getState();
    const currentAreaData = state.weatherReport.data;
    const cityData = state.weatherReport.cityData;
    const currentCity = currentAreaData.location.name;
    const currentCityRegion = currentAreaData.location.region;
    const newCity = cityData ? cityData.location.name : null;
    const newCityRegion = cityData ? cityData.location.region : null;

    if (favoriteLocations.length >= 5) {
      if (
        favoriteLocations.includes(newCity + ", " + newCityRegion) == true &&
        favoriteLocations.includes(currentCity + ", " + currentCityRegion) ==
          true
      )
        return errorfavourites();
      else return capacityError();
    } else if (
      favoriteLocations.includes(currentCity + ", " + currentCityRegion) ==
      false
    ) {
      setFavouriteLocations((oldLocations) => {
        return [...oldLocations, currentCity + ", " + currentCityRegion];
      });
      successfavourites();
    } else if (
      newCity != null &&
      favoriteLocations.includes(newCity + ", " + newCityRegion) == false
    ) {
      setFavouriteLocations((oldLocations) => {
        return [...oldLocations, newCity + ", " + newCityRegion];
      });
      successfavourites();
    } else errorfavourites();
  };
  return (
    <div style={{ textAlign: "center" }}>
      <Button
        type="submit"
        variant="contained"
        className="favorite"
        onClick={AddLocationToList}
      >
        Add to Favourites
        <StarIcon className="staricon" />
      </Button>
      <Grid item xs={12} md={6}>
        <Typography sx={{ mt: 4, mb: 2 }} variant="h5" component="div">
          {favoriteLocations.length == 0
            ? "You have not added any favorite locations yet."
            : "List of Favorite locations"}
        </Typography>
        {favoriteLocations.map((locations, index) => {
          function deleteItems(index: number) {
            let newList = [...favoriteLocations];
            newList.splice(index, 1);
            setFavouriteLocations([...newList]);
            successfavouritesRemoved();
          }

          return (
            <List key={index}>
              <ListItem
                className="favouriteLocationsList"
                secondaryAction={
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    className="deleteicon"
                    onClick={() => {
                      deleteItems(index);
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemAvatar>
                  <StarIcon className="staricon" />
                </ListItemAvatar>
                <ListItemText primary={locations ? locations : null} />
              </ListItem>
            </List>
          );
        })}
      </Grid>
    </div>
  );
};

export default FavoriteLocations;
