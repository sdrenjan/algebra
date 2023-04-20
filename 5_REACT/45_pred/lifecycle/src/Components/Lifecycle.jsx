import React from "react";

export default class Lifecycle extends React.Component {

    componentWillMount(){
        console.log('Component will mount');
    }

    componentDidMount(){
        console.log('Component did mount');
    }

    render () {
        return (
            <div>
                <h3>Hello Mounting Methods</h3>
            </div>
        )
    }
}