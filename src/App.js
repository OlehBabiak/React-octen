import React, {useState, useEffect, Component} from 'react'
import Userslist from './components/Userslist'
import Todolist from './components/Todoslist'


const usersLink = 'https://jsonplaceholder.typicode.com/'


// const [...url] = [
// 'https://jsonplaceholder.typicode.com/users', 
// 'https://jsonplaceholder.typicode.com/todos',
// 'https://jsonplaceholder.typicode.com/photos',
// 'https://jsonplaceholder.typicode.com/albums',
// 'https://jsonplaceholder.typicode.com/comments',
// 'https://jsonplaceholder.typicode.com/posts'
// ]

function App() {


const [component, setcomponent] = useState([])

const [lastPartOfUrl, setLastPartOfUrl] = useState('users')

  const fetchLinks = async () => {
    const response = await fetch(`${usersLink}${lastPartOfUrl}`)
    const data = await response.json()
    setcomponent(data)
    console.log(data);
  }

useEffect(()=>{
fetchLinks()
return () => {
  setcomponent(null)
}
}, [lastPartOfUrl])



const changeOnUsers = () => {

}

const changeOnTodos = () => {
  setLastPartOfUrl(lastPartOfUrl = 'todos')
  
}

  return (
    <div className='App'>

      {!!component.length && (
        <div>
                  <button onClick={changeOnUsers}>Users</button>
                  <button onClick={changeOnTodos}>Todos</button>
                  {component.map(value => <Userslist props={value}/>)}  
                  {component.map(value => <Todolist props={value}/>)}  
          </div>
      )}
          
    </div>
    
  )}

  export default App

 