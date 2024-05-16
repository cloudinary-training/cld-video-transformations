require('dotenv').config()
const cloudinary = require('cloudinary').v2
cloudinary.config({ secure: "true" });

//text and image overlay

const url = cloudinary.url('noodles', {
  resource_type: 'video',
  transformation: [
    { width: 500, crop: 'scale' },
    {
      overlay: 'logo',
      width: 100,
      gravity: 'north_east',
      opacity: 50,
      effect: 'brightness:100'
    },
    {
      overlay: {
        font_family: 'Montserrat',
        font_size: 30,
        text: '  EAT YOUR NOODS  '
      },
      gravity: 'center',
      x: 25,
      y: 25
    }
  ]
})

console.log(url)