import React from "react";

// Statefull Component - also a parent component
export default class SendsState extends React.Component{
    state = {
        count: 0
    }

    changeState = () => {
        this.setState({count: this.state.count + 1})
    }

    render() {
        return (
            <div>
                <p><ReceivesState count={this.state.count} onButtonClick={this.changeState} /></p>
            </div>
        )
    }
}

function ReceivesState({ count, onButtonClick }) {
    return(
        <div>
            <p>Number of clicks: {count}</p>
            <button onClick={onButtonClick}>Click me</button>
        </div>
    )
}