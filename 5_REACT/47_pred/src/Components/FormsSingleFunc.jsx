import { useState } from 'react';

export default function FormsSingleFunc() {

    const [name, setName] = useState('');

    function handleChange(e) {
        setName(e.target.value)
    }

    function handleSubmit(e){
        alert(`Name was submitted: ${name}`)
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name: <input type="text" value={name} onChange={handleChange} />
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}