const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT;
const MANDRILL_API_KEY = process.env.MANDRILL_API_KEY;

module.exports = { MANDRILL_API_KEY, PORT };
