import React, { useState } from 'react';
import { connect } from 'react-redux'
 
const TodoForm = (props) => {
  const [todo, setTodo] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(todo)
    // I want to dispatch an action
    // {type: 'ADD_TODO', todo: todo}
    props.dispatch({type: 'ADD_TODO', todo: todo})
    setTodo('')
  }

  return (
    <div>
      <h1>Add Todo</h1>
      <form onSubmit={handleSubmit}>
        <input value={todo} onChange={(e) => setTodo(e.target.value)} />
      </form>
    </div>
  )
}
export default connect()(TodoForm);
