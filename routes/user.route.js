const app = require("express").Router();
const secret = process.env.SECRET_TOKEN
const { checkAuthentification, isLoggedInn } = require('../config/authentification');
const jwt = require("jsonwebtoken");


const { getUsers, updateUser, getCurrentUser, addFriend, deleteFriend } = require("../controller/user.controller");

app.get("/", getUsers);

app.post("/updateUser/:id", updateUser);



app.get("/currentUser", isLoggedInn, getCurrentUser);


app.post("/addFriend/:id", addFriend);


app.post("/deleteFriend/:id/:email", deleteFriend);





module.exports = app;
