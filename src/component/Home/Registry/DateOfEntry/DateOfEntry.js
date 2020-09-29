import React, { Component } from 'react';
import "../IntakeSheet.css"

class DateOfEntry extends Component {
    constructor() {
        super();

        this.state = {
            entryDate: ""
        }

        this.handleAdd = this.handleAdd.bind(this)
    }

    handleDateChange(value){
        this.setState({ entryDate: value })
    }

    handleAdd(e) {
        e.preventDefault();
        this.props.date( this.state.entryDate )
        this.setState({ entryDate: ""})
    }

    handleReset(e){
        e.preventDefault();
        this.handleReset()
    }


    render() {
        return (
                
                <td>
                    <input value={this.state.date}
                        type="date"
                        onChange={(e) => this.handleDateChange(e.target.value)}
                    />
                    &nbsp;&nbsp;
                    <button onClick={this.handleAdd}>Add</button>
                    &nbsp;&nbsp;
                    <button onClick={this.handleReset}>Reset</button>
                </td>
        )
    }
}

export default DateOfEntry