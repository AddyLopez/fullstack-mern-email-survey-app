import axios from "axios";
import { FETCH_USER } from "./types";

// Redux action creator
const fetchUser = () => {
  // Make request to backend API
  axios.get("/api/current_user");
};
