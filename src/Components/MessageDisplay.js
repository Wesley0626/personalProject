import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getRooms, getMessages} from '../ducks/messageReducer'
import {getAllUsers} from '../ducks/userReducer'
import './messageDisplay.css'





class MessageDisplay extends Component{
  
  componentDidMount(){
    this.props.getAllUsers()
    this.props.getMessages()
  }

  render(){
    let {messages, currentRoom} = this.props
    return(
      <div>
        {messages.filter(message => message.message_room_id === currentRoom).map((message, i )=> {
          let person = message.message_user_id
          let findUsername = this.props.allUsers.filter(user => user.user_id === person)
          return(
          <div key={i}>
            <div >
             {findUsername[0].username}: {message.content}
            </div>
          </div>
        )})}
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    ...state.messages,
    ...state.currentRoom,
    ...state.user
  }
}

export default connect(mapStateToProps, {getRooms, getMessages, getAllUsers})(MessageDisplay)