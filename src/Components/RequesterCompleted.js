import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getAllUsers} from '../ducks/userReducer'
import {setDoerJobId} from '../ducks/jobReducer'
import './requesterCompleted.css'


class RequesterCompleted extends Component{



  componentDidMount(){
    this.props.getAllUsers()
  }

  sendJobId(doerId){
    let {setDoerJobId} = this.props
    setDoerJobId(doerId)
  }

  render(){
    let {jobs} = this.props
    
    return(
      <div id='requester-completed'>
        {jobs.filter(job => +job.user_id === +this.props.user.id && job.completed === 'true').map(job => (
          <div id='requested-completed-container' key={job.job_id} {...job} >
            <ul>
             <li>{job.task}</li>
             <li>{job.category}</li>
             <li>{job.finish_month} {job.finish_day}</li>
             <li>${job.payout}</li> 
            </ul>
            {this.props.allUsers.filter(user => user.user_id === job.working_id).map(user =>(
              <div>
              Completed By: <Link id='completed-link' onClick={() =>this.sendJobId(job.working_id)} to='/doerprofile' >{user.first_name} {user.last_name}</Link>
              </div>
            ))}
          </div>
         ))}
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    ...state.user,
    ...state.jobs
  }
}

export default connect(mapStateToProps, {getAllUsers, setDoerJobId})(RequesterCompleted)