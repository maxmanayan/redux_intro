// REDUCER - is a JS pure function that takes 'state' and an 'action' and
// returns a new 'state' (DOESN'T CHANGE ORIGINAL STATE, BUT RETURNS NEW STATE)

// 'action' is a JS object with type (required), additional keys, data, or payload...

// {type: "SOME_STRING"}
//{type: "SET_TODOS", todos: ['todo 1', 'todo2']}
//{type: "ADD_TODOS", todo: 'todo new'}


const todos = (state = [], action) => {
  switch(action.type){
    case "SET_TODOS" :
      return action.todos
    case "ADD_TODO" :
      return [action.todo, ...state]
    case "TOGGLE_TODO" :
      return state.map( todo => {
        if(todo.id === action.id){
          return {...todo, complete: !todo.complete}
        }
        return todo
      })
    default :
      return state
  }
}

export default todos




// switch(x){
//   case '1':
//     console.log('x is 1')
//   case '2':
//     console.log('x is 2')
//   default:
//     console.log('x is not 1 or 2')
// }