import axios from "axios";

// Define Base URL

export default axios.create({
  baseURL: "https://630da66ab37c364eb70877aa.mockapi.io",
  headers: {
    "Content-type": "application/json"
  }
});