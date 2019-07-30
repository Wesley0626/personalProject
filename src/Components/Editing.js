import React, {Component} from 'react'
import {deleteJob, editJob, completeJob, getJobsByUser} from '../ducks/jobReducer'
import {connect} from 'react-redux'
import CategoryDropDown from './CategoryDropDown'
import SizeBox from './SizeBox'
import TimeDropDown from './TimeDropDown'
import CalendarDropDown from './CalendarDropDown'


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

  // componentDidUpdate(prevProps){
  //   let {task, category, size, tools, finishHour, finishMinute, amOrPm, finishDay, finishMonth, payout} = prevProps
  //   if(task !== this.props.task || category !== this.props.category || size !==this.props.size || tools !== this.props.tools || finishHour !== this.props.finishHour || finishMinute !== this.props.finishMinute || amOrPm !== this.props.amOrPm || finishDay !== this.props.finishDay || finishMonth !== this.props.finishMonth || payout !== this.props.payout){
  //     this.setState({
  //       newTask: task,
  //       newCategory: category,
  //       newSize: size,
  //       newTools: tools, 
  //       newFinishHour: finishHour,
  //       newFinishMinute: finishMinute,
  //       newAmOrPm: amOrPm,
  //       newFinishDay: finishDay,
  //       newFinishMonth: finishMonth,
  //       newPayout: payout,      
  //       editing: false,
  //     })
  //   }
  // }

  // componentDidUpdate(){
  //   let {getJobsByUser, userId} = this.props    
  //     getJobsByUser(userId)    
  // }

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
    return(
      <div>
        {editing ? (
              <div>
                New Task: {' '}
                <input
                name='newTask'
                value={newTask}
                placeholder="Change Task"
                onChange={this.handleChange}
                />
                New Category: {' '}
                <CategoryDropDown 
                changeCategory={this.handleCategory}
                />
                Size: {" "}
                <SizeBox 
                change={this.handleSize}
                />
                Tools on Site: {' '}
                <form action=''>
                  <fieldset>
                    <select onChange={this.handleTools}>
                      <option>Select</option>
                      <option  value='No'>No</option>
                      <option  value="Yes">Yes</option>
                    </select>
                  </fieldset>
                </form>
                />   
                Finish by: {' '}
                  <TimeDropDown 
                  changeHour={this.handleHour}
                  changeMinute={this.handleMinute}
                  changeAmPm={this.handleAmPm}
                  />             
                <CalendarDropDown 
                  changeMonth={this.handleMonth}
                  changeDay={this.handleDay}
                />
                <input
                name='newPayout'
                value={newPayout}
                placeholder="Price"
                onChange={this.handleChange}
                />
                <div>
                <button onClick={this.save}>Save</button>
                <button onClick={this.edit}>Cancel</button>
                </div>
              </div>
            ) : (
              <div>
                <div>
                  Task: {task}
                  Category: {category}
                  Size: {size}
                  Tools: {tools}
                  Finish Time: {finish_hour}:{finish_minute} {am_or_pm}
                  Finish Date: {finish_month} {finish_day}
                  Payout: {payout}
                  <button onClick={this.edit}>Edit</button>
                  <button onClick={this.delete}>Delete</button>
                  <button onClick={this.complete}>Job Completed</button>
                </div>
              </div>
            )}
      </div>
    )
  }
}

export default connect(null, {deleteJob, editJob, completeJob, getJobsByUser})(Editing)