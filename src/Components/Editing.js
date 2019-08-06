import React, {Component} from 'react'
import {deleteJob, editJob, completeJob, getJobsByUser} from '../ducks/jobReducer'
import {connect} from 'react-redux'
import CategoryDropDown from './CategoryDropDown'
import SizeBox from './SizeBox'
import TimeDropDown from './TimeDropDown'
import CalendarDropDown from './CalendarDropDown'
import './editing.css'
import styled from 'styled-components'


class Editing extends Component{
  constructor(props){
    super(props)
    this.state = {
      editing: false,
      newTask: props.task,
      newCategory: props.category,
      newSize: props.size,
      newTools: props.tools, 
      newLocation: {},
      newFinishHour: props.finishHour,
      newFinishMinute: props.finishMinute,
      newAmOrPm: props.amOrPm,
      newFinishDay: props.finishDay,
      newFinishMonth: props.finishMonth,
      newPayout: props.payout       
    }
  }

  handleHour = e => {
    this.setState({newFinishHour: e.target.value})
  }
  handleMinute = e => {
    this.setState({newFinishMinute: e.target.value})
  }
  handleAmPm = e => {
    this.setState({newAmOrPm: e.target.value})
  }
  
  handleSize = (e) => {
    this.setState({newSize: e.target.value})
  }
  
  handleDay = e => {
    this.setState({newFinishDay: e.target.value})
  }
  
  handleMonth = e => {
    this.setState({newFinishMonth: e.target.value})
  }
  
  handleTools = e => {
    this.setState({newTools: e.target.value})
  }
  
  handleCategory = e => {
    this.setState({newCategory: e.target.value})
  }
  
  handleChange = e => {
    let{name, value} = e.target
    this.setState({[name]: value})
  }
  
  edit = () => this.setState({editing: !this.state.editing})
  
  save = () => {
    let{job_id, editJob} = this.props
    let{newTask, newCategory, newSize, newTools, newFinishHour, newFinishMinute, newAmOrPm, newFinishDay, newFinishMonth, newPayout} = this.state
    editJob(job_id, newTask, newCategory, newSize, newTools, newFinishHour, newFinishMinute, newAmOrPm, newFinishDay, newFinishMonth, newPayout)
    this.edit()
  }
  delete = () => {
    let { job_id, deleteJob} = this.props
    deleteJob(job_id)
  }
  complete = () => {
    let {completeJob, job_id} = this.props
    completeJob(job_id)
  }
  

  render(){
    let {task, category, size, tools, finish_hour, finish_minute, am_or_pm, finish_day, finish_month, payout} = this.props
    let {newTask, newPayout, editing} = this.state
    const InputList = styled.ul `
    display: flex;
    flex-direction: column;
    padding: 3px 0 0 0;
    background: #f0f0f0;
    width: 80vw;
    @media(min-width: 450px){
      display: flex;
      width: 70vw;
      justify-content: center;
      align-items: center;
      padding: 5px;
    }
    `
    const ShowJob = styled.ul `
    background: #f0f0f0;
    width: 80vw;
    @media(min-width: 450px){
      width: 70vw;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    `
    return(
      <div id='edit-and-display'>
        {editing ? (
              <InputList>
          
                <li className='editing-inputs' > New Task: {' '} <input className='editing-input-fields'
                name='newTask'
                value={newTask}
                placeholder="Change Task"
                onChange={this.handleChange}
                />
                </li>
               <li className='editing-inputs'> New Category: <CategoryDropDown changeCategory={this.handleCategory}
                />
                </li>
               <li className='editing-inputs' > Size: {" "} <SizeBox 
                change={this.handleSize}
                />
                </li>
               <li className='editing-inputs' > Tools on Site: {' '} <form action=''>
                  <fieldset >
                    <select id='field-set' onChange={this.handleTools}>
                      <option>Select</option>
                      <option  value='No'>No</option>
                      <option  value="Yes">Yes</option>
                    </select>
                  </fieldset>
                </form>   
                </li>
              <li className='editing-inputs' id="finish-input">  Finish by: {' '}  <TimeDropDown 
                  changeHour={this.handleHour}
                  changeMinute={this.handleMinute}
                  changeAmPm={this.handleAmPm}
                  />             
                <CalendarDropDown 
                  changeMonth={this.handleMonth}
                  changeDay={this.handleDay}
                /> </li >
                <li> Payout: <input className='editing-input-fields'
                name='newPayout'
                value={newPayout}
                placeholder="Price"
                onChange={this.handleChange}
                />
                <button onClick={this.save}>Save</button>
                <button onClick={this.edit}>Cancel</button>
                </li>
              </InputList>
            ) : (
              <div id='progress-display-container'>
                <ShowJob>
                  <li>Task: {task}</li>
                  <li>Category: {category}</li>
                  <li>Size: {size}</li> 
                  <li>Tools: {tools}</li>
                  <li>Finish Time: {finish_hour}:{finish_minute} {am_or_pm}</li>
                  <li>Finish Date: {finish_month} {finish_day}</li>
                  <li>Payout: ${payout}</li>
                    <div>
                      <div id='editing-button-container'>
                       <button id='progress-button' onClick={this.edit}>Edit</button>
                       <button id='progress-button' onClick={this.delete}>Delete</button>
                       <button id='progress-button' onClick={this.complete}>Job Completed</button>
                      </div>
                    </div>
                </ShowJob>
              </div>
            )}
      </div>
    )
  }
}

export default connect(null, {deleteJob, editJob, completeJob, getJobsByUser})(Editing)