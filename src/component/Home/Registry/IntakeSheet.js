import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './IntakeSheet.css'
import ChildrenList from "./ChildrenList"
import NewChildren from './NewChildren'

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
            placeOfBirth: "United States",
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
            childId: 0
        }

        this.change = this.change.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.handleAddChildrenTask = this.handleAddChildrenTask.bind(this)
    }

    handleAddChildrenTask(childName, childDateofBirth) {
        this.setState({ childrenList: [...this.state.childrenList, {name: childName, dateOfBirth: childDateofBirth}] });
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

                        <tr className="table-row gray">
                            <th>Place of Birth:</th>
                            <td>
                                <select id="country" name="placeOfBirth" value={this.state.placeOfBirth} onChange={e => this.change(e)} className="form-control" >
                                    <option value="United States">United States</option>
                                    <option value="Afghanistan">Afghanistan</option>
                                    <option value="Åland Islands">Åland Islands</option>
                                    <option value="Albania">Albania</option>
                                    <option value="Algeria">Algeria</option>
                                    <option value="American Samoa">American Samoa</option>
                                    <option value="Andorra">Andorra</option>
                                    <option value="Angola">Angola</option>
                                    <option value="Anguilla">Anguilla</option>
                                    <option value="Antarctica">Antarctica</option>
                                    <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                    <option value="Argentina">Argentina</option>
                                    <option value="Armenia">Armenia</option>
                                    <option value="Aruba">Aruba</option>
                                    <option value="Australia">Australia</option>
                                    <option value="Austria">Austria</option>
                                    <option value="Azerbaijan">Azerbaijan</option>
                                    <option value="Bahamas">Bahamas</option>
                                    <option value="Bahrain">Bahrain</option>
                                    <option value="Bangladesh">Bangladesh</option>
                                    <option value="Barbados">Barbados</option>
                                    <option value="Belarus">Belarus</option>
                                    <option value="Belgium">Belgium</option>
                                    <option value="Belize">Belize</option>
                                    <option value="Benin">Benin</option>
                                    <option value="Bermuda">Bermuda</option>
                                    <option value="Bhutan">Bhutan</option>
                                    <option value="Bolivia">Bolivia</option>
                                    <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                    <option value="Botswana">Botswana</option>
                                    <option value="Bouvet Island">Bouvet Island</option>
                                    <option value="Brazil">Brazil</option>
                                    <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                    <option value="Brunei Darussalam">Brunei Darussalam</option>
                                    <option value="Bulgaria">Bulgaria</option>
                                    <option value="Burkina Faso">Burkina Faso</option>
                                    <option value="Burundi">Burundi</option>
                                    <option value="Cambodia">Cambodia</option>
                                    <option value="Cameroon">Cameroon</option>
                                    <option value="Canada">Canada</option>
                                    <option value="Cape Verde">Cape Verde</option>
                                    <option value="Cayman Islands">Cayman Islands</option>
                                    <option value="Central African Republic">Central African Republic</option>
                                    <option value="Chad">Chad</option>
                                    <option value="Chile">Chile</option>
                                    <option value="China">China</option>
                                    <option value="Christmas Island">Christmas Island</option>
                                    <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                                    <option value="Colombia">Colombia</option>
                                    <option value="Comoros">Comoros</option>
                                    <option value="Congo">Congo</option>
                                    <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
                                    <option value="Cook Islands">Cook Islands</option>
                                    <option value="Costa Rica">Costa Rica</option>
                                    <option value="Cote D'ivoire">Cote D'ivoire</option>
                                    <option value="Croatia">Croatia</option>
                                    <option value="Cuba">Cuba</option>
                                    <option value="Cyprus">Cyprus</option>
                                    <option value="Czech Republic">Czech Republic</option>
                                    <option value="Denmark">Denmark</option>
                                    <option value="Djibouti">Djibouti</option>
                                    <option value="Dominica">Dominica</option>
                                    <option value="Dominican Republic">Dominican Republic</option>
                                    <option value="Ecuador">Ecuador</option>
                                    <option value="Egypt">Egypt</option>
                                    <option value="El Salvador">El Salvador</option>
                                    <option value="Equatorial Guinea">Equatorial Guinea</option>
                                    <option value="Eritrea">Eritrea</option>
                                    <option value="Estonia">Estonia</option>
                                    <option value="Ethiopia">Ethiopia</option>
                                    <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                                    <option value="Faroe Islands">Faroe Islands</option>
                                    <option value="Fiji">Fiji</option>
                                    <option value="Finland">Finland</option>
                                    <option value="France">France</option>
                                    <option value="French Guiana">French Guiana</option>
                                    <option value="French Polynesia">French Polynesia</option>
                                    <option value="French Southern Territories">French Southern Territories</option>
                                    <option value="Gabon">Gabon</option>
                                    <option value="Gambia">Gambia</option>
                                    <option value="Georgia">Georgia</option>
                                    <option value="Germany">Germany</option>
                                    <option value="Ghana">Ghana</option>
                                    <option value="Gibraltar">Gibraltar</option>
                                    <option value="Greece">Greece</option>
                                    <option value="Greenland">Greenland</option>
                                    <option value="Grenada">Grenada</option>
                                    <option value="Guadeloupe">Guadeloupe</option>
                                    <option value="Guam">Guam</option>
                                    <option value="Guatemala">Guatemala</option>
                                    <option value="Guernsey">Guernsey</option>
                                    <option value="Guinea">Guinea</option>
                                    <option value="Guinea-bissau">Guinea-bissau</option>
                                    <option value="Guyana">Guyana</option>
                                    <option value="Haiti">Haiti</option>
                                    <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
                                    <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                                    <option value="Honduras">Honduras</option>
                                    <option value="Hong Kong">Hong Kong</option>
                                    <option value="Hungary">Hungary</option>
                                    <option value="Iceland">Iceland</option>
                                    <option value="India">India</option>
                                    <option value="Indonesia">Indonesia</option>
                                    <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                                    <option value="Iraq">Iraq</option>
                                    <option value="Ireland">Ireland</option>
                                    <option value="Isle of Man">Isle of Man</option>
                                    <option value="Israel">Israel</option>
                                    <option value="Italy">Italy</option>
                                    <option value="Jamaica">Jamaica</option>
                                    <option value="Japan">Japan</option>
                                    <option value="Jersey">Jersey</option>
                                    <option value="Jordan">Jordan</option>
                                    <option value="Kazakhstan">Kazakhstan</option>
                                    <option value="Kenya">Kenya</option>
                                    <option value="Kiribati">Kiribati</option>
                                    <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
                                    <option value="Korea, Republic of">Korea, Republic of</option>
                                    <option value="Kuwait">Kuwait</option>
                                    <option value="Kyrgyzstan">Kyrgyzstan</option>
                                    <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                                    <option value="Latvia">Latvia</option>
                                    <option value="Lebanon">Lebanon</option>
                                    <option value="Lesotho">Lesotho</option>
                                    <option value="Liberia">Liberia</option>
                                    <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                                    <option value="Liechtenstein">Liechtenstein</option>
                                    <option value="Lithuania">Lithuania</option>
                                    <option value="Luxembourg">Luxembourg</option>
                                    <option value="Macao">Macao</option>
                                    <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
                                    <option value="Madagascar">Madagascar</option>
                                    <option value="Malawi">Malawi</option>
                                    <option value="Malaysia">Malaysia</option>
                                    <option value="Maldives">Maldives</option>
                                    <option value="Mali">Mali</option>
                                    <option value="Malta">Malta</option>
                                    <option value="Marshall Islands">Marshall Islands</option>
                                    <option value="Martinique">Martinique</option>
                                    <option value="Mauritania">Mauritania</option>
                                    <option value="Mauritius">Mauritius</option>
                                    <option value="Mayotte">Mayotte</option>
                                    <option value="Mexico">Mexico</option>
                                    <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                                    <option value="Moldova, Republic of">Moldova, Republic of</option>
                                    <option value="Monaco">Monaco</option>
                                    <option value="Mongolia">Mongolia</option>
                                    <option value="Montenegro">Montenegro</option>
                                    <option value="Montserrat">Montserrat</option>
                                    <option value="Morocco">Morocco</option>
                                    <option value="Mozambique">Mozambique</option>
                                    <option value="Myanmar">Myanmar</option>
                                    <option value="Namibia">Namibia</option>
                                    <option value="Nauru">Nauru</option>
                                    <option value="Nepal">Nepal</option>
                                    <option value="Netherlands">Netherlands</option>
                                    <option value="Netherlands Antilles">Netherlands Antilles</option>
                                    <option value="New Caledonia">New Caledonia</option>
                                    <option value="New Zealand">New Zealand</option>
                                    <option value="Nicaragua">Nicaragua</option>
                                    <option value="Niger">Niger</option>
                                    <option value="Nigeria">Nigeria</option>
                                    <option value="Niue">Niue</option>
                                    <option value="Norfolk Island">Norfolk Island</option>
                                    <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                                    <option value="Norway">Norway</option>
                                    <option value="Oman">Oman</option>
                                    <option value="Pakistan">Pakistan</option>
                                    <option value="Palau">Palau</option>
                                    <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
                                    <option value="Panama">Panama</option>
                                    <option value="Papua New Guinea">Papua New Guinea</option>
                                    <option value="Paraguay">Paraguay</option>
                                    <option value="Peru">Peru</option>
                                    <option value="Philippines">Philippines</option>
                                    <option value="Pitcairn">Pitcairn</option>
                                    <option value="Poland">Poland</option>
                                    <option value="Portugal">Portugal</option>
                                    <option value="Puerto Rico">Puerto Rico</option>
                                    <option value="Qatar">Qatar</option>
                                    <option value="Reunion">Reunion</option>
                                    <option value="Romania">Romania</option>
                                    <option value="Russian Federation">Russian Federation</option>
                                    <option value="Rwanda">Rwanda</option>
                                    <option value="Saint Helena">Saint Helena</option>
                                    <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                    <option value="Saint Lucia">Saint Lucia</option>
                                    <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                                    <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
                                    <option value="Samoa">Samoa</option>
                                    <option value="San Marino">San Marino</option>
                                    <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                                    <option value="Saudi Arabia">Saudi Arabia</option>
                                    <option value="Senegal">Senegal</option>
                                    <option value="Serbia">Serbia</option>
                                    <option value="Seychelles">Seychelles</option>
                                    <option value="Sierra Leone">Sierra Leone</option>
                                    <option value="Singapore">Singapore</option>
                                    <option value="Slovakia">Slovakia</option>
                                    <option value="Slovenia">Slovenia</option>
                                    <option value="Solomon Islands">Solomon Islands</option>
                                    <option value="Somalia">Somalia</option>
                                    <option value="South Africa">South Africa</option>
                                    <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
                                    <option value="Spain">Spain</option>
                                    <option value="Sri Lanka">Sri Lanka</option>
                                    <option value="Sudan">Sudan</option>
                                    <option value="Suriname">Suriname</option>
                                    <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                                    <option value="Swaziland">Swaziland</option>
                                    <option value="Sweden">Sweden</option>
                                    <option value="Switzerland">Switzerland</option>
                                    <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                                    <option value="Taiwan, Province of China">Taiwan, Province of China</option>
                                    <option value="Tajikistan">Tajikistan</option>
                                    <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                                    <option value="Thailand">Thailand</option>
                                    <option value="Timor-leste">Timor-leste</option>
                                    <option value="Togo">Togo</option>
                                    <option value="Tokelau">Tokelau</option>
                                    <option value="Tonga">Tonga</option>
                                    <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                                    <option value="Tunisia">Tunisia</option>
                                    <option value="Turkey">Turkey</option>
                                    <option value="Turkmenistan">Turkmenistan</option>
                                    <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                                    <option value="Tuvalu">Tuvalu</option>
                                    <option value="Uganda">Uganda</option>
                                    <option value="Ukraine">Ukraine</option>
                                    <option value="United Arab Emirates">United Arab Emirates</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                    <option value="United States">United States</option>
                                    <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                                    <option value="Uruguay">Uruguay</option>
                                    <option value="Uzbekistan">Uzbekistan</option>
                                    <option value="Vanuatu">Vanuatu</option>
                                    <option value="Venezuela">Venezuela</option>
                                    <option value="Viet Nam">Viet Nam</option>
                                    <option value="Virgin Islands, British">Virgin Islands, British</option>
                                    <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                                    <option value="Wallis and Futuna">Wallis and Futuna</option>
                                    <option value="Western Sahara">Western Sahara</option>
                                    <option value="Yemen">Yemen</option>
                                    <option value="Zambia">Zambia</option>
                                    <option value="Zimbabwe">Zimbabwe</option>
                                </select>
                            </td>
                        </tr>

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
                            <th>Family Information / Informacion de la Familia</th>
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

                        <tr className="table-row gray">
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

                        <tr className="table-row">
                            <th>Place of Birth: </th>
                            <td>
                                <select id="country" name="placeOfBirthSpouse" value={this.state.placeOfBirthSpouse} onChange={e => this.change(e)} className="form-control">
                                    <option value="United States">United States</option>
                                    <option value="Afghanistan">Afghanistan</option>
                                    <option value="Åland Islands">Åland Islands</option>
                                    <option value="Albania">Albania</option>
                                    <option value="Algeria">Algeria</option>
                                    <option value="American Samoa">American Samoa</option>
                                    <option value="Andorra">Andorra</option>
                                    <option value="Angola">Angola</option>
                                    <option value="Anguilla">Anguilla</option>
                                    <option value="Antarctica">Antarctica</option>
                                    <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                    <option value="Argentina">Argentina</option>
                                    <option value="Armenia">Armenia</option>
                                    <option value="Aruba">Aruba</option>
                                    <option value="Australia">Australia</option>
                                    <option value="Austria">Austria</option>
                                    <option value="Azerbaijan">Azerbaijan</option>
                                    <option value="Bahamas">Bahamas</option>
                                    <option value="Bahrain">Bahrain</option>
                                    <option value="Bangladesh">Bangladesh</option>
                                    <option value="Barbados">Barbados</option>
                                    <option value="Belarus">Belarus</option>
                                    <option value="Belgium">Belgium</option>
                                    <option value="Belize">Belize</option>
                                    <option value="Benin">Benin</option>
                                    <option value="Bermuda">Bermuda</option>
                                    <option value="Bhutan">Bhutan</option>
                                    <option value="Bolivia">Bolivia</option>
                                    <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                    <option value="Botswana">Botswana</option>
                                    <option value="Bouvet Island">Bouvet Island</option>
                                    <option value="Brazil">Brazil</option>
                                    <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                    <option value="Brunei Darussalam">Brunei Darussalam</option>
                                    <option value="Bulgaria">Bulgaria</option>
                                    <option value="Burkina Faso">Burkina Faso</option>
                                    <option value="Burundi">Burundi</option>
                                    <option value="Cambodia">Cambodia</option>
                                    <option value="Cameroon">Cameroon</option>
                                    <option value="Canada">Canada</option>
                                    <option value="Cape Verde">Cape Verde</option>
                                    <option value="Cayman Islands">Cayman Islands</option>
                                    <option value="Central African Republic">Central African Republic</option>
                                    <option value="Chad">Chad</option>
                                    <option value="Chile">Chile</option>
                                    <option value="China">China</option>
                                    <option value="Christmas Island">Christmas Island</option>
                                    <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                                    <option value="Colombia">Colombia</option>
                                    <option value="Comoros">Comoros</option>
                                    <option value="Congo">Congo</option>
                                    <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
                                    <option value="Cook Islands">Cook Islands</option>
                                    <option value="Costa Rica">Costa Rica</option>
                                    <option value="Cote D'ivoire">Cote D'ivoire</option>
                                    <option value="Croatia">Croatia</option>
                                    <option value="Cuba">Cuba</option>
                                    <option value="Cyprus">Cyprus</option>
                                    <option value="Czech Republic">Czech Republic</option>
                                    <option value="Denmark">Denmark</option>
                                    <option value="Djibouti">Djibouti</option>
                                    <option value="Dominica">Dominica</option>
                                    <option value="Dominican Republic">Dominican Republic</option>
                                    <option value="Ecuador">Ecuador</option>
                                    <option value="Egypt">Egypt</option>
                                    <option value="El Salvador">El Salvador</option>
                                    <option value="Equatorial Guinea">Equatorial Guinea</option>
                                    <option value="Eritrea">Eritrea</option>
                                    <option value="Estonia">Estonia</option>
                                    <option value="Ethiopia">Ethiopia</option>
                                    <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                                    <option value="Faroe Islands">Faroe Islands</option>
                                    <option value="Fiji">Fiji</option>
                                    <option value="Finland">Finland</option>
                                    <option value="France">France</option>
                                    <option value="French Guiana">French Guiana</option>
                                    <option value="French Polynesia">French Polynesia</option>
                                    <option value="French Southern Territories">French Southern Territories</option>
                                    <option value="Gabon">Gabon</option>
                                    <option value="Gambia">Gambia</option>
                                    <option value="Georgia">Georgia</option>
                                    <option value="Germany">Germany</option>
                                    <option value="Ghana">Ghana</option>
                                    <option value="Gibraltar">Gibraltar</option>
                                    <option value="Greece">Greece</option>
                                    <option value="Greenland">Greenland</option>
                                    <option value="Grenada">Grenada</option>
                                    <option value="Guadeloupe">Guadeloupe</option>
                                    <option value="Guam">Guam</option>
                                    <option value="Guatemala">Guatemala</option>
                                    <option value="Guernsey">Guernsey</option>
                                    <option value="Guinea">Guinea</option>
                                    <option value="Guinea-bissau">Guinea-bissau</option>
                                    <option value="Guyana">Guyana</option>
                                    <option value="Haiti">Haiti</option>
                                    <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
                                    <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                                    <option value="Honduras">Honduras</option>
                                    <option value="Hong Kong">Hong Kong</option>
                                    <option value="Hungary">Hungary</option>
                                    <option value="Iceland">Iceland</option>
                                    <option value="India">India</option>
                                    <option value="Indonesia">Indonesia</option>
                                    <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                                    <option value="Iraq">Iraq</option>
                                    <option value="Ireland">Ireland</option>
                                    <option value="Isle of Man">Isle of Man</option>
                                    <option value="Israel">Israel</option>
                                    <option value="Italy">Italy</option>
                                    <option value="Jamaica">Jamaica</option>
                                    <option value="Japan">Japan</option>
                                    <option value="Jersey">Jersey</option>
                                    <option value="Jordan">Jordan</option>
                                    <option value="Kazakhstan">Kazakhstan</option>
                                    <option value="Kenya">Kenya</option>
                                    <option value="Kiribati">Kiribati</option>
                                    <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
                                    <option value="Korea, Republic of">Korea, Republic of</option>
                                    <option value="Kuwait">Kuwait</option>
                                    <option value="Kyrgyzstan">Kyrgyzstan</option>
                                    <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                                    <option value="Latvia">Latvia</option>
                                    <option value="Lebanon">Lebanon</option>
                                    <option value="Lesotho">Lesotho</option>
                                    <option value="Liberia">Liberia</option>
                                    <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                                    <option value="Liechtenstein">Liechtenstein</option>
                                    <option value="Lithuania">Lithuania</option>
                                    <option value="Luxembourg">Luxembourg</option>
                                    <option value="Macao">Macao</option>
                                    <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
                                    <option value="Madagascar">Madagascar</option>
                                    <option value="Malawi">Malawi</option>
                                    <option value="Malaysia">Malaysia</option>
                                    <option value="Maldives">Maldives</option>
                                    <option value="Mali">Mali</option>
                                    <option value="Malta">Malta</option>
                                    <option value="Marshall Islands">Marshall Islands</option>
                                    <option value="Martinique">Martinique</option>
                                    <option value="Mauritania">Mauritania</option>
                                    <option value="Mauritius">Mauritius</option>
                                    <option value="Mayotte">Mayotte</option>
                                    <option value="Mexico">Mexico</option>
                                    <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                                    <option value="Moldova, Republic of">Moldova, Republic of</option>
                                    <option value="Monaco">Monaco</option>
                                    <option value="Mongolia">Mongolia</option>
                                    <option value="Montenegro">Montenegro</option>
                                    <option value="Montserrat">Montserrat</option>
                                    <option value="Morocco">Morocco</option>
                                    <option value="Mozambique">Mozambique</option>
                                    <option value="Myanmar">Myanmar</option>
                                    <option value="Namibia">Namibia</option>
                                    <option value="Nauru">Nauru</option>
                                    <option value="Nepal">Nepal</option>
                                    <option value="Netherlands">Netherlands</option>
                                    <option value="Netherlands Antilles">Netherlands Antilles</option>
                                    <option value="New Caledonia">New Caledonia</option>
                                    <option value="New Zealand">New Zealand</option>
                                    <option value="Nicaragua">Nicaragua</option>
                                    <option value="Niger">Niger</option>
                                    <option value="Nigeria">Nigeria</option>
                                    <option value="Niue">Niue</option>
                                    <option value="Norfolk Island">Norfolk Island</option>
                                    <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                                    <option value="Norway">Norway</option>
                                    <option value="Oman">Oman</option>
                                    <option value="Pakistan">Pakistan</option>
                                    <option value="Palau">Palau</option>
                                    <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
                                    <option value="Panama">Panama</option>
                                    <option value="Papua New Guinea">Papua New Guinea</option>
                                    <option value="Paraguay">Paraguay</option>
                                    <option value="Peru">Peru</option>
                                    <option value="Philippines">Philippines</option>
                                    <option value="Pitcairn">Pitcairn</option>
                                    <option value="Poland">Poland</option>
                                    <option value="Portugal">Portugal</option>
                                    <option value="Puerto Rico">Puerto Rico</option>
                                    <option value="Qatar">Qatar</option>
                                    <option value="Reunion">Reunion</option>
                                    <option value="Romania">Romania</option>
                                    <option value="Russian Federation">Russian Federation</option>
                                    <option value="Rwanda">Rwanda</option>
                                    <option value="Saint Helena">Saint Helena</option>
                                    <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                    <option value="Saint Lucia">Saint Lucia</option>
                                    <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                                    <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
                                    <option value="Samoa">Samoa</option>
                                    <option value="San Marino">San Marino</option>
                                    <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                                    <option value="Saudi Arabia">Saudi Arabia</option>
                                    <option value="Senegal">Senegal</option>
                                    <option value="Serbia">Serbia</option>
                                    <option value="Seychelles">Seychelles</option>
                                    <option value="Sierra Leone">Sierra Leone</option>
                                    <option value="Singapore">Singapore</option>
                                    <option value="Slovakia">Slovakia</option>
                                    <option value="Slovenia">Slovenia</option>
                                    <option value="Solomon Islands">Solomon Islands</option>
                                    <option value="Somalia">Somalia</option>
                                    <option value="South Africa">South Africa</option>
                                    <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
                                    <option value="Spain">Spain</option>
                                    <option value="Sri Lanka">Sri Lanka</option>
                                    <option value="Sudan">Sudan</option>
                                    <option value="Suriname">Suriname</option>
                                    <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                                    <option value="Swaziland">Swaziland</option>
                                    <option value="Sweden">Sweden</option>
                                    <option value="Switzerland">Switzerland</option>
                                    <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                                    <option value="Taiwan, Province of China">Taiwan, Province of China</option>
                                    <option value="Tajikistan">Tajikistan</option>
                                    <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                                    <option value="Thailand">Thailand</option>
                                    <option value="Timor-leste">Timor-leste</option>
                                    <option value="Togo">Togo</option>
                                    <option value="Tokelau">Tokelau</option>
                                    <option value="Tonga">Tonga</option>
                                    <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                                    <option value="Tunisia">Tunisia</option>
                                    <option value="Turkey">Turkey</option>
                                    <option value="Turkmenistan">Turkmenistan</option>
                                    <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                                    <option value="Tuvalu">Tuvalu</option>
                                    <option value="Uganda">Uganda</option>
                                    <option value="Ukraine">Ukraine</option>
                                    <option value="United Arab Emirates">United Arab Emirates</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                    <option value="United States">United States</option>
                                    <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                                    <option value="Uruguay">Uruguay</option>
                                    <option value="Uzbekistan">Uzbekistan</option>
                                    <option value="Vanuatu">Vanuatu</option>
                                    <option value="Venezuela">Venezuela</option>
                                    <option value="Viet Nam">Viet Nam</option>
                                    <option value="Virgin Islands, British">Virgin Islands, British</option>
                                    <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                                    <option value="Wallis and Futuna">Wallis and Futuna</option>
                                    <option value="Western Sahara">Western Sahara</option>
                                    <option value="Yemen">Yemen</option>
                                    <option value="Zambia">Zambia</option>
                                    <option value="Zimbabwe">Zimbabwe</option>
                                </select>
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
                            <th>Additional Information / Informacion Adicional</th>
                        </tr>

                        <tr className="table-row gray">
                            <th>Dates of Entries to the US/Fechas de entradas a EU:</th>
                        </tr>
                        {/* NEED TO FIGURE OUT LOGIC FOR THIS SECTION */}
                        <tr className="table-row gray">
                            <td>
                                <ol>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ol>
                            </td>
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