const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
  },
});
mongoose.model("Todo",TodoSchema)