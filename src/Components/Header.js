import React from 'react'
import {logout} from '../ducks/userReducer'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import './header.css'


class Header extends React.Component {

  // constructor(props){
  //   super(props)
  //   this.goBack = this.goBack.bind(this)
  // }
  //  goBack(){
  //   this.props.history.goBack()
  // }

  render(){
    console.log("this.props", this.props)
    
    return(
      <div className="header-container">
        {this.props.user.loggedIn ? (
          <span id='header-links'>
            <Link className="header-link" to='/home'>Home</Link>
            <Link className='header-link' to='/createjob'>Post a Job</Link>
            <Link className='header-link' onClick={() => this.props.logout()} to='/login'>Log Out</Link>
          </span>
        ) : (
          <span id='header-links'>
            <Link className="header-link" to='/login' >Login</Link>
            <Link className="header-link" to='/signup' >Signup</Link>
          </span>
        )}
      </div>
    )
  }
  }

function mapStateToProps(state){
  return state.user
}

export default connect(mapStateToProps, {logout})(Header) 