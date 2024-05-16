require('dotenv').config()
const cloudinary = require('cloudinary').v2

//upload videos to be worked with in this course, assign public IDs for referencing
cloudinary.uploader.upload("assets/chocolate.mp4", {resource_type: "video", public_id: "chocolate"})

cloudinary.uploader.upload("assets/blood-orange.mp4", {resource_type: "video", public_id: "blood-orange"})

cloudinary.uploader.upload("assets/noodles.mp4", {resource_type: "video", public_id: "noodles"})

