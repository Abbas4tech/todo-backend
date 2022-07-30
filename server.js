const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/My-Todos", (err) => {
  if (err) console.log("Error occured");
  else console.log("Database connected");
});
