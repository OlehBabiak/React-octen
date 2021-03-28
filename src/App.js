import React, {useState, Component} from 'react'
import Items from './components/Items'

function App() {

const [todoes, setitems] = useState(
  {id:1, content:'Item1'},
  {id:2, content:'Item2'},
  {id:3, content:'Item3'},
  {id:4, content:'Item4'},
  {id:5, content:'Item5'},
  {id:6, content:'Item6'},
  {id:7, content:'Item7'},
  {id:8, content:'Item8'},
  {id:9, content:'Item9'},
)

const deletFirstItem = () => {
  const newArr = [...todoes]
  newArr.pop()
  setitems(newArr)
}

  return (
    <div className='App'>
        <div>
         <ul>
            {todoes.map(todo => <Items props={todo}/>)}
           
         </ul>
         </div>
          <div>
            <button onClick={deletFirstItem}></button>
          </div>
    </div>
    
  )


}

export default App