const mongoose = require("mongoose");

const deleteTodo = async (req, res) => {
  const id = req.params.id;

  console.log(id);
  const Todo = mongoose.model("Todo");
  await Todo.findByIdAndDelete(id);
  Todo.find((rest, doc) => {
    res.send(JSON.stringify(doc));
  });
};

module.exports = deleteTodo;
