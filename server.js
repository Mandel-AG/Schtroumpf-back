const express = require("express"),
bodyParser = require('body-parser')
  app = express();
  require('dotenv').config(),
  cookieParser = require("cookie-parser");
const path = require("path");
const routing = require("./routes");
const cors = require('cors');
app.use(cookieParser());
app.use(cors())



require('./database');
exports.app = app;

require("./config/jwt.config");
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(routing);



app.listen(5200);
