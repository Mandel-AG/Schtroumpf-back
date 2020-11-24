
const User = require("../models/user.model")


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


exports.getCurrentUser = async (req, res, next) => {

  res.json(req.user)
}




exports.addFriend = async (req, res, next) => {
  try {
    const { email, age, famille, race, nourriture } = req.body.friend;
   
    const friend = {
      email: email.trim(),
      age: age.trim(),
      famille: famille.trim(),
      race: race.trim(),
      nourriture: nourriture.trim(),
      unique: true,
    }
    await User.findByIdAndUpdate({_id:req.params.id},{$push:{ami:friend}})
    res.json(friend)
  } catch (error) {
    next(error)
  }
}




exports.deleteFriend = async(req, res, next) => {
  const user = await User.findByIdAndUpdate({_id:req.params.id})
  await User.findByIdAndUpdate({_id:req.params.id},{$pull:{ami:{email: req.params.email}}}, {new:true})
  res.json(user)

}