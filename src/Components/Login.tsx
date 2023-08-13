import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { useAppDispatch } from "../Store/store";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { login } from "../Store/Slices/userSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      align="center"
      style={{ color: "white" }}
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        weather-webapp
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const defaultTheme = createTheme();

export default function SignIn() {
  const error = () => toast.error("Invalid Credentials!");
  const success = () => toast.success("Verified!");
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();
  const [longitude, setLongitude] = useState(Number);
  const [latitude, setLatitude] = useState(Number);
  navigator.geolocation.getCurrentPosition(function (position) {
    setLongitude(position.coords.longitude);
    setLatitude(position.coords.latitude);
  });
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    loginData();
  };
  const loginPayload = {
    email,
    password,
  };
  const loginData = async () => {
    await axios
      .post("https://reqres.in/api/login", loginPayload)
      .then((response) => {
        const token = response.data.token;
        success();
        localStorage.setItem("token", token);
        dispatch(
          login({
            auth: true,
            token: token,
            latitude: latitude,
            longitude: longitude,
          })
        );
        setTimeout(() => {
          navigate("/privateRoute");
        }, 1000);
      })
      .catch((err) => {
        dispatch(
          login({
            auth: false,
            token: "",
            latitude: latitude,
            longitude: longitude,
          })
        );
        error();
        console.log(err);
      });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h2" variant="h5">
            User Login
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="email"
              name="email"
              autoComplete="email"
              helperText=""
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              label="password"
              name="password"
              autoComplete="password"
              helperText=""
              type="password"
              autoFocus
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
      <ToastContainer autoClose={1000} />
    </ThemeProvider>
  );
}
