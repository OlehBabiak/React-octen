import React, {useState, Component} from 'react'


export default function Todolist({props}) {
    return (
        <div>
            <div>
                {'Id: '}{props.id}
                <br/>
                {'title: '}{props.title}
                <br/>
                <br/>
            </div>
        </div>
    )
}