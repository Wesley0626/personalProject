import React from 'react'
import {Switch, Route} from 'react-router-dom'
import ForgotPassword from './Components/ForgotPassword'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import Home from './Components/Home'
import CreateJob from './Components/CreateJob'
import Working from './Components/Working'
import DoerCompleted from './Components/DoerCompleted'
import RequesterCompleted from './Components/RequesterCompleted'
import Jobs from './Components/Jobs'
import DoerProfile from './Components/DoerProfile'
import Messages from './Components/Messages'
import PasswordReset from './Components/PasswordReset'
import './routes.css'

export default (
  <Switch className="Routes">
    <Route path='/forgotpassword' component={ForgotPassword} />
    <Route path='/login' component={Login} />
    <Route path='/signup' component={SignUp} />
    <Route path='/home' component={Home} />
    <Route path='/createjob' component={CreateJob} />
    <Route path='/tobecompleted' component={Jobs} />
    <Route path='/working' component={Working} />
    <Route path="/requestercompleted" component={RequesterCompleted} />
    <Route path='/doercompleted' component={DoerCompleted} />
    <Route path='/doerprofile' component={DoerProfile} />
    <Route path='/messages' component={Messages} />
    <Route path='/password/reset' component={PasswordReset} />
  </Switch>
)