const mongoose = require("mongoose");

const recipeSchema = mongoose.Schema({
    dishname : {
        type : String,
        required : true
    },
    calories : {
        type : Number,
        required : true
    },
    preptime : {
        type : Number,
        required : true
    },
    cooktime : {
        type : Number,
        required : true
    },
    servings : {
        type : Number,
        required : true
    },
    ingredient1 : {
        type : String,
        required : true
    },
    ingredient2 : {
        type : String,
        required : true
    },
    ingredient3 : {
        type : String,
        required : true
    },
    ingredient4 : {
        type : String,
        required : true
    },
    ingredient5 : {
        type : String,
        required : true
    },
    instructions : {
        type : String,
        required : true
    },
    cuisine : {
        type : String,
        required : true
    },
    dietary : {
        type : String,
        required : true
    },
    file : {
        type : String,
        required : true
    },
    notes : {
        type : String,
        required : true
    }
},
{
    timestamp : true
}
);

const model = mongoose.model('Recipe',recipeSchema);
module.exports = model;