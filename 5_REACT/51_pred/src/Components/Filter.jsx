import React, { useState } from 'react';

export default function Filter() {

    const [filter, setFilter] = useState('');
    const list = [
        'Banana',
        'Apple',
        'Orange',
        'Mango',
        'Pineapple',
        'Watermelon'
    ];

    function filterText(e) {
        setFilter(e.target.value)
    }

    return(
        <div>
            <label htmlFor="filter">Search: </label>
            <input type="text" id='filter' onChange={filterText}/>
            <ul>
                {list.filter(item => item.toLowerCase().includes(filter)).map((item, index) => <li key={index}>{item}</li>)}
            </ul>          
        </div>
    )
}