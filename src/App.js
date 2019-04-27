import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import todosData from './mockdata/todosData';
import ToDoItemComponent from './components/ToDoItemComponent'



class App extends Component{
  render() {
    const TodoComponentArray = todosData.map( todosData =>  <ToDoItemComponent
        key={todosData.id}
        items={todosData}/> );
    return (
      <div className="App">
      <NavBar/>
      <div className="todo-list">
           {TodoComponentArray}
       </div>
       <Footer/>
       </div>
    );
  }
}

export default App;
