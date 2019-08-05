import React, {Component} from 'react'
import RequesterSignup from './RequesterSignup'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {signup} from '../ducks/userReducer'
import './signUp.css'

class SignUp extends Component{
  constructor(){
    super()
    this.state = {
      email: '',
      user_name: '',
      password: '',
      phone: '',
      first_name: '',
      last_name: '',
      requester: false,
      doer: true
    }
  }

  requesterChange = () => {
    this.setState({doer: false, requester: true})
    console.log("request", this.state.requester, this.state.doer)
  }

  doerChange = () => {
    this.setState({requester: false, doer: true})
    console.log("request", this.state.requester, this.state.doer)
  }

  handleChange = e => {
    let {name, value} = e.target
    this.setState({[name]: value})
  }

  signupUser = () => {
    this.props.signup(this.state.user_name, this.state.password, this.state.email, this.state.phone, this.state.first_name, this.state.last_name, this.state.requester, this.state.doer)
    this.setState({email: '', user_name:'', password:'', phone:'', first_name: '', last_name: ''})
  }
  
  render(){
    let {email, user_name, password, phone, first_name, last_name} = this.state
    return(
      <div id='signup-container'>
        <p className="paragraphs">Sign Up</p>
        <p className="paragraphs">Regsiter as:</p>
        <div id='register-buttons'>
          <div>
            Requester: {' '}
            <button className='signup-buttons' onClick={this.requesterChange}></button>
          </div>
          <div>
            Doer: {' '}
            <button className='signup-buttons' onClick={this.doerChange}></button>
          </div>
        </div>
        <div>
           <RequesterSignup email={email} user_name={user_name} password={password} phone={phone} first_name={first_name} last_name={last_name} handleChange={this.handleChange} />
        </div>
       <div id='bottom-buttons'>
         <Link id='signup-link' to="/">Cancel</Link>  
         <button id="signup-submit-button" onClick={this.signupUser}>Submit</button>
       </div>  
      </div>
    )

  }
}

function mapStateToProps(state){
  return state.user
}

export default connect(mapStateToProps, {signup})(SignUp)