import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getJobs} from '../ducks/jobReducer'
import Job from './Job'



class Home extends Component{
  
  componentDidMount(){
    let{ getJobs, jobs, userId} = this.props
    
      getJobs()
    
  }


  render(){
    let {jobs} = this.props
    console.log("props", this.props)
    return(
      <div>
        {jobs.map((job, i) => (
          <div key={i} {...job}>
            <ul>
              <li>{job.task}</li>
              <li>{job.category}</li>
              <li>{job.size}</li>
              <li>{job.tools}</li>
              <li>{job.finish_hour}:{job.finish_minute}{job.am_or_pm}</li>
            </ul>
          </div>
        ))}
        <button><Link to='/createjob'>Post a Job</Link></button>
      </div>
    )
  }
  }

function mapStateToProps(state){
  return{
    ...state.jobs
  }
}

export default connect(mapStateToProps, {getJobs})(Home)