const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipe');

router.post('/', recipeController.postRecipe);
router.get('/', recipeController.getRecipe);
router.get('/:id', recipeController.getRecipeById);
router.put('/:id', recipeController.putRecipe);
router.delete('/:id', recipeController.deleteRecipe);

module.exports = router;
