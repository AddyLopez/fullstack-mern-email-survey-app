import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser = createAsyncThunk("auth/fetchUser", async () => {
  // Make request to backend API
  const response = await axios.get("/api/current_user");
  return response.data;
});

export const handleToken = createAsyncThunk(
  "auth/handleToken",
  async (token) => {
    // Post token from Stripe API
    const response = await axios.post("/api/stripe", token);
    return response.data; // Backend server sends user model with updated number of credits
  },
);

// The purpose of monitoring this slice of state is to conditionally render UI components or content based on whether a user is logged in or not.
// State initially starts off as undefined, so it's set here as null instead
const authenticationSlice = createSlice({
  name: "authentication",
  initialState: null,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.fulfilled, (state, action) => {
        return action.payload || false; // return the User Model or (if an empty string, i.e. falsy then) false
      })
      .addCase(handleToken.fulfilled, (state, action) => {
        return action.payload || false;
      });
  },
});

export default authenticationSlice.reducer;
