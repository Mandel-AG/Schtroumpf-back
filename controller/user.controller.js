
const User = require("../models/user.model")
const bcrypt = require("bcrypt")


exports.getUsers = async (req, res) => {
  try {
    const users = await User.find()
    res.send(users)
  } catch (error) {
    next(error)
  }
}



exports.updateUser = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const newUser = req.body;
    await User.findByIdAndUpdate(
      {_id:userId},
      { $set: newUser }
      )
    res.status(200).send(newUser)
  } catch (error) {
    next(error)
  }
}

