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
    race: {
      type: String,
    },
    nourriture: {
      type: String,
    },
    ami :{
      type:[]
    }
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model("User", userSchema);
