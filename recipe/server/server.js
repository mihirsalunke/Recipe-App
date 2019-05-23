const express = require ('express');
const path = require('path');
const app = express();
const PORT = 4000;

const recipeStore = require('../src/recipes');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/recipes', (req, res) => {
    res.json({ recipes: recipeStore.recipes });
});

app.post('/recipes', express.json(), (req, res) => {
    const { title, ingredients, instructions, image } = req.body;
    const recipe = { title, ingredients, instructions, image };
    recipeStore.addRecipe({ title, ingredients, instructions, image });
    res.json(recipe);
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));