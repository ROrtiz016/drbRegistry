import React, { Component } from 'react'
import './IntakeSheet.css'

class IntakeSheet extends Component {
    constructor() {
        super()
        this.state = {
            date: "",
            lawyer: "",
            recommend: "",
            firstName: "",
            middleName: "",
            lastName: "",
            dateOfBirth: "",
            placeOfBirth: "",
            address: "",
            city: "",
            state: "",
            zipcode: ""
        }
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Intake Sheet</h1>
                </div>
                <div className="field-container">
                    <p className="input-title">Date: </p>
                    <input type="date" className="input-field" name="date" placeholder="fecha" /> 
                </div>

                <div className="field-container">
                    <p className="input-title">Lawyer: </p>
                    <input type="text" className="input-field" name="lawyerName" placeholder="Abogado" />
                </div>

                <div className="field-container">
                    <p className="input-title">Recommended by: </p>
                    <input type="text" className="input-field" name="recommend" placeholder="Recommendado por" />
                </div>

                <div className="field-container">
                    <p className="input-title">First Name: </p>
                    <input type="text" className="input-field" name="firstName" placeholder="Nombre" />
                </div>

                <div className="field-container">
                    <p className="input-title">Middle Name: </p>
                    <input type="text" className="input-field" name="middleName" placeholder="Segundo Nombre" />
                </div>

                <div className="field-container">
                    <p className="input-title">Last Name: </p>
                    <input type="text" className="input-field" name="lastName" placeholder="Apellido" />
                </div>

                <div className="field-container">
                    <p className="input-title">Date of Birth: </p>
                    <input type="date" className="input-field" name="dateOfBirth" placeholder="Fecha de Nacimiento" />
                </div>

                <div className="field-container">
                    <p className="input-title">Place of Birth: </p>
                    <input type="text" className="input-field" name="placeOfBirth" placeholder="Lugar de Nacimiento" />
                </div>

                <div className="field-container">
                    <p className="input-title">Address: </p>
                    <input type="text" className="input-field" name="address" placeholder="Direccion Actual" />
                </div>

                <div className="field-container">
                    <p className="input-title">City: </p>
                    <input type="text" className="input-field" name="city" placeholder="Ciudad" />
                </div>

                <div className="field-container">
                    <p className="input-title">State: </p>
                    <input type="text" className="input-field" name="state" placeholder="Estado" />
                </div>

                <div className="field-container">
                    <p className="input-title">Zipcode: </p>
                    <input type="text" className="input-field" name="zipcode" placeholder="Codigo postal" />
                </div>
                
                <button>Next</button>

            </div>
        )
    }
}

export default IntakeSheet;