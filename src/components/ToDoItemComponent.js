import React from "react"
function ToDoItemComponent(props){
  return (
    <div className='todo-item'>
    <input type="checkbox" checked={props.items.completed}/>
              <p>{props.items.text}</p>
    </div>

  )

}
export default ToDoItemComponent
