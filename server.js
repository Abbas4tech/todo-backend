const express = require("express");
const connection = require("./connection/connection.js");
const app = express();
const path = require("path");
const expressHandlerBars = require("express-handlebars");
const bodyParser = require("body-parser");
const http = require("http");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const getTodos = require("./controller/getTodos");
const createTodo = require("./controller/createTodo");
const deleteTodo = require("./controller/deleteTodo");
const pagination = require("./controller/pagination.js");

const todoModel = mongoose.model("Todo");

let corsOption = {
  origin: "http://localhost:4200",
};

todoModel.find((err, docs) => {
  console.log(docs);
});

app.use(cors(corsOption));

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());

app.delete("/delete/:id", deleteTodo);

app.post("/create", createTodo);

app.use("/todos", getTodos);

app.use("/getData/:pageNumber", pagination);

app.use("/", (req, res) => {
  res.write("<p>{statusCode: 200 }</p>");
  res.end();
});

const server = http.createServer(app);
server.listen(3000, (req, res) => {
  console.log("Your server is running on 3000");
});
