const app = require("express").Router();

const { getUsers, updateUser } = require("../controller/user.controller");

app.get("/", getUsers);

app.post("/updateUser/:id", updateUser);


module.exports = app;
