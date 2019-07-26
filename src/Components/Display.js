import React, {Component} from 'react'
import {getJobs, assignJob} from '../ducks/jobReducer'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


class Display extends Component{
  // componentDidUpdate(){
  //   let {getJobs} = this.props
  //   getJobs()
  // }

  assign = () => {
    let {job_id, assignJob} = this.props
    console.log('jobid', job_id)
    assignJob(job_id)
  }

  render(){
    let {task, category, size, tools, finish_hour, finish_minute, am_or_pm, finish_month, finish_day, payout} = this.props
    return(
      <div>
      <ul>
        <li>{task}</li>
        <li>{category}</li>
        <li>{size}</li>
        <li>{tools}</li>
        <li>{finish_hour}:{finish_minute}{am_or_pm}</li>
        <li>{finish_month} {finish_day}</li>
        <li>{payout}</li>
      </ul>
      <div>
        <button onClick={this.assign}><Link to='/working'>Sign Up</Link></button>
      </div>
    </div>
    )
  }
}

export default connect(null, {getJobs, assignJob})(Display)