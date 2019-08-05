import React, {Component} from "react"
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {createRoom, setCurrentRoom, getMessages, getRooms} from '../ducks/messageReducer'
import './doerProfile.css'



class DoerProfile extends Component{
  
componentDidMount(){
  let {getMessages, getRooms} = this.props
  getMessages()
  getRooms()
}
  
  makeRoom(user1, user2){
    let {createRoom, setCurrentRoom} = this.props
    let greaterUser = 0
    let lesserUser = 0
    if(user1 > user2){
      greaterUser = user1
      lesserUser = user2
    } else{
      greaterUser = user2
      lesserUser = user1
    }
    let existing = this.props.rooms.filter(room => room.room_id === `${greaterUser}:${lesserUser}`)
    if(!existing.length){
      createRoom(user1, user2)
      setCurrentRoom(`${greaterUser}:${lesserUser}`)
    }else{
      setCurrentRoom(`${greaterUser}:${lesserUser}`)
    }
  }

  render(){
    let size =  3
    return(
      <div id='doer-profile-container'>
      {this.props.jobs.filter(job => this.props.doerJobId === job.working_id && job.completed === 'true').slice(0,size).map((job, i) => (
        <div id='doer-profile-jobs' key={i}>
          <ul id='completed-list'>
            <li classname='list-item' >Task: {job.task}</li>
            <li classname='list-item' >Category: {job.category}</li>
            <li>Size: {job.size}</li>
            <li classname='list-item' > Comleted By: {job.finish_month}{job.finish_day}</li>
            <li classname='list-item' >At: {job.finish_hour}:{job.finish_minute}{job.am_or_pm}</li>
            <li classname='list-item' > ${job.payout}</li>
          </ul> 
          </div>
        ))}
            <Link id='profile-button' onClick={() =>{ 
              this.makeRoom(this.props.doerJobId, this.props.user.id)}} to='/messages'>Message Them</Link>
      </div>
    )

  }
}

function mapStateToProps(state){
  return{
    ...state.user, 
    ...state.jobs,
    ...state.messages
  }
}

export default connect(mapStateToProps, {createRoom, setCurrentRoom, getMessages, getRooms})(DoerProfile)