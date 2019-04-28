import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import StateComponent from  './components/StateComponent';
import todosData from './mockdata/todosData';
import ToDoItemComponent from './components/ToDoItemComponent'
class App extends Component{
  constructor(){
    super()
    this.state = {
      todos : todosData
    }
  }
  render() {
    const TodoComponentArray = this.state.todos.map( todosData =>  <ToDoItemComponent
       key={todosData.id}
       items={todosData}/> );

    return (
      <div className="App">
      <NavBar/>
      <div className="todo-list">
<StateComponent/>
           {TodoComponentArray}
       </div>
       <Footer/>
       </div>
    );
  }
}

export default App;
