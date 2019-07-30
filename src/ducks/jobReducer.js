import axios from 'axios'
import { GET_JOBS, DELETE_JOB, EDIT_JOB, SAVE_JOB, GET_JOBS_BY_USER, ASSIGN_JOB, GET_ASSIGNED_JOBS, COMPLETE_JOB, SET_DOER_JOB_ID} from './actionTypes'

const initialState = {
  jobs: [],
  doerJobId: 0,
  error: false
}

export function setDoerJobId(doerId){
  console.log('reducerid', doerId)
  return{
    type: SET_DOER_JOB_ID,
    payload: +doerId
  }
}

export function getJobs(){
  let data = axios.get(`/api/jobs`).then(res => res.data)
  return {
    type: GET_JOBS, 
    payload: data
  }
}

export function getAssignedJobs(){
  return{
    type: GET_ASSIGNED_JOBS,
    payload: axios.get('/api/assignedjobs').then(res => res.data)
  }
}

export function getJobsByUser(){
  let data = axios.get("/api/jobsbyuser").then(res => res.data)
  return{
    type: GET_JOBS_BY_USER,
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

export function editJob(jobId, newTask, newCategory, newSize, newTools, newFinishHour, newFinishMinute, newAmOrPm, newFinishDay, newFinishMonth, newPayout){
  let data = axios
  .put(`/api/jobs/edit/${jobId}`, {newTask, newCategory, newSize, newTools, newFinishHour, newFinishMinute, newAmOrPm, newFinishDay, newFinishMonth, newPayout})
  .then(res=> res.data)
  return{
    type: EDIT_JOB,
    payload: data
  }
}

export function completeJob(jobId){
  let data = axios.put(`api/completejob/${jobId}`).then(res => res.data)
  return{
    type: COMPLETE_JOB,
    payload: data
  }
}

export function assignJob(jobId){
  let data = axios.put(`/api/jobs/assignjob/${jobId}`).then(res=> res.data)
  return{
    type: ASSIGN_JOB, 
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
    case GET_JOBS_BY_USER + "_FULFILLED":
      return{...state, jobs: payload, error: false}
    case GET_JOBS_BY_USER + '_REJECTED':
      return{...state, error: payload}  
    case GET_JOBS + '_FULFILLED':
      return{...state, jobs: payload, error: false}
    case GET_JOBS + '_REJECTED':
      return{...state, error: payload}
    case GET_ASSIGNED_JOBS + '_FULFILLED':
      return{...state, jobs: payload, error: false}
    case GET_ASSIGNED_JOBS + '_REJECTED':
      return{...state, error: false}  
    case EDIT_JOB + '_FULFILLED':
      return{ ...state, jobs: payload}
    case DELETE_JOB + '_FULFILLED':
      return{...state, jobs: payload}    
    case SAVE_JOB + '_FULFILLED':
      return{...state, jobs: payload}
    case ASSIGN_JOB + '_FULFILLED':
      return{...state}  
    case COMPLETE_JOB + '_FULFILLED':
      return{...state, jobs: payload, error: false}  
    case SET_DOER_JOB_ID :
      return{...state, doerJobId: payload}  
    default: 
      return state      
  }
}