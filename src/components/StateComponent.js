import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
class StateComponent extends Component{
  constructor(){
    super()
    this.state = { count : 0}
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
  this.setState(previousState => {
    return {
    count :previousState.count + 1
  }
  } )
  }
render(){
  return (
       <div>
           <h1>{this.state.count}</h1>
           <button onClick={this.handleClick}>Click me to Play!</button>
       </div>
   )
}
}
export default StateComponent;
