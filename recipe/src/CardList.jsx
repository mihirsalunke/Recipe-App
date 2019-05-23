import React from 'react';
import Card from './Card';

const CardList = ({ recipes, showDetails }) => {
    return(
        <div className="recipes">
            {
                recipes.map((recipe, i) => {
                    return(
                        <Card
                            key={i}
                            showDetails={showDetails}
                            title={recipe.title}
                            image={recipe.image}
                        />
                    );
                })
            }
        </div>
    );
};

export default CardList;