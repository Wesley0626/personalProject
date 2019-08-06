import React from 'react'
import styled from 'styled-components'


function Completed(props){
  let {task, category, size, tools, finish_hour, finish_minute, am_or_pm, finish_day, finish_month, payout} = props
  const DoerCompletedList = styled.div `
  background: #f0f0f0;
  display: flex;
  width: 75vw;
  height: 16vh;
  margin: 5px 0 5px 0;
  @media(min-width: 450px){
    justify-content: center;
    width: 50vw;
  }
  `
 return(
 <DoerCompletedList>
   <ul>
     <li>Task: {task} </li>
     <li>Category: {category} </li>
     <li>Size: {size} </li>
     <li>Tools: {tools} </li>
     <li>Finish Time: {finish_hour}:{finish_minute} {am_or_pm} </li>
     <li>Finish Date: {finish_month} {finish_day}  </li>    
     <li>Payout: ${payout} </li>
   </ul>
 </DoerCompletedList>
 )
}

export default Completed