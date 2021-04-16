const { Router } = require("express");

const usersRouter = Router();

usersRouter.get("/", (req, res) => {
  return res.send("User route");
});

module.exports = usersRouter;
