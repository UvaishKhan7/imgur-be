//creating schema for images collection

const mongoose = require("mongoose"); //connecting to mongoose

const imageSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: "Title is required",
    },
    userName: {
      type: String,
      required: "Username is required",
    },
    tags: String,
    id: {
      type: Number,
      unique: true,
    },
    image: {
      type: Buffer,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Images", imageSchema);
