require('dotenv').config()
const cloudinary = require('cloudinary').v2
cloudinary.config({ secure: "true" });

// The Quality Auto parameter is designed to automatically adjust the compression levels
// of images and videos to achieve an optimal balance between visual quality and file size.


const url = cloudinary.video('chef',
    transformation = [
      {quality: "auto"}
    ])

  console.log(url)
