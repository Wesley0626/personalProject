import axios from 'axios'
import { GET_JOBS, DELETE_JOB, EDIT_JOB, SAVE_JOB} from './actionTypes'

const initialState = {
  jobs: [],
  error: false
}

export function getJobs(){
  let data = axios.get(`/api/jobs`).then(res => res.data)
  return {
    type: GET_JOBS, 
    payload: data
  }
}

export function deleteJob(jobId){
  let data = axios.delete(`/api/jobs/delete/${jobId}`).then(res => res.data)
  return{
    type: DELETE_JOB, 
    payload: data
  }
}

export function editJob(jobId, newTask){
  let data = axios
  .put(`/api/jobs/edit/${jobId}`, {newTask})
  .then(res=> res.data)
  return{
    type: EDIT_JOB,
    payload: data
  }
}

export function saveJob(task, category, size, tools, finishHour, finishMinute, amOrPm, finishDay, finishMonth, payout){
  let data = axios.post(`/api/jobs/save`, {task, category, size, tools, finishHour, finishMinute, amOrPm, finishDay, finishMonth, payout}).then(res => res.data)
  return{
    type: SAVE_JOB, 
    payload: data
  }
}

export default function jobReducer(state = initialState, action){
  let {type, payload} = action
  switch(type){
    case GET_JOBS + '_FULFILLED':
      return{jobs: payload, error: false}
    case GET_JOBS + '_REJECTED':
      return{...state, error: payload}
    case EDIT_JOB + '_FULFILLED':
      return{ ...state, jobs: payload}
    case DELETE_JOB + '_FULFILLED':
      return{...state, jobs: payload}    
    case SAVE_JOB + '_FULFILLED':
      return{...state, jobs: payload}
    default: 
      return state      
  }
}