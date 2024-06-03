require('dotenv').config()
const cloudinary = require('cloudinary').v2
cloudinary.config({ secure: "true" });

const url = cloudinary.url('chef',
    transformation = [
      {quality: "auto"}
    ])

  console.log(url)
