/** @format */

import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:5009",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "http://localhost:3000",
    "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers":
      "Origin, Content-Type, X-Auth-Token, Authorization, Accept,charset,boundary,Content-Length",
  },
});
