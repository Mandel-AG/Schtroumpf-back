const express = require("express"),
  app = express();

require('./database');
exports.app = app;


app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.listen( process.env.PORT || 5100);
