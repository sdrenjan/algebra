import React from 'react';

export default class Task1 extends React.Component {
    
    state = {
        name: 'Vivi',
        age: '9',
        isMage: true
    }

    changeCharacter = () => {
        this.setState({ name: 'Zidane', age: '16', isMage: false})
    }
    
    render() {
        return <Data name={this.state.name} age={this.state.age} isMage={this.state.isMage} buttonClick={this.changeCharacter} />
    }
}

class Data extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.name} {this.props.isMage ? 'is mage' : `isn't mage`} and is {this.props.age} years old.</p>
                <button onClick={this.props.buttonClick}>Change Character</button>
            </div>
        )
    }
}