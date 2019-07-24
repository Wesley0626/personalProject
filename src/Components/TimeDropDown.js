import React from 'react'

let hours = ["Hour", '1','2','3','4','5','6','7','8','9','10','11','12' ]
let minutes = ["Minute", '00', '15', '30', '45']

function TimeDropDown(props){
  let hour = hours.map((hour, i) => {
    return(
      <option key={i} value={hour}>{hour}</option>
    )
  })
  let minute = minutes.map((minute, i ) => {
    return(
      <option key={i} value={minute}>{minute}</option>
    )
  })
  return(
    <div>
      <form action=''>
        <fieldset>
          <select onChange={props.changeHour}>
            {hour}
          </select>
          <select onChange={props.changeMinute}>
            {minute}
          </select>
          <select onChange={props.changeAmPm}>
            <option></option>
            <option value="AM">AM</option>
            <option vlaue="PM">PM</option>
          </select>
        </fieldset>
      </form>
    </div>
  )
}

export default TimeDropDown