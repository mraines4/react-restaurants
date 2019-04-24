import React from 'react';
import restaurants from './restaurants';

function ListOfTypes(props) {
    const typesKeys = Object.keys(restaurants)
    return(
        <ul>
            {typesKeys.map((type, i) => <li key={i}>
                <button value={type} onClick={props.handleInput}>
                    {type}
                </button>
            </li>)}
        </ul>
    )
}


export default ListOfTypes;