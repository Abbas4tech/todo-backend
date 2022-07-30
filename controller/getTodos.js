const { default: mongoose } = require("mongoose");

const getTodos = (req, res) => {
  const todoModel = mongoose.model("Todo");
  todoModel.find((err, docs) => {
    res.send(JSON.stringify(docs));
  });
};

module.exports = getTodos;
