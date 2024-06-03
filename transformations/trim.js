require('dotenv').config()
const cloudinary = require('cloudinary').v2
cloudinary.config({ secure: "true" });

const start_offset = 8;
const end_offset = 18;
const duration = 10;

//originally a 28 second video asset, trimming down to 10 seconds, specifying the second marker to start and end the trimmed clip

const videoUrl = cloudinary.url('chef', {
  resource_type: 'video',
  transformation: [
    {
      start_offset,
      end_offset,
      duration
    },
  ],
});

console.log(videoUrl);