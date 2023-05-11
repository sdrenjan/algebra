import { useState } from 'react';

export default function Exercise3() {

    const [text, setText] = useState('')
    function inputText(e) {
        setText(e.target.value);
    }

    return (
        <div>
            <h1>Exercise 3</h1>
            <p>Your task is to show the text as it is being inputed</p>
            <div>
                <input type="text" onChange={inputText} value={text}/>
                <p>{text}</p>
            </div>
        </div>
    )
}