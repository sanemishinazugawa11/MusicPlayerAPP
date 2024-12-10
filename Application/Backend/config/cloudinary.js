const cloudinary = require('cloudinary').v2;

const connectCloudinary = ()=>{
    cloudinary.config({
        cloud_name: "YOUR_CLOUD_NAME",
        api_key: "YOUR_API_KEY",
        api_secret: "YOUR_API_SECRET"
    });

    console.log("connected to cloudinary successfully");
}

module.exports = {connectCloudinary};