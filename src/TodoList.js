import React from 'react';
import { connect } from 'react-redux'

const TodoList = (props) => {
  return (
    <div>
      <h1>Todos:</h1>
      <div>
        {props.todos.map( todo => <p>{todo}</p> )}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {todos: state.todos}
}

export default connect(mapStateToProps)(TodoList);
