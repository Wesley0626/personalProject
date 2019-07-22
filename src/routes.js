import React from 'react'
import {Switch, Route} from 'react-router-dom'
import ForgotPassword from './Components/ForgotPassword'
import Login from './Components/Login'
import SignUp from './Components/SignUp'

export default (
  <Switch>
    <Route path='/forgotpassword' component={ForgotPassword} />
    <Route path='/login' component={Login} />
    <Route path='/signup' component={SignUp} />
  </Switch>
)