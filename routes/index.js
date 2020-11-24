const userRoute = require("./user.route");
const authRoute = require("./auth.route");
const app = require("express").Router();
const { checkAuthentification, isLoggedInn } = require('../config/authentification');
  

app.use("/back/user" , userRoute)
app.use("/back", authRoute)

  


module.exports = app
