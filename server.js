const express = require("express"),
bodyParser = require('body-parser')
  app = express();
  require('dotenv').config(),
  cookieParser = require("cookie-parser");
const path = require("path");
const routing = require("./routes");
app.use(cookieParser());



require('./database');
exports.app = app;

require("./config/jwt.config");
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(routing);



app.listen(5200);
