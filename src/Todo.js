import { connect } from "react-redux"


const Todo = (props) => {
  return(
    <li
      onClick={() => props.dispatch({type: "TOGGLE_TODO", id: props.id})}
      style={props.complete ? {textDecoration: 'line-through', color: 'gray'} : {}}
    >
      {props.name}
    </li>
  )
}


export default connect()(Todo);