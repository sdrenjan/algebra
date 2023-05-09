import { useState } from 'react';

export default function FormsFunc() {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');

    function handleName(e) {
        setName(e.target.value);
    }

    function handleSurname(e) {
        setSurname(e.target.value);
    }

    function handleSubmit(e){
        alert(`Name was submitted: ${name} ${surname}`)
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name: <input type="text" name='name' value={name} onChange={handleName} />
            </label>
            <label>
                Surname: <input type="text" name='surname' value={surname} onChange={handleSurname} />
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}

/* one hook for both name and surname

import { useState } from 'react';

export default function FormsFunc() {
  const [data, setData] = useState({ name: '', surname: '' });

  function handleChange(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    alert(`Name was submitted: ${data.name} ${data.surname}`);
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name: <input type="text" name="name" value={data.name} onChange={handleChange} />
      </label>
      <label>
        Surname: <input type="text" name="surname" value={data.surname} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

As I mentioned earlier, it's not recommended to use one useState hook for both name and surname. 
However, if you want to do it for some reason, you could create an object to hold both pieces of state and update them together.
In this code, the useState hook creates a single state variable data, which is an object containing both name and surname properties. 
The handleChange function is used to update both pieces of state at once by using the spread operator (...) to create a copy of the data object 
and then updating the appropriate property based on the name attribute of the input field.
*/