import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';
import './forgotPassword.css'


class ForgotPassword extends React.Component{
  constructor(){
    super()
    this.state = {
      email: ''
    }
  }

  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({[name]: value})
  }

  handleSend = () => {
    const {email} = this.state
    console.log('hello')
    axios.post('/api/password/reset', {email}).then(res => {
      alert("An email has been sent to the provided address. Please check your inbox")
      this.setState({
        email: ''
      })
    })
  }

  render(){
    return(
      <div id="forgot-password-container">
        <div id='inner-container-fp'>
        <p id='forgot-password-text'>
        Enter your email and we will email you a link to reset your password!
        </p>
        <input onChange={this.handleChange} name='email' value={this.state.email} placeholder="Email" />
        <div>
          <Link className='forgot-password-bandl' to="/">Cancel</Link>
          <button className='forgot-password-bandl' onClick={this.handleSend}
          >Submit</button>
        </div>
        </div>
      </div>
    )

  }
}

export default ForgotPassword