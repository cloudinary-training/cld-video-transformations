require('dotenv').config()
const cloudinary = require('cloudinary').v2

//upload the video assets to be worked with in this microcourse,
// and assign public ID that match the code in this repository for easy referencing

cloudinary.uploader.upload("assets/chocolate.mp4", {resource_type: "video", public_id: "chocolate"})

cloudinary.uploader.upload("assets/blood-orange.mp4", {resource_type: "video", public_id: "blood-orange"})

cloudinary.uploader.upload("assets/noodles.mp4", {resource_type: "video", public_id: "noodles"})

cloudinary.uploader.upload("assets/tuna.mp4", {resource_type: "video", public_id: "tuna"})

cloudinary.uploader.upload("assets/chef.mp4", {resource_type: "video", public_id: "chef"})

cloudinary.uploader.upload("assets/plates.mp4", {resource_type: "video", public_id: "plates"})

