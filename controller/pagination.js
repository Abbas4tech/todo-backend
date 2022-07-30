const mongoose = require("mongoose");

const pagination = (req, res) => {
  const pageNo = req.params.pageNumber;
  const Todos = mongoose.model("Todo");
  Todos.find((resp, data) => {
    const updatedData = data.slice((pageNo - 1) * 10, (pageNo - 1) * 10 + 10);
    res.send(JSON.stringify(updatedData));
  });
};

module.exports = pagination;
