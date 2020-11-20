exports.checkAuthentification = (req, res, next) => {
  if (!req.isAuthenticated()) {
    res.sendStatus(403);
  } else {
    next();
  }
};
