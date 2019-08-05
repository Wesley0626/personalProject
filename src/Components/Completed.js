import React from 'react'
// import {connect} from 'react-redux'

function Completed(props){
  let {task, category, size, tools, finish_hour, finish_minute, am_or_pm, finish_day, finish_month, payout} = props
 return(
 <div id='doer-completed-list'>
   <ul>
     <li>Task: {task} </li>
     <li>Category: {category} </li>
     <li>Size: {size} </li>
     <li>Tools: {tools} </li>
     <li>Finish Time: {finish_hour}:{finish_minute} {am_or_pm} </li>
     <li>Finish Date: {finish_month} {finish_day}  </li>    
     <li>Payot: {payout} </li>
   </ul>
 </div>
 )
}

export default Completed