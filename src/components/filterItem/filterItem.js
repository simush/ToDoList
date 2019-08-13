import React from 'react';

import './filterItem.css';

export default function FilterItem(props) {
    return (
        <form>
            <input className="filterInput" placeholder="Search Item"/>

            <button className="filterInput">Search Item</button>
        </form>
        
    );
}
