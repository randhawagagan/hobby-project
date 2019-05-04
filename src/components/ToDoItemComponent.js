
import React from "react"
function ToDoItemComponent(props){
  return (
    <div className='todo-item'>
    <input type="checkbox" checked={props.items.completed}
    onChange={() => props.handleChange(props.items.id)}/>
              <p>{props.items.text}</p>
    </div>

  )

}
export default ToDoItemComponent
