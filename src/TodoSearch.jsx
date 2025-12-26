import React from 'react';
import './TodoSearch.css';

function TodoSearch({searchValue, setsearchValue}) {

    

    function handleChange(event) {
        setsearchValue(event.target.value);
    }


    return (
        <input
            placeholder="Cortar cebolla"
            className="TodoSearch"
            value={searchValue}
            onChange={handleChange}

        />
    );
}

export { TodoSearch };
