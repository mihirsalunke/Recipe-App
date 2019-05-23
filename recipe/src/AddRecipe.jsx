import React from 'react';
import './css/AddRecipe.css';

const AddRecipe = ({ openRecipeForm }) => {
    return(
        <div className="addRecipe">
            <button onClick={openRecipeForm}>Add New Recipe</button>
        </div>
    );
};

export default AddRecipe;