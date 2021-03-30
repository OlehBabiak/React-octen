import React,{useState,useEffect,useCallback} from 'react'
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

    const [component, setComponent] = useState([])
    const [flag, setFlag] = useState(false)
    const [lastPartOfUrl, setLastPartOfUrl] = useState('users')

    const fetchLinks = useCallback( () => {
        fetch(`${usersLink}${lastPartOfUrl}`)
            .then(res => res.json())
            .then(data => setComponent(data))
    },[lastPartOfUrl])

    useEffect(() => {
        fetchLinks()
    }, [lastPartOfUrl,fetchLinks])

    const changeOn = () => {
        setFlag(prevState => !prevState)
        const apiUrl = flag ? 'users' : 'todos'
        setLastPartOfUrl(apiUrl)
    }
    // ну вариков много как сделать покажу только один

    return (
        <div className='App'>

            {!!component.length && (
                <div>
                    <button onClick={changeOn}>Users</button>
                    <button onClick={changeOn}>Todos</button>
                    {
                        component.map(value => {
                            return flag
                                ? <Todolist key={value.id} todo={value}/>
                                : <Userslist key={value.id} user={value}/>
                        })}
                </div>
            )}
        </div>
    )
}

export default App

