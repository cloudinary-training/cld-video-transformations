require('dotenv').config();
const cloudinary = require('cloudinary').v2;
cloudinary.config({ secure: "true" });

const url = cloudinary.video("chocolate", {effect: "reverse"})
console.log(url)