const app = require("express").Router();
const { loginUser,logOut, register } = require("../controller/auth.controller");



app.post('/register', register)

app.post("/login", loginUser);

app.post("/logoutUser", logOut);


module.exports = app;
