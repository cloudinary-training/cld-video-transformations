require('dotenv').config()
const cloudinary = require('cloudinary').v2;
cloudinary.config({ secure: "true" });


const url = cloudinary.url("blood-orange.mp4", {fetch_format: "auto", resource_type: 'video', urlAnalytics: false})
console.log(url)


// cloudinary.uploader
// .upload("assets/blood-orange.mp4", {
//       resource_type: 'video',
//       fetch_format: "auto"
//      })
//       .then(uploadResult => console.log(uploadResult))
//       .catch(error => console.error(error));
