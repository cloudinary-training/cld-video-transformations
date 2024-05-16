require('dotenv').config();
const cloudinary = require('cloudinary').v2;
cloudinary.config({ secure: "true" });

// use upload API to upload an authenticated asset
// cloudinary.uploader
//   .upload('assets/chocolate.mp4', {
//     public_id: 'chocolate',
//     resource_type: 'video',
//     effect: 'reverse'
//   })
//   .then(uploadResult => {
//     console.log(uploadResult)
//   })
//   .catch(error => console.error(error))

const url = cloudinary.video("chocolate", {effect: "reverse"})
console.log(url)