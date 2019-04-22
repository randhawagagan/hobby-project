import React from 'react';
import logo from '../logo.svg';
//import ToDoItem from '../ToDoItem'
//import from './src/App.css';
function MainComponent(){
  const styles = {
    fontSize:30
  }
  const date = new Date()
const hours = date.getHours()
let timeOfDay;
  if (hours < 12) {
    timeOfDay = "morning"
    styles.color = "#04756F"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
    styles.color = "#8914A3"
  } else {
    timeOfDay = "night"
    styles.color = "#D90000"
  }
  return(
      <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p style={styles}>
      Good {timeOfDay} Gagan
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
    Learn React
      </a>
      </div>
  )
}
export default MainComponent;
