import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSurveys = createAsyncThunk(
  "surveys/fetchSurveys",
  async () => {
    // Make request to backend API for an array of surveys the user has made
    const response = await axios.get("/api/surveys");
    return response.data;
  },
);

export const submitSurvey = createAsyncThunk(
  "surveys/submitSurvey",
  async ({ formValues, navigate }) => {
    // Send formValues object (i.e. a completed survey) to backend in post request
    const response = await axios.post("/api/surveys", formValues);
    navigate("/surveys"); // Redirect user using React Router. See how SurveyFormReview component relates.
    return response.data; // Backend server sends updated user model
  },
);

// Initialize surveys' slice of state to an empty array by default when application boots up
const surveysSlice = createSlice({
  name: "surveys",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSurveys.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default surveysSlice.reducer;
