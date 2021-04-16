const { Router } = require("express");

const profileRouter = Router();

profileRouter.get("/", (req, res) => {
  return res.send("profile route");
});

module.exports = profileRouter;
