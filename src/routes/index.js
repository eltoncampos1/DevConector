const { Router } = require("express");

const authRouter = require("./api/auth");
const profileRouter = require("./api/profile");
const postsRouter = require("./api/posts");
const usersRouter = require("./api/users");

const router = Router();

router.use("/api/users", usersRouter);
router.use("/api/auth", authRouter);
router.use("/api/profile", profileRouter);
router.use("/api/posts", postsRouter);

module.exports = router;
