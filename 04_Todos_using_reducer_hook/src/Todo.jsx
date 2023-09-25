/* eslint-disable react/prop-types */
import { ACTIONS } from "./App"

// eslint-disable-next-line react/prop-types
function Todo({todo,dispatch}) {
  return (
    <div>
      
      <span style={{color:todo.complete ? "#AAA":  "#000"}}>
       {todo.name}
      </span>
      <button onClick={()=> dispatch({type:ACTIONS.TOGGLE_TODO,payload:{id:todo.id}}) } style={{margin:20 }}>Toggle</button>
      
      <button onClick={()=> dispatch({type:ACTIONS.DELETE_TODO,payload:{id:todo.id}})}>Delete</button>
    </div>
  )
}

export default Todo