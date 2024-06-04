require('dotenv').config()
const cloudinary = require('cloudinary').v2;
cloudinary.config({ secure: "true" });

// The Format Auto parameter allows Cloudinary to automatically determine the most 
// appropriate format to deliver based on the requesting device and browser.


const url = cloudinary.video("plates", {fetch_format: "auto", urlAnalytics: false})
console.log(url)
