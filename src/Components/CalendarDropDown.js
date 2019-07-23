import React from 'react'

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let days = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31']

function CalendarDropDown(props){
  let month =  months.map((month, i) => {
    return <option key={i} value={month}>{month}</option>
  })
  let day = days.map((day, i ) => {
    return<option key={i} value={day}>{day}</option>
  })
  return(
    <div>
      <form action=''>
        <fieldset>
          <select onClick={props.changeMonth}>
            {month}
          </select>
          <select onClick={props.changeDay}>
            {day}
          </select>
        </fieldset>
      </form>
    </div>
  )
}

export default CalendarDropDown