import React from 'react'
// import {connect} from 'react-redux'

function Completed(props){
  let {task, category, size, tools, finish_hour, finish_minute, am_or_pm, finish_day, finish_month, payout} = props
 return(
 <div>
     Task: {task}
     Category: {category}
     Size: {size}
     Tools: {tools}
     Finish Time: {finish_hour}:{finish_minute} {am_or_pm}
     Finish Date: {finish_month} {finish_day}     
     Payot: {payout}
 </div>
 )
}

export default Completed