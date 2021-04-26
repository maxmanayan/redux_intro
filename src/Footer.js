import React from 'react';
import {connect} from "react-redux";

const Footer = (props) => {

  const setFilter = (filter) => {
    props.dispatch({type: 'SET_FILTER', filter: filter})
  }

  const getStyle = (filter) => {
    if( props.filter === filter ){
      return {color: 'blue'}
    } else {
      return {}
    }
  }

  return (
    <div>
      <div style={getStyle('all')} onClick={() => setFilter('all')}>all</div>
      <div style={getStyle('completed')} onClick={() => setFilter('completed')}>completed</div>
      <div style={getStyle('incomplete')} onClick={() => setFilter('incomplete')}>incomplete</div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {filter: state.filter}
}

export default connect(mapStateToProps)(Footer);
