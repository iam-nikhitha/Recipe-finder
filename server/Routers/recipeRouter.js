const express = require("express");
const { getAllRecipe, addRecipe, updateRecipe, deleteRecipe } = require("../Controllers/recipeController");
const router = express.Router();


router.get('/',getAllRecipe);
router.post('/new/recipe',addRecipe);
router.put('/:id',updateRecipe);
router.delete('/:id',deleteRecipe);


module.exports = router;