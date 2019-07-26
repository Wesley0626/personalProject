import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getAssignedJobs} from '../ducks/jobReducer'



class Working extends Component{

  componentDidMount(){
    let {getAssignedJobs, userId} = this.props
    getAssignedJobs(userId)
  }

  render(){
    let {jobs} = this.props
    console.log('jobs', jobs)
    return(
      <div>
        {jobs.map(job => (
          <div key={job.job_id} >{job.task}</div>
        ))}
      </div>
    )

  }
}

function mapStateToProps(state){
  return{
    ...state.jobs
  }
}

export default connect(mapStateToProps, {getAssignedJobs})( Working )