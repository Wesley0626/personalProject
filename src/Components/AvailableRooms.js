import React from 'react'
import {connect} from 'react-redux'
import {setCurrentRoom} from '../ducks/messageReducer'



function AvailableRooms(props){



  function setRoom(id){
    let {setCurrentRoom} = props
    setCurrentRoom(id)
  }


    console.log('rooms', props.uniqueRooms)
      return(
        <div>
          {props.uniqueRooms.map(room => (
            <button onClick={()=> setRoom(room.room_id)}>Message</button>
          ))
  
          }
        </div>
      )
  }

function mapStateToProps(state){
  return{
    ...state.messages,
    ...state.user
  }
}


export default connect(mapStateToProps,{setCurrentRoom})(AvailableRooms)