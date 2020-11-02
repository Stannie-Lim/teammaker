const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

const router = require("express").Router();
module.exports = router;

// models
const { User } = require("../db/models");

// env
dotenv.config();

// root route is /api/auth

router.post("/login", async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      res.status(403).json({ message: "No user exists " });
    }
  } catch (err) {
    next(err);
  }
});

router.post("/register", async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });

    if (user) {
      res.status(403).json({ message: "User already exists " });
    }

    const hashedPassword = bcrypt.hashSync(password, 15);
    console.log(hashedPassword);
  } catch (err) {
    next(err);
  }
});
