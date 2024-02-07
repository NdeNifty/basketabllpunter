require("dotenv").config();
module.exports = {
PORT : 3000,
MONGODB_URI : process.env.MONGODB_URI,  
JWT_SECRET : process.env.JWT_SECRET,
FRONTEND_URL : process.env.FRONTEND_URL,
GOOGLE_CLIENT_ID:process.env.GOOGLE_CLIENT_ID,
GOOGLE_CLIENT_SECRET:process.env.GOOGLE_CLIENT_ID,

};