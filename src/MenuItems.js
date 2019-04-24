import React from 'react';
import restaurants from './restaurants';

function MenuItems(props) {
    console.log(`props.rest is ${props.rest}`)
    console.log(`props.type is ${props.type}`)
    const menu = restaurants[props.type][props.rest];
    return (
        <ul>
            {menu.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
    )
}


export default MenuItems;