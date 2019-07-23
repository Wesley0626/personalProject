import React from 'react'

function SizeBox(props){
  return(
    <div>
      <form action='' >
        <fieldset>
          <select onClick={props.change}>
            <option value="Small">Small</option>
            <option value='Medium'>Medium</option>
            <option value='Large'>Large</option>
            <option value='Extra Large'>Extra Large</option>
            <option value='N/A'>N/A</option>
          </select>
        </fieldset>
      </form>
    </div>
  )
}

export default SizeBox