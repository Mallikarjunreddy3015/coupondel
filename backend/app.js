const express = require("express");
const app=express();
const path=require("path");





if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({ path: "backend/config/config.env" });
  }