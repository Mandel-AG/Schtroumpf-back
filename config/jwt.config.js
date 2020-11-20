const secret =  process.env.SECRET_TOKEN;
const { app } = require("../server");
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");


const createToken = async (userId) => {
  const token = jwt.sign({ sub: userId }, secret);
  return token;
};

exports.createToken = createToken;

const extractUserFromToken = async (req, res, next) => {
  const token = await req.cookies.SchtroumphToken;
  if (!token) next();
  if (token) {
    try {
      const decodedToken = await jwt.verify(token, secret);
      const userId = await User.findById(decodedToken.sub);
      if (!userId) res.clearCookie("SchtroumphToken").sendStatus(301);
      if (userId) {
        req.user = userId;
        next();
      }
    } catch (error) {
      res.clearCookie('SchtroumphToken').sendStatus(301);
    }
  }
};


const addJwtFeature = (req, res, next) => {
  req.isAuthenticated = () => !!req.user;
  req.logOut = () => res.clearCookie("SchtroumphToken");
  req.login = async(userId) => {
    const token = await createToken(userId._id);
    res.send({'SchtroumphToken':token})
  };
  next();
};

app.use(extractUserFromToken);
app.use(addJwtFeature);
