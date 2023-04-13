export default function Events() {

    function handleClick() {
        alert('You have clicked a button');
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log('Form was submitted');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Enter name' disabled></input>
                <button type='submit'>Submit Form</button>
            </form>
            <hr />
            <button onClick={handleClick}>Click Me</button>
        </div>
    )
}