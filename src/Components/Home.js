import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getJobs} from '../ducks/jobReducer'
import Display from './Display'
import './home.css'


class Home extends Component{
  
  componentDidMount(){
    let{ getJobs } = this.props    
      getJobs()    
  }

  // componentDidUpdate(){
  //   let {getJobs} = this.props
  //   getJobs()
  // }

  render(){
    let {jobs} = this.props
    return(
      <div id='job-container'>
        <div id='inner-job'>
          {jobs.filter(job => job.working_id === null).map((job, i) => (
            <Display key={job.job_id} {...job}/>
          ))}

        </div>
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