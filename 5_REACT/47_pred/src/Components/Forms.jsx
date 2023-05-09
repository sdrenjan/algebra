import React from "react";

export default class FormsSingle extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            name: '',
            surname: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e){
        alert(`The user is ${this.state.name} ${this.state.surname}`)
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name: <input type="text" name='name' onChange={this.handleChange}/>
                </label>
                <label>
                    Surname: <input type="text" name='surname' onChange={this.handleChange}/>
                </label>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

/*
In the handleChange method of the provided code, the square brackets ([]) around e.target.name 
indicate that the value of e.target.name is a dynamic key for the state object.

Using square brackets with a dynamic key allows you to set the value of a property whose name is not known until runtime. 
In this case, e.target.name refers to the name attribute of the input element that triggered the onChange event.

By using e.target.name as a dynamic key, the code can update the corresponding property in the state object 
without having to write separate code for each input field.
*/