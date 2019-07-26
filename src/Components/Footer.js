import React from 'react'
import Messages from './Messages'
import Favorites from './Favorites'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

function Footer(props){
  console.log('footer',props.user)
  return(
    <div>
      {props.user.requester ? (
        <button><Link to="/tobecompleted">In Progress</Link> </button>
      ) : (
        <button><Link to='/working'>Working On</Link></button>
      )}
      {props.user.requester ? (
        <button><Link to='/requestercompleted'>Recently Completed</Link></button>
      ) : (
        <button><Link to='/doercompleted' >Recently Finished</Link></button>
      )}
      <Messages />
      <Favorites />
    </div>
  )
}

function mapStateToProps(state){
  return state.user
}

export default connect(mapStateToProps)(Footer)