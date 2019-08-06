import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getJobs} from '../ducks/jobReducer'
import './working.css'



class Working extends Component{

  componentDidMount(){
    let {getJobs} = this.props
    getJobs()
  }

  render(){
    let {jobs} = this.props
    return(
      <div id='working-container'>
        {jobs.filter(filterJob => filterJob.working_id === this.props.user.id && filterJob.completed === null ).map(job => (
          <div key={job.job_id} >
            <ul id='working-list'>
              <li>{job.task}</li>
              <li>{job.category}</li>
              <li>{job.size}</li>
              <li>{job.tools}</li>
              <li>{job.finish_hour}:{job.finish_minute} {job.am_or_pm}</li>
              <li>{job.finish_month} {job.finish_day}</li>
              <li>${job.payout}</li>
            </ul>
          </div>
        ))}
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

export default connect(mapStateToProps, {getJobs})( Working )