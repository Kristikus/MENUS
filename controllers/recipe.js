const Recipe = require('../models/Recipe')

exports.postRecipe = (req, res, next) => {
 const recipe = new Recipe({
    ...req.body,
 })
 recipe.save()
 .then(() => res.status(201).json({ message: "Recette ajoutée !"}))
 .catch(err => res.status(400).json({err}))
}

exports.getRecipe = (req, res, next) => {
    Recipe.find()
    .then((recipes) => res.status(200).json(recipes))
    .catch(err => res.status(400).json({err}))
}

exports.getRecipeById = (req, res, next) => {
    Recipe.findOne({ _id: req.params.id })
    .then(recipe => res.status(200).json(recipe))
    .catch(err => res.status(400).json({err}))
}

exports.putRecipe = (req, res, next) => {
    Recipe.updateOne({ _id: req.params.id }, {$set: req.body} )
    .then(recipe => res.status(200).json(recipe))
    .catch(err => res.status(400).json({err}))
}

exports.deleteRecipe = (req, res, next) => {
    Recipe.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({message : "Recette supprimée"}))
    .catch(err => res.status(400).json({err}))
}

