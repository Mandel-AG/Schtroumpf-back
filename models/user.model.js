const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
    },
    age: {
      type: Number,
    },
    famille: {
      type: String,
    },
    Race: {
      type: String,
    },
    Nourriture: {
      type: String,
    },
    Ami :{
      type:[]
    }
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model("User", userSchema);
