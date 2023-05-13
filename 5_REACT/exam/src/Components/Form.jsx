import React from "react"

export default class Form extends React.Component {
    render() {
        const { handleChange, handleSubmit } = this.props
        return (
            <div>
                <p>GitHub username:</p>
                <form onSubmit={handleSubmit}>
                    <input type="text" onChange={handleChange} />
                    <button type="submit">Go!</button>
                </form>
            </div>
        )
    }
}

