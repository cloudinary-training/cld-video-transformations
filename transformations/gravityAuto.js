require('dotenv').config();
const cloudinary = require('cloudinary').v2;
cloudinary.config({ secure: "true" });

const url = cloudinary.video("blood-orange", {aspect_ratio: "1:1", gravity: "auto", width: 400, crop: "fill"})
console.log(url)