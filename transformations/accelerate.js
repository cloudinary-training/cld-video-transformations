require('dotenv').config();
const cloudinary = require('cloudinary').v2;

// use upload API to upload an authenticated asset
// cloudinary.uploader
//   .upload('assets/chocolate.mp4', {
//     public_id: 'chocolate33',
//     resource_type: 'video',
//     effect: 'accelerate:100',
//     analytics: false
//   })
//   .then(uploadResult => {
//     console.log(uploadResult)
//   })
//   .catch(error => console.error(error))


const url = cloudinary.url("tuna", {effect: "accelerate:100", resource_type: 'video', urlAnalytics: false})
console.log(url)