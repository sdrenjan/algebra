import { useState } from 'react';

export default function Exercise4() {

    const [number1, setNumber1] = useState();
    const [number2, setNumber2] = useState();
    const [sum, setSum] = useState(0);

    function inputNumber1(e) {
        setNumber1(e.target.value);
    }

    function inputNumber2(e) {
        setNumber2(e.target.value);
    }

    function addNumbers() {
        setSum(Number(number1)+Number(number2));
    }

    return (
        <div>
            <h1>Exercise 4</h1>
            <p>Your task is to calculate (+) two numbers once they are inputed and the button is clicked</p>
            <div>
                <input type="number" onChange={inputNumber1} value={number1} placeholder='First Number'/>
                <input type="number" onChange={inputNumber2} value={number2} placeholder='Second Number'/>
                <button onClick={addNumbers}>Add Two Numbers</button>
                <p>Total: {sum}</p>
            </div>
        </div>
    )
}