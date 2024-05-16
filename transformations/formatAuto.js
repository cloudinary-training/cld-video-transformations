require('dotenv').config()
const cloudinary = require('cloudinary').v2;
cloudinary.config({ secure: "true" });


cloudinary.uploader
.upload("assets/blood-orange.mp4", {
      resource_type: 'video',
      fetch_format: "auto"
     })
      .then(uploadResult => console.log(uploadResult))
      .catch(error => console.error(error));
