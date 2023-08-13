import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface user {
  auth: boolean;
  token: string;
  latitude: number;
  longitude: number;
}

const initialState: user = {
  auth: false,
  token: "",
  latitude: 0,
  longitude: 0,
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{
        auth: boolean;
        token: string;
        latitude: number;
        longitude: number;
      }>
    ) => {
      (state.auth = action.payload.auth),
        (state.token = action.payload.token),
        (state.latitude = action.payload.latitude);
      state.longitude = action.payload.longitude;
    },
    logout: (state) => {
      (state.auth = false), (state.token = "");
    },
  },
});

export default userSlice.reducer;
export const { login, logout } = userSlice.actions;
