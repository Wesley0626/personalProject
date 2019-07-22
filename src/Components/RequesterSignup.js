import React from 'react'

function RequesterSignup(props){
  let {email, user_name, password, phone, first_name, last_name} = props
  return(
    <div>
          Email: {' '}
          <input 
          placeholder='Email'
          type='text'
          value={email}
          name='email'
          onChange={props.handleChange}
          />
          Username: {' '}
          <input 
          placeholder='Username'
          type='text'
          value={user_name}
          name='user_name'
          onChange={props.handleChange}          
          />
          Password: {' '}
          <input
          placeholder='Password'
          value={password}
          name='password'
          onChange={props.handleChange}          
          />
          Phone: {' '}
          <input 
          placeholder='Phone Number'
          value={phone}
          name='phone'
          onChange={props.handleChange}          
          />
          First Name: {' '}
          <input 
          placeholder='First Name'
          type='text'
          value={first_name}
          name='first_name'
          onChange={props.handleChange}          
          />
          Last Name: {' '}
          <input 
          placeholder='Last Name'
          type='text'
          value={last_name}
          name='last_name'
          onChange={props.handleChange}          
          />
        </div>
  )
}

export default RequesterSignup