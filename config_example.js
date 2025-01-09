const DB_URI = "";

const API = process.env.NODE_ENV === "production"
  ? ""
  : "";

module.exports = {
  DB_URI,
  API,
};