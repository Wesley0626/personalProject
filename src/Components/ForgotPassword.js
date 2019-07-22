import React from 'react'
import {Link} from 'react-router-dom'


function ForgotPassword(){
  return(
    <div>
      <p>
      enter your email and we will email you a link to reset your password!
      </p>
      <input placeholder="Email" />
      <div>
        <button><Link to="/login">Cancel</Link></button>
        <button>Submit</button>
      </div>
    </div>
  )
}

export default ForgotPassword