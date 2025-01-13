const DB_URI = "";

const API = process.env.NODE_ENV === "production"
  ? ""
  : "";
const NEXTAUTH_SECRET = '';
const GOOGLE_CLIENT_ID= '';
const GOOGLE_CLIENT_SECRET= '';

module.exports = {
  DB_URI,
  API,
  NEXTAUTH_SECRET,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET
};