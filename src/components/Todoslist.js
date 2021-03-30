import React from 'react'


export default function Todolist({todo:{id,title}}) {
    return (
        <div>
            <div>
                {`Id: ${id}`}
                <br/>
                {`title: ${title}`}
                <br/>
                <br/>
            </div>
        </div>
    )
}
