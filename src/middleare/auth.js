const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  const token = req.header("X-auth-token");

  if (!token) {
    return res.status(401).json({ message: "No token, autorization denied" });
  }

  try {
    const decoded = jwt.verify(token, config.get("jwtToken"));

    req.user = decoded.user;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token." });
  }
};
