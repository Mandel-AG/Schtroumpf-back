const app = require("express").Router();
const User = require("../models/user.model")
const bcrypt = require("bcrypt");
const { createUser } = require("./user.controller")


exports.loginUser = async(req, res, next) => {
  const userEmail = await User.findOne({
    email: req.body.email.toLowerCase().trim(),
  })
  if (!userEmail) {
    res.send({ error: "email introuvable" })
  } else {
    const match = await bcrypt.compare(req.body.password, userEmail.password)
    if (!match) res.send({error:"mauvais mot de passe"})
    else {
      const userId = userEmail._id
      req.login(userId)
    }
  }
}


exports.register = async (req, res, next) => {
  try {
    const { email, password, age, famille, race, nourriture } = req.body;
    
    const hashPassword = await bcrypt.hashSync(password, 10)
    const user = new User({
      email: email.trim(),
      age: age.trim(),
      famille: famille.trim(),
      race: race.trim(),
      nourriture: nourriture.trim(),
      password: hashPassword.trim(),
      unique: true,
    })
    await user.save()
    res.sendStatus(200)
  } catch (error) {
    next(error)
  }
}

exports.logOut= async (req, res, next) =>{
  req.logOut()
  res.status(200).json("déconnecté")
}
