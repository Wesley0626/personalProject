import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getJobsByUser} from '../ducks/jobReducer'
import Editing from './Editing';



class Job extends Component{

  componentDidMount(){
    let {getJobsByUser, userId} = this.props    
      getJobsByUser(userId)    
  }
  render(){
    let {jobs} =this.props
    return(
        <div>
          {jobs.map(job => (
            <Editing key={job.job_id} {...job} />  
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

export default connect(mapStateToProps, {getJobsByUser})(Job)