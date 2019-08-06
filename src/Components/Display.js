import React, {Component} from 'react'
import {getJobs, assignJob} from '../ducks/jobReducer'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import './display.css'
import styled from 'styled-components'


class Display extends Component{

  assign = () => {
    let {job_id, assignJob} = this.props
    console.log('jobid', job_id)
    assignJob(job_id)
  }
  

  render(){
    const List = styled.ul `
    display: flex;
    flex-direction: column;
    background: #f0f0f0;
    width: 80vw;
    padding: 2px;
    @media(min-width: 450px){
      width: 70vw;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    `
    let {task, category, size, tools, finish_hour, finish_minute, am_or_pm, finish_month, finish_day, payout} = this.props
    return(
      <div id='mapped-job'>
      <List id='display-jobs'>
        <li className='job-element'>Task: {task}</li>
        <li className='job-element'>Category: {category}</li>
        <li className='job-element'>Size: {size}</li>
        <li className='job-element'>Tools Available: {tools}</li>
        <li className='job-element'>Completion Time: {finish_hour}:{finish_minute}{am_or_pm}</li>
        <li className='job-element'>Completion Date: {finish_month} {finish_day}</li>
        <li className='job-element'>Payout: ${payout}</li>
      <div id='job-signup'>
        <Link id='sign-up-button' onClick={this.assign} to='/working'>Sign Up</Link>
      </div>
      </List>
    </div>
    )
  }
}

export default connect(null, {getJobs, assignJob})(Display)