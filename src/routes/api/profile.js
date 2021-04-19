const { Router } = require("express");
const auth = require("../../middleare/auth");

const Profile = require("../../models/Profile");
const User = require("../../models/User");

const profileRouter = Router();

profileRouter.get("/", (req, res) => {
  return res.send("profile route");
});

profileRouter.get("/me", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id,
    }).populate("user", ["name", "avata"]);

    if (!profile) {
      return res.status(400).json({ message: "Profile does not exists." });
    }

    return res.json(profile);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server error");
  }
});

module.exports = profileRouter;
