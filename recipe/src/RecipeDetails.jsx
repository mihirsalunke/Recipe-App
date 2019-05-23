import React from 'react';
import './css/RecipeDetails.css';

const RecipeDetalis = ({ showAllRecipes, recipe }) => {
    return(
        <div>
            <button onClick={showAllRecipes}>See all recipes</button>
            <div className="recipeDetails">
                <div className="title">
<<<<<<< HEAD
                    <label>Title:</label>
=======
>>>>>>> f7a0fe252ffa9bc525c588d0126d6be013cdcc2b
                    <div>{recipe.title}</div>
                </div>
                <div className="images">
                    <img alt='food' src={recipe.image}/>
                </div>
                <div className="ingredients">
                    <label>Ingredients:</label>
                    <div>{recipe.ingredients}</div>
                </div>
                <div className="instructions">
                    <label>Instructions:</label>
                    <div>{recipe.instructions}</div>
                </div>
            </div>
        </div>
    );
};

export default RecipeDetalis;