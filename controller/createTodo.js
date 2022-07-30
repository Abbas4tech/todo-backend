const mongoose = require("mongoose");

const createTodo = async (req, res) => {
  const Todo = mongoose.model("Todo");
  console.log("Called me");
  const newTodo = new Todo();
  newTodo.title = req.body.title;
  await newTodo.save();
  Todo.find((rest, doc) => {
    res.send(JSON.stringify(doc));
  });
};

module.exports = createTodo;
