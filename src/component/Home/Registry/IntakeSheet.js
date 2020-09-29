import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './IntakeSheet.css'
import ChildrenList from "./ChildrenList"
import NewChildren from './NewChildren'
import PlaceOfBirth from './PlaceOfBirth/PlaceOfBirth'
import DateOfEntry from './DateOfEntry/DateOfEntry'
import EntryList from './DateOfEntry/EntryList'

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
            zipcode: "",
            homePhone: "",
            cellPhone: "",
            email: "",
            employer: "",
            employerPhone: "",
            previousLawyer: "No",
            previousLawyerName: "",
            spouseName: "",
            dateOfBirthSpouse: "",
            placeOfBirthSpouse: "United States",
            legalStatus: "",
            dateOfMarriage: "",
            placeOfMarriage: "",
            previousPetition: "No",
            previousPetitioner: "",
            previousPetitionDate: "",
            previousPetitionLocation: "",
            finalDisposition: "",
            entryDescription: "",
            typeOfVisa: "",
            deported: "No",
            officerContact: "No",
            officerContactDate: "",
            officerContactPlace: "",
            officerContactMotives: "",
            judgeContact: "No",
            judgeContactDate: "",
            judgeContactPlace: "",
            judgeContactMotives: "",
            crimeVictim: "No",
            policeProblems: "No",
            policeProblemsReasons: "",
            arrested: "No",
            arrestedPlace: "",
            arrestedDate: "",
            policeFinalDisp: "",
            smuggling: "No",
            tattoos: "No",
            tattoosDescription: "",
            liedToEntry: "No",
            liedToBeCitizen: "No",
            otherNames: "No",
            visitReason: "",
            childrenList: [],
            datesOfEntry: []

        }

        this.change = this.change.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.handleAddChildrenTask = this.handleAddChildrenTask.bind(this)
        this.handlePlaceOfBirth = this.handlePlaceOfBirth.bind(this)
        this.handlePlaceOfBirthSpouse = this.handlePlaceOfBirthSpouse.bind(this)
        this.handleDateOfEntry = this.handleDateOfEntry.bind(this)
    }

    handleDateOfEntry(date) {
        if (date === "") {
            alert("Please add a date of entry")
            return
        }
        this.setState({
            datesOfEntry: [...this.state.datesOfEntry, { entryDate: date }]
        })
    }

    handleAddChildrenTask(childName, childDateofBirth) {
        if (childName === "") {
            alert("Please add the child's name")
            return
        }
        this.setState({ childrenList: [...this.state.childrenList, { name: childName, dateOfBirth: childDateofBirth }] });
    }

    handlePlaceOfBirth(place) {
        var placeValue = place
        this.setState({ placeOfBirth: placeValue })
    }

    handlePlaceOfBirthSpouse(place) {
        var placeValue = place
        this.setState({ placeOfBirthSpouse: placeValue })
    }


    getCurrentDate(separator = '/') {

        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();

        return `${month < 10 ? `0${month}` : `${month}`}${separator}${date}${separator}${year}`
    }


    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

    render() {
        return (
            <form className="intakesheet-container">
                <div>
                    <h1>Intake Sheet</h1>
                </div>

                <table className="table-container">
                    <tbody>
                        <tr className="table-row">
                            <th>Date: </th>
                            <td>
                                <span className="input-field" value={this.state.date} >{this.getCurrentDate()}</span>
                            </td>
                        </tr>

                        <tr className="table-row gray">
                            <th>Lawyer: </th>
                            <td>
                                <input
                                    type="text"
                                    name="lawyer"
                                    className="input-field"
                                    value={this.state.lawyer}
                                    placeholder="Abogado"
                                    onChange={e => this.change(e)} />
                            </td>
                        </tr>

                        <tr className="table-row">
                            <th>Recommended by:</th>
                            <td>
                                <input
                                    type="text"
                                    name="recommend"
                                    className="input-field"
                                    value={this.state.recommend}
                                    placeholder="Recommendado por"
                                    onChange={e => this.change(e)} />
                            </td>
                        </tr>

                        <tr className="table-row gray">
                            <th>First Name:</th>
                            <td>
                                <input
                                    type="text"
                                    name="firstName"
                                    className="input-field"
                                    value={this.state.firstName}
                                    placeholder="Nombre"
                                    onChange={e => this.change(e)}
                                />
                            </td>
                        </tr>

                        <tr className="table-row">
                            <th>Middle Name:</th>
                            <td>
                                <input
                                    type="text"
                                    name="middleName"
                                    className="input-field"
                                    value={this.state.middleName}
                                    placeholder="Segundo Nombre"
                                    onChange={e => this.change(e)} />
                            </td>
                        </tr>

                        <tr className="table-row gray">
                            <th>Last Name:</th>
                            <td>
                                <input
                                    type="text"
                                    name="lastName"
                                    className="input-field"
                                    value={this.state.lastName}
                                    placeholder="Apellido"

                                    onChange={e => this.change(e)} />
                            </td>
                        </tr>

                        <tr className="table-row">
                            <th>Date of Birth:</th>
                            <td>
                                <input
                                    type="date"
                                    name="dateOfBirth"
                                    className="input-field"
                                    value={this.state.dateOfBirth}
                                    placeholder="Fecha de Nacimiento"
                                    onChange={e => this.change(e)} />
                            </td>
                        </tr>

                        <PlaceOfBirth place={this.handlePlaceOfBirth} />

                        <tr className="table-row">
                            <th>Address:</th>
                            <td>
                                <input
                                    type="text"
                                    name="address"
                                    className="input-field"
                                    value={this.state.address}
                                    placeholder="Direccion Actual"
                                    onChange={e => this.change(e)} />
                            </td>
                        </tr>

                        <tr className="table-row gray">
                            <th>City:</th>
                            <td>
                                <input
                                    type="text"
                                    name="city"
                                    className="input-field"
                                    value={this.state.city}
                                    placeholder="Ciudad"

                                    onChange={e => this.change(e)} />
                            </td>
                        </tr>

                        <tr className="table-row">
                            <th>State:</th>
                            <td>
                                <input
                                    type="text"
                                    name="state"
                                    className="input-field"
                                    value={this.state.state}
                                    placeholder="Estado"

                                    onChange={e => this.change(e)} />
                            </td>
                        </tr>

                        <tr className="table-row gray">
                            <th>Zipcode:</th>
                            <td>
                                <input
                                    type="text"
                                    name="zipcode"
                                    className="input-field"
                                    value={this.state.zipcode}
                                    placeholder="Codigo postal"

                                    onChange={e => this.change(e)} />
                            </td>
                        </tr>

                        <tr className="table-row">
                            <th>Home phone number:</th>
                            <td>
                                <input
                                    type='tel'
                                    name="homePhone"
                                    pattern="[0-9]{3}-[0-9]{3}-[0-9{4}"
                                    placeholder="Telefono"
                                    className="input-field"
                                    value={this.state.homePhone}

                                    onChange={e => this.change(e)} />
                            </td>
                        </tr>

                        <tr className="table-row gray">
                            <th>Cellphone number:</th>
                            <td>
                                <input
                                    type='tel'
                                    name="cellPhone"
                                    pattern="[0-9]{3}-[0-9]{3}-[0-9{4}"
                                    placeholder="Cellular"
                                    className="input-field"
                                    value={this.state.cellPhone}
                                    onChange={e => this.change(e)} />
                            </td>
                        </tr>

                        <tr className="table-row">
                            <th>Email:</th>
                            <td>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Correo Electronico"
                                    value={this.state.email}

                                    className="input-field"
                                    onChange={e => this.change(e)} />
                            </td>
                        </tr>

                        <tr className="table-row gray">
                            <th>Employer:</th>
                            <td>
                                <input
                                    type="text"
                                    name="employer"
                                    placeholder="Empleador"
                                    value={this.state.employer}
                                    className="input-field"
                                    onChange={e => this.change(e)} />
                            </td>
                        </tr>

                        <tr className="table-row">
                            <th>Employer Phone number:</th>
                            <td>
                                <input
                                    type='tel'
                                    name="employerPhone"
                                    pattern="[0-9]{3}-[0-9]{3}-[0-9{4}"
                                    placeholder="Telefono del Empleador"
                                    className="input-field"
                                    value={this.state.employerPhone}
                                    onChange={e => this.change(e)} />
                            </td>
                        </tr>

                        <tr className="table-row gray">
                            <th>Have you previously consulted a lawyer?<br />Ha consultado anteriormente algun abogado?</th>
                            <td>
                                <select name="previousLawyer" value={this.state.previousLawyer} onChange={e => this.change(e)} className="form-control">
                                    <option value="No">No</option>
                                    <option value="Yes">Yes</option>
                                </select>
                            </td>
                        </tr>

                        <tr className="table-row">
                            <th>Who?</th>
                            <td>
                                <input
                                    type="text"
                                    name="previousLawyerName"
                                    className="input-field"
                                    placeholder="Quien?"
                                    value={this.previousLawyerName}
                                    onChange={e => this.change(e)} />
                            </td>
                        </tr>

                        <tr className="table-row gray">
                            <th className="center">Family Information / Informacion de la Familia</th>
                        </tr>

                        <tr className="table-row">
                            <th>Spouse Name:</th>
                            <td>
                                <input
                                    type="text"
                                    name="spouseName"
                                    className="input-field"
                                    placeholder="Nombre del Esposo(a)"
                                    value={this.state.spouseName}
                                    onChange={e => this.change(e)} />
                            </td>
                        </tr>

                        <PlaceOfBirth place={this.handlePlaceOfBirthSpouse} />

                        <tr className="table-row ">
                            <th>Date of Birth:</th>
                            <td>
                                <input
                                    type="date"
                                    name="dateOfBirthSpouse"
                                    className="input-field"
                                    value={this.state.dateOfBirthSpouse}
                                    placeholder="Fecha de Nacimiento"
                                    onChange={e => this.change(e)} />
                            </td>
                        </tr>

                        <tr className="table-row gray">
                            <th>Legal Status:</th>
                            <td>
                                <input
                                    type="text"
                                    name="legalStatus"
                                    className="input-field"
                                    value={this.state.legalStatus}
                                    placeholder="Estado Migratorio"
                                    onChange={e => this.change(e)} />
                            </td>
                        </tr>

                        <tr className="table-row">
                            <th>Date of Marriage:</th>
                            <td>
                                <input
                                    type="date"
                                    name="dateOfMarriage"
                                    className="input-field"
                                    value={this.state.dateOfMarriage}
                                    placeholder="Fecha de Matrimonio"
                                    onChange={e => this.change(e)} />
                            </td>
                        </tr>

                        <tr className="table-row gray">
                            <th>Place of Marriage:</th>
                            <td>
                                <input
                                    type="text"
                                    name="placeOfMarriage"
                                    className="input-field"
                                    value={this.state.placeOfMarriage}
                                    placeholder="Lugar de Matrimonio"
                                    onChange={e => this.change(e)} />
                            </td>
                        </tr>
                        <tr>
                            <th>Children:</th>
                        </tr>
                        <tr>
                            <NewChildren add={this.handleAddChildrenTask} />
                        </tr>

                        <tr>
                            <ChildrenList child={this.state.childrenList} />
                        </tr>

                        <tr className="table-row gray">
                            <th>Has someone made a petition for you? <br /> Alguien ha hecho una peticion por usted?:</th>
                            <td>
                                <select name="previousPetition" value={this.state.previousPetition} onChange={e => this.change(e)} className="form-control">
                                    <option value="No">No</option>
                                    <option value="Yes">Yes</option>
                                </select>
                            </td>
                        </tr>

                        <tr className="table-row">
                            <th>Who?</th>
                            <td>
                                <input
                                    type="text"
                                    name="previousPetitioner"
                                    className="input-field"
                                    value={this.state.previousPetitioner}
                                    placeholder="Quien?"
                                    onChange={e => this.change(e)} />
                            </td>
                        </tr>

                        <tr className="table-row gray">
                            <th>Date/Fecha:</th>
                            <td>
                                <input
                                    type="date"
                                    name="previousPetitionDate"
                                    className="input-field"
                                    value={this.state.previousPetitionDate}
                                    onChange={e => this.change(e)} />
                            </td>
                        </tr>

                        <tr className="table-row">
                            <th>Place:</th>
                            <td>
                                <input
                                    type="text"
                                    name="previousPetitionLocation"
                                    className="input-field"
                                    value={this.state.previousPetitionLocation}
                                    placeholder="Lugar"
                                    onChange={e => this.change(e)} />
                            </td>
                        </tr>

                        <tr className="table-row gray">
                            <th>Final Disposition:</th>
                            <td>
                                <input
                                    type="text"
                                    name="finalDisposition"
                                    className="input-field"
                                    value={this.state.finalDisposition}
                                    placeholder="Resultado Final"
                                    onChange={e => this.change(e)} />
                            </td>
                        </tr>

                        <tr className="table-row">
                            <th className="center">Additional Information / Informacion Adicional</th>
                        </tr>

                        <tr className="table-row gray">
                            <th>Dates of Entries to the US/Fechas de entradas a EU:</th>
                        </tr>

                        <tr className="table-row gray">
                            <DateOfEntry date={this.handleDateOfEntry} />
                        </tr>

                        <tr className="table-row gray">
                            <EntryList dates={this.state.datesOfEntry} />
                        </tr>

                        <tr className="table-row">
                            <th>Describe your Entry:</th>
                            <td>
                                <textarea
                                    type="text"
                                    name="entryDescription"
                                    className="textarea-field"
                                    value={this.state.entryDescription}
                                    placeholder="Describa su entrada..."
                                    onChange={e => this.change(e)} />
                            </td>
                        </tr>

                        <tr className="table-row gray">
                            <th>Type of Visa:</th>
                            <td>
                                <input
                                    type="text"
                                    name="typeOfVisa"
                                    className="input-field"
                                    value={this.state.typeOfVisa}
                                    placeholder="Tipo de Visa"
                                    onChange={e => this.change(e)} />
                            </td>
                        </tr>

                        <tr className="table-row">
                            <th>Have you ever been Deported?/Alguna vez ha sido deportado?:</th>
                            <td>
                                <select name="deported" className="input-field" value={this.state.typeOfVisa} onChange={e => this.change(e)}>
                                    <option value="No">No</option>
                                    <option value="Yes">Yes</option>
                                </select>
                            </td>
                        </tr>

                        <tr className="table-row gray">
                            <th>Have you ever had contact with an immigration officer?/Alguna vez ha tenido contacto con un oficial de Inmigracion?:</th>
                            <td>
                                <select name="officerContact" className="input-field" value={this.state.officerContact} onChange={e => this.change(e)}>
                                    <option value="No">No</option>
                                    <option value="Yes">Yes</option>
                                </select>
                            </td>
                        </tr>

                        <tr className="table-row">
                            <th>Date, Place and Reason/Si respondio que si, favor proveer fecha, lugar y motivo:</th>
                        </tr>

                        <tr className="table-row gray">
                            <td>
                                <input
                                    type="date"
                                    name="officerContactDate"
                                    className="input-field"
                                    value={this.state.officerContactDate}
                                    onChange={e => this.change(e)} />
                            </td>

                            <td>
                                <input
                                    type="text"
                                    name="officerContactPlace"
                                    className="input-field"
                                    value={this.state.officerContactPlace}
                                    placeholder="place/lugar"
                                    onChange={e => this.change(e)} />
                            </td>

                            <td>
                                <textarea
                                    type="text"
                                    name="officerContactMotives"
                                    className="textarea-field"
                                    value={this.state.officerContactMotives}
                                    placeholder="Motives/Motivos"
                                    onChange={e => this.change(e)} />
                            </td>
                        </tr>

                        <tr className="table-row">
                            <th>Have you seen an Immigration Judge?/Alguna vez ha comparecido frente a un juez de Inmigracion?:</th>
                            <td>
                                <select name="judgeContact" className="input-field" value={this.state.judgeContact} onChange={e => this.change(e)}>
                                    <option value="No">No</option>
                                    <option value="Yes">Yes</option>
                                </select>
                            </td>
                        </tr>

                        <tr className="table-row gray">
                            <th>If you answered Yes, please state date, place and reason/Si respondio que si, favor proveer fecha, lugar y motivos:</th>
                        </tr>

                        <tr className="table-row gray">
                            <td>
                                <input
                                    type="date"
                                    name="judgeContactDate"
                                    className="input-field"
                                    value={this.state.judgeContactDate}
                                    onChange={e => this.change(e)} />
                            </td>

                            <td>
                                <input
                                    type="text"
                                    name="judgeContactPlace"
                                    className="input-field"
                                    value={this.state.judgeContactPlace}
                                    placeholder="place/lugar"
                                    onChange={e => this.change(e)} />
                            </td>

                            <td>
                                <textarea
                                    type="text"
                                    name="judgeContactMotives"
                                    className="textarea-field"
                                    value={this.state.judgeContactMotives}
                                    placeholder="Motives/Motivos"
                                    onChange={e => this.change(e)} />
                            </td>
                        </tr>

                        <tr className="table-row">
                            <th>Have you ever been a Victim of a Crime in the US?/Ha sido Victima de un Crimen en EU?</th>
                            <td>
                                <select name="crimeVictim" className="input-field" value={this.state.crimeVictim} onChange={e => this.change(e)}>
                                    <option value="No">No</option>
                                    <option value="Yes">Yes</option>
                                </select>
                            </td>
                        </tr>

                        <tr className="table-row gray">
                            <th>Criminal History/Historial Criminal</th>
                        </tr>

                        <tr className="table-row">
                            <th>Have you ever had problems with the police?/Ha tenido problemas con la policia?</th>
                            <td>
                                <select name="policeProblems" className="input-field" value={this.state.policeProblems} onChange={e => this.change(e)}>
                                    <option value="No">No</option>
                                    <option value="Yes">Yes</option>
                                </select>
                            </td>
                        </tr>

                        <tr className="table-row gray">
                            <th>Reasons:</th>
                            <td>
                                <textarea
                                    type="text"
                                    name="policeProblemsReasons"
                                    className="textarea-field"
                                    value={this.state.policeProblemsReasons}
                                    placeholder="Motivos"
                                    onChange={e => this.change(e)} />
                            </td>
                        </tr>

                        <tr className="table-row">
                            <th>Have you ever been arrested?/Ha sido arrestado?:</th>
                            <td>
                                <select name="arrested" className="input-field" value={this.state.arrested} onChange={e => this.change(e)}>
                                    <option value="No">No</option>
                                    <option value="Yes">Yes</option>
                                </select>
                            </td>
                        </tr>

                        <tr className="table-row gray">
                            <th>Place:</th>
                            <td>
                                <input
                                    type="text"
                                    name="arrestedPlace"
                                    className="input-field"
                                    value={this.state.arrestedPlace}
                                    placeholder="Lugar"
                                    onChange={e => this.change(e)} />
                            </td>

                            <th>Date:</th>

                            <td>
                                <input
                                    type="date"
                                    name="arrestedDate"
                                    className="input-field"
                                    value={this.state.arrestedDate}
                                    onChange={e => this.change(e)} />
                            </td>
                        </tr>

                        <tr className="table-row">
                            <th>Final disposition</th>
                            <td>
                                <textarea
                                    type="text"
                                    name="policeFinalDisp"
                                    className="textarea-field"
                                    value={this.state.policeFinalDisp}
                                    placeholder="Resultado Final"
                                    onChange={e => this.change(e)} />
                            </td>
                        </tr>

                        <tr className="table-row gray">
                            <th>Admissibility Questions/Preguntas de Admisibilidad</th>
                        </tr>

                        <tr className="table-row">
                            <th>Smuggling family?/Trajo familiares ilegalmente a EU?</th>
                            <td>
                                <select name="smuggling" className="input-field" value={this.state.smuggling} onChange={e => this.change(e)}>
                                    <option value="No">No</option>
                                    <option value="Yes">Yes</option>
                                </select>
                            </td>
                        </tr>

                        <tr className="table-row gray">
                            <th>Tattoos?/Tatuajes?</th>
                            <td>
                                <select name="tattoos" className="input-field" value={this.state.tattoos} onChange={e => this.change(e)}>
                                    <option value="No">No</option>
                                    <option value="Yes">Yes</option>
                                </select>
                            </td>

                            <td>
                                <textarea
                                    type="text"
                                    name="tattoosDescription"
                                    className="textarea-field"
                                    value={this.state.tattoosDescription}
                                    placeholder="Describa"
                                    onChange={e => this.change(e)} />
                            </td>
                        </tr>

                        <tr className="table-row">
                            <th>Have you lied to obtain entry/visa? / Ha mentido para obtener entrada/visa?</th>
                            <td>
                                <select name="liedToEntry" className="input-field" value={this.state.liedToEntry} onChange={e => this.change(e)}>
                                    <option value="No">No</option>
                                    <option value="Yes">Yes</option>
                                </select>
                            </td>
                        </tr>

                        <tr className="table-row gray">
                            <th>Have you claimed to be a US citizen? / Se ha hecho pasar por ciudadano?</th>
                            <td>
                                <select name="liedToBeCitizen" className="input-field" value={this.state.liedToBeCitizen} onChange={e => this.change(e)}>
                                    <option value="No">No</option>
                                    <option value="Yes">Yes</option>
                                </select>
                            </td>
                        </tr>

                        <tr className="table-row">
                            <th>Have you used any other names?/Ha usado algun otro nombre?</th>
                            <td>
                                <select name="otherNames" className="input-field" value={this.state.otherNames} onChange={e => this.change(e)}>
                                    <option value="No">No</option>
                                    <option value="Yes">Yes</option>
                                </select>
                            </td>
                        </tr>

                        <tr className="table-row gray">
                            <th>Reason for your visit</th>
                            <td>
                                <textarea
                                    type="text"
                                    name="visitReason"
                                    className="textarea-field"
                                    value={this.state.visitReason}
                                    placeholder="Razon de su Visita"
                                    onChange={e => this.change(e)} />
                            </td>
                        </tr>
                    </tbody>
                </table>

                <button type="submit" className="submit-button" onClick={(e) => this.onSubmit(e)}>Submit</button>

            </form>
        )
    }
}

export default IntakeSheet;