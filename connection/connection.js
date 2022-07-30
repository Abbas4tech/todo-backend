const mongoose = require("mongoose");
const Todo = require("../schema/todos.schema");

const db = mongoose.connect("mongodb://localhost:27017/My-Todos", (err) => {
  if (err) console.log("Error occured", err);
  else console.log("Database connected");
});

module.exports = db;
