import { useState } from 'react';

export default function Exercise5() {

    const [count, setCount] = useState(0);

    function addCount() {
        setCount(count+1);
    }

    function removeCount() {
        setCount(count-1);
    }

    return (
        <div>
            <h1>Exercise 5</h1>
            <p>Your task is to create a simple counter</p>
            <div>
                <p>Counter: {count}</p>
                <button onClick={addCount}>Increment</button>
                <button onClick={removeCount}>Decrement</button>
            </div>
        </div>
    )
}