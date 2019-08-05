import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { getUniqueRooms } from '../ducks/messageReducer';
import './footer.css'

function Footer(props){
function getUnique(id){
  props.getUniqueRooms(id)
}
  return(
    <div id='footer-container'>
      {props.user.requester ? (
        <button className="footer-button"><Link className="footer-link" to="/tobecompleted">In Progress</Link> </button>
      ) : (
        <button className="footer-button"><Link className='footer-link' to='/working'>Working On</Link></button>
      )}
      {props.user.requester ? (
        <button className="footer-button"><Link className='footer-link' to='/requestercompleted'>Recently Completed</Link></button>
      ) : (
        <button className="footer-button"><Link className='footer-link' to='/doercompleted' >Recently Finished</Link></button>
      )}
      <button className="footer-button"><Link className='footer-link' onClick={() => getUnique(props.user.id)} to='/messages' >Messages</Link></button>
    </div>
  )
}

function mapStateToProps(state){
  return{
    ...state.user, 
    ...state.jobs, 
    ...state.messages
  } 
}

export default connect(mapStateToProps, {getUniqueRooms})(Footer)