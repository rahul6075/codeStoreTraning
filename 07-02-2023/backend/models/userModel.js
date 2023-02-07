const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: false,
    },
    imageId: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    gender: {
      type: Number,
      default: 1,
    },
    subjects: {
      type: Array,
      default: [
        {
          name: {
             type: String,
             default: null,
          },
          marksObitained:{
             type: Number,
             default: 0
          },
          max:{
            type:Number,
            default: 100,
          }
        }
      ],
    },
  },
  { timestamps: true }
);

module.exports = USER = mongoose.model("USER", userSchema);
