import React from 'react';
import { connect } from 'react-redux'
import Todo from './Todo';

const TodoList = (props) => {

  const renderTodos = () => {
    let visibleTodos = []
    switch(props.filter){
      case "completed":
        visibleTodos = props.todos.filter( t => t.complete)
        break
      case "incomplete":
        visibleTodos = props.todos.filter( t => !t.complete)
        break
      default:
        visibleTodos = props.todos
    }
    return visibleTodos.map( todo => <Todo key={todo.id} {...todo} />)
  }

  return (
    <div>
      <h1>Todos:</h1>
      <p>current filter: {props.filter}</p>
      <div>
        {renderTodos()}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {todos: state.todos, filter: state.filter}
}

export default connect(mapStateToProps)(TodoList);
