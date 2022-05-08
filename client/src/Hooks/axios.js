/** @format */

import axios from "axios";

export default axios.create({
  baseURL: "https://secure-brushlands-98723.herokuapp.com",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "https://sprints-node-js-ecommerce.vercel.app/",
    "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers":
      "Origin, Content-Type, X-Auth-Token, Authorization, Accept,charset,boundary,Content-Length",
  },
});
