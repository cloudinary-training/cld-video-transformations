require('dotenv').config();
const cloudinary = require('cloudinary').v2;

// With accelerate, you can enhance user experience by speeding up video playback 
// without compromising quality.

const url = cloudinary.url("tuna", {effect: "accelerate:100", resource_type: 'video', urlAnalytics: false})
console.log(url)