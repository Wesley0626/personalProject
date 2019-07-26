import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getJobs} from '../ducks/jobReducer'
import Display from './Display'



class Home extends Component{
  
  componentDidMount(){
    let{ getJobs } = this.props    
      getJobs()    
      console.log(this.props.jobs)
  }

  // componentDidUpdate(){
  //   let {getJobs} = this.props
  //   getJobs()
  // }

  render(){
    let {jobs} = this.props
    console.log("props", this.props)
    return(
      <div>
        {jobs.map((job, i) => (
          <Display key={job.job_id} {...job}/>
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