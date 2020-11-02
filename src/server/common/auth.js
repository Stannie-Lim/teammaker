const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

dotenv.config();

const generateJWT = ({ id, email }) => {
  return jwt.sign(
    { id, email },
    process.env.JWT_SECRET || "YOUARETHECAUSEOFMYEUPHORIA",
    { expiresIn: "1h" }
  );
};

const checkPassword = (password, hashedPassword) => {
  return bcrypt.compareSync(password, hashedPassword);
};

module.exports = {
  generateJWT,
  checkPassword,
};
