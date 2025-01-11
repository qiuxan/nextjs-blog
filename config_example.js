const DB_URI = "";

const API = process.env.NODE_ENV === "production"
  ? ""
  : "";
const NEXTAUTH_SECRET = '';

module.exports = {
  DB_URI,
  API,
  NEXTAUTH_SECRET
};