import React from 'react';
import './css/SearchBox.css';

const SearchBox = ({ searchChange }) => {
    return(
        <div className="searchBox">
            <input
                type='search'
                placeholder='search recipes'
                onChange={searchChange}
            />
        </div>
    );
};

export default SearchBox;