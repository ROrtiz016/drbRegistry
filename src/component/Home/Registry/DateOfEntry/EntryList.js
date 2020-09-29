import React from "react";
import EntryDateSection from './EntryDateSection'

export default function EntryList(props) {

    let list = props.dates.map((element, index) => {
        return (
            <EntryDateSection key={index} dates={element}/>
        )
    })
    return (
        <td>
            <ul>
                {list}
            </ul>
        </td>
    )
}