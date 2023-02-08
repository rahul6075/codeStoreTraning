const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const imageSchema = new mongoose.Schema(
  {
    userId:{
      type: Schema.Types.ObjectId,
      ref: "USER",
    },
    name:{
       type: String,
       required: false,
    },
    image: {
      data: Buffer,
      contentType: String,
    }
  },
  { timestamps: true }
);

module.exports = IMG = mongoose.model("IMG", imageSchema);
