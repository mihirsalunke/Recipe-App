import React from 'react';
import './css/NewRecipeForm.css';

const NewRecipeForm = ({ cancel, titleChange, ingredientsChange, instructionsChange, imageChange, submitRecipe, showerror }) => {
    return(
        <div className="newRecipeForm">
            <div className="recipe-title">
                <label>Recipe title:</label>
                <input onChange={titleChange} type="text" placeholder="Enter title of the recipe"/>
            </div>
            <div className="recipe-ingredients">
                <label>Enter ingredients for the recipe:</label>
                <textarea rows="5" cols="50" onChange={ingredientsChange} type="text" placeholder="Enter ingredients for the recipe"></textarea>
            </div>
            <div className="recipe-instructions">
                <label>Enter instructions for the recipe:</label>
                <textarea rows="5" cols="50" onChange={instructionsChange} type="text" placeholder="Enter instructions for the recipe"></textarea>
            </div>
            <div className="recipe-image">
                <label>Add Image url:</label>
                <input onChange={imageChange} type='text' placeholder="Enter image url"/>
            </div>
            <div className="button-area">
                <button onClick={submitRecipe} >Submit Recipe</button>
                <button onClick={cancel} >Cancel</button>
            </div>
            {showerror}
        </div>
    );
};

export default NewRecipeForm;