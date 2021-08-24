const mongoose = require("mongoose");

const portSchema = new mongoose.Schema({
    authorId : {
        type : String,
        required : true
    },
    title : {
        type : String,
        required : true,
    },
    body : {
        type : String,
        required : true,
    }
},{timestamps : true})


module.exports = mongoose.model("post", portSchema)