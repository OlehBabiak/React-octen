import React, {useState, Component} from 'react'
import Items from './components/Items'


//  1 відмалювати список карточок базуючись на якомусь створеному вами масиві створити окрему кнопку, яка буде видаляти поточний перший елемент
//  (або останній) якщо у нас масив з 3 елементів і ми клікнули на кнопку 3 рази, то на екрані жодна карточка не має відмалюватись
//  (кнопки повернення до початкового стану не треба)



// function App() {

// const [todoes, setitems] = useState([
//   {id:1, content:'Item1'},
//   {id:2, content:'Item2'},
//   {id:3, content:'Item3'},
//   {id:4, content:'Item4'},
//   {id:5, content:'Item5'},
//   {id:6, content:'Item6'},
//   {id:7, content:'Item7'},
//   {id:8, content:'Item8'},
//   {id:9, content:'Item9'},
// ])




// const deleteLastItem = () => {
//   const newArr = [...todoes]
//   newArr.pop()
//   setitems(newArr)
// }

// const deleteFirstItem = () => {
//   const newArr = [...todoes]
//   newArr.shift()
//   setitems(newArr)
// }

// const handlerArrItem = (deleteItem) => {
//  if (deleteItem !== 'first' && deleteItem !== 'last') return
// const newArr = [...todoes]
// deleteItem === 'first' && newArr.shift()
// deleteItem === 'last' && newArr.pop()
// setitems(newArr)
// }



//   return (
//     <div className='App'>
//         <div>
//          <ul>
//             {todoes.map(todo => <Items props={todo} key={todo.id}/>)}
           
//          </ul>
//          </div>
//           <div>
//             <button onClick={() => handlerArrItem('last')}>Delete last Item</button>
//             <button onClick={() => handlerArrItem('first')}>Delete first Item</button>
//           </div>
//     </div>
    
//   )


// }

// export default App

// 2 те саме, тільки з кнопкою реверт(повернутись до стану, де у нас видно 3 елемнети, як на початку)

// function App() {

// const [todoes, setitems] = useState([
//   {id:1, content:'Item1'},
//   {id:2, content:'Item2'},
//   {id:3, content:'Item3'},
//   {id:4, content:'Item4'},
//   {id:5, content:'Item5'},
//   {id:6, content:'Item6'},
//   {id:7, content:'Item7'},
//   {id:8, content:'Item8'},
//   {id:9, content:'Item9'},
// ])
// const [checkItemArr, setcheckItemArr] = useState([])

// const filteredArr = todoes.filter(el => !checkItemArr.includes(el.id)) //виводимо відфільтровані елементи які не містять id елемента з масиву checkItemArr

// const deleteItem = () => {
//   const itemeToDelete = filteredArr[0];  //елемент для видалення
//   if (!itemeToDelete) return
//   const clone = [...checkItemArr]  
//   clone.push(itemeToDelete.id)  //в клон пушимо id елемента для видалення
//   setcheckItemArr(clone) //змінюємо стан checkItemArr на clone, в якому тепер буде id видаленого елемента
//   // // setcheckItemArr([...checkItemArr, ItemeToDelete.id])
 
// }


// const revert = () => {
// setcheckItemArr([])
// } 



//   return (
//     <div className='App'>
//         <div>
//          <ul>
//             {filteredArr.map(todo => <Items props={todo} key={todo.id}/>)}
           
//          </ul>
//          </div>
//           <div>
//             <button onClick={deleteItem}>Delete last Item</button>
//             <button onClick={revert}>Revert</button>
          
//           </div>
//     </div>
    
//   )


// }

// export default App

// 3 задача з зірочкою) кожна карточка з завдання вище має мати кнопку, по кліку на яку, ми видаляємо зі списку саме її + реверт кнопка, 
//щоб вернути все назад(ця кнопка одна дня всіх карточок, клікнули по ній і всі каркти вернулись назазд)(згадування функції фільтр в лекції 
//було не просто так)


// function App() {

// const [todoes, setitems] = useState([
//   {id:1, content:'Item1'},
//   {id:2, content:'Item2'},
//   {id:3, content:'Item3'},
//   {id:4, content:'Item4'},
//   {id:5, content:'Item5'},
//   {id:6, content:'Item6'},
//   {id:7, content:'Item7'},
//   {id:8, content:'Item8'},
//   {id:9, content:'Item9'},
// ])
// const [checkItemArr, setcheckItemArr] = useState([])

// const filteredArr = todoes.filter(el => !checkItemArr.includes(el.id)) 

// const deleteItem = (itemeToDelete) => {
//   if (!itemeToDelete) return
//   const clone = [...checkItemArr]  
//   clone.push(itemeToDelete.id)  
//   setcheckItemArr(clone) 
//   // // setcheckItemArr([...checkItemArr, ItemeToDelete.id])
 
// }


// const revert = () => {
// setcheckItemArr([])
// } 



//   return (
//     <div className='App'>
//         <div>
//          <ul>
//             {filteredArr.map(todo => <li key={todo.id}>
//               {todo.content}
//               <button onClick={() => (deleteItem(todo))}>Delete</button>
//             </li>)}
//          </ul>
//          </div>
//           <div>
          
//             <button onClick={revert}>Revert</button>
          
//           </div>
//     </div>
    
//   )


// }

// export default App

// 4 написати тогл компоненту, яка буде ховати або показувати елемент приклад з візуалкою тут 
//https: //material-ui.com/components/switches/#customized-switches


function App() {

const [IsComponentVisiable, setIsComponentVisiable] = useState(true)


const toggleItem= () => {
  setIsComponentVisiable(!IsComponentVisiable)
}

  return (
    <div className='App'>
          <div>
            <div>{IsComponentVisiable && <Items/>}</div>
            <button onClick={toggleItem}>Toggle</button>
          
          </div>
    </div>
    
  )}

  export default App