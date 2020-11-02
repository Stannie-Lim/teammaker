const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const generateJWT = ({ id, email }) => {
  return jwt.sign(
    { id, email },
    process.env.JWT_SECRET || "YOUARETHECAUSEOFMYEUPHORIA",
    { expiresIn: "1h" }
  );
};

module.exports = {
  generateJWT,
};
