const express = require('express');
const mongoose = require('mongoose');
const recipeRoute = require('./routes/recipe');

const app = express();

const path = require("path");
app.use(express.static(path.join(__dirname, "build")));

mongoose.connect('mongodb+srv://kriskus:FjKTUOKcU0bvVqKh@cluster2.sjjf7xd.mongodb.net/?retryWrites=true&w=majority',
{ useNewUrlParser: true,
  useUnifiedTopology: true })
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));


app.use(express.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});


app.use('/menus', recipeRoute);

module.exports = app;