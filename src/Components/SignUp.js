import React, {Component} from 'react'
import DoerSignup from './DoerSignup'
import RequesterSignup from './RequesterSignup'

class SignUp extends Component{
  constructor(){
    super()
    this.state = {
      requester: true,
      doer: false, 
      email: '',
      user_name: '',
      password: '',
      phone: 0,
      first_name: '',
      last_name: '',
      skills: [],
      certs: [],
      tools: []
    }
  }

  requesterChange = () => {
    this.setState({requester: true})
  }

  doerChange = () => {
    this.setState({requester: false})
  }

  handleChange = e => {
    let {name, value} = e.target
    this.setState({[name]: value})
  }
  
  render(){
    let {email, user_name, password, phone, first_name, last_name, skills, certs, tools} = this.state
    return(
      <div>
        <p>Sign Up</p>
        <p>Regsiter as:</p>
        <div>
          <div>
            Requester: {' '}
            <button onClick={this.requesterChange}></button>
          </div>
          <div>
            Doer: {' '}
            <button onClick={this.doerChange}></button>
          </div>
        </div>
        <div>
         {this.state.requester ? (
           <RequesterSignup email={email} user_name={user_name} password={password} phone={phone} first_name={first_name} last_name={last_name} handleChange={this.handleChange} />
           ) : (
          <div>
            <RequesterSignup />
            <DoerSignup skills={skills} certs={certs} tools={tools} handleChange={this.handleChange} />
          </div>   
          )}
        </div>
       <div>
         <button>Cancel</button>   
         <button>Submit</button>
       </div>  
      </div>
    )

  }
}

export default SignUp