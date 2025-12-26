import React from 'react';
import './TodoSearch.css';

function TodoSearch() {

    // const [state, setState] = React.useState();
    const [searchValue, setsearchValue] = React.useState("");

    function handleChange(event) {
        setsearchValue(event.target.value);
    }

    console.log("Los usuarios buscan 'todos' de ", searchValue)

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
