import React from 'react'

export default function Items({props}) {
    return (
        <div>
            <li>
                {props.id} - {props.description}
            </li>
        </div>
    )
}
