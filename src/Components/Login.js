import React, {Component} from 'react'
import {login} from '../ducks/userReducer'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {Link} from 'react-router-dom'
import './login.css'


class Login extends Component {
  constructor(){
    super()
    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange = e => {
    let {name, value} = e.target
    this.setState({[name]: value})
  }

  loginUser = () => {
    this.props.login(this.state.username, this.state.password)
  }

  render(){
    let {username, password} = this.state
    let {user} = this.props
    if(user.loggedIn) return <Redirect to='/home' />
    return(
      <div className="login">
        <h1 id='welcome-phrase'>Welcome, log in!</h1>
          <div id='input-container'>
            <div>
              Username:{' '}
              <input 
              placeholder="Username" 
              type='text'
              value={username}
              name="username"
              onChange={this.handleChange}
              />
            </div>
            <div>
                Password:{' '}
                <input 
                placeholder="Password"
                type='text'
                value={password}
                name="password"
                onChange={this.handleChange}
                />
            </div>  
          </div>
        <div id="login-button-container">
         <button id='login-button' onClick={this.loginUser} >Sign In</button>
        </div>
        <div id='forgot-pw-container'>
          <p >
            Forgot <Link id='forgot-pw-link' to='/forgotpassword'>Password</Link>?
          </p>
          {/* <p>
            Sign up <Link to='/signup'>here!</Link>
          </p> */}
        </div>
      </div>
    )
  }

}

function mapStateToProps(state){
  return state.user;
}


export default connect(mapStateToProps, {login})(Login)