const Sequelize = require("sequelize");
const db = require("../db");
const { UUID, UUIDV4, INTEGER, STRING } = Sequelize;

const User = db.define("user", {
  id: {
    type: STRING,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  email: {
    type: STRING,
  },
  password: {
    type: STRING,
  },
});

module.exports = User;
