/** @format */

import axios from "axios";

export default axios.create({
  baseURL: "https://sprints-ecommerce-server.herokuapp.com/",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "https://6266f23e7a5b9a00083eed18--tiny-gaufre-f204ae.netlify.app/",
    "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers":
      "Origin, Content-Type, X-Auth-Token, Authorization, Accept,charset,boundary,Content-Length",
  },
});
