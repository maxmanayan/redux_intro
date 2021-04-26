import React from 'react';
import { connect } from 'react-redux'
import nextID from './reducers/nextID';
import Todo from './Todo';

const TodoList = (props) => {
  return (
    <div>
      <h1>Todos:</h1>
      <div>
        {props.todos.map( todo => <Todo key={todo.id} {...todo} />)}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {todos: state.todos}
}

export default connect(mapStateToProps)(TodoList);
