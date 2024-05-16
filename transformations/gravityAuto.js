require('dotenv').config();
const cloudinary = require('cloudinary').v2;
cloudinary.config({ secure: "true" });

// use upload API to upload an authenticated asset
// cloudinary.uploader
//   .upload('assets/blood-orange.mp4', {
//     resource_type: 'video',
//     secure: true,
//     public_id: 'blood-orange88',
//     gravity: "auto", 
//     crop: "fill_pad"
//   })
//   .then(uploadResult => {
//     console.log(uploadResult)
//   })
//   .catch(error => console.error(error))


cloudinary.uploader
.upload("assets/blood-orange.mp4",
  { resource_type: "video", width: 500, crop: "fill", gravity: "auto"})
  .then(uploadResult => console.log(uploadResult))
  .catch(error => console.error(error));
