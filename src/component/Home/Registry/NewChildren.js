import React, { Component } from 'react';

class NewChildren extends Component {
    constructor() {
        super();

        this.state = {
            input: "",
            childDate: ""
        }

        this.handleAdd = this.handleAdd.bind(this)
    }

    handleInputChange(value) {
        this.setState({ input: value })
    }

    handleDateChange(value){
        this.setState({ childDate: value })
    }

    handleAdd(e) {
        e.preventDefault();
        this.props.add(this.state.input, this.state.childDate)
        this.setState({ input: "" , childDate: ""})
    }


    render() {
        return (
                
                <td>
                    <input value={this.state.input}
                        placeholder="Children Full Name"
                        onChange={(e) => this.handleInputChange(e.target.value)}
                    />

                    <input value={this.state.date}
                        type="date"
                        onChange={(e) => this.handleDateChange(e.target.value)}
                    />
                    <button onClick={this.handleAdd}>Add</button>
                </td>
        )
    }
}

export default NewChildren