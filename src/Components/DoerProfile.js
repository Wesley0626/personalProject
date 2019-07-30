import React from "react"
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


function DoerProfile(props){
  let size =  3
  return(
    <div>
      {props.jobs.filter(job => props.doerJobId === job.working_id && job.completed === 'true').slice(0,size).map((job, i) => (
        <div key={i}>
          {job.task}
          {job.category}
          {job.size}
          {job.payout}
          <button><Link></Link></button>
        </div>
      ))}
    </div>
  )
}

function mapStateToProps(state){
  return{
    ...state.user, 
    ...state.jobs
  }
}

export default connect(mapStateToProps)(DoerProfile)