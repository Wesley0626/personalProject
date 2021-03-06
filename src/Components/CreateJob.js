import React, {Component} from 'react'
import SizeBox from './SizeBox'
import CalendarDropDown from './CalendarDropDown'
import CategoryDropDown from './CategoryDropDown'
import TimeDropDown from './TimeDropDown'
import { connect } from 'react-redux';
import {saveJob} from '../ducks/jobReducer'
import {Link} from 'react-router-dom'
import './createJob.css'

class CreateJob extends Component{
  constructor(){
    super()
    this.state = {
      task: '',
      category: '',
      size: '',
      tools: '', 
      location: {},
      finishHour: '',
      finishMinute:'',
      amOrPm: '',
      finishDay: '',
      finishMonth: '',
      payout: '',
      requesterID: 0
    }
  }

  addJob = () => {
    let {task, category, size, tools, finishHour, finishMinute, amOrPm, finishDay, finishMonth, payout} = this.state
    this.setState({task: "", payout: ''})
    saveJob(task, category, size, tools, finishHour, finishMinute, amOrPm, finishDay, finishMonth, payout)
  }

  handleHour = e => {
    this.setState({finishHour: e.target.value})
  }
  handleMinute = e => {
    this.setState({finishMinute: e.target.value})
  }
  handleAmPm = e => {
    this.setState({amOrPm: e.target.value})
  }

  handleChange = e => {
    let {value, name} = e.target
    this.setState({[name]: value})
  }

  handleSize = (e) => {
    this.setState({size: e.target.value})
  }

  handleDay = e => {
    this.setState({finishDay: e.target.value})
  }

  handleMonth = e => {
    this.setState({finishMonth: e.target.value})
  }

  handleTools = e => {
    this.setState({tools: e.target.value})
  }

  handleCategory = e => {
    this.setState({category: e.target.value})
  }

  render(){
    let {task, location, payout} = this.state
    return(
      
      <div id='create-container'>
        <div id='create-inputs'>
          Task: {' '}
          <input 
          name='task'
          value={task}
          placeholder="Task"
          onChange={this.handleChange}
          />
          Category: {' '}
            <CategoryDropDown 
            changeCategory={this.handleCategory}
            />
          Size: {' '} 
          <SizeBox 
          change={this.handleSize}
          />         
          Tools on Site: {' '}
          <form action=''>
            <fieldset>
              <select onChange={this.handleTools}>
                <option>Select</option>
                <option value='No'>No</option>
                <option value="Yes">Yes</option>
              </select>
            </fieldset>
          </form>
          Finish by: {' '}
          <CalendarDropDown 
          changeDay={this.handleDay}
          changeMonth={this.handleMonth}
          /> 
           <TimeDropDown 
           changeHour={this.handleHour}
           changeMinute={this.handleMinute}
           changeAmPm={this.handleAmPm}
           /> 
          Price: {' '}
          <input 
          name='payout'
          value={payout}
          placeholder="Price"
          onChange={this.handleChange}
          />
        </div>
        <div id='create-button-container'>
          <Link to='/home' onClick={this.addJob} id='create-button'>Add Job</Link>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    userId: state.user.user_id,
    ...state.jobs
  }
}

export default connect(mapStateToProps, {saveJob})(CreateJob)