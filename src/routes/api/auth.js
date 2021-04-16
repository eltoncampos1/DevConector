const { Router } = require("express");

const authRouter = Router();

authRouter.get("/", (req, res) => {
  return res.send("auth route");
});

module.exports = authRouter;
