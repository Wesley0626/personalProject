import React from 'react'
import {Switch, Route} from 'react-router-dom'
import ForgotPassword from './Components/ForgotPassword'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import Home from './Components/Home'
import CreateJob from './Components/CreateJob'
import ToBeCompleted from './Components/ToBeCompleted'
import Working from './Components/Working'
import DoerCompleted from './Components/DoerCompleted'
import RequesterCompleted from './Components/RequesterCompleted'

export default (
  <Switch>
    <Route path='/forgotpassword' component={ForgotPassword} />
    <Route exact path='/' component={Login} />
    <Route path='/signup' component={SignUp} />
    <Route path='/home' component={Home} />
    <Route path='/createjob' component={CreateJob} />
    <Route path='/tobecompleted' component={ToBeCompleted} />
    <Route path='/working' component={Working} />
    <Route path="/requestercompleted" component={RequesterCompleted} />
    <Route path='/doercompleted' component={DoerCompleted} />
  </Switch>
)