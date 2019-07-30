import React from 'react'
import {logout} from '../ducks/userReducer'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import './header.css'


function Header(props) {
    return(
      <div className="header-container">
        {props.user.loggedIn ? (
          <button onClick={props.logout}>Logout</button>
        ) : (
          <span id='header-links'>
            <Link className="header-link" to='/' >Login</Link>
            <Link className="header-link" to='/signup' >Signup</Link>
          </span>
        )}
      </div>
    )
  }

function mapStateToProps(state){
  return state.user
}

export default connect(mapStateToProps, {logout})(Header) 