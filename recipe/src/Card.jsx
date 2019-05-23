import React from 'react';
import './css/Card.css';

const Card = ({ showDetails, image, title }) => {
    return (
        <div className="recipe">
            <div className="image">
                <img alt='food' src={image}/>
            </div>
            <div>
                <h2 onClick={showDetails}>{title}</h2>
            </div>
        </div>
    );
};

export default Card;