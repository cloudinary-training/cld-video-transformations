require('dotenv').config();
const cloudinary = require('cloudinary').v2;
cloudinary.config({ secure: "true" });


cloudinary.uploader.upload(
    "assets/plates.mp4",
    {
      resource_type: "video",
      public_id: "plates",
      eager: [
        { width: 400, height: 300, crop: "pad" },
        { width: 260, height: 200, crop: "fill", gravity: "auto" }
      ]
    },
    function(error, result) {
      console.log(result, error);
    }
  );