import React from 'react'
import {logout} from '../ducks/userReducer'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


function Header(props) {
    return(
      <div>
        {props.user.loggedIn ? (
          <button onClick={props.logout}>Logout</button>
        ) : (
          <span>
            <Link to='/' >Login</Link>
            <Link to='/signup' >Signup</Link>
          </span>
        )}
      </div>
    )
  }

function mapStateToProps(state){
  return state.user
}

export default connect(mapStateToProps, {logout})(Header) 