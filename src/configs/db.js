const mongoose = require("mongoose");
require("dotenv").config();

const DB_URL = process.env.DB_URL;

module.exports = () => {
  return mongoose.connect(DB_URL);
};