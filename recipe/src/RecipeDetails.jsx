import React from 'react';
import './css/RecipeDetails.css';

const RecipeDetalis = ({ showAllRecipes, recipe }) => {
    return(
        <div>
            <button onClick={showAllRecipes}>See all recipes</button>
            <div className="recipeDetails">
                <div className="title">
                    <label>Title:</label>
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
