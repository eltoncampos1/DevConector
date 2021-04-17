const { Router } = require("express");
const { check, validationResult } = require("express-validator");

const usersRouter = Router();

usersRouter.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Insert a valid emal").isEmail(),
    check(
      "password",
      "Insert a password greather o equal than 6 characters"
    ).isLength({
      min: 6,
    }),
  ],
  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.status(200).json({ ok: true });
  }
);

module.exports = usersRouter;
