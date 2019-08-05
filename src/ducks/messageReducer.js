import axios from 'axios'
import {CREATE_ROOM, GET_MESSAGES, GET_ROOMS, SET_CURRENT_ROOM, SAVE_MESSAGES, GET_UNIQUE_ROOMS} from './actionTypes'

const initialState = {
  messages: [],
  rooms: [],
  uniqueRooms: [],
  currentRoom: '',
  error: false
}

export const createRoom = (user1, user2) => {
  console.log('createroom')
  let data = axios.post(`/api/createroom?user1=${user1}&user2=${user2}`).then(res => res.data)
  return {
    type: CREATE_ROOM, 
    payload: data
  }
}

export const setCurrentRoom = (roomId) => {
  console.log('setcurrent')
return{
  type: SET_CURRENT_ROOM, 
  payload: roomId
}
}

export const getMessages = () => {
  let data =axios.get('/api/messages').then(res => res.data)
  return{
    type: GET_MESSAGES,
    payload: data
  }
}

export const getRooms = () => {
  let data = axios.get('/api/rooms').then(res => res.data)
  return{
    type: GET_ROOMS,
    payload: data
  }
}

export function saveMessages(content, roomId){
  let data = axios.post('/api/messages/save', {content, roomId}).then(res => res.data)
  return{
    type: SAVE_MESSAGES,
    payload: data
  }
}

export function getUniqueRooms(user_id){
  let data = axios.get(`/api/rooms/unique/${user_id}`).then(res => res.data)
  console.log('reducerhit', data)
  return{
    type: GET_UNIQUE_ROOMS,
    payload: data
  }
}

export default function(state = initialState, action){
  let{type, payload} = action
  switch(type){
    case CREATE_ROOM + '_FULFILLED':
      return{...state, error: false}
    case CREATE_ROOM + '_REJECTED' : 
      return{...state, error: payload}  
    case GET_MESSAGES + '_FULFILLED'  : 
      return{...state, messages: payload, error: false}
    case GET_MESSAGES + '_REJECTED' : 
      return{...state, error: payload}   
    case GET_ROOMS + '_FULFILLED': 
      return{...state, rooms: payload, error: false}
    case GET_ROOMS + '_REJECTED' : 
      return{...state, error: payload}  
    case SET_CURRENT_ROOM :
      return{...state, currentRoom: payload}  
    case SAVE_MESSAGES + '_FULFILLED' :
      return{...state, messages: payload, error: false} 
    case GET_UNIQUE_ROOMS + '_FULFILLED' :
      return{...state, uniqueRooms: payload, error: false}  
    default: 
      return{
        ...state
      }
  }
}