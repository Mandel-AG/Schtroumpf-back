const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const secret =  process.env.SECRET_TOKEN;


exports.checkAuthentification = (req, res, next) => {
  if (!req.isAuthenticated()) {
    res.sendStatus(403);
  } else {
    next();
  }
};



// exports.isLoggedIn = async(req, res, next) => {
//   const token = req.headers['cookie'].replace('token=','');
//   const secret = process.env.SECRET_TOKEN;
//   if (!token) next();
//   if (token) {
//     try {
//       const decodedToken = jwt.verify(token, secret);
//       const userId = await User.findById(decodedToken.sub);
//       if (!userId) res.clearCookie("token").sendStatus(301);
//       if (userId) {
//         req.user = userId;
//         next();
//       }
//     } catch (error) {
//       // res.clearCookie('token').sendStatus(301);
//       console.log("extraction error", error);
//     }
//   }
// }

exports.isLoggedInn = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, secret, (err, decoded) => {
      if (err) { return res.status(401).json('token invalid'); }
      const sub = decoded.sub;
      User.findOne({ '_id': sub }).exec( (err, user) => {
        if (err || !user) { res.status(401).json('error') }
        req.user = user;
        next();
      })
    })
  } else {
    res.status(401).json('pas de token !');
  }
 }