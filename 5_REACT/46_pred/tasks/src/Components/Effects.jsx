import { useState, useEffect } from "react";

export default function Effects() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = count;
    }, [count]);

    return (
        <div>
            <p>You have clicked {count} times.</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    )
}

/* ili

export default function Effects() {

    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <p>You have clicked {count} times.</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

*/
