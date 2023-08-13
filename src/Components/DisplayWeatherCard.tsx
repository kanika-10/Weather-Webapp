import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
export default function DisplayWeatherCard({ weather }: { weather: any }) {
  const locationDetails = weather.location;
  const weatherCondition = weather.current;
  const last_updated = JSON.stringify(weatherCondition.last_updated);
  const date = last_updated.substring(1, 11);
  const time = last_updated.substring(12, 17);

  return (
    <div style={{ textAlign: "center" }}>
      <Box
        sx={{
          marginTop: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Card
          sx={{
            width: 400,
            height: 530,
            alignItems: "center",
            background: "black",
            opacity: "0.7",
            borderRadius: "100px",
          }}
        >
          <CardMedia
            sx={{ height: 160, width: 400, opacity: "1" }}
            image="/public/assets/weather.jpg"
            title="weather"
          />
          <CardContent sx={{ color: "white", opacity: "1" }}>
            <Typography gutterBottom variant="h5" component="div">
              {locationDetails.name}, {locationDetails.region}
            </Typography>
            <List>
              <Button variant="outlined" style={{ opacity: "1" }}>
                {weatherCondition.condition.text}
              </Button>
              <ListItem>
                <ListItemText primary="temperature: " />
                <Button variant="contained" color="success">
                  {` ${weatherCondition.temp_c} \u00b0C`}
                </Button>
              </ListItem>
              <ListItem>
                <ListItemText primary="Date: " />
                <Button variant="contained" color="success">
                  {date}
                </Button>
              </ListItem>
              <ListItem>
                <ListItemText primary="Time: " />
                <Button variant="contained" color="success">
                  {time}
                </Button>
              </ListItem>
              <ListItem>
                <ListItemText primary="Humidity: " />
                <Button variant="contained" color="success">
                  {weatherCondition.humidity}
                </Button>
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}
