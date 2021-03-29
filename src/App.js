import React, {useState, useEffect, Component} from 'react'
import Userlist from './components/Userlist'

const usersLink = 'https://jsonplaceholder.typicode.com/users'
const todosLink = 'https://jsonplaceholder.typicode.com/todos'
const photosLink = 'https://jsonplaceholder.typicode.com/photos'

const [...url] = [
'https://jsonplaceholder.typicode.com/users', 
'https://jsonplaceholder.typicode.com/users', 
'https://jsonplaceholder.typicode.com/photos',
'jsonplaceholder.typicode.com/albums',
'https://jsonplaceholder.typicode.com/comments',
'https://jsonplaceholder.typicode.com/posts'
]

function App() {


const [state, setstate] = useState()

  const fetchLinks = async () => {
    const response = await fetch(url[0])
    const data = await response.json()
    return data
    console.log(data);
  }

useEffect(()=>{
fetchLinks()
}, [])

  return (
    <div className='App'>
          <div>
                  {data.map(value => <Userlist/>)}    
          </div>
    </div>
    
  )}

  export default App

 