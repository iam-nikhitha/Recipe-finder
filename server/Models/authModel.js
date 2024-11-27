const mongoose = require('mongoose');

const authSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    file : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
},
{
    timestamps : true
})

const model = mongoose.model("Auth",authSchema);
module.exports = model;