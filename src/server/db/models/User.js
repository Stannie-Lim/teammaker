const Sequelize = require("sequelize");
const db = require("../db");
const { UUID, UUIDV4, INTEGER, STRING, VIRTUAL } = Sequelize;

const User = db.define("user", {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  firstName: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  lastName: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  password: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  fullName: {
    type: VIRTUAL,
    get() {
      return `${this.firstName} ${this.lastName}`;
    },
  },
});

module.exports = User;
