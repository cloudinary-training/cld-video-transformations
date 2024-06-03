require('dotenv').config()
const cloudinary = require('cloudinary').v2
cloudinary.config({ secure: "true" });

const videoUrl = cloudinary.video("noodles", {transformation: [
    {height: 400, width: 300, crop: "fill"},
    {flags: "splice", overlay: "video:chocolate"},
    {height: 400, width: 300, crop: "fill"},
    {flags: "layer_apply"},
    {flags: "splice", overlay: "video:chef"},
    {height: 400, width: 300, crop: "fill"},
    {flags: "layer_apply"},{flags: "splice", overlay: "video:blood-orange"},
    {height: 400, width: 300, crop: "fill"},
    {flags: "layer_apply"},
    {audio_codec: "none"}  // This transformation mutes the video
    ]})

console.log(videoUrl);
