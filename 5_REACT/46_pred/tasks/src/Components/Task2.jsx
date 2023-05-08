import { useState } from "react";

export default function Task2() {
    const [character, setCharacter] = useState({
        name: 'Vivi',
        age: 9,
        isMage: true
    });

    return <Data name={character.name} age={character.age} isMage={character.isMage} buttonClick={() => setCharacter({ name: 'Zidane', age: 16, isMage: false })} />
}

function Data(props) {
    return (
        <div>
            <p>{props.name} {props.isMage ? 'is mage' : `isn't mage`} and is {props.age} years old.</p>
            <button onClick={props.buttonClick}>Change character</button>
        </div>
    )
}
