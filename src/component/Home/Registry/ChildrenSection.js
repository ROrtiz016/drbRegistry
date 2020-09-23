import React from "react"
import './IntakeSheet.css'

export default function ChildrenSection(props) {
    return (
    <li>Name: {props.child.name}, Date of Birth: {props.child.dateOfBirth}</li>
            
    )
}