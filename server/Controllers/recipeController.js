const asyncHandler = require("express-async-handler");
const Recipe = require("../Models/recipeModel");

const addRecipe = asyncHandler ( async(req,res) => {
    const {dishname,calories,preptime,cooktime,servings,ingredient1,ingredient2,ingredient3,ingredient4,ingredient5,instructions,cuisine,dietary,file,notes} = req.body;

    if(!dishname || !calories || !preptime || !cooktime ||!servings || !ingredient1 || !ingredient2 || !ingredient3 || !ingredient4 || !ingredient5 || !instructions || !cuisine || !dietary || !file || !notes){
        res.status(400);
        throw new Error("All Fileds Are Not Empty");
    }

    try {
        const recipe = await Recipe.create({
            dishname,
            calories,
            preptime,
            cooktime,
            servings,
            ingredient1,
            ingredient2,
            ingredient3,
            ingredient4,
            ingredient5,
            instructions,
            cuisine,
            dietary,
            file,
            notes
        });

        recipe.save();

        console.log(recipe)
        res.status(201).json({message : "Recipe Created"})
    } catch (error) {
        console.log(error);
        res.status(400).json({message : "Recipe Not Created"})
        process.exit(1);
    }
})


const getAllRecipe = asyncHandler( async(req,res)=>{
    const allRecipe = await Recipe.find({});
    res.status(200).json(allRecipe);
})


const updateRecipe = asyncHandler( async(req,res)=>{
    const {id} = req.params;
    const {dishname,calories,preptime,cooktime,servings,ingredient1,ingredient2,ingredient3,ingredient4,ingredient5,instructions,cuisine,dietary,file,notes} = req.body;

    try {
        const recipe = await Recipe.findByIdAndUpdate({_id : id},{
            dishname,
            calories,
            preptime,
            cooktime,
            servings,
            ingredient1,
            ingredient2,
            ingredient3,
            ingredient4,
            ingredient5,
            instructions,
            cuisine,
            dietary,
            file,
            notes
        },{ new : true })

        console.log(recipe);
        res.status(201).json({message : "Updated SucessFully"});
    } catch (error) {
        console.log(error);
        res.status(400).json({message : "Request Declined"});
        process.exit(1);
    }
});


const deleteRecipe = asyncHandler( async (req,res)=>{
    const {id} = req.params;

    try {
        const recipe = await Recipe.findByIdAndDelete({_id:id});
        res.status(201).json({message : "Deleted SuccessFully"});
        console.log(recipe);
    } catch (error) {
        console.log(error);
        res.status(400).json({message : "Request Declined"});
        process.exit(1);
    }
})


module.exports = {addRecipe,getAllRecipe,updateRecipe,deleteRecipe};