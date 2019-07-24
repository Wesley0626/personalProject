import React, {Component} from 'react'
import {connect} from 'react-redux'
import {deleteJob, editJob} from '../ducks/jobReducer'
import CalendarDropDown from './CalendarDropDown';
import CategoryDropDown from './CategoryDropDown';



class Job extends Component{
  constructor(props){
    super(props)
    this.state={
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
      newPayout: props.payout,      
      editing: false
    }
  }
  
  handleChange = e => {
    let{name, value} = e.target
    this.setState({[name]: value})
  }
  
  edit = () => this.setState({editing: !this.state.editing})
  
  save = () => {
    let{id, editJob} = this.props
    let{newTask, newCategory, newSize, newTools, newFinishHour, newFinishMinute, 
      newAmOrPm, newFinishDay, newFinishMonth, newPayout} = this.state
    editJob(id, newTask, newCategory, newSize, newTools, newFinishHour, newFinishMinute, newAmOrPm, newFinishDay, newFinishMonth, newPayout)
  }
  
  delete = () => {
    let { id, deleteJob} = this.props
    deleteJob(id)
  }
  handleDay = e => {
    this.setState({newFinishDay: e.target.value})
  }
  
  handleMonth = e => {
    this.setState({newFinishMonth: e.target.value})
  }
  
  componentDidUpdate(prevProps){
    let {task, category, size, tools, finishHour, finishMinute, amOrPm, finishDay, finishMonth, payout} = prevProps
    if(task !== this.props.task || category !== this.props.category || size !==this.props.size || tools !== this.props.tools || finishHour !== this.props.finishHour || finishMinute !== this.props.finishMinute || amOrPm !== this.props.amOrPm || finishDay !== this.props.finishDay || finishMonth !== this.props.finishMonth || payout !== this.props.payout){
      this.setState({
      newTask: task,
      newCategory: category,
      newSize: size,
      newTools: tools, 
      newFinishHour: finishHour,
      newFinishMinute: finishMinute,
      newAmOrPm: amOrPm,
      newFinishDay: finishDay,
      newFinishMonth: finishMonth,
      newPayout: payout,      
      editing: false
    })
  }
}

render(){
  console.log('month', this.state.newFinishMonth)
  console.log('task', this.props)
  let {task, category, size, tools, finishHour, finishMinute, amOrPm, finishDay, finishMonth, payout} = this.props
  let {newTask, newCategory, newSize, newTools, newFinishHour, newFinishMinute, newAmOrPm, newfinishday, newFinishMonth, newPayout, editing} = this.state
  return(
      <div>
        {editing ? (
          <div>
            New Task: {' '}
            <input
            name='newTask'
            value={task}
            placeholder="Change Task"
            onChange={this.handleChange}
            />
            New Category: {' '}
            <CategoryDropDown 
            
            />
            <CalendarDropDown 
              changeMonth={this.handleChange}
              changeDay={this.handleChange}
            />
            <button onClick={this.edit}></button>
          </div>
        ) : (
          <div>
            <div>
              <button onClick={this.edit}>Edit</button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default connect(null, {deleteJob, editJob})(Job)