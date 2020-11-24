const secret =  process.env.SECRET_TOKEN;
const { app } = require("../server");
const jwt = require("jsonwebtoken");


const createToken = async (userId) => {
  const token = jwt.sign({ sub: userId }, secret);
  return token;
};

exports.createToken = createToken;


const addJwtFeature = (req, res, next) => {
  req.isAuthenticated = () => !!req.user;
  req.login = async(userId) => {
    const token = await createToken(userId._id);
    res.json(token)
  };
  next();
};

app.use(addJwtFeature);
