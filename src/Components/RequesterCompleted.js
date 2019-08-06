import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getAllUsers} from '../ducks/userReducer'
import {setDoerJobId} from '../ducks/jobReducer'
import './requesterCompleted.css'
import styled from 'styled-components'


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
    const CompletedDisplay = styled.div `
    background: #f0f0f0;
    width: 80vw;
    display: flex;
    flex-direction: column;  
    margin: 10px 0 0 0;
    padding: 2px;
    @media(min-width: 450px){
      width: 70vw
    }
    `
    return(
      <div id='requester-completed'>
        {jobs.filter(job => +job.user_id === +this.props.user.id && job.completed === 'true').map((job, i) => (
          <CompletedDisplay key={i} {...job} >
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
          </CompletedDisplay>
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