import React, {useState, Component} from 'react'

export default function Items({props}) {
    return (
        <div>
            <li>
                {props.id} - {props.content}
            </li>
        </div>
    )
}
