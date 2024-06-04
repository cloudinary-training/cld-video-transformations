require('dotenv').config()
const cloudinary = require('cloudinary').v2
cloudinary.config({ secure: "true" });

const start_offset = 8;
const end_offset = 18;
const duration = 10;

// The Cloudinary trim feature allows you to cut a video by specifying start and end points 
// or a duration, effectively removing unwanted sections.

//originally a 28 second video asset, trimming down to 10 seconds, specifying the second marker to start and end the trimmed clip

const videoUrl = cloudinary.video('chef', {
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