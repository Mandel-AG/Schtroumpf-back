const userRoute = require("./user.route");
const authRoute = require("./auth.route");
const app = require("express").Router();
const { checkAuthentification } = require('../config/authentification');
  

app.use("/user",checkAuthentification, userRoute)
app.use("/", checkAuthentification, authRoute)

  


module.exports = app
