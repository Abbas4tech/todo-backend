const { default: mongoose } = require("mongoose");

const getTodos = (req, res) => {
  const todoModel = mongoose.model("Todo");
  todoModel.find((err, docs) => {
    res.send(JSON.stringify(docs));
    console.log("Response has been sent");
  });
};

module.exports = getTodos;
