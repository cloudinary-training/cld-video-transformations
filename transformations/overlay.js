require('dotenv').config()
const cloudinary = require('cloudinary').v2
cloudinary.config({ secure: "true" });

// image and text overlay on a video asset

const url = cloudinary.url('noodles', {
  resource_type: 'video',
  transformation: [
    { width: 500, crop: 'scale' },
    {
      overlay: 'logo',
      width: 100,
      x: 15,
      y: 15,
      gravity: 'north_east',
      opacity: 50,
      effect: 'brightness:100'
    },
    {
      overlay: {
        font_family: 'Montserrat',
        font_size: 30,
        text: '20% OFF DELIVERY TODAY    ',
      },
      gravity: 'center',
      color: '#FFFFFF'
    }
  ]
})

console.log(url)