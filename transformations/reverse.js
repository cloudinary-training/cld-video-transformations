require('dotenv').config();
const cloudinary = require('cloudinary').v2;
cloudinary.config({ secure: "true" });

// Reverse refers to the ability to play a video in reverse order,
// starting from the end and ending at the beginning.


const url = cloudinary.video("chocolate", {effect: "reverse"})
console.log(url)