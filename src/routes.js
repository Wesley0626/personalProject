import React from 'react'
import {Switch, Route} from 'react-router-dom'
import ForgotPassword from './Components/ForgotPassword'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import Home from './Components/Home'
import CreateJob from './Components/CreateJob'

export default (
  <Switch>
    <Route path='/forgotpassword' component={ForgotPassword} />
    <Route exact path='/' component={Login} />
    <Route path='/signup' component={SignUp} />
    <Route path='/home' component={Home} />
    <Route path='/createjob' component={CreateJob} />
  </Switch>
)