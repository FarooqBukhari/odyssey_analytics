// config.js
const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    admin_email: process.env.ADMIN_EMAIL,
    admin_password: process.env.ADMIN_PASSWORD,
    cookie_name: process.env.COOKIE_NAME,
    cookie_password: process.env.COOKIE_PASSWORD
};