import React from 'react';
import restaurants from './restaurants';

function ListOfRestaurants(props) {
    const names = Object.keys(restaurants[props.type])
    return (
        <ul>
            {names.map((rest, i) => <li key={i}>
                <button value={rest} onClick={props.handleInput}>
                    {rest}
                </button>
            </li>)}
        </ul>
    )
}

export default ListOfRestaurants;