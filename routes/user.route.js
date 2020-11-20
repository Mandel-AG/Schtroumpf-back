const app = require("express").Router();

const { getUsers, updateUser, getCurrentUser, addFriend } = require("../controller/user.controller");

app.get("/", getUsers);

app.post("/updateUser/:id", updateUser);

app.get("/currentUser", getCurrentUser);


app.post("/addFriend/:id", addFriend);


app.post("/deleteFriend/:id", addFriend);





module.exports = app;
