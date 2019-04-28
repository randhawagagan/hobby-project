import React, { Component } from 'react';
import '../App.css';
class StateComponent extends Component{
  constructor(){
    super()
    this.state = { isLoggedIn : true}
  }
render(){
  return (
       <div>
           <h1>You are currently logged {this.state.isLoggedIn ? "In" : "Out"}</h1>
       </div>
   )
}
}
export default StateComponent;
