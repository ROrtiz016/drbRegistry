import React from "react";
import ChildrenSection from './ChildrenSection'

export default function ChildrenList(props) {

    let list = props.child.map((element, index) => {
        return (
            <ChildrenSection key={index} child={element} />
        )
    })
    return (
        <td>
            <ol>
                {list}
            </ol>
        </td>
    )
}