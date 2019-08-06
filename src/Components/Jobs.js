import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getJobsByUser, getJobs} from '../ducks/jobReducer'
import Editing from './Editing';
import './jobs.css'



class Job extends Component{

componentDidUpdate(){
let {getJobs} = this.props
getJobs()
}
  render(){
    let {jobs} =this.props
    let job = jobs.filter(job => job.user_id === this.props.user.id && job.completed === null).map(job => (
      <Editing key={job.job_id} {...job} />  
      ))
    return(
        <div id='in-progress-container'>
          {job}
        </div>
      )
    }
  }


function mapStateToProps(state){
  return{
    ...state.jobs,
    ...state.user
  }
}

export default connect(mapStateToProps, {getJobsByUser, getJobs})(Job)