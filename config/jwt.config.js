const secret =  process.env.SECRET_TOKEN;
const { app } = require("../server");
const User = require("../models/user.model");
const fs = require('fs');
const jwt = require("jsonwebtoken");


const createToken = async (userId) => {
  const token = jwt.sign({ sub: userId }, secret);
  console.log(token)
  return token;
};

exports.createToken = createToken;

// const extractUserFromToken = async (req, res, next) => {
//   const token = await req.cookies.SchtroumphToken;
//   if (!token) res.status(401).json('pas de token')
//   if (token) {
//     try {
//       const decodedToken = await jwt.verify(token, secret);
//       const userId = await User.findById(decodedToken.sub);
//       if (!userId) res.clearCookie("jwt").sendStatus(301);
//       if (userId) {
//         req.user = userId;
//         next();
//       }
//     } catch (error) {
//       res.clearCookie('jwt').sendStatus(301);
//     }
//   }
// };





const addJwtFeature = (req, res, next) => {
  req.isAuthenticated = () => !!req.user;
  req.logOut = () => res.clearCookie("jwt");
  req.login = async(userId) => {
    const token = await createToken(userId._id);
    // res.send({'SchtroumphToken':token})
    res.json(token)
  };
  next();
};

// app.use(extractUserFromToken);
app.use(addJwtFeature);
