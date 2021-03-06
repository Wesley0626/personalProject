import React from 'react'
import Completed from './Completed'
import {connect} from 'react-redux'
import './doerCompleted.css'


function DoerCompleted(props){
  let {jobs} = props
  return(
    <div id="doer-completed-container">
      {jobs.filter(job => +job.working_id === +props.user.id && job.completed === "true").map(job => (
        <Completed key={job.job_id} {...job} />
      ))}
    </div>

  )

}
  function mapStateToProps(state){
    return{
      ...state.jobs,
      ...state.user
    }
  }
  

export default connect(mapStateToProps)(DoerCompleted)