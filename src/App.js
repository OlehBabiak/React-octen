import React from 'react'
import Items from './components/Items'

export default function App() {

const [items, setstate] = useState([
  {id:1, description:'Item1'},
  {id:1, description:'Item1'},
  {id:1, description:'Item1'},
  {id:1, description:'Item1'},
  {id:1, description:'Item1'},
  {id:1, description:'Item1'},
  {id:1, description:'Item1'},
  {id:1, description:'Item1'},
  {id:1, description:'Item1'},
])

  return (
    <div>
      {items.pop(item => <Items props={item}/>)}
    </div>
  )
}
