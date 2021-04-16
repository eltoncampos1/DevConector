const { Router } = require("express");

const postsRouter = Router();

postsRouter.get("/", (req, res) => {
  return res.send("posts route");
});

module.exports = postsRouter;
