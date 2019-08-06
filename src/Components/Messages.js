import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getMessages, getRooms, saveMessages, getUniqueRooms} from '../ducks/messageReducer'
import{getAllUsers} from '../ducks/userReducer'
import MessageDisplay from './MessageDisplay'
import AvailableRooms from './AvailableRooms'
import './messages.css'
import styled from 'styled-components'

class Messages extends Component{
  constructor(){
    super()
    this.state = {
      content: ''
    }
  }

  componentDidMount(){
    this.props.getMessages()
    this.props.getRooms()
    this.props.getUniqueRooms(this.props.user.id)
  }



  handleChange = (e) => {
    let {value, name} = e.target
    this.setState({[name]: value})
  }

  saveMessage = () => {
    let {content} = this.state
    let roomId = this.props.currentRoom
    this.props.saveMessages(content, roomId)
    this.setState({content: ''})
    this.props.getMessages()
  }


  render(){
    const MessageButton = styled.button `
    height: 3.2vh;
    width: 20vw; 
    border: none; 
    padding: none;
    background-image: linear-gradient(grey, lightgrey);
    @media(min-width: 450px){
      width: 10vw;
      height: 3.2vh;
      padding: none;
    }
    `
    return(
      <div id='message-container'>
        <div id='availableRooms'>
         <AvailableRooms />        
        </div>
        <div id='message-display'>
         <MessageDisplay />
        </div>
        <div id='message-input-container'>
          <input 
          id='message-input'
          type="text"
          value={this.state.content}
          name='content'
          onChange={this.handleChange}
          placeholder="Type message here"
          />
          <MessageButton onClick={this.saveMessage}>Send</MessageButton>
        </div>
      </div>
    )

  }
}

function mapStateToProps(state){
  return{
    ...state.messages,
    ...state.rooms,
    ...state.user
  }
}

export default connect(mapStateToProps, {getAllUsers, getMessages, getRooms, saveMessages, getUniqueRooms})( Messages )