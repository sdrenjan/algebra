import { useState } from 'react';

export default function Exercise2() {

    const [element, setElement] = useState('Toggle Challenge')
    function toggleElement() {
        element === 'Toggle Challenge' ? setElement('') : setElement('Toggle Challenge');
    }

    return (
        <div>
            <h1>Exercise 2</h1>
            <p>Your task is to show or hide the text bellow based on a button click</p>
            <div>
                <button onClick={toggleElement}>Hide Element Below</button>
                <p>{element}</p>
            </div>
        </div>
    )
}