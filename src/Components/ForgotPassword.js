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
    axios.post('/api/password/reset', {email}).then(res => {
      this.setState({
        email: ''
      })
      alert("An email has been sent to the provided address. Please check your inbox")
    }).catch(err => console.log('err', err))
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
          <Link className='forgot-password-bandl' to="/login">Cancel</Link>
          <button className='forgot-password-bandl' id='fp-button' onClick={this.handleSend}
          >Submit</button>
        </div>
        </div>
      </div>
    )

  }
}

export default ForgotPassword