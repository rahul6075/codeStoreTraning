const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema(
  {
    name:{
       type: String,
       required: false,
    },
    image: {
      data: Buffer,
      contentType: [],
    }
  },
  { timestamps: true }
);

module.exports = IMG = mongoose.model("IMG", imageSchema);
