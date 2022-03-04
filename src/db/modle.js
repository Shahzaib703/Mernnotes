const mongoose = require("mongoose");

const ReactSchema = mongoose.Schema({
  question: {
    type: String,
    required: true,
    unique: true,
  },
  body: {
    type: String,
    required: true,
  },
  image:{
      type:String,
  }
});

const ReactDb = new mongoose.model("reactjs", ReactSchema);
module.exports = ReactDb;
