const mongoose = require("mongoose");


const feedbackSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    feedback : {
        type : String,
        required : true
    }
})

const model = mongoose.model("Feedback",feedbackSchema);
module.exports = model;