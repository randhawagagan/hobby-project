import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
class StateComponent extends Component{
  constructor(){
    super()
    this.state = { count : 0}
    this.handleClick = this.handleClick.bind(this);
    this.handleClickClear = this.handleClickClear.bind(this);
  }
  handleClick(){
  this.setState(previousState => {
    if(previousState.count < 10){
      return {
      count :previousState.count + 1
    }
    }
  else{
    return alert("Dont you have something better to do!");
  }
  } )
  }
  handleClickClear(){
  this.setState(previousState => {
      return {
      count :0
    }
  } )
  }
render(){
  return (
       <div>
           <h1>{this.state.count}</h1>
           <h2><button className="btn btn-primary" onClick={this.handleClick}>Click me to Play!</button>
           <br/>
           <button className="btn btn-danger" onClick={this.handleClickClear}>Start Over!</button>
</h2>
       </div>
   )
}
}
export default StateComponent;
