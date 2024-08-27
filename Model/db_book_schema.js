const mongoose = require("mongoose"); 

const schema = mongoose.Schema({
  book_name: {
    type: String,
    required: true,
    unique:true
  },
  published_year: {
    type: Number,
    required: true,
  },
  book_edition: {
    type: Number,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("books", schema);
