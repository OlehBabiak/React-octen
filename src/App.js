
import React, { Component } from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    );
  }}
export default App;





//  2 те саме, тільки з кнопкою реверт(повернутись до стану, де у нас видно 3 елемнети, як на початку)

//  3 задача з зірочкою) кожна карточка з завдання вище має мати кнопку, по кліку на яку, ми видаляємо зі списку саме її + реверт кнопка, 
//щоб вернути все назад(ця кнопка одна дня всіх карточок, клікнули по ній і всі каркти вернулись назазд)(згадування функції фільтр в лекції 
//було не просто так)

//  4 написати тогл компоненту, яка буде ховати або показувати елемент приклад з візуалкою тут


