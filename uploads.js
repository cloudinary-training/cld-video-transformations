require('dotenv').config()
const cloudinary = require('cloudinary').v2

//upload videos to be worked with in this course, assign public IDs for referencing
cloudinary.uploader.upload("assets/chocolate.mp4", {resource_type: "video", public_id: "chocolate"})

cloudinary.uploader.upload("assets/blood-orange.mp4", {resource_type: "video", public_id: "blood-orange"})

cloudinary.uploader.upload("assets/noodles.mp4", {resource_type: "video", public_id: "noodles"})

cloudinary.uploader.upload("assets/tuna.mp4", {resource_type: "video", public_id: "tuna"})

cloudinary.uploader.upload("assets/chef.mp4", {resource_type: "video", public_id: "chef"})

cloudinary.uploader.upload("assets/plates.mp4", {resource_type: "video", public_id: "plates"})

