import React from 'react'


export default function Users({user:{id,name,phone}}) {
    return (
        <div>
           {`Id: ${id}`}
           <br/>
           {`Name: ${name}`}
           <br/>
           {`Surname: ${phone}`}
           <br/>
           <br/>

        </div>
    )
}
