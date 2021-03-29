import React, {useState, Component} from 'react'


export default function Users({props}) {
    return (
        <div>
           {'Id: '} {props.id}
           <br/>
           {'Name: '} {props.name}
           <br/>
           {'Surname: '} {props.phone}
           <br/>
           <br/>
           
        </div>
    )
}